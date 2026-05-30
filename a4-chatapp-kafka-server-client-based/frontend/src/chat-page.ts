import { Client, IMessage, StompSubscription } from '@stomp/stompjs';
import SockJS from 'sockjs-client';
import { LitElement, css, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

interface DisplayMessage {
  messageId: string;
  sender: string;
  content: string;
  roomId: string;
  timestamp?: string;
}

@customElement('chat-page')
export class ChatPage extends LitElement {
  @property({ type: String })
  token = '';

  @state()
  private messages: DisplayMessage[] = [];

  @state()
  private roomId = 'lobby';

  @state()
  private roomDraft = 'lobby';

  @state()
  private draftMessage = '';

  @state()
  private connectionState = 'disconnected';

  @state()
  private seenMessageIds = new Set<string>();

  private stompClient: Client | null = null;

  private roomSubscription: StompSubscription | null = null;

  static styles = css`
    :host {
      display: block;
      color: #e5eefc;
    }

    .layout {
      display: grid;
      grid-template-columns: 280px 1fr;
      min-height: 70vh;
    }

    .sidebar {
      padding: 24px;
      border-right: 1px solid rgba(148, 163, 184, 0.14);
      background: rgba(8, 14, 25, 0.86);
    }

    .panel {
      padding: 24px;
      display: grid;
      gap: 18px;
    }

    h2, h3 {
      margin: 0;
    }

    .status {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 8px 12px;
      border-radius: 999px;
      background: rgba(148, 163, 184, 0.12);
      color: #d7e3f7;
      font-size: 0.92rem;
    }

    .status-dot {
      width: 10px;
      height: 10px;
      border-radius: 999px;
      background: #f59e0b;
    }

    .status-dot.connected {
      background: #22c55e;
    }

    .status-dot.error {
      background: #ef4444;
    }

    .box {
      border: 1px solid rgba(148, 163, 184, 0.16);
      border-radius: 18px;
      background: rgba(2, 6, 23, 0.65);
      padding: 18px;
    }

    .messages {
      min-height: 380px;
      max-height: 460px;
      overflow-y: auto;
      display: grid;
      gap: 12px;
      align-content: start;
    }

    .message {
      padding: 14px 16px;
      border-radius: 18px;
      background: rgba(15, 23, 42, 0.85);
      border: 1px solid rgba(148, 163, 184, 0.12);
    }

    .meta {
      display: flex;
      justify-content: space-between;
      gap: 12px;
      color: #94a3b8;
      font-size: 0.84rem;
      margin-bottom: 8px;
    }

    .content {
      font-size: 1rem;
      line-height: 1.5;
      color: #eef4ff;
      white-space: pre-wrap;
      word-break: break-word;
    }

    form {
      display: grid;
      gap: 12px;
    }

    label {
      display: grid;
      gap: 8px;
      color: #dbe7fb;
    }

    input {
      border: 1px solid rgba(148, 163, 184, 0.16);
      border-radius: 14px;
      background: rgba(2, 6, 23, 0.7);
      color: #eef4ff;
      padding: 14px 16px;
      font-size: 1rem;
      outline: none;
    }

    textarea {
      resize: vertical;
      min-height: 96px;
      border: 1px solid rgba(148, 163, 184, 0.16);
      border-radius: 16px;
      background: rgba(2, 6, 23, 0.7);
      color: #eef4ff;
      padding: 14px 16px;
      font-size: 1rem;
      outline: none;
      font-family: inherit;
    }

    .actions {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
    }

    button {
      border: 0;
      border-radius: 999px;
      padding: 12px 18px;
      font-weight: 700;
      cursor: pointer;
    }

    button.primary {
      background: linear-gradient(135deg, #06b6d4, #3b82f6);
      color: white;
    }

    button.secondary {
      background: rgba(148, 163, 184, 0.12);
      color: #e5eefc;
      border: 1px solid rgba(148, 163, 184, 0.16);
    }

    .topline {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 18px;
      flex-wrap: wrap;
    }

    .hint {
      color: #9bb0cf;
      margin: 0;
    }

    @media (max-width: 900px) {
      .layout {
        grid-template-columns: 1fr;
      }

      .sidebar {
        border-right: 0;
        border-bottom: 1px solid rgba(148, 163, 184, 0.14);
      }
    }
  `;

  connectedCallback() {
    super.connectedCallback();
    if (this.token) {
      this.connectWebSocket();
    }
  }

  updated(changedProperties: Map<string, unknown>) {
    if (changedProperties.has('token')) {
      if (this.token) {
        this.connectWebSocket();
      } else {
        this.disconnectWebSocket();
      }
    }

    if (changedProperties.has('roomId') && this.stompClient?.connected) {
      this.subscribeToRoom();
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.disconnectWebSocket();
  }

  private connectWebSocket() {
    this.disconnectWebSocket();
    this.connectionState = 'connecting';

    this.stompClient = new Client({
      webSocketFactory: () => new SockJS('/ws'),
      reconnectDelay: 5000,
      connectHeaders: {
        Authorization: `Bearer ${this.token}`
      },
      debug: (message: string) => {
        console.log(message);
      },
      onConnect: () => {
        this.connectionState = 'connected';
        this.subscribeToRoom();
      },
      onWebSocketClose: () => {
        this.connectionState = 'disconnected';
      },
      onStompError: (frame) => {
        this.connectionState = 'error';
        console.error('Broker error: ' + frame.headers['message']);
      }
    });

    this.stompClient.activate();
  }

  private disconnectWebSocket() {
    this.roomSubscription?.unsubscribe();
    this.roomSubscription = null;
    if (this.stompClient) {
      this.stompClient.deactivate();
      this.stompClient = null;
    }
    this.connectionState = 'disconnected';
  }

  private subscribeToRoom() {
    if (!this.stompClient?.connected) {
      return;
    }

    this.roomSubscription?.unsubscribe();
    this.roomSubscription = this.stompClient.subscribe(`/topic/chat.${this.roomId}`, (message: IMessage) => {
      const parsed = JSON.parse(message.body) as DisplayMessage;
      if (parsed.messageId && this.seenMessageIds.has(parsed.messageId)) {
        return;
      }

      if (parsed.messageId) {
        this.seenMessageIds = new Set(this.seenMessageIds).add(parsed.messageId);
      }

      this.messages = [...this.messages, parsed];
      this.scrollMessagesToBottom();
    });
  }

  private scrollMessagesToBottom() {
    const container = this.renderRoot.querySelector<HTMLElement>('.messages');
    if (container) {
      container.scrollTop = container.scrollHeight;
    }
  }

  private handleRoomInput = (event: Event) => {
    this.roomDraft = (event.target as HTMLInputElement).value;
  };

  private joinRoom = (event: Event) => {
    event.preventDefault();
    const nextRoom = this.roomDraft.trim() || 'lobby';
    this.roomId = nextRoom;
    this.messages = [];
    this.subscribeToRoom();
  };

  private handleMessageInput = (event: Event) => {
    this.draftMessage = (event.target as HTMLTextAreaElement).value;
  };

  private sendMessage = (event: Event) => {
    event.preventDefault();
    const content = this.draftMessage.trim();
    if (!content || !this.stompClient?.connected) {
      return;
    }

    const messageId = crypto.randomUUID();
    const timestamp = new Date().toISOString();
    const localMessage: DisplayMessage = {
      messageId,
      sender: 'You',
      content,
      roomId: this.roomId,
      timestamp
    };

    this.seenMessageIds = new Set(this.seenMessageIds).add(messageId);
    this.messages = [...this.messages, localMessage];
    this.scrollMessagesToBottom();

    this.stompClient.publish({
      destination: '/app/chat.send',
      headers: {
        Authorization: `Bearer ${this.token}`
      },
      body: JSON.stringify({
        messageId,
        roomId: this.roomId,
        content,
        timestamp
      })
    });

    this.draftMessage = '';
  };

  private logout = () => {
    this.dispatchEvent(
      new CustomEvent('logout', {
        bubbles: true,
        composed: true
      })
    );
  };

  private statusLabel() {
    switch (this.connectionState) {
      case 'connected':
        return 'Connected';
      case 'connecting':
        return 'Connecting';
      case 'error':
        return 'Connection error';
      default:
        return 'Disconnected';
    }
  }

  private statusClass() {
    return this.connectionState === 'connected'
      ? 'connected'
      : this.connectionState === 'error'
        ? 'error'
        : '';
  }

  render() {
    return html`
      <div class="layout">
        <aside class="sidebar">
          <div class="box">
            <h2>Session</h2>
            <p class="hint">Signed in with JWT-secured WebSocket access.</p>
            <div style="height: 14px"></div>
            <div class="status">
              <span class="status-dot ${this.statusClass()}"></span>
              ${this.statusLabel()}
            </div>
            <div style="height: 18px"></div>
            <button class="secondary" @click=${this.logout}>Logout</button>
          </div>

          <div style="height: 18px"></div>

          <div class="box">
            <h3>Join room</h3>
            <p class="hint">Messages flow to Kafka and back to this room topic.</p>
            <form @submit=${this.joinRoom} style="margin-top: 14px">
              <label>
                Room ID
                <input .value=${this.roomDraft} @input=${this.handleRoomInput} placeholder="lobby" />
              </label>
              <button class="primary" type="submit">Join</button>
            </form>
          </div>
        </aside>

        <main class="panel">
          <div class="topline">
            <div>
              <h2>Room: ${this.roomId}</h2>
              <p class="hint">Send a message with STOMP. The backend publishes it to Kafka and broadcasts it here.</p>
            </div>
            <div class="status">
              <span class="status-dot ${this.statusClass()}"></span>
              ${this.statusLabel()}
            </div>
          </div>

          <section class="box messages">
            ${this.messages.length === 0
              ? html`<div class="hint">No messages yet. Start the conversation.</div>`
              : this.messages.map(
                  (message) => html`
                    <article class="message">
                      <div class="meta">
                        <span>${message.sender || 'unknown'}</span>
                        <span>${message.timestamp || ''}</span>
                      </div>
                      <div class="content">${message.content}</div>
                    </article>
                  `
                )}
          </section>

          <form class="box" @submit=${this.sendMessage}>
            <label>
              Message
              <textarea
                .value=${this.draftMessage}
                @input=${this.handleMessageInput}
                placeholder="Write a message and press Send"
              ></textarea>
            </label>
            <div class="actions">
              <button class="primary" type="submit">Send</button>
            </div>
          </form>
        </main>
      </div>
    `;
  }
}
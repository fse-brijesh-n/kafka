import { LitElement, css, html } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import './login-page';
import './chat-page';

@customElement('chat-app')
export class ChatApp extends LitElement {
  @state()
  private token = localStorage.getItem('token') || '';

  static styles = css`
    :host {
      display: block;
      min-height: 100vh;
      color: #e5eefc;
    }

    .shell {
      width: min(1120px, calc(100vw - 32px));
      margin: 0 auto;
      padding: 32px 0 40px;
    }

    .hero {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 20px;
      margin-bottom: 24px;
    }

    .title {
      margin: 0;
      font-size: clamp(2rem, 4vw, 3.5rem);
      line-height: 1;
      letter-spacing: -0.04em;
    }

    .subtitle {
      margin: 10px 0 0;
      color: #9bb0cf;
      max-width: 60ch;
    }

    .badge {
      padding: 10px 14px;
      border: 1px solid rgba(148, 163, 184, 0.2);
      border-radius: 999px;
      background: rgba(15, 23, 42, 0.65);
      color: #d7e3f7;
      font-size: 0.92rem;
      backdrop-filter: blur(12px);
    }

    .panel {
      border: 1px solid rgba(148, 163, 184, 0.16);
      border-radius: 24px;
      background: rgba(7, 13, 24, 0.78);
      box-shadow: 0 24px 80px rgba(0, 0, 0, 0.35);
      backdrop-filter: blur(16px);
      overflow: hidden;
    }
  `;

  private handleLogin = (event: Event) => {
    const customEvent = event as CustomEvent<{ token: string }>;
    this.token = customEvent.detail.token;
    localStorage.setItem('token', this.token);
  };

  private handleLogout = () => {
    this.token = '';
    localStorage.removeItem('token');
  };

  render() {
    return html`
      <div class="shell">
        <div class="hero">
          <div>
            <h1 class="title">Kafka Chat</h1>
            <p class="subtitle">
              Spring Boot, WebSocket, JWT, Kafka, and Lit working together in a single real-time chat flow.
            </p>
          </div>
          <div class="badge">Room-based realtime messaging</div>
        </div>

        <div class="panel">
          ${this.token
            ? html`<chat-page .token=${this.token} @logout=${this.handleLogout}></chat-page>`
            : html`<login-page @login=${this.handleLogin}></login-page>`}
        </div>
      </div>
    `;
  }
}
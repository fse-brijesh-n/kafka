import { LitElement, css, html } from 'lit';
import { customElement, state } from 'lit/decorators.js';

@customElement('login-page')
export class LoginPage extends LitElement {
  @state()
  private username = '';

  @state()
  private password = '';

  @state()
  private error = '';

  @state()
  private status = '';

  @state()
  private loading = false;

  static styles = css`
    :host {
      display: block;
      padding: 28px;
    }

    .grid {
      display: grid;
      grid-template-columns: 1.1fr 0.9fr;
      gap: 24px;
    }

    .card {
      border-radius: 22px;
      border: 1px solid rgba(148, 163, 184, 0.14);
      background: linear-gradient(180deg, rgba(15, 23, 42, 0.88), rgba(9, 15, 29, 0.96));
      padding: 28px;
    }

    h2 {
      margin: 0 0 10px;
      font-size: 1.6rem;
    }

    p {
      margin: 0;
      color: #9bb0cf;
      line-height: 1.6;
    }

    form {
      display: grid;
      gap: 14px;
      margin-top: 20px;
    }

    label {
      display: grid;
      gap: 8px;
      font-size: 0.94rem;
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

    input:focus {
      border-color: rgba(96, 165, 250, 0.8);
      box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.15);
    }

    .actions {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
      margin-top: 4px;
    }

    button {
      border: 0;
      border-radius: 999px;
      padding: 12px 18px;
      font-weight: 700;
      cursor: pointer;
    }

    button.primary {
      background: linear-gradient(135deg, #3b82f6, #8b5cf6);
      color: white;
    }

    button.secondary {
      background: rgba(148, 163, 184, 0.12);
      color: #e5eefc;
      border: 1px solid rgba(148, 163, 184, 0.16);
    }

    .message {
      min-height: 1.4em;
      margin-top: 12px;
      color: #93c5fd;
    }

    .message.error {
      color: #fca5a5;
    }

    .feature-list {
      display: grid;
      gap: 12px;
      margin-top: 20px;
    }

    .feature {
      padding: 14px 16px;
      border-radius: 16px;
      background: rgba(15, 23, 42, 0.65);
      border: 1px solid rgba(148, 163, 184, 0.14);
      color: #c6d5ee;
    }

    @media (max-width: 900px) {
      .grid {
        grid-template-columns: 1fr;
      }
    }
  `;

  private handleUsernameInput = (event: Event) => {
    this.username = (event.target as HTMLInputElement).value;
  };

  private handlePasswordInput = (event: Event) => {
    this.password = (event.target as HTMLInputElement).value;
  };

  private async handleLogin(event: Event) {
    event.preventDefault();
    await this.submitCredentials('/api/auth/login', false);
  }

  private async handleSignup() {
    await this.submitCredentials('/api/auth/signup', true);
  }

  private async submitCredentials(endpoint: string, signup: boolean) {
    this.error = '';
    this.status = '';

    if (!this.username.trim() || !this.password.trim()) {
      this.error = 'Enter both username and password.';
      return;
    }

    this.loading = true;
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: this.username.trim(),
          password: this.password
        })
      });

      if (!response.ok) {
        const text = await response.text();
        throw new Error(text || (signup ? 'Signup failed' : 'Login failed'));
      }

      if (signup) {
        this.status = 'Signup complete. You can log in now.';
        return;
      }

      const data: { token: string } = await response.json();
      this.dispatchEvent(
        new CustomEvent('login', {
          detail: { token: data.token },
          bubbles: true,
          composed: true
        })
      );
    } catch (error) {
      this.error = error instanceof Error ? error.message : 'Request failed';
    } finally {
      this.loading = false;
    }
  }

  render() {
    return html`
      <div class="grid">
        <section class="card">
          <h2>Access the chat</h2>
          <p>
            Create a user account, log in, and the app will open a JWT-secured WebSocket connection to the backend.
          </p>

          <form @submit=${this.handleLogin}>
            <label>
              Username
              <input
                id="username"
                name="username"
                .value=${this.username}
                autocomplete="username"
                @input=${this.handleUsernameInput}
              />
            </label>

            <label>
              Password
              <input
                id="password"
                name="password"
                type="password"
                .value=${this.password}
                autocomplete="current-password"
                @input=${this.handlePasswordInput}
              />
            </label>

            <div class="actions">
              <button class="primary" type="submit" ?disabled=${this.loading}>${this.loading ? 'Working...' : 'Log In'}</button>
              <button class="secondary" type="button" @click=${this.handleSignup} ?disabled=${this.loading}>Sign Up</button>
            </div>

            <div class="message ${this.error ? 'error' : ''}">${this.error || this.status}</div>
          </form>
        </section>

        <aside class="card">
          <h2>Flow</h2>
          <div class="feature-list">
            <div class="feature">REST login returns a JWT.</div>
            <div class="feature">STOMP CONNECT sends the token in the Authorization header.</div>
            <div class="feature">Messages go to Kafka before broadcast to the room topic.</div>
          </div>
        </aside>
      </div>
    `;
  }
}
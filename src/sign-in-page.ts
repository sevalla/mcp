import { html } from 'hono/html'

interface SignInPage {
  userCode: string
  redirectHost: string
  continueUrl: string
}

export const signInPage = ({ userCode, redirectHost, continueUrl }: SignInPage) =>
  html`<!doctype html>
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="referrer" content="no-referrer" />
        <title>Sign in to Sevalla MCP</title>
        <style>
          :root {
            color-scheme: light dark;
            font-family: Inter, system-ui, sans-serif;
          }
          body {
            margin: 0;
            min-height: 100svh;
            display: grid;
            place-items: center;
            background: #fafaf9;
            color: #0c0a09;
          }
          main {
            max-width: 28rem;
            margin: 1.5rem;
            padding: 2rem;
            border: 1px solid #e7e5e4;
            border-radius: 0.75rem;
            background: #fff;
          }
          h1 {
            margin: 0 0 0.5rem;
            font-size: 1.5rem;
          }
          p {
            color: #67625d;
            line-height: 1.5;
          }
          .code {
            margin: 1.25rem 0;
            padding: 0.75rem;
            border-radius: 0.5rem;
            background: #f5f5f4;
            font:
              600 2rem/1.2 'JetBrains Mono',
              ui-monospace,
              monospace;
            letter-spacing: 0.15em;
            text-align: center;
            color: #0c0a09;
          }
          .warning {
            padding: 0.75rem;
            border-radius: 0.5rem;
            background: #fef3c7;
            color: #78350f;
          }
          a {
            display: block;
            margin-top: 1.5rem;
            padding: 0.75rem;
            border-radius: 0.5rem;
            background: #1c1917;
            color: #fafaf9;
            font-weight: 600;
            text-align: center;
            text-decoration: none;
          }
          @media (prefers-color-scheme: dark) {
            body {
              background: #0c0a09;
              color: #fafaf9;
            }
            main {
              background: #1c1917;
              border-color: #44403c;
            }
            p {
              color: #a8a29e;
            }
            .code {
              background: #292524;
              color: #fafaf9;
            }
            a {
              background: #fafaf9;
              color: #1c1917;
            }
          }
        </style>
      </head>
      <body>
        <main>
          <h1>Sign in to Sevalla MCP</h1>
          <p>Enter this code on the Sevalla page that opens next:</p>
          <div class="code">${userCode}</div>
          <p>After you approve, you will be sent to <strong>${redirectHost}</strong>.</p>
          <p class="warning">
            Only continue if you started this sign-in yourself. If someone sent you this code or link, close this page.
          </p>
          <a href="${continueUrl}" rel="noreferrer">Continue to Sevalla</a>
        </main>
      </body>
    </html>`

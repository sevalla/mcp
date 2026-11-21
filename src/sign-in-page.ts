import { html } from 'hono/html'

interface SignInPage {
  userCode: string
  redirectHost: string
  continueUrl: string
}

// No web fonts: the CSP blocks them, so the brand fonts show only where they are installed.
export const signInPage = ({ userCode, redirectHost, continueUrl }: SignInPage) =>
  html`<!doctype html>
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="referrer" content="no-referrer" />
        <meta name="color-scheme" content="light dark" />
        <meta name="theme-color" content="#fafaf9" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#100e0d" media="(prefers-color-scheme: dark)" />
        <title>Connect to Sevalla</title>
        <style>
          :root {
            color-scheme: light;
            --surface-sunken: #fafaf9;
            --foreground: #0c0a09;
            --card: #ffffff;
            --muted: #f5f5f4;
            --muted-foreground: #67625d;
            --border: #e7e5e4;
            --primary: #1c1917;
            --primary-foreground: #fafaf9;
            --primary-hover: #44403c;
            --ring: #d04000;
            --warning: #a16207;
            --sans: Inter, ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Helvetica, Arial, sans-serif;
            --display: 'Funnel Display', var(--sans);
            --mono: 'JetBrains Mono', ui-monospace, 'SF Mono', Menlo, Consolas, monospace;
          }
          @media (prefers-color-scheme: dark) {
            :root {
              color-scheme: dark;
              --surface-sunken: #100e0d;
              --foreground: #f5f5f4;
              --card: #141110;
              --muted: #221f1d;
              --muted-foreground: #918a85;
              --border: rgb(255 255 255 / 0.09);
              --primary: #f5f5f4;
              --primary-foreground: #1c1917;
              --primary-hover: #d6d3d1;
              --ring: #ff5f00;
              --warning: #eab308;
            }
          }
          * {
            box-sizing: border-box;
          }
          body {
            margin: 0;
            min-height: 100svh;
            padding: 4rem 1rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            background: var(--surface-sunken);
            color: var(--foreground);
            font: 400 1rem/1.5 var(--sans);
            -webkit-font-smoothing: antialiased;
          }
          .logo {
            display: block;
            margin-bottom: 2rem;
          }
          main {
            width: 100%;
            max-width: 32rem;
            padding: 2.5rem;
            border: 1px solid var(--border);
            border-radius: 0.75rem;
            background: var(--card);
          }
          h1 {
            margin: 0 0 0.5rem;
            font: 600 1.5rem/2rem var(--display);
            letter-spacing: -0.02em;
          }
          p {
            margin: 0;
          }
          .lead,
          .note {
            color: var(--muted-foreground);
          }
          .code {
            margin: 1.5rem 0;
            padding: 1rem 1.25rem;
            border-radius: 0.5rem;
            background: var(--muted);
            font: 500 1.75rem/2.25rem var(--mono);
            letter-spacing: 0.2em;
            text-align: center;
            overflow-wrap: anywhere;
            user-select: all;
          }
          .note strong {
            color: var(--foreground);
            font-weight: 600;
            overflow-wrap: anywhere;
          }
          .warning {
            display: flex;
            gap: 0.75rem;
            margin-top: 1.5rem;
            padding: 0.75rem 0.875rem;
            border: 1px solid color-mix(in srgb, var(--warning) 30%, transparent);
            border-radius: 0.5rem;
            background: color-mix(in srgb, var(--warning) 7%, transparent);
            font-size: 0.875rem;
            line-height: 1.25rem;
          }
          .warning svg {
            flex-shrink: 0;
            margin-top: 0.125rem;
            color: var(--warning);
          }
          .warning p + p {
            margin-top: 0.125rem;
            color: var(--muted-foreground);
          }
          .warning-title {
            font-weight: 500;
          }
          .button {
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 2.75rem;
            margin-top: 1.5rem;
            padding: 0.75rem 1.25rem;
            border-radius: 0.5rem;
            background: var(--primary);
            color: var(--primary-foreground);
            font-weight: 600;
            line-height: 1.25rem;
            text-decoration: none;
            transition: background-color 120ms cubic-bezier(0.16, 1, 0.3, 1);
          }
          .button:hover {
            background: var(--primary-hover);
          }
          .button:focus-visible {
            outline: 2px solid var(--ring);
            outline-offset: 2px;
          }
          @media (max-width: 640px) {
            body {
              padding: 2.5rem 1rem;
            }
            main {
              padding: 1.5rem;
            }
          }
          @media (prefers-reduced-motion: reduce) {
            .button {
              transition: none;
            }
          }
        </style>
      </head>
      <body>
        <svg class="logo" viewBox="0 -1446.4 6495.16 2082.857" width="87.3" height="28" role="img" aria-label="Sevalla">
          <g transform="translate(0 -1446.429) scale(115.71429)">
            <path
              d="M11.6 0c2.24 0 3.36 0 4.216 0.436a4 4 0 0 1 1.748 1.748c0.436 0.856 0.436 1.976 0.436 4.216L18 11.6c0 2.24 0 3.36 -0.436 4.216a4 4 0 0 1 -1.748 1.748c-0.856 0.436 -1.976 0.436 -4.216 0.436L6.4 18c-2.24 0 -3.36 0 -4.216 -0.436a4 4 0 0 1 -1.748 -1.748c-0.436 -0.856 -0.436 -1.976 -0.436 -4.216L0 6.4c0 -2.24 0 -3.36 0.436 -4.216a4 4 0 0 1 1.748 -1.748c0.856 -0.436 1.976 -0.436 4.216 -0.436Z"
              fill="#ff5f00"
            />
            <path
              d="M7.15 4.55A0.4 0.4 0 0 1 7.55 4.15L10.45 4.15A0.4 0.4 0 0 1 10.85 4.55L10.85 5.45A0.4 0.4 0 0 1 10.45 5.85L7.55 5.85A0.4 0.4 0 0 1 7.15 5.45ZM11.15 6.55A0.4 0.4 0 0 1 11.55 6.15L12.45 6.15A0.4 0.4 0 0 1 12.85 6.55L12.85 7.45A0.4 0.4 0 0 1 12.45 7.85L11.55 7.85A0.4 0.4 0 0 1 11.15 7.45ZM5.15 6.55A0.4 0.4 0 0 1 5.55 6.15L6.45 6.15A0.4 0.4 0 0 1 6.85 6.55L6.85 7.75A0.4 0.4 0 0 0 7.25 8.15L10.772 8.15A0.4 0.4 0 0 1 11.055 8.267L12.733 9.945A0.4 0.4 0 0 1 12.85 10.228L12.85 11.45A0.4 0.4 0 0 1 12.45 11.85L11.55 11.85A0.4 0.4 0 0 1 11.15 11.45L11.15 10.25A0.4 0.4 0 0 0 10.75 9.85L7.228 9.85A0.4 0.4 0 0 1 6.945 9.733L5.267 8.055A0.4 0.4 0 0 1 5.15 7.772ZM5.15 10.55A0.4 0.4 0 0 1 5.55 10.15L6.45 10.15A0.4 0.4 0 0 1 6.85 10.55L6.85 11.45A0.4 0.4 0 0 1 6.45 11.85L5.55 11.85A0.4 0.4 0 0 1 5.15 11.45ZM7.15 12.55A0.4 0.4 0 0 1 7.55 12.15L10.45 12.15A0.4 0.4 0 0 1 10.85 12.55L10.85 13.45A0.4 0.4 0 0 1 10.45 13.85L7.55 13.85A0.4 0.4 0 0 1 7.15 13.45Z"
              fill="#ffffff"
            />
          </g>
          <g transform="translate(2545.714 0)">
            <path
              d="M361 12Q200 12 104.5 -58.5Q9 -129 0 -254L157 -254Q165 -184 218.5 -148Q272 -112 366 -112Q451 -112 494.5 -140.5Q538 -169 538 -224Q538 -267 509.5 -293.5Q481 -320 420 -332L256 -365Q146 -388 90.5 -443Q35 -498 35 -585Q35 -696 118 -759Q201 -822 345 -822Q490 -822 579.5 -756Q669 -690 681 -571L524 -571Q494 -701 336 -701Q265 -701 224.5 -674.5Q184 -648 184 -599Q184 -522 294 -499L464 -465Q578 -442 632.5 -385.5Q687 -329 687 -236Q687 -118 601.5 -53Q516 12 361 12ZM1073.22 12Q977.22 12 905.72 -26.5Q834.22 -65 795.72 -135.5Q757.22 -206 757.22 -302Q757.22 -398 795.22 -467.5Q833.22 -537 903.22 -574.5Q973.22 -612 1067.22 -612Q1159.22 -612 1225.22 -576.5Q1291.22 -541 1327.22 -474.5Q1363.22 -408 1363.22 -317L1363.22 -265L900.22 -265Q909.22 -189 953.72 -148.5Q998.22 -108 1072.22 -108Q1127.22 -108 1161.72 -128.5Q1196.22 -149 1210.22 -190L1360.22 -190Q1339.22 -95 1263.72 -41.5Q1188.22 12 1073.22 12ZM904.22 -366L1220.22 -366Q1212.22 -428 1172.72 -460.5Q1133.22 -493 1067.22 -493Q1002.22 -493 960.22 -460Q918.22 -427 904.22 -366ZM1631.22 0L1374.22 -600L1531.22 -600L1709.22 -168L1713.22 -168L1888.22 -600L2041.22 -600L1784.22 0ZM2275.11 11Q2170.11 11 2110.61 -40Q2051.11 -91 2051.11 -175Q2051.11 -263 2111.61 -311Q2172.11 -359 2286.11 -359L2469.11 -359L2469.11 -383Q2469.11 -493 2341.11 -493Q2232.11 -493 2210.11 -415L2061.11 -415Q2080.11 -511 2152.11 -561.5Q2224.11 -612 2341.11 -612Q2473.11 -612 2542.11 -552.5Q2611.11 -493 2611.11 -379L2611.11 -149L2682.11 -149L2682.11 0L2529.11 0L2529.11 -96L2487.11 -96Q2456.11 -45 2403.61 -17Q2351.11 11 2275.11 11ZM2297.11 -104Q2346.11 -104 2385.11 -122.5Q2424.11 -141 2446.61 -172.5Q2469.11 -204 2469.11 -243L2469.11 -257L2294.11 -257Q2193.11 -257 2193.11 -182Q2193.11 -145 2220.61 -124.5Q2248.11 -104 2297.11 -104ZM2784.78 0L2784.78 -840L2933.78 -840L2933.78 0ZM3071.11 0L3071.11 -840L3220.11 -840L3220.11 0ZM3542.44 11Q3437.44 11 3377.94 -40Q3318.44 -91 3318.44 -175Q3318.44 -263 3378.94 -311Q3439.44 -359 3553.44 -359L3736.44 -359L3736.44 -383Q3736.44 -493 3608.44 -493Q3499.44 -493 3477.44 -415L3328.44 -415Q3347.44 -511 3419.44 -561.5Q3491.44 -612 3608.44 -612Q3740.44 -612 3809.44 -552.5Q3878.44 -493 3878.44 -379L3878.44 -149L3949.44 -149L3949.44 0L3796.44 0L3796.44 -96L3754.44 -96Q3723.44 -45 3670.94 -17Q3618.44 11 3542.44 11ZM3564.44 -104Q3613.44 -104 3652.44 -122.5Q3691.44 -141 3713.94 -172.5Q3736.44 -204 3736.44 -243L3736.44 -257L3561.44 -257Q3460.44 -257 3460.44 -182Q3460.44 -145 3487.94 -124.5Q3515.44 -104 3564.44 -104Z"
              fill="currentColor"
            />
          </g>
        </svg>
        <main>
          <h1>Connect to Sevalla</h1>
          <p class="lead">Sign in on the next page and type this code to approve the connection.</p>
          <p class="code">${userCode}</p>
          ${
            redirectHost
              ? html`<p class="note">After you approve, you'll be sent back to <strong>${redirectHost}</strong>.</p>`
              : ''
          }
          <div class="warning">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
            >
              <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" />
              <path d="M12 9v4" />
              <path d="M12 17h.01" />
            </svg>
            <div>
              <p class="warning-title">Only continue if you started this connection yourself</p>
              <p>
                If someone sent you this link or code, close this page. Approving would give them access to your
                account.
              </p>
            </div>
          </div>
          <a class="button" href="${continueUrl}" rel="noreferrer">Continue to Sevalla</a>
        </main>
      </body>
    </html>`

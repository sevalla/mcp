import { describe, it } from 'node:test'
import { ok, strictEqual } from 'node:assert'
import { signInPage } from '../src/sign-in-page.ts'

const continueUrl = 'https://app.sevalla.com/authorize?callback=https%3A%2F%2Fmcp.sevalla.com%2Fcb%3Fa%3D1%26b%3D2'
const render = async (userCode: string, redirectHost: string) =>
  String(await signInPage({ userCode, redirectHost, continueUrl }))

describe('signInPage', () => {
  it('escapes the code and the redirect host', async () => {
    const page = await render('<img src=x>', '"><script>alert(1)</script>')
    ok(!page.includes('<img src=x>'))
    ok(!page.includes('<script>'))
    ok(page.includes('&lt;img src=x&gt;'))
    ok(page.includes('<strong>&quot;&gt;&lt;script&gt;alert(1)&lt;/script&gt;</strong>'))
  })

  it('links only to the continue URL, without the code, and loads nothing external', async () => {
    const page = await render('ABCD1234', 'claude.ai')
    const hrefs = [...page.matchAll(/href="([^"]*)"/g)].map((m) => m[1])
    strictEqual(hrefs.length, 1)
    strictEqual(hrefs[0]?.replaceAll('&amp;', '&'), continueUrl)
    ok(!hrefs[0]?.includes('ABCD1234'))
    ok(page.includes('<meta name="referrer" content="no-referrer" />'))
    ok(!/<script|src=|@import|url\(/i.test(page))
  })

  it('leaves out the redirect line when there is no host', async () => {
    const page = await render('ABCD1234', '')
    ok(!page.includes('sent back to'))
    ok(page.includes('ABCD1234'))
  })
})

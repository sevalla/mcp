import { describe, it } from 'node:test'
import { strictEqual } from 'node:assert'
import { readFileSync } from 'node:fs'
import { SERVER_VERSION } from '../src/index.ts'

const readJson = (path: string) => JSON.parse(readFileSync(new URL(path, import.meta.url), 'utf8'))

describe('Version', () => {
  it('is the same in serverInfo, package.json and server.json, so a version bump publishes to the MCP Registry', () => {
    strictEqual(readJson('../package.json').version, SERVER_VERSION)
    strictEqual(readJson('../server.json').version, SERVER_VERSION)
  })
})

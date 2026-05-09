import { loadEnvConfig } from '@next/env'
import { createCliConfig } from 'sanity/cli'

const dev = process.env.NODE_ENV !== 'production'
loadEnvConfig(__dirname, dev, { info: () => null, error: console.error })

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET

// Expose NEXT_PUBLIC_* vars to the standalone studio browser bundle via Vite define
const nextPublicEnv = Object.fromEntries(
  Object.entries(process.env)
    .filter(([key]) => key.startsWith('NEXT_PUBLIC_'))
    .map(([key, value]) => [`process.env.${key}`, JSON.stringify(value)])
)

export default createCliConfig({
  api: { projectId, dataset },
  vite: (config) => ({ ...config, define: { ...config.define, ...nextPublicEnv } }),
})

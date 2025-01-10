/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_LANGFLOW_API_TOKEN: string
  readonly VITE_LANGFLOW_API_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
} 
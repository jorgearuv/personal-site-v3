import { NotionAPI } from 'notion-client'

export const notion = new NotionAPI({
  apiBaseUrl: process.env.NOTION_API_BASE_URL,
  ofetchOptions: {
    headers: {
      // Notion rejects requests that send Node's default user agent with a 403.
      'user-agent': 'jorgearuv.dev (+https://jorgearuv.dev)'
    }
  }
})

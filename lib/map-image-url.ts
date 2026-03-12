import { type Block } from 'notion-types'
import { defaultMapImageUrl } from 'notion-utils'

import { defaultPageCover, defaultPageIcon } from './config'

export const mapImageUrl = (url: string | undefined, block: Block) => {
  if (!url) {
    return undefined
  }

  if (url === defaultPageCover || url === defaultPageIcon) {
    return url
  }

  // notion-utils 7.8.3 returns GIF URLs raw (skipping the Notion proxy),
  // but S3 URLs from Notion are not publicly accessible without the proxy.
  if (/\.gif(?:$|\?|#)/i.test(url) && url.includes('secure.notion-static.com')) {
    const encodedUrl = encodeURIComponent(url)
    const notionUrl = `https://www.notion.so/image/${encodedUrl}`
    if (block?.id) {
      return `${notionUrl}?table=block&id=${block.id}&cache=v2`
    }
    return notionUrl
  }

  return defaultMapImageUrl(url, block)
}

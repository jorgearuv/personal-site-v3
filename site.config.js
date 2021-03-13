module.exports = {
  // where it all starts -- the site's root Notion page (required)
  rootNotionPageId: 'cce3a9ef1daa4924b0e6f02efea91121',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'Tabs & Spaces',
  domain: 'jorgeruvalcaba.dev',
  author: 'Jorge Ruvalcaba',

  // open graph metadata (optional)
  description: '@jorgearuv Piece of Internetz',
  socialImageTitle: 'Jorge Ruvalcaba',
  socialImageSubtitle: 'Tabs & Spaces',

  // social usernames (optional)
  twitter: 'jorgearuv',
  github: 'jorgeruvalcaba',
  linkedin: 'jorge-ruvalcaba',

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.1862,

  // image CDN host to proxy all image requests through (optional)
  // NOTE: this requires you to set up an external image proxy
  imageCDNHost: null,

  // Utteranc.es comments via GitHub issue comments (optional)
  utterancesGitHubRepo: 'jorgeruvalcaba/personal-site-v3',

  // whether or not to enable support for LQIP preview images (optional)
  // NOTE: this requires you to set up Google Firebase and add the environment
  // variables specified in .env.example
  isPreviewImageSupportEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: {
    '/about': 'da6cd63a22b3429f8627bfb16c11dd69',
    '/projects': 'eca3100837544fbfae31d0f8efdba27c',
    '/contact': '2a96bb6228e2436b9d3df8754694fd11',
    '/add-tab-to-search-in-your-gatsby-blog':
      '8ca8e557d080439fa484a1541fb358c6',
    '/welcome-to-my-crib': '25ec99f180b64499a13a4762e2261338',
    '/gmail-clone': '673819d15c1142f6b69f5c2ba10645f4',
    '/markdown-previewer': '2d642f52a4b541f8904ebd18e7df8b42',
    '/personal-site-v2': '02a653ca505840b197dd488efacb1688',
    '/drum-machine': '2983d4a7e7b24b18b6e13ba538313754',
    '/random-kanye-west-quote-generator': '13af8adabebd4f4d90c8c00c04a9d3d7'
  }
}

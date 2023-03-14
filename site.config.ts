import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: '101ffcdcef71463c81c9ecf20130d74b',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'Функционально Ориентированное Программирование (ФОП)',
  domain: 'fop.davidshekunts.ru',
  author: '👨🏻 David Shekunts',

  // open graph metadata (optional)
  description:
    'Функционально Ориентированное Программирование (ФОП) – функциональная альтернатива ООП.',

  // social usernames (optional)
  // twitter: 'transitive_bs',
  // github: 'transitive-bullshit',
  // linkedin: 'fisch2',
  telegram: 'it_kachalka',
  // mastodon: '#', // optional mastodon profile URL, provides link verification
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  pageUrlOverrides: {
    '/': '101ffcdcef71463c81c9ecf20130d74b',
    '/usefull-links': '73b7e860132b492ea91e0fbbeb14629a',
    '/announcements': '57f7439098e945cb9702b6cd8c19ff4d',
    '/dictionary': '36ca2b544a5540229caf9749f03d2a6c',

    '/origins/you-dont-know-oop': '220d5d62394c468298f432889ab8b89e',
    '/origins/you-have-never-used-oop': '193737ff29f84a388dcfc287d2f803f3',
    '/origins/main-problem-of-oop': '9e8377d8ebd64c7f9fde9c04da75182e',
    '/origins/why-fp-and-pp-is-not-a-solution':
      'c282701868044c218e89039511d9dce4',
    '/origins/fop-birth': 'f9b1e8292d6c4a6da4d693ad90e438b9',

    '/flexibility-is-must': 'ea0b8ced6fdc4f969eb36d253c662373',
    '/process-first-design': 'e072d9d1986a41eca9a16a0c4606261e',
    '/data-oriented-architecture': 'd2400fe32f044cb5a01881d0b17a9ba6',
    '/wynwyn': 'e11e845af671421e9b902aab63377a25',
    '/explicit-better-implicit': '7f2d4b25646049ee8a3e8eb8acdd04df',
    '/occams-chainsaw': 'be9739f4b9c44c1d985eec15442b8638'
  },
  // pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  navigationStyle: 'default'
  // navigationStyle: 'custom',
  // navigationLinks: [
  //   {
  //     title: 'About',
  //     pageId: 'f1199d37579b41cbabfc0b5174f4256a'
  //   },
  //   {
  //     title: 'Contact',
  //     pageId: '6a29ebcb935a4f0689fe661ab5f3b8d1'
  //   }
  // ]
})

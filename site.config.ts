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
    '/usefull-links': '73b7e860132b492ea91e0fbbeb14629a',
    '/announcements': '57f7439098e945cb9702b6cd8c19ff4d',
    '/dictionary': '36ca2b544a5540229caf9749f03d2a6c',
    '/main': '41d9d822b36d483d8c37fd5ac82b68b8',
    '/fop-vs-oop': '157b7933aff542448a67ea941b7d5139',
    '/fop-vs-oop/encapsulation-vs-data-behaviour-separation':
      'e600561c558e49299be70d8b28b24694',
    '/fop-vs-oop/composition-over-inheritance':
      '96580fc225bd4ad5a26e1a24ba0ad051',
    '/fop-vs-oop/polymorphism-oop-and-fop': '45ac167af7f64c94bef5dda7d66a1659',
    '/fop-vs-oop/abstraction': '1e0ee3810ace40238f7ecc51c78d1f20',
    '/fop-vs-oop/oop-main-problem-and-advantage':
      '1aba1d1d6d6441f99c99cd70201f3ad8',
    '/fop-vs-oop/oop-vs-fp-conclusions': '664c898416744f8686e0d352153f08c0',
    '/fp-vs-pp': 'a2802dec55024e0787f446290a9de196',
    '/fp-vs-pp/introduction': '38f2ab3afb684e7b8e1acbf5f1f672ed',
    '/you-dont-know-oop': '220d5d62394c468298f432889ab8b89e',
    '/you-have-never-used-oop': '193737ff29f84a388dcfc287d2f803f3',
    '/main-problem-of-oop': '9e8377d8ebd64c7f9fde9c04da75182e',
    '/why-fp-and-pp-is-not-a-solution': 'c282701868044c218e89039511d9dce4',
    '/process-first-design': 'e072d9d1986a41eca9a16a0c4606261e'
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

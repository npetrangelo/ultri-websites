import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Ultri",
  description: "Build it - Use it - Own it",
  head: [
    [
      'script',
      { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-GKG2LWGGKE' }
    ],
    [
      'script',
      {},
      "window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', 'G-GKG2LWGGKE');"
    ]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Own It', link: 'https://coop.ultri.com' },
      
    //  { text: 'Projects', link: '/tech-coop-projects/' },
    //  {
    //    text: 'Projects',
    //    ariaLabel: 'Project Menu',
    //    items: [
    //      { text: 'Sociocracy Handbook', link: 'https://handbook.opensociocracy.org/' },
    //      { text: 'Sociocracy Logbook', link: 'https://logbook.opensociocracy.org/' }
    //    ]
    //  }
    ],

    sidebar:[
      {
        text: 'Data',
        items: [
          { text: 'API Model', link: '/nugget-api/' },
          { text: 'Database Model', link: '/nugget-schema/' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/OpenSociocracy' }
    ]
  }
})

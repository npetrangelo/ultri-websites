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
      { text: 'About Us', link: '/about-us/' },
      { text: 'Join', link: '/tech-coop-membership/' },
      { text: 'Own It', link: '/tech-coop-ownership/' },
      
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

    sidebar: {
      "tech-coop-membership": [
        {
          text: 'Co-op Information',
          items: [
            { text: 'Ownership Model', link: '/tech-coop-ownership/' },
            { text: 'Bylaws', link: '/tech-coop-bylaws/' },
            { text: 'Membership Options', link: '/tech-coop-membership/' },
          { text: 'Sign Up', link: 'https://logbook.opensociocracy.org/' }
        ]
      }
    ],
    "tech-coop-ownership": [
      {
        text: 'Ownership Model',
        items: [
          { text: 'Purpose', link: '/tech-coop-ownership/' },
          { text: 'Stakeholders', link: '/tech-coop-ownership/stakeholders/' },
          { text: 'Benefits', link: '/tech-coop-ownership/benefits/' },
          { text: 'Expectations', link: '/tech-coop-ownership/responsibilities/' },
          { text: 'Governance', link: '/tech-coop-ownership/governance/' },
          { text: 'Financial', link: '/tech-coop-ownership/financial/' },
          { text: 'Guidance', link: '/tech-coop-ownership/guidance/' },
          { text: 'Investments', link: '/tech-coop-ownership/investments/' },
        ]
      }
    ],
    "about-us": [
      {
        text: 'Co-op Information',
        items: [
          { text: 'Ownership Model', link: '/tech-coop-ownership/' },
          { text: 'Bylaws', link: '/tech-coop-bylaws/' },
          { text: 'Membership Options', link: '/tech-coop-membership/' },

        ]
      },
      {
        text: 'Co-op Projects',
        items: [
          { text: 'Sociocracy Handbook', link: 'https://handbook.opensociocracy.org/' },
          { text: 'Sociocracy Logbook', link: 'https://logbook.opensociocracy.org/' },
          { text: 'Circle Builder', link: 'https://github.com/OpenSociocracy/circle-builder' },

        ]
      }
    ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/OpenSociocracy' }
    ]
  }
})

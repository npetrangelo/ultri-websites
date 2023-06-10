import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Ultri",
  description: "Build it - Use it - Own it",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Join Now', link: '/tech-coop-membership/' },
      { text: 'Ownership', link: '/tech-coop-ownership/' },
      { text: 'Projects', link: '/tech-coop-projects/' },
    //  {
    //    text: 'Projects',
    //    ariaLabel: 'Project Menu',
    //    items: [
    //      { text: 'Sociocracy Handbook', link: 'https://handbook.opensociocracy.org/' },
    //      { text: 'Sociocracy Logbook', link: 'https://logbook.opensociocracy.org/' }
    //    ]
    //  }
    ],

    sidebar: [
      {
        text: 'Co-op Membership',
        items: [
          { text: 'Options', link: '/tech-coop-membership/' },
          { text: 'Sign Up', link: 'https://logbook.opensociocracy.org/' }
        ]
      },
      {
        text: 'Ownership Model',
        items: [
          { text: 'Stakeholders', link: '/tech-coop-ownership/stakeholders/' },
          { text: 'Benefits', link: '/tech-coop-ownership/benefits/' },
          { text: 'Responsibilities', link: '/tech-coop-ownership/responsibilities/' },
          { text: 'Governance', link: '/tech-coop-ownership/governance/' },
          { text: 'Financial', link: '/tech-coop-ownership/financial/' },
          { text: 'Guidance', link: '/tech-coop-ownership/guidance/' },
          { text: 'Investments', link: '/tech-coop-ownership/investments/' },
        ]
      },
      {
        text: 'Co-op Projects',
        items: [
          { text: 'Sociocracy Handbook', link: 'https://handbook.opensociocracy.org/' },
          { text: 'Sociocracy Logbook', link: 'https://logbook.opensociocracy.org/' },
          { text: 'Circle Builder', link: 'https://github.com/OpenSociocracy/circle-builder' },

        ]
      },
      {
        text: 'Resources',
        items: [
          { text: 'Sociocracy for All (SoFA)', link: 'https://www.sociocracyforall.org/' },
          { text: 'Sociocracy 3.0 (S3)', link: 'https://sociocracy30.org/' },
          { text: 'Start.coop', link: 'https://www.start.coop/' },

        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/OpenSociocracy' }
    ]
  }
})

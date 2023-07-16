import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Izzup - A better way to share",
  description: "A community site owned by the users and developers.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Benefits', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Benefits',
        items: [
          { text: 'General Benefits', link: '/benefits/' },
          { text: 'User Benefits', link: '/benefits/users/' },
          { text: 'Developer Benefits', link: '/benefits/developer/' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})

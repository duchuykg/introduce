const CONFIG = {
  // profile setting (required)
  profile: {
    name: "Phạm Hoàng Đức Huy",
    image: "/avatar.svg", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "Administrator",
    bio: "Đệ Nhất Công Tử",
    email: "",
    linkedin: "",
    github: "duchuykg",
    instagram: "",
  },
  projects: [
    {
      name: `Achievement`,
      href: "https://github.com/duchuykg/introduce",
    },
  ],
  // blog setting (required)
  blog: {
    title: "Achievement",
    description: "Welcome to Achievement!",
  },

  // CONFIG configration (required)
  link: "introduce-one.vercel.app",
  since: 2023, // If leave this empty, current year will be used.
  lang: "en-US", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: true,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: true,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: "duchuykg/introduce" ||"",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "1e62f627-b1ae-450a-b217-5fee1b1958a1", 
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: 21600 * 7, // revalidate time for [slug], index
}

module.exports = { CONFIG }

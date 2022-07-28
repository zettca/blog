import blog from "https://deno.land/x/blog@0.4.2/blog.tsx";

blog({
  title: "Blog",
  description: "My opinionated blog where I ramble about stuff",

  author: "zettca",
  favicon: "https://zettca.xyz/favicon.ico",

  avatar: "https://avatars.githubusercontent.com/u/638946",
  avatarClass: "rounded-4",

  dateStyle: "medium",
  lang: "en-UK",

  links: [
    { title: "Home", url: "https://zettca.xyz/" },
    { title: "Twitter", url: "https://twitter.com/zettca", target: "_blank" },
    { title: "GitHub", url: "https://github.com/zettca", target: "_blank" },
  ],

  middlewares: [],
});

import blog from "https://deno.land/x/blog@0.6.0/blog.tsx";

// syntax highlighting
import "https://esm.sh/prismjs@1.29.0/components/prism-python?no-check";
import "https://esm.sh/prismjs@1.29.0/components/prism-jsx?no-check";
import "https://esm.sh/prismjs@1.29.0/components/prism-tsx?no-check";

blog({
  title: "Blog",

  author: "zettca",
  favicon: "https://zettca.xyz/favicon.ico",

  avatar: "https://avatars.githubusercontent.com/u/638946",
  avatarClass: "rounded-4",

  lang: "en",

  links: [
    { title: "Home", url: "https://zettca.xyz/" },
    { title: "Twitter", url: "https://twitter.com/zettca", target: "_blank" },
    { title: "GitHub", url: "https://github.com/zettca", target: "_blank" },
  ],

  middlewares: [],
});

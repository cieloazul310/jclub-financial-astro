import { defineSiteMetadata, defineMenu } from "@cieloazul310/astro-sarkara";

export const siteMetadata = defineSiteMetadata({
  title: "J Club Financial Next",
  description: "Starter project for astro-sarkara.",
});
export const menu = defineMenu([
  { title: "トップページ", href: "/" },
  { title: "クラブ一覧", href: "/posts" },
]);
export const pageSize = 25;

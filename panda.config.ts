import { defineLayerStyles } from "@pandacss/dev";
import { defineSarkaraConfig } from "@cieloazul310/astro-sarkara/preset";

// https://panda-css.com/docs/references/config
export default defineSarkaraConfig({
  // primary and secondary colors is required
  // https://panda-css.com/docs/customization/theme#colors
  palette: { primary: "cyan", secondary: "blue" },

  // Where to look for your css declarations
  include: ["./src/**/*.{js,ts,astro,mdx}"],

  // customizing theme
  theme: {
    extend: {
      layerStyles: defineLayerStyles({
        emphasizedCell: {
          description: "For emphasized cells",
          value: {
            fontWeight: "bold",
            bg: { base: "neutral.100", _dark: "neutral.900" },
          },
        },
      }),
    },
  },
});

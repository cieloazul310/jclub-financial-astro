/* eslint import/prefer-default-export: off */
import { cva } from "@cieloazul310/sarkara-css/css";

export const tableBodyCell = cva({
  base: {
    py: 1,
    px: 4,
  },
  variants: {
    type: {
      head: {
        textAlign: "center",
        color: { base: "neutral.700", _dark: "neutral.300" },
        width: "4em",
      },
      value: {
        textAlign: "right",
      },
    },
    emphasized: {
      none: {},
      strong: {
        fontWeight: "bold",
      },
      most: {
        fontWeight: "bold",
        bg: { base: "neutral.100", _dark: "neutral.800" },
      },
    }
  },
  defaultVariants: {
    type: "value",
    emphasized: "none",
  },
});

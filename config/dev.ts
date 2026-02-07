import type { UserConfigExport } from "@tarojs/cli";

export default {
  mini: {},
  h5: {
    devServer: {
      host: "0.0.0.0",
      port: 10086,
      open: true,
    },
  },
} satisfies UserConfigExport<"vite">;

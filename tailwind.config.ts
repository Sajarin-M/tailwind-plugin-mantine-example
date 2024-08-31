import type { Config } from "tailwindcss";
import pluginMantine from "@devoss/tailwind-plugin-mantine";
import { theme } from "./src/lib/mantine-theme";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  plugins: [pluginMantine(theme)],
};
export default config;

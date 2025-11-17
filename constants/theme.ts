import { Platform } from "react-native";

const tintColorLight = "#2563EB"; // azul discreto
const tintColorDark = "#60A5FA";

export const Colors = {
  light: {
    text: "#111827",
    background: "#F5F5F7",
    card: "#FFFFFF",
    border: "#E5E7EB",
    muted: "#6B7280",

    tint: tintColorLight,
    icon: "#9CA3AF",
    tabIconDefault: "#9CA3AF",
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: "#E5E7EB",
    background: "#020617",
    card: "#020617",
    border: "#1F2933",
    muted: "#9CA3AF",

    tint: tintColorDark,
    icon: "#6B7280",
    tabIconDefault: "#6B7280",
    tabIconSelected: tintColorDark,
  },
};

export const Fonts = Platform.select({
  ios: {
    sans: "System",
    serif: "Times New Roman",
    rounded: "System",
    mono: "Menlo",
  },
  android: {
    sans: "sans-serif",
    serif: "serif",
    rounded: "sans-serif",
    mono: "monospace",
  },
  default: {
    sans: "normal",
    serif: "serif",
    rounded: "normal",
    mono: "monospace",
  },
  web: {
    sans: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    serif: "Georgia, 'Times New Roman', serif",
    rounded: "'SF Pro Rounded', 'Hiragino Maru Gothic ProN', Meiryo, 'MS PGothic', sans-serif",
    mono: "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
  },
});

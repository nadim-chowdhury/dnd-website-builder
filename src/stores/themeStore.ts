import { create } from "zustand";

interface ThemeState {
  theme: {
    colors: {
      primary: string;
      secondary: string;
      background: string;
      text: string;
    };
    darkMode: boolean;
    fonts: {
      primary: string;
      secondary: string;
    };
  };

  actions: {
    toggleDarkMode: () => void;
    setColors: (colors: Partial<ThemeState["theme"]["colors"]>) => void;
    setFonts: (fonts: Partial<ThemeState["theme"]["fonts"]>) => void;
  };
}

export const useThemeStore = create<ThemeState>((set) => ({
  theme: {
    colors: {
      primary: "#2563eb",
      secondary: "#4f46e5",
      background: "#ffffff",
      text: "#1f2937",
    },
    darkMode: false,
    fonts: {
      primary: "Inter, sans-serif",
      secondary: "Roboto, sans-serif",
    },
  },

  actions: {
    toggleDarkMode: () => {
      set((state) => ({
        theme: {
          ...state.theme,
          darkMode: !state.theme.darkMode,
        },
      }));
    },

    setColors: (colors) => {
      set((state) => ({
        theme: {
          ...state.theme,
          colors: {
            ...state.theme.colors,
            ...colors,
          },
        },
      }));
    },

    setFonts: (fonts) => {
      set((state) => ({
        theme: {
          ...state.theme,
          fonts: {
            ...state.theme.fonts,
            ...fonts,
          },
        },
      }));
    },
  },
}));

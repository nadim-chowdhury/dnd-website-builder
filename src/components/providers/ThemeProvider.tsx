"use client";

import { ReactNode, useEffect } from "react";
import { useThemeStore } from "@/stores/themeStore";

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const { theme } = useThemeStore();

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--primary-color",
      theme.colors.primary
    );
    document.documentElement.style.setProperty(
      "--secondary-color",
      theme.colors.secondary
    );
    document.documentElement.style.setProperty(
      "--background-color",
      theme.colors.background
    );
    document.documentElement.style.setProperty(
      "--text-color",
      theme.colors.text
    );
    document.documentElement.style.setProperty(
      "--primary-font",
      theme.fonts.primary
    );
    document.documentElement.style.setProperty(
      "--secondary-font",
      theme.fonts.secondary
    );
    document.documentElement.classList.toggle("dark", theme.darkMode);
  }, [theme]);

  return <>{children}</>;
};

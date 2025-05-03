import { ReactNode } from "react";
import { useBuilderStore } from "@/stores/builderStore";
import { useProjectStore } from "@/stores/projectStore";
import { useThemeStore } from "@/stores/themeStore";

export const BuilderProvider = ({ children }: { children: ReactNode }) => {
  // Initialize all stores
  useBuilderStore();
  useProjectStore();
  useThemeStore();

  return <>{children}</>;
};

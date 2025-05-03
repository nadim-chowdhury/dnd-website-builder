export interface Project {
  id: string;
  name: string;
  elements: Element[];
  preview?: string;
  createdAt: string;
  updatedAt: string;
}

export interface ThemeSettings {
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
}

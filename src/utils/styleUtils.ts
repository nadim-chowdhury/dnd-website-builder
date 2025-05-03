export const generateStyleString = (
  styles: Record<string, string | number>
) => {
  return Object.entries(styles)
    .map(([key, value]) => `${key}: ${value};`)
    .join(" ");
};

export const parseStyleString = (styleString: string) => {
  return styleString.split(";").reduce((acc, style) => {
    const [key, value] = style.split(":").map((s) => s.trim());
    if (key && value) {
      acc[key] = value;
    }
    return acc;
  }, {} as Record<string, string>);
};

export const applyResponsiveStyles = (
  element: HTMLElement,
  styles: Record<string, string | number>
) => {
  Object.entries(styles).forEach(([property, value]) => {
    element.style[property as any] =
      typeof value === "number" ? `${value}px` : value;
  });
};

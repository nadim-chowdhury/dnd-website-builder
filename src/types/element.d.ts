export type ElementType = "text" | "image" | "button" | "section";

export interface Element {
  id: string;
  type: ElementType;
  content: string;
  styles: {
    position: "absolute" | "relative";
    top: number;
    left: number;
    width: number;
    height: number;
    fontSize?: number;
    color?: string;
    backgroundColor?: string;
    border?: string;
    borderRadius?: number;
    zIndex: number;
    customCSS?: string;
  };
  parentId?: string;
  children?: Element[];
}

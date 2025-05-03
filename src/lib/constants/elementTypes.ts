import { ElementType } from "@/types/element.d";

export const ELEMENT_TYPES = {
  TEXT: "text" as ElementType,
  IMAGE: "image" as ElementType,
  BUTTON: "button" as ElementType,
  SECTION: "section" as ElementType,
};

export const ELEMENT_TYPE_CONFIG = {
  [ELEMENT_TYPES.TEXT]: {
    label: "Text",
    icon: "text",
    defaultContent: "New Text",
  },
  [ELEMENT_TYPES.IMAGE]: {
    label: "Image",
    icon: "image",
    defaultContent: "https://placehold.co/200x200",
  },
  [ELEMENT_TYPES.BUTTON]: {
    label: "Button",
    icon: "button",
    defaultContent: "Click Me",
  },
  [ELEMENT_TYPES.SECTION]: {
    label: "Section",
    icon: "section",
    defaultContent: "",
  },
};

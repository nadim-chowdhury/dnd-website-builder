import { ELEMENT_TYPES } from "./elementTypes";

export const DEFAULT_STYLES = {
  [ELEMENT_TYPES.TEXT]: {
    fontSize: 16,
    color: "#000000",
    lineHeight: 1.5,
    textAlign: "left",
  },
  [ELEMENT_TYPES.IMAGE]: {
    width: 200,
    height: 200,
    objectFit: "cover",
    borderRadius: 0,
  },
  [ELEMENT_TYPES.BUTTON]: {
    backgroundColor: "#2563eb",
    color: "#ffffff",
    padding: "8px 16px",
    borderRadius: 4,
  },
  [ELEMENT_TYPES.SECTION]: {
    backgroundColor: "#ffffff",
    padding: 20,
    margin: 10,
    borderRadius: 8,
  },
};

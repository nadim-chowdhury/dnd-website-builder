import { useDragDrop } from "@/hooks/useDragDrop";
import { useBuilder } from "@/hooks/useBuilder";
import { Element } from "@/types/element.d";
import { DEFAULT_STYLES } from "@/lib/constants/defaultStyles";

export const ButtonElement = ({ element }: { element: Element }) => {
  const { dragDropProps, isDragging } = useDragDrop("button", element.id);
  const { setSelectedElement, updateElement } = useBuilder();

  return (
    <button
      {...dragDropProps}
      style={{
        position: element.styles.position,
        top: element.styles.top,
        left: element.styles.left,
        width: element.styles.width,
        height: element.styles.height,
        backgroundColor:
          element.styles.backgroundColor ||
          DEFAULT_STYLES.button.backgroundColor,
        color: element.styles.color || DEFAULT_STYLES.button.color,
        borderRadius: element.styles.borderRadius + "px",
        opacity: isDragging ? 0.5 : 1,
      }}
      className="element-button hover:opacity-90 transition-opacity"
      onClick={(e) => {
        e.stopPropagation();
        setSelectedElement(element.id);
      }}
    >
      {element.content}
    </button>
  );
};

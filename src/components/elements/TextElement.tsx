import { useDragDrop } from "@/hooks/useDragDrop";
import { useBuilder } from "@/hooks/useBuilder";
import { Element } from "@/types/element.d";
import { DEFAULT_STYLES } from "@/lib/constants/defaultStyles";

export const TextElement = ({ element }: { element: Element }) => {
  const { dragDropProps, isDragging } = useDragDrop("text", element.id);
  const { setSelectedElement } = useBuilder();

  return (
    <div
      {...dragDropProps}
      style={{
        position: element.styles.position,
        top: element.styles.top,
        left: element.styles.left,
        width: element.styles.width,
        height: element.styles.height,
        fontSize: element.styles.fontSize || DEFAULT_STYLES.text.fontSize,
        color: element.styles.color || DEFAULT_STYLES.text.color,
        lineHeight: DEFAULT_STYLES.text.lineHeight,
        textAlign: DEFAULT_STYLES.text.textAlign,
        opacity: isDragging ? 0.5 : 1,
      }}
      className="element-text cursor-text"
      onClick={(e) => {
        e.stopPropagation();
        setSelectedElement(element.id);
      }}
    >
      {element.content}
    </div>
  );
};

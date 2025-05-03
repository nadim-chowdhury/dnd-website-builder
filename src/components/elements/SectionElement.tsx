import { useDragDrop } from "@/hooks/useDragDrop";
import { useBuilder } from "@/hooks/useBuilder";
import { Element } from "@/types/element.d";
import { DEFAULT_STYLES } from "@/lib/constants/defaultStyles";

export const SectionElement = ({ element }: { element: Element }) => {
  const { dragDropProps, isDragging } = useDragDrop("section", element.id);
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
        backgroundColor:
          element.styles.backgroundColor ||
          DEFAULT_STYLES.section.backgroundColor,
        padding: DEFAULT_STYLES.section.padding + "px",
        borderRadius: element.styles.borderRadius + "px",
        opacity: isDragging ? 0.5 : 1,
      }}
      className="element-section border-2 border-dashed border-gray-200"
      onClick={(e) => {
        e.stopPropagation();
        setSelectedElement(element.id);
      }}
    >
      {element.content}
    </div>
  );
};

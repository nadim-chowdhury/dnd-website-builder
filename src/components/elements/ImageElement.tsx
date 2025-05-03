import { useDragDrop } from "@/hooks/useDragDrop";
import { useBuilder } from "@/hooks/useBuilder";
import { Element } from "@/types/element.d";
import { DEFAULT_STYLES } from "@/lib/constants/defaultStyles";

export const ImageElement = ({ element }: { element: Element }) => {
  const { dragDropProps, isDragging } = useDragDrop("image", element.id);
  const { setSelectedElement, updateElement } = useBuilder();

  return (
    <img
      {...dragDropProps}
      src={element.content}
      alt="Element"
      style={{
        position: element.styles.position,
        top: element.styles.top,
        left: element.styles.left,
        width: element.styles.width,
        height: element.styles.height,
        objectFit: element.styles.objectFit || DEFAULT_STYLES.image.objectFit,
        borderRadius: element.styles.borderRadius + "px",
        opacity: isDragging ? 0.5 : 1,
      }}
      className="element-image cursor-move"
      onClick={(e) => {
        e.stopPropagation();
        setSelectedElement(element.id);
      }}
    />
  );
};

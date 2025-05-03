import { useDrag, useDrop } from "react-dnd";
import { ElementType } from "@/types/element.d";
import { useBuilderStore } from "@/stores/builderStore";

export const useDragDrop = (elementType: ElementType, elementId?: string) => {
  const { addElement, updateElement } = useBuilderStore(
    (state) => state.actions
  );

  const [{ isDragging }, drag] = useDrag(() => ({
    type: elementId ? "existing-element" : "new-element",
    item: { type: elementType, id: elementId },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  const [, drop] = useDrop(() => ({
    accept: ["new-element", "existing-element"],
    drop: (item: { type: ElementType; id?: string }, monitor) => {
      const offset = monitor.getClientOffset();
      if (!offset || !monitor.getTargetClientOffset()) return;

      if (item.id) {
        // Handle existing element movement
        updateElement(item.id, {
          styles: {
            left: offset.x,
            top: offset.y,
          },
        });
      } else {
        // Handle new element drop
        addElement({
          type: item.type,
          content: "New Element",
          styles: {
            position: "absolute",
            top: offset.y,
            left: offset.x,
            width: 100,
            height: 40,
            zIndex: 1,
          },
        });
      }
    },
  }));

  return {
    drag,
    drop,
    isDragging,
    dragDropProps: {
      ref: (node: HTMLElement) => drag(drop(node)),
    },
  };
};

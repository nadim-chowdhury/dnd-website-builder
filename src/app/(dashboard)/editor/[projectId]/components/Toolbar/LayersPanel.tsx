"use client";

import { useBuilder } from "@/hooks/useBuilder";
import { arrayMove } from "@dnd-kit/sortable";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

export const LayersPanel = () => {
  const { elements, actions } = useBuilder();
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor)
  );

  const handleDragEnd = (event: any) => {
    const { active, over } = event;
    if (active.id !== over.id) {
      const oldIndex = elements.findIndex((el) => el.id === active.id);
      const newIndex = elements.findIndex((el) => el.id === over.id);
      actions.loadElements(arrayMove(elements, oldIndex, newIndex));
    }
  };

  return (
    <div className="layers-panel p-4">
      <h3 className="text-lg font-semibold mb-4">Layers</h3>
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext
          items={elements}
          strategy={verticalListSortingStrategy}
        >
          {elements.map((element) => (
            <LayerItem key={element.id} element={element} />
          ))}
        </SortableContext>
      </DndContext>
    </div>
  );
};

const LayerItem = ({ element }: { element: Element }) => {
  return (
    <div className="layer-item p-2 bg-white mb-1 rounded border border-gray-200">
      {ELEMENT_TYPE_CONFIG[element.type].label}
    </div>
  );
};

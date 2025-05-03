"use client";

import {
  ELEMENT_TYPES,
  ELEMENT_TYPE_CONFIG,
} from "@/lib/constants/elementTypes";
import { useDragDrop } from "@/hooks/useDragDrop";

export const ElementsLibrary = () => {
  return (
    <div className="elements-library p-4">
      <h3 className="text-lg font-semibold mb-4">Elements</h3>
      <div className="grid grid-cols-2 gap-3">
        {Object.values(ELEMENT_TYPES).map((type) => (
          <ElementItem key={type} type={type} />
        ))}
      </div>
    </div>
  );
};

const ElementItem = ({ type }: { type: string }) => {
  const { drag } = useDragDrop(type as any);
  const config = ELEMENT_TYPE_CONFIG[type];

  return (
    <div
      ref={drag}
      className="element-item p-3 bg-white rounded-lg border border-gray-200 cursor-move hover:shadow-md transition-shadow"
    >
      <div className="flex items-center gap-2">
        <span className="text-lg">{config.icon}</span>
        {config.label}
      </div>
    </div>
  );
};

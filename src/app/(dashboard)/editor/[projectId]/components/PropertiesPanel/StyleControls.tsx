"use client";

import { useBuilder } from "@/hooks/useBuilder";

export const StyleControls = () => {
  const { selectedElement, updateElement } = useBuilder();

  if (!selectedElement) return null;

  return (
    <div className="style-controls p-4">
      <h3 className="text-lg font-semibold mb-4">Styles</h3>
      <div className="space-y-4">
        <div className="form-group">
          <label>Background Color</label>
          <input
            type="color"
            value={selectedElement.styles.backgroundColor || "#ffffff"}
            onChange={(e) =>
              updateElement(selectedElement.id, {
                styles: { backgroundColor: e.target.value },
              })
            }
          />
        </div>
        <div className="form-group">
          <label>Text Color</label>
          <input
            type="color"
            value={selectedElement.styles.color || "#000000"}
            onChange={(e) =>
              updateElement(selectedElement.id, {
                styles: { color: e.target.value },
              })
            }
          />
        </div>
        {/* Add more style controls */}
      </div>
    </div>
  );
};

"use client";

import { useBuilder } from "@/hooks/useBuilder";

export const AdvancedControls = () => {
  const { selectedElement, updateElement } = useBuilder();

  if (!selectedElement) return null;

  return (
    <div className="advanced-controls p-4">
      <h3 className="text-lg font-semibold mb-4">Advanced</h3>
      <div className="space-y-4">
        <div className="form-group">
          <label>Custom CSS</label>
          <textarea
            value={selectedElement.styles.customCSS || ""}
            onChange={(e) =>
              updateElement(selectedElement.id, {
                styles: {
                  ...selectedElement.styles,
                  customCSS: e.target.value,
                },
              })
            }
            className="w-full h-32 font-mono text-sm"
          />
        </div>
      </div>
    </div>
  );
};

"use client";

import { useBuilder } from "@/hooks/useBuilder";

const TEMPLATES = [
  {
    name: "Hero Section",
    elements: [
      // Template elements array
    ],
  },
];

export const TemplatesPanel = () => {
  const { actions } = useBuilder();

  const applyTemplate = (template: any) => {
    actions.loadElements(template.elements);
  };

  return (
    <div className="templates-panel p-4">
      <h3 className="text-lg font-semibold mb-4">Templates</h3>
      <div className="grid gap-3">
        {TEMPLATES.map((template) => (
          <button
            key={template.name}
            onClick={() => applyTemplate(template)}
            className="template-item p-4 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow text-left"
          >
            <h4 className="font-medium">{template.name}</h4>
            <p className="text-sm text-gray-500">3 elements</p>
          </button>
        ))}
      </div>
    </div>
  );
};

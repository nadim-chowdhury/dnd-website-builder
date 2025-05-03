import { useBuilderStore } from "@/stores/builderStore";
import { useEffect } from "react";
import { useProjectStore } from "@/stores/projectStore";

export const useBuilder = () => {
  const { elements, selectedElementId } = useBuilderStore();
  const { currentProject } = useProjectStore();
  const { addElement, updateElement, deleteElement, setSelectedElement } =
    useBuilderStore((state) => state.actions);

  // Auto-save functionality
  useEffect(() => {
    if (currentProject) {
      // Implement auto-save logic here
    }
  }, [elements, currentProject]);

  const getElementById = (id: string) => {
    return elements.find((el) => el.id === id);
  };

  const getSelectedElement = () => {
    return selectedElementId ? getElementById(selectedElementId) : null;
  };

  return {
    elements,
    selectedElement: getSelectedElement(),
    addElement,
    updateElement,
    deleteElement,
    setSelectedElement,
    getElementById,
  };
};

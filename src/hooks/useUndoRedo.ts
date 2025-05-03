import { useBuilderStore } from "@/stores/builderStore";

export const useUndoRedo = () => {
  const { history, currentHistoryIndex } = useBuilderStore();
  const { undo, redo, captureHistory } = useBuilderStore(
    (state) => state.actions
  );

  return {
    canUndo: currentHistoryIndex > 0,
    canRedo: currentHistoryIndex < history.length - 1,
    undo,
    redo,
    captureHistory,
  };
};

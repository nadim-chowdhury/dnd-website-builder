import { useUndoRedo } from "@/hooks/useUndoRedo";

export const HistoryControls = () => {
  const { canUndo, canRedo, undo, redo } = useUndoRedo();

  return (
    <div className="history-controls flex gap-2">
      <button
        onClick={undo}
        disabled={!canUndo}
        className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50 hover:bg-gray-300"
      >
        Undo
      </button>
      <button
        onClick={redo}
        disabled={!canRedo}
        className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50 hover:bg-gray-300"
      >
        Redo
      </button>
    </div>
  );
};

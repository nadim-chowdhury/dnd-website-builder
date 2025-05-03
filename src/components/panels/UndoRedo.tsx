import { useUndoRedo } from "@/hooks/useUndoRedo";

export const UndoRedo = () => {
  const { canUndo, canRedo, undo, redo } = useUndoRedo();

  return (
    <div className="undo-redo-panel p-4 bg-gray-50 rounded-lg">
      <h3 className="text-lg font-semibold mb-4">History</h3>
      <div className="flex flex-col gap-2">
        <button
          onClick={undo}
          disabled={!canUndo}
          className="w-full px-3 py-2 text-left bg-white rounded hover:bg-gray-100 disabled:opacity-50"
        >
          ↺ Undo
        </button>
        <button
          onClick={redo}
          disabled={!canRedo}
          className="w-full px-3 py-2 text-left bg-white rounded hover:bg-gray-100 disabled:opacity-50"
        >
          ↻ Redo
        </button>
      </div>
    </div>
  );
};

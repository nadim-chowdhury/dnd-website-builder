import { create } from "zustand";
import { Element, ElementType } from "@/types/element.d";

interface BuilderState {
  elements: Element[];
  selectedElementId: string | null;
  history: Element[][];
  currentHistoryIndex: number;

  actions: {
    addElement: (element: Omit<Element, "id">) => void;
    updateElement: (id: string, updates: Partial<Element>) => void;
    deleteElement: (id: string) => void;
    setSelectedElement: (id: string | null) => void;
    loadElements: (elements: Element[]) => void;
    undo: () => void;
    redo: () => void;
    captureHistory: () => void;
  };
}

export const useBuilderStore = create<BuilderState>((set, get) => ({
  elements: [],
  selectedElementId: null,
  history: [],
  currentHistoryIndex: -1,

  actions: {
    addElement: (element) => {
      const newElement = { ...element, id: crypto.randomUUID() };
      set((state) => ({
        elements: [...state.elements, newElement],
        selectedElementId: newElement.id,
      }));
      get().actions.captureHistory();
    },

    updateElement: (id, updates) => {
      set((state) => ({
        elements: state.elements.map((el) =>
          el.id === id ? { ...el, ...updates } : el
        ),
      }));
      get().actions.captureHistory();
    },

    deleteElement: (id) => {
      set((state) => ({
        elements: state.elements.filter((el) => el.id !== id),
        selectedElementId: null,
      }));
      get().actions.captureHistory();
    },

    setSelectedElement: (id) => {
      set({ selectedElementId: id });
    },

    loadElements: (elements) => {
      set({ elements });
      get().actions.captureHistory();
    },

    undo: () => {
      const { currentHistoryIndex, history } = get();
      if (currentHistoryIndex > 0) {
        set({
          elements: history[currentHistoryIndex - 1],
          currentHistoryIndex: currentHistoryIndex - 1,
        });
      }
    },

    redo: () => {
      const { currentHistoryIndex, history } = get();
      if (currentHistoryIndex < history.length - 1) {
        set({
          elements: history[currentHistoryIndex + 1],
          currentHistoryIndex: currentHistoryIndex + 1,
        });
      }
    },

    captureHistory: () => {
      set((state) => {
        const newHistory = [
          ...state.history.slice(0, state.currentHistoryIndex + 1),
          state.elements,
        ];
        return {
          history: newHistory,
          currentHistoryIndex: newHistory.length - 1,
        };
      });
    },
  },
}));

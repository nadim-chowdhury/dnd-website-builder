import { create } from "zustand";
import { Project } from "@/types/builder.d";

interface ProjectState {
  currentProject: Project | null;
  projects: Project[];

  actions: {
    createProject: (name: string) => Promise<void>;
    loadProject: (projectId: string) => Promise<void>;
    saveProject: () => Promise<void>;
    deleteProject: (projectId: string) => Promise<void>;
  };
}

export const useProjectStore = create<ProjectState>((set) => ({
  currentProject: null,
  projects: [],

  actions: {
    createProject: async (name) => {
      const newProject = {
        id: crypto.randomUUID(),
        name,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };

      set((state) => ({
        projects: [...state.projects, newProject],
        currentProject: newProject,
      }));
    },

    loadProject: async (projectId) => {
      // Implementation for loading from API
    },

    saveProject: async () => {
      // Implementation for saving to API
    },

    deleteProject: async (projectId) => {
      set((state) => ({
        projects: state.projects.filter((p) => p.id !== projectId),
        currentProject:
          state.currentProject?.id === projectId ? null : state.currentProject,
      }));
    },
  },
}));

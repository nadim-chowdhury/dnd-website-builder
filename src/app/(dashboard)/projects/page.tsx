"use client";

import { Button } from "@/components/ui/button";
import { useProjectStore } from "@/stores/projectStore";
import { useEffect } from "react";
import Link from "next/link";
import ProjectCard from "@/components/project-card";

export default function ProjectsPage() {
  const { projects, actions } = useProjectStore();

  useEffect(() => {
    actions.loadProjects();
  }, []);

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Your Projects</h1>
        <Link href="/editor/new">
          <Button>New Project</Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}

        {projects.length === 0 && (
          <div className="col-span-full text-center py-12 text-gray-500">
            No projects found. Create your first project!
          </div>
        )}
      </div>
    </div>
  );
}

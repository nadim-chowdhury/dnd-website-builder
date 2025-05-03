"use client";

import { useEffect, useRef } from "react";
import { useDragDrop } from "@/hooks/useDragDrop";
import { useBuilder } from "@/hooks/useBuilder";
import { ElementController } from "./ElementController";
import { GridLines } from "./GridLines";

export const BuilderCanvas = () => {
  const { elements, setSelectedElement } = useBuilder();
  const { drop } = useDragDrop("section");

  const canvasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (canvasRef.current) {
      drop(canvasRef.current);
    }
  }, [drop]);

  return (
    <div
      ref={canvasRef}
      className="relative w-full h-full bg-white canvas-area"
      onClick={() => setSelectedElement(null)}
    >
      <GridLines />
      {elements.map((element) => (
        <ElementController key={element.id} element={element} />
      ))}
    </div>
  );
};

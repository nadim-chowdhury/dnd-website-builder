"use client";

import { Element } from "@/types/element.d";
import { TextElement } from "@/components/elements/TextElement";
import { ImageElement } from "@/components/elements/ImageElement";
import { ButtonElement } from "@/components/elements/ButtonElement";
import { SectionElement } from "@/components/elements/SectionElement";

export const ElementController = ({ element }: { element: Element }) => {
  switch (element.type) {
    case "text":
      return <TextElement element={element} />;
    case "image":
      return <ImageElement element={element} />;
    case "button":
      return <ButtonElement element={element} />;
    case "section":
      return <SectionElement element={element} />;
    default:
      return null;
  }
};

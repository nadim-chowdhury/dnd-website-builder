import { z } from "zod";
import { ElementType } from "@/types/element.d";

export const ElementSchema = z.object({
  id: z.string().uuid(),
  type: z.enum(["text", "image", "button", "section"]),
  content: z.string(),
  styles: z.object({
    position: z.enum(["absolute", "relative"]),
    top: z.number(),
    left: z.number(),
    width: z.number(),
    height: z.number(),
    fontSize: z.number().optional(),
    color: z.string().optional(),
    backgroundColor: z.string().optional(),
    border: z.string().optional(),
    borderRadius: z.number().optional(),
    zIndex: z.number(),
  }),
  parentId: z.string().uuid().optional(),
  children: z.lazy(() => ElementSchema.array()).optional(),
});

export const ProjectSchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(3).max(50),
  elements: z.array(ElementSchema),
  preview: z.string().optional(),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
});

export const StyleUpdateSchema = z.object({
  elementId: z.string().uuid(),
  styles: z.record(z.any()),
});

export type ElementValidation = z.infer<typeof ElementSchema>;
export type ProjectValidation = z.infer<typeof ProjectSchema>;
export type StyleUpdateValidation = z.infer<typeof StyleUpdateSchema>;

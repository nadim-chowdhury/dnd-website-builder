"use client";

import { useBuilder } from "@/hooks/useBuilder";
import {
  ELEMENT_TYPES,
  ELEMENT_TYPE_CONFIG,
} from "@/lib/constants/elementTypes";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ElementType } from "@/types/element";

export const SettingsControls = () => {
  const { selectedElement, updateElement } = useBuilder();

  if (!selectedElement) return null;

  return (
    <div className="settings-controls p-4 space-y-6">
      <h3 className="text-lg font-semibold">Settings</h3>

      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="element-type">Element Type</Label>
          <Select
            value={selectedElement.type}
            onValueChange={(value) =>
              updateElement(selectedElement.id, {
                type: value as ElementType,
              })
            }
          >
            <SelectTrigger id="element-type" className="w-full">
              <SelectValue placeholder="Select element type" />
            </SelectTrigger>
            <SelectContent>
              {Object.values(ELEMENT_TYPES).map((type) => (
                <SelectItem
                  key={type}
                  value={type}
                  disabled={type === "section"} // Example of conditional disable
                >
                  {ELEMENT_TYPE_CONFIG[type].label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="element-content">Content</Label>
          <Input
            id="element-content"
            value={selectedElement.content}
            onChange={(e) =>
              updateElement(selectedElement.id, {
                content: e.target.value,
              })
            }
            placeholder="Enter element content"
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};

import { BuilderCanvas } from "./components/Canvas/BuilderCanvas";
import { ElementsLibrary } from "./components/Toolbar/ElementsLibrary";
import { PropertiesPanel } from "./components/PropertiesPanel/StyleControls";
import { DevicePreview } from "./components/Preview/DesktopPreview";

export default function EditorPage() {
  return (
    <div className="editor-page grid grid-cols-[300px_1fr_300px] h-screen">
      <div className="toolbar-column border-r">
        <ElementsLibrary />
      </div>

      <div className="main-canvas">
        <BuilderCanvas />
      </div>

      <div className="properties-column border-l">
        <PropertiesPanel />
      </div>
    </div>
  );
}

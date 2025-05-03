import { useState } from "react";

export const DevicePreview = () => {
  const [device, setDevice] = useState("desktop");

  return (
    <div className="device-preview-panel p-4 bg-gray-50 rounded-lg">
      <h3 className="text-lg font-semibold mb-4">Preview</h3>
      <div className="flex gap-2 mb-4">
        <button
          onClick={() => setDevice("mobile")}
          className={`px-3 py-1 rounded ${
            device === "mobile" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          Mobile
        </button>
        <button
          onClick={() => setDevice("tablet")}
          className={`px-3 py-1 rounded ${
            device === "tablet" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          Tablet
        </button>
        <button
          onClick={() => setDevice("desktop")}
          className={`px-3 py-1 rounded ${
            device === "desktop" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          Desktop
        </button>
      </div>
      <div
        className={`device-frame mx-auto bg-white ${
          device === "mobile"
            ? "w-80 h-[600px]"
            : device === "tablet"
            ? "w-[768px] h-[1024px]"
            : "w-full h-screen"
        }`}
      >
        {/* Preview content would go here */}
      </div>
    </div>
  );
};

import React from "react";
import { haptics, useHaptic } from "../utils/haptic";

export default function HapticDemo() {
  const { isSupported, isIOS, isMobile } = useHaptic();

  const hapticTests = [
    { name: "Light", action: haptics.light, color: "bg-blue-100 text-blue-800" },
    { name: "Medium", action: haptics.medium, color: "bg-blue-200 text-blue-900" },
    { name: "Heavy", action: haptics.heavy, color: "bg-blue-300 text-blue-900" },
    { name: "Selection", action: haptics.selection, color: "bg-purple-100 text-purple-800" },
    { name: "Success", action: haptics.success, color: "bg-green-100 text-green-800" },
    { name: "Warning", action: haptics.warning, color: "bg-yellow-100 text-yellow-800" },
    { name: "Error", action: haptics.error, color: "bg-red-100 text-red-800" },
  ];

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center">Haptic Feedback Demo</h2>

      {/* Device Info */}
      <div className="mb-6 p-4 bg-gray-50 rounded-lg">
        <h3 className="font-semibold mb-2">Device Info:</h3>
        <div className="text-sm space-y-1">
          <div>Haptic Supported: <span className={isSupported ? "text-green-600" : "text-red-600"}>{isSupported ? "Yes" : "No"}</span></div>
          <div>iOS Device: <span className={isIOS ? "text-green-600" : "text-gray-600"}>{isIOS ? "Yes" : "No"}</span></div>
          <div>Mobile Device: <span className={isMobile ? "text-green-600" : "text-gray-600"}>{isMobile ? "Yes" : "No"}</span></div>
        </div>
      </div>

      {/* Haptic Test Buttons */}
      <div className="grid grid-cols-2 gap-3">
        {hapticTests.map((test) => (
          <button
            key={test.name}
            onClick={test.action}
            className={`
              px-4 py-3 rounded-lg font-medium text-sm
              transition-all duration-200 ease-out
              active:scale-95 transform-gpu
              ${test.color}
              hover:shadow-md
            `}
          >
            {test.name}
          </button>
        ))}
      </div>

      {/* Instructions */}
      <div className="mt-6 p-4 bg-blue-50 rounded-lg">
        <h3 className="font-semibold mb-2 text-blue-800">How to Test:</h3>
        <ul className="text-sm text-blue-700 space-y-1">
          <li>• Best experienced on iOS devices (iPhone/iPad)</li>
          <li>• Make sure device is not in silent mode</li>
          <li>• Some effects may vary by device model</li>
          <li>• Fallback vibration on Android devices</li>
        </ul>
      </div>
    </div>
  );
}

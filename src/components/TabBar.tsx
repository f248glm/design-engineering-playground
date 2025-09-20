import { useState } from "react";
import { haptics } from "../utils/haptic";

type TabBarProps = {
  tabs: string[];
  activeTab?: number;
  onTabChange?: (index: number) => void;
  className?: string;
};

export default function TabBar({
  tabs,
  activeTab = 0,
  onTabChange,
  className = "",
}: TabBarProps) {
  const [internalActiveTab, setInternalActiveTab] = useState(activeTab);

  const currentActiveTab = onTabChange ? activeTab : internalActiveTab;

  // Более точный расчет позиции и размера селектора
  const itemWidth = 100 / tabs.length;
  const selectorWidth = `calc(${itemWidth}% - 8px)`;
  const selectorLeft = `calc(${currentActiveTab * itemWidth}% + 4px)`;

  const handleTabClick = (index: number) => {
    // Trigger haptic feedback for tab switch
    haptics.tabSwitch();

    if (onTabChange) {
      onTabChange(index);
    } else {
      setInternalActiveTab(index);
    }
  };

  return (
    <div className={`tab-bar ${className}`}>
      <div className="tab-bar-container">
        {tabs.map((tab, index) => (
          <button
            key={index}
            type="button"
            onClick={() => handleTabClick(index)}
            className={`tab-bar-item ${index === currentActiveTab ? "active" : ""}`}
            aria-selected={index === currentActiveTab}
            role="tab"
          >
            <span className="text-style-md">{tab}</span>
          </button>
        ))}
        <div
          className="tab-bar-selector"
          style={{
            width: selectorWidth,
            left: selectorLeft,
          }}
        />
      </div>
    </div>
  );
}

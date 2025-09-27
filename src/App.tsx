// src/App.tsx
import { useState } from "react";
import Button from "./components/Button";
import Alert from "./components/Alert";
import TabBar from "./components/TabBar";
import Cell from "./components/Cell";
import { ALERTS } from "./config/alerts";

// Import app images
import dedustImage from "./assets/appImg/dedust.jpeg";
import stonfiImage from "./assets/appImg/stonfi.jpeg"; // без .ts и c точным именем

// Локально выводим тип ключей из ALERTS
type AlertType = keyof typeof ALERTS; // "primary" | "secondary" | "tertiary"

export default function App() {
  const [alertType, setAlertType] = useState<AlertType | null>(null);
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="flex flex-col gap-4 h-screen items-center justify-center bg-viewport">
      <TabBar
        tabs={["Buttons", "Cells"]}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />

      {/* Buttons Section */}
      {activeTab === 0 && (
        <div className="flex flex-col gap-4">
          <Button variant="primary" onClick={() => setAlertType("primary")}>
            Primary Button
          </Button>

          <Button variant="secondary" onClick={() => setAlertType("secondary")}>
            Secondary Button
          </Button>

          <Button variant="tertiary" onClick={() => setAlertType("tertiary")}>
            Tertiary Button
          </Button>
        </div>
      )}

      {/* Cells Section */}
      {activeTab === 1 && (
        <div className="bg-viewport-alt w-full h-full flex flex-col gap-[12px] items-center justify-center p-4">
          <div className="card">
            <div className="flex flex-col">
              <Cell
                size="M"
                appName="Stonfi"
                appDescription="DeFi protocol for TON blockchain"
                appIcon={stonfiImage}
                onOpenClick={() => console.log("Open Stonfi")}
                className="w-full"
              />

              <Cell
                size="M"
                appName="DeDust"
                appDescription="Decentralized exchange protocol"
                appIcon={dedustImage}
                onOpenClick={() => console.log("Open Stonfi")}
                className="w-full"
              />
            </div>
          </div>

          <div className="card">
            <div className="flex flex-col">
              <Cell
                size="S"
                appName="DeDust"
                appDescription="Decentralized exchange protocol"
                appIcon={dedustImage}
                onOpenClick={() => console.log("Open DeDust")}
                className="w-full"
              />

              <Cell
                size="S"
                appName="Stonfi"
                appDescription="DeFi protocol for TON blockchain"
                appIcon={stonfiImage}
                onOpenClick={() => console.log("Open Stonfi")}
                className="w-full"
              />
            </div>
          </div>
        </div>
      )}

      {alertType && (
        <Alert
          title={ALERTS[alertType].title}
          type={alertType as "primary" | "secondary" | "tertiary"}
          onClose={() => setAlertType(null)}
          actions={(close) => (
            <Button variant={ALERTS[alertType].variant} onClick={close}>
              Got It
            </Button>
          )}
        >
          <p>{ALERTS[alertType].text}</p>
        </Alert>
      )}
    </div>
  );
}

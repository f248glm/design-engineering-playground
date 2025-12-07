// src/App.tsx
import { useState } from "react";
import Button from "./components/Button";
import Alert from "./components/Alert";
import TabBar from "./components/TabBar";
import Cell from "./components/Cell";
import GroupHeader from "./components/GroupHeader";
import { ALERTS } from "./config/alerts";
import PromoAppCard from "./components/PromoAppCard";

// Import app images
import dedustImage from "./assets/appImg/dedust.jpeg";
import stonfiImage from "./assets/appImg/stonfi.jpeg";
import memhustleImage from "./assets/appImg/memHustle.jpeg";

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
            Tetriary Button
          </Button>
        </div>
      )}

      {/* Cells Section */}
      {activeTab === 1 && (
        <div className="bg-viewport w-full h-full flex flex-col gap-[12px] items-center justify-center p-4">
          <div className="card pb-[4px]">
            <div className="flex flex-col">
              <GroupHeader
                title="Medium Cells"
                counter="2"
                rightText="See All"
                onRightClick={() => console.log("See all medium cells")}
              />
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
                onOpenClick={() => console.log("Open DeDust")}
                className="w-full"
              />
            </div>
          </div>

          <div className="card pb-[4px]">
            <div className="flex flex-col">
              <GroupHeader
                title="Small Cells"
                counter="(2)"
                subtitle="Compact view for more apps"
                rightText="Expand"
                onRightClick={() => console.log("Expand small cells")}
              />
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

          {false && (
            <PromoAppCard
              title="Tower defense where memecoins fight scam-bosses"
              subtitle="Top-tier gameplay, NFTs & daily events with TON rewards!"
              appName="MemHustle"
              appIcon={memhustleImage}
              buttonVariant="secondary"
              appDescription="Ton-based multi-player sho..."
              backgroundColor="hsl(250 100% 90%)" // фиолетовый как на картинке
              onOpenClick={() => console.log("Open MemHustle")}
            />
          )}
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

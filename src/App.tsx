// src/App.tsx
import { useState } from "react";
import Button from "./components/Button";
import Alert from "./components/Alert";
import TabBar from "./components/TabBar";
import { ALERTS } from "./config/alerts"; // без .ts и c точным именем

// Локально выводим тип ключей из ALERTS
type AlertType = keyof typeof ALERTS; // "primary" | "secondary" | "tertiary"

export default function App() {
  const [alertType, setAlertType] = useState<AlertType | null>(null);
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="flex flex-col gap-4 h-screen items-center justify-center bg-viewport">
      <TabBar
        tabs={["Primary", "Secondary", "Tertiary"]}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />

      {activeTab === 0 && (
        <Button variant="primary" onClick={() => setAlertType("primary")}>
          Open Primary Alert
        </Button>
      )}

      {activeTab === 1 && (
        <Button variant="secondary" onClick={() => setAlertType("secondary")}>
          Open Secondary Alert
        </Button>
      )}

      {activeTab === 2 && (
        <Button variant="tertiary" onClick={() => setAlertType("tertiary")}>
          Open Tertiary Alert
        </Button>
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

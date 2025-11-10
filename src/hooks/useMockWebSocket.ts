import { useEffect, useState } from "react";
import { axiomMockData, Token } from "@/data/axiomTokens";

export function useMockWebSocket(activeTab: string) {
  const [tokens, setTokens] = useState<Token[]>(axiomMockData[activeTab]);
  const [lastUpdated, setLastUpdated] = useState<Record<string, "up" | "down" | null>>({});

  useEffect(() => {
    setTokens(axiomMockData[activeTab]);
  }, [activeTab]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTokens((prev) =>
        prev.map((t) => {
          const delta = (Math.random() - 0.5) * 0.02 * t.price; // ±2 %
          const newPrice = +(t.price + delta).toFixed(3);
          const direction = newPrice > t.price ? "up" : "down";
          setLastUpdated((prev) => ({ ...prev, [t.symbol]: direction }));
          return { ...t, price: newPrice };
        })
      );
    }, 3000); // update every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return { tokens, lastUpdated };
}

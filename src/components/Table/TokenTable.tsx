"use client";

import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { useMockWebSocket } from "@/hooks/useMockWebSocket";
import TokenRow from "./TokenRow";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function TokenTable() {
  const { activeTab } = useSelector((state: RootState) => state.ui);
  const { tokens, lastUpdated } = useMockWebSocket(activeTab);

  const [sortBy, setSortBy] = useState<"price" | "change" | "volume" | null>(
    null
  );
  const [sortDir, setSortDir] = useState<"asc" | "desc">("desc");

  const sortedTokens = [...tokens].sort((a, b) => {
    if (!sortBy) return 0;
    const valA = a[sortBy];
    const valB = b[sortBy];
    if (typeof valA === "number" && typeof valB === "number") {
      return sortDir === "asc" ? valA - valB : valB - valA;
    }
    return 0;
  });

  const toggleSort = (field: "price" | "change" | "volume") => {
    if (sortBy === field) {
      setSortDir((prev) => (prev === "asc" ? "desc" : "asc"));
    } else {
      setSortBy(field);
      setSortDir("desc");
    }
  };

  return (
    <div className="overflow-x-auto rounded-xl border border-gray-800">
      <table className="min-w-full divide-y divide-gray-800">
        <thead className="bg-gray-900/50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">
              Token
            </th>

            {["price", "change", "volume"].map((field) => (
              <th
                key={field}
                className="px-6 py-3 text-right text-xs font-semibold text-gray-400 uppercase tracking-wider cursor-pointer hover:text-white"
                onClick={() =>
                  toggleSort(field as "price" | "change" | "volume")
                }
              >
                {field === "price"
                  ? "Price"
                  : field === "change"
                  ? "24h Change"
                  : "Volume"}
                {sortBy === field ? (sortDir === "asc" ? " ↑" : " ↓") : ""}
              </th>
            ))}
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-800">
          {sortedTokens.map((token) => (
            <TokenRow
              key={token.symbol}
              {...token}
              direction={lastUpdated[token.symbol]}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

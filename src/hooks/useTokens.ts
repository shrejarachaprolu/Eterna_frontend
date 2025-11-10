import { useQuery } from "@tanstack/react-query";

type TokenData = {
  symbol: string;
  price: string;
};

async function fetchTokens(): Promise<TokenData[]> {
  const res = await fetch("https://api.binance.com/api/v3/ticker/price");
  if (!res.ok) throw new Error("Failed to fetch tokens");
  const data = await res.json();
  // Only return first few for demo
  return data.slice(0, 10);
}

export function useTokens() {
  return useQuery({
    queryKey: ["tokens"],
    queryFn: fetchTokens,
    refetchInterval: 5000, // auto-refresh every 5 sec
  });
}

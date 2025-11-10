export type Token = {
  symbol: string;
  price: number;
  change: number;
  volume: string;
};

export const axiomMockData: Record<string, Token[]> = {
  "New Pairs": [
    { symbol: "ZETA/USDT", price: 1.24, change: 2.1, volume: "12.4M" },
    { symbol: "ORAI/USDT", price: 0.82, change: -0.6, volume: "4.3M" },
  ],
  "Final Stretch": [
    { symbol: "DYM/USDT", price: 2.4, change: 0.3, volume: "9.1M" },
  ],
  "Migrated": [
    { symbol: "TAO/USDT", price: 381.2, change: 1.9, volume: "3.2M" },
  ],
};

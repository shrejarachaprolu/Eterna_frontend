import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Token = {
  logo: string;
  name: string;
  price: string;
  change: string;
  volume: string;
  positive: boolean;
};

type UIState = {
  activeTab: string;
  tokens: Record<string, Token[]>;
};

const initialState: UIState = {
  activeTab: "New Pairs",
  tokens: {
    "New Pairs": [
      {
        logo: "https://cryptologos.cc/logos/bitcoin-btc-logo.png",
        name: "BTC / USDT",
        price: "$67,000",
        change: "+2.4%",
        volume: "$12.5B",
        positive: true,
      },
      {
        logo: "https://cryptologos.cc/logos/ethereum-eth-logo.png",
        name: "ETH / USDT",
        price: "$3,500",
        change: "-1.1%",
        volume: "$6.2B",
        positive: false,
      },
    ],
    "Final Stretch": [
      {
        logo: "https://cryptologos.cc/logos/solana-sol-logo.png",
        name: "SOL / USDT",
        price: "$180",
        change: "+5.1%",
        volume: "$2.4B",
        positive: true,
      },
      {
        logo: "https://cryptologos.cc/logos/cardano-ada-logo.png",
        name: "ADA / USDT",
        price: "$0.62",
        change: "+0.5%",
        volume: "$1.1B",
        positive: true,
      },
    ],
    Migrated: [
      {
        logo: "https://cryptologos.cc/logos/polygon-matic-logo.png",
        name: "MATIC / USDT",
        price: "$0.95",
        change: "-0.9%",
        volume: "$900M",
        positive: false,
      },
    ],
  },
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setActiveTab: (state, action: PayloadAction<string>) => {
      state.activeTab = action.payload;
    },
  },
});

export const { setActiveTab } = uiSlice.actions;
export default uiSlice.reducer;

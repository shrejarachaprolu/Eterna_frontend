import { useEffect, useState } from "react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import TokenModal from "@/components/TokenModal";

type Props = {
  symbol: string;
  price: number;
  change: number;
  volume: string;
  direction?: "up" | "down" | null;
};

export default function TokenRow({ symbol, price, change, volume, direction }: Props) {
  const [highlight, setHighlight] = useState(false);

  useEffect(() => {
    if (!direction) return;
    setHighlight(true);
    const timeout = setTimeout(() => setHighlight(false), 600);
    return () => clearTimeout(timeout);
  }, [price]);

  const highlightColor =
    direction === "up"
      ? "bg-green-500/20"
      : direction === "down"
      ? "bg-red-500/20"
      : "";

  return (
    <tr className={`transition-colors duration-500 ${highlight ? highlightColor : ""}`}>
<td className="px-6 py-3">
  <Popover>
    <PopoverTrigger asChild>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <button className="text-indigo-400 hover:underline">{symbol}</button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Pair: {symbol}</p>
            <p>Volume: {volume}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </PopoverTrigger>

    <PopoverContent className="w-48 bg-gray-900 text-gray-200 border border-gray-700">
      <p className="font-semibold mb-2">{symbol}</p>
      <p>Price: ${price.toFixed(2)}</p>
      <p>24h Change: {change}%</p>
      <p>Volume: {volume}</p>
      <div className="pt-2 border-t border-gray-700 mt-2">
    <TokenModal token={{ symbol, price, change, volume }} />
  </div>
    </PopoverContent>
  </Popover>
</td>

      <td className="px-6 py-3 text-right">${price.toFixed(3)}</td>
      <td
        className={`px-6 py-3 text-right ${
          change >= 0 ? "text-green-400" : "text-red-400"
        }`}
      >
        {change > 0 ? "+" : ""}
        {change.toFixed(2)}%
      </td>
      <td className="px-6 py-3 text-right text-gray-400">{volume}</td>
    </tr>
  );
}
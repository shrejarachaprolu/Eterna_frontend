"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

export default function TokenModal({ token }: { token: any }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="text-indigo-400 hover:underline">Details</button>
      </DialogTrigger>
      <DialogContent className="bg-gray-900 border-gray-700 text-gray-200">
        <DialogHeader>
          <DialogTitle>{token.symbol}</DialogTitle>
        </DialogHeader>
        <div className="space-y-2">
          <p>Price: ${token.price.toFixed(2)}</p>
          <p>24h Change: {token.change}%</p>
          <p>Volume: {token.volume}</p>
        </div>
      </DialogContent>
    </Dialog>
  );
}

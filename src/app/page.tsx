
import Tabs from "@/components/Tabs/Tabs";
import TokenTable from "@/components/Table/TokenTable";
import Header from "@/components/Header";
export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950 text-white p-6">
      <Header />
      <Tabs />
      <TokenTable />
    </main>
  );
}

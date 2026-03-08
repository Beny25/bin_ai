import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import DashboardCard from "../components/DashboardCard";
import { getMockBinanceData } from "../lib/binance";

export default function Home() {
  const data = getMockBinanceData();

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Navbar />
      <main className="p-6">
        <h1 className="text-3xl font-bold mb-6">BinAI – Crypto Assistant Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <DashboardCard title="Active Campaigns" value={data.campaigns} />
          <DashboardCard title="Top Coin" value={data.topCoin} />
          <DashboardCard title="AI Queries Today" value={data.aiQueries} />
        </div>
      </main>
      <Footer />
    </div>
  );
}

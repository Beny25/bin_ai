import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import TokenInput from "../../components/TokenInput";

export default function SettingsPage() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Navbar />
      <main className="p-6">
        <h1 className="text-2xl font-bold mb-4">Settings</h1>
        <TokenInput />
      </main>
      <Footer />
    </div>
  );
}

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ChatBox from "../../components/ChatBox";

export default function ChatPage() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Navbar />
      <main className="p-6">
        <h1 className="text-2xl font-bold mb-4">BinAI Chat Assistant</h1>
        <ChatBox />
      </main>
      <Footer />
    </div>
  );
}

export default function Navbar() {
  return (
    <nav className="bg-slate-800 p-4 flex justify-between items-center">
      <span className="font-bold text-xl">BinAI</span>
      <div className="space-x-4">
        <a href="/" className="hover:text-yellow-400">Dashboard</a>
        <a href="/chat" className="hover:text-yellow-400">Chat</a>
        <a href="/settings" className="hover:text-yellow-400">Settings</a>
      </div>
    </nav>
  );
}

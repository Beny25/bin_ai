interface Props {
  title: string;
  value: string | number;
}

export default function DashboardCard({ title, value }: Props) {
  return (
    <div className="bg-slate-700 p-4 rounded-lg shadow hover:scale-105 transition-all">
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="text-2xl mt-2">{value}</p>
    </div>
  );
}

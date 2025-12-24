// src/components/admin/StatCard.jsx
export default function StatCard({ title, value, icon, trend, colorClass }) {
  return (
    <div className="bg-white p-6 rounded-[2rem] shadow-sm border border-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
      <div className="flex justify-between items-start">
        <div className="space-y-1">
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{title}</p>
          <h3 className="text-3xl font-black text-slate-800">{value}</h3>
          {trend && (
            <div className={`inline-flex items-center px-2 py-0.5 rounded-lg text-[10px] font-black mt-2 ${
              trend.includes('+') ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'
            }`}>
              {trend}
            </div>
          )}
        </div>
        <div className={`p-4 rounded-2xl shadow-inner transition-transform group-hover:scale-110 duration-500 ${colorClass}`}>
          {icon}
        </div>
      </div>
    </div>
  );
}
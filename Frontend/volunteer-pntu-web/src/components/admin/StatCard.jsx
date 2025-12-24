export default function StatCard({ title, value, icon, trend, colorClass = "text-blue-600 bg-blue-50" }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm font-medium text-gray-500 mb-1">{title}</p>
          <h3 className="text-2xl font-bold text-gray-800">{value}</h3>
          {trend && (
            <p className={`text-xs mt-2 font-bold ${trend.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
              {trend} <span className="text-gray-400 font-normal">so với tháng trước</span>
            </p>
          )}
        </div>
        <div className={`p-3 rounded-xl ${colorClass}`}>
          {icon}
        </div>
      </div>
    </div>
  );
}
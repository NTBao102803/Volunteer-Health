// src/components/admin/DataTable.jsx
export default function DataTable({ columns, data, actions }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left">
        <thead>
          <tr className="border-b border-slate-100">
            {columns.map((col, index) => (
              <th 
                key={index} 
                className={`px-6 py-6 text-[10px] font-black text-slate-400 uppercase tracking-[0.25em] ${col.className || ''}`}
              >
                {col.header}
              </th>
            ))}
            {actions && (
              <th className="px-6 py-6 text-[10px] font-black text-slate-400 uppercase tracking-[0.25em] text-center">
                Thao tác
              </th>
            )}
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-50">
          {data.map((row, rowIndex) => (
            <tr 
              key={row.id || rowIndex} 
              className="group hover:bg-pnt-blue/[0.02] transition-colors duration-300"
            >
              {columns.map((col, colIndex) => (
                <td key={colIndex} className="px-6 py-6">
                  {col.render ? col.render(row) : row[col.key]}
                </td>
              ))}
              {actions && (
                <td className="px-6 py-6">
                  <div className="transition-opacity">
                    {actions(row)}
                  </div>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
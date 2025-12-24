// src/components/admin/PageHeader.jsx
import React from 'react';

export default function PageHeader({ breadcrumb, title, subtitle, actions }) {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
      <div className="space-y-1">
        <nav className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-2">
          {breadcrumb}
        </nav>
        <h1 className="text-3xl lg:text-4xl font-black text-slate-800 tracking-tight leading-none">
          {title}
        </h1>
        <p className="text-slate-500 text-sm font-medium italic">{subtitle}</p>
      </div>
      <div className="flex flex-wrap gap-3 w-full md:w-auto">
        {actions}
      </div>
    </div>
  );
}
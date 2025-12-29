import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './Button';
import { HiOutlineClock, HiOutlineMapPin } from 'react-icons/hi2';

export default function Card({ data }) {
  const navigate = useNavigate();
  const progress = (data.filled / data.slots) * 100;

  const handleViewDetail = () => navigate(`/activity/${data.id}`);

  return (
    <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:shadow-[0_30px_70px_rgba(0,0,0,0.1)] transition-all duration-500 border border-slate-100 group flex flex-col h-full font-sans">
      <div className="relative aspect-[4/3] overflow-hidden cursor-pointer" onClick={handleViewDetail}>
        <img 
          src={data.image} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
          alt={data.title} 
        />
        <div className="absolute top-4 left-4 flex gap-2">
            <span className="bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-xl text-[9px] font-black text-pnt-blue uppercase tracking-widest shadow-sm">
                {data.tag}
            </span>
        </div>
      </div>

      <div className="p-8 flex flex-col flex-grow text-pnt-navy">
        <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400 mb-4">
          <HiOutlineClock size={16} className="text-pnt-blue" /> <span>{data.date}</span>
        </div>
        
        <h3 className="font-black text-xl mb-6 line-clamp-2 leading-snug cursor-pointer hover:text-pnt-blue transition-colors tracking-tight h-14">
          {data.title}
        </h3>

        <div className="mt-auto space-y-5">
            <div>
                <div className="flex justify-between text-[10px] font-black uppercase tracking-widest mb-2">
                    <span className="text-slate-400 italic">Tiến độ tuyển</span>
                    <span className="text-pnt-blue">{data.filled}/{data.slots} SV</span>
                </div>
                <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden shadow-inner">
                    <div 
                        className={`h-full transition-all duration-1000 ${progress > 80 ? 'bg-gradient-to-r from-orange-400 to-red-500' : 'bg-gradient-to-r from-pnt-green to-emerald-400'}`}
                        style={{ width: `${progress}%` }}
                    ></div>
                </div>
            </div>
            
            <Button 
                className="w-full py-4 text-[10px] font-black uppercase tracking-[0.2em] rounded-2xl shadow-lg shadow-pnt-blue/10" 
                variant={data.status === 'URGENT' ? 'primary' : 'outline'}
                onClick={handleViewDetail}
            >
                {data.status === 'URGENT' ? 'Đăng ký ngay' : 'Chi tiết hoạt động'}
            </Button>
        </div>
      </div>
    </div>
  );
}
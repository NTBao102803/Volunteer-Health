// src/pages/admin/ActivityManager.jsx
import React, { useState } from 'react';
import AdminLayout from '../../components/admin/AdminLayout';
import PageHeader from '../../components/admin/PageHeader';
import DataTable from '../../components/admin/DataTable';
import ActivityFormModal from '../../components/modals/ActivityFormModal'; // Import Modal mới
import { HiPlus, HiPencil, HiLockClosed, HiEye, HiOutlineCalendar, HiOutlineMapPin } from 'react-icons/hi2';
import { mockActivitiesList } from '../../hooks/useDataStore';

const ActivityManager = () => {
  const [formData, setFormData] = useState({
    title: '',
    tag: 'Hỗ trợ y tế',
    slots: 0,
    filled: 0,
    date: '',
    location: '',
    image: '',
    status: 'RECRUITING'
  });

  // 2. Logic đổ dữ liệu vào Form khi mở Modal
  useEffect(() => {
    if (isOpen) {
      if ((mode === 'edit' || mode === 'view') && data) {
        // Nếu là Sửa hoặc Xem: Đổ dữ liệu từ mockActivitiesList vào state
        setFormData({ ...data });
      } else {
        // Nếu là Thêm mới: Reset form về trống
        setFormData({
          title: '',
          tag: 'Hỗ trợ y tế',
          slots: 0,
          filled: 0,
          date: '',
          location: '',
          image: 'https://picsum.photos/400/300', // Ảnh mặc định cho dữ liệu mẫu
          status: 'RECRUITING'
        });
      }
    }
  }, [isOpen, mode, data]);

  if (!isOpen) return null;

  const isView = mode === 'view';

  // 3. Logic thay đổi dữ liệu trong form (dùng cho Create và Edit)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // 4. Logic Xử lý Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (mode === 'create') {
      console.log("LOGIC THÊM MỚI: Thêm object này vào mockActivitiesList", formData);
      alert(`Đã tạo thành công chiến dịch: ${formData.title}`);
    } else if (mode === 'edit') {
      console.log(`LOGIC CHỈNH SỬA: Tìm object có ID ${data.id} và cập nhật dữ liệu`, formData);
      alert(`Đã cập nhật thông tin cho ID: ${data.id}`);
    }
    
    onClose(); // Đóng modal
  };
  const columns = [
    { 
      header: "CHIẾN DỊCH", 
      className: "w-[40%] min-w-[300px]",
      render: (row) => (
        <div className="flex items-center gap-4">
          <div className="relative size-14 rounded-2xl overflow-hidden shrink-0 shadow-inner bg-slate-100 border border-slate-200/50">
             <img src={row.image} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="min-w-0">
            <p className="font-extrabold text-slate-800 text-sm tracking-tight mb-1 line-clamp-2" title={row.title}>
              {row.title}
            </p>
            <span className="text-[10px] font-black px-2 py-0.5 rounded-md bg-pnt-blue/10 text-pnt-blue uppercase tracking-widest border border-pnt-blue/10">
                {row.tag}
            </span>
          </div>
        </div>
      )
    },
    { 
      header: "TIẾN ĐỘ", 
      render: (row) => (
        <div className="w-32 shrink-0">
          <div className="flex justify-between items-end mb-1.5">
            <span className="text-[10px] font-black text-slate-800">{Math.round((row.filled/row.slots)*100)}%</span>
            <span className="text-[9px] font-bold text-slate-400 uppercase">{row.filled}/{row.slots} SV</span>
          </div>
          <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden shadow-inner">
            <div 
              className={`h-full rounded-full transition-all duration-1000 ${row.filled >= row.slots ? 'bg-pnt-green' : 'bg-pnt-blue'}`} 
              style={{width: `${(row.filled/row.slots)*100}%`}}
            ></div>
          </div>
        </div>
      )
    },
    { 
      header: "THỜI GIAN", 
      className: "min-w-[150px]",
      render: (row) => (
        <div className="text-slate-500 min-w-0">
            <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-tighter truncate">
                <HiOutlineCalendar className="text-pnt-blue shrink-0" /> {row.date}
            </div>
            <div className="flex items-center gap-1.5 text-[10px] font-medium mt-1 italic opacity-70 truncate" title={row.location}>
                <HiOutlineMapPin className="shrink-0" /> {row.location}
            </div>
        </div>
      )
    },
    { 
      header: "TRẠNG THÁI", 
      render: (row) => (
        <span className={`px-3 py-1 rounded-xl text-[9px] font-black uppercase tracking-widest border-2 whitespace-nowrap ${
          row.status === 'URGENT' ? 'bg-red-50 text-red-500 border-red-100' : 
          row.status === 'COMPLETED' ? 'bg-slate-50 text-slate-400 border-slate-100' : 
          'bg-emerald-50 text-emerald-600 border-emerald-100'
        }`}>
          {row.status}
        </span>
      )
    }
  ];

  const actions = (row) => (
    <div className="flex gap-2 justify-center shrink-0">
      <button onClick={() => openModal('view', row)} className="p-2.5 bg-white text-slate-400 hover:text-pnt-blue hover:bg-pnt-blue/5 rounded-xl border border-slate-100 transition-all"><HiEye size={18}/></button>
      <button onClick={() => openModal('edit', row)} className="p-2.5 bg-white text-slate-400 hover:text-pnt-yellow hover:bg-pnt-yellow/5 rounded-xl border border-slate-100 transition-all"><HiPencil size={18}/></button>
      <button className="p-2.5 bg-white text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-xl border border-slate-100 transition-all"><HiLockClosed size={18}/></button>
    </div>
  );

  return (
    <AdminLayout>
      <PageHeader 
        breadcrumb="Hệ thống / Hoạt động"
        title="Quản lý Chiến dịch"
        subtitle="Vòng đời hoạt động tình nguyện và nhân sự sinh viên."
        actions={
          <button 
            onClick={() => openModal('create')}
            className="bg-pnt-navy text-white px-8 py-3.5 rounded-2xl font-black text-[11px] uppercase tracking-[0.2em] shadow-2xl shadow-pnt-navy/20 hover:bg-pnt-blue transition-all flex items-center gap-3"
          >
            <HiPlus size={20}/> Tạo hoạt động mới
          </button>
        }
      />
      
      <div className="bg-white rounded-[3rem] p-10 shadow-soft border border-white/60 relative overflow-hidden">
         <DataTable columns={columns} data={mockActivitiesList} actions={actions} />
      </div>

      {/* Gọi Modal Form */}
      <ActivityFormModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        mode={modalMode}
        data={selectedData}
      />
    </AdminLayout>
  );
};

export default ActivityManager;
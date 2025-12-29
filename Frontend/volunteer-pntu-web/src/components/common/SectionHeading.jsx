export default function SectionHeading({ title, subtitle, align = 'left', dark = false }) {
  return (
    <div className={`mb-10 ${align === 'center' ? 'text-center' : ''} font-sans`}>
      {/* Thêm logic đổi màu chữ dựa trên prop dark */}
      <h2 className={`text-4xl md:text-5xl font-black tracking-tighter mb-4 ${dark ? 'text-white' : 'text-pnt-navy'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg font-medium max-w-2xl ${align === 'center' ? 'mx-auto' : ''} ${dark ? 'text-blue-100/70' : 'text-slate-500'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
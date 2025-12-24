export default function SectionHeading({ title, subtitle, align = 'left' }) {
  return (
    <div className={`mb-10 ${align === 'center' ? 'text-center' : ''}`}>
      <h2 className="text-3xl font-bold text-gray-900 mb-2">{title}</h2>
      {subtitle && <p className="text-gray-500 max-w-2xl">{subtitle}</p>}
    </div>
  );
}
export default function Button({ children, variant = 'primary', className = '', ...props }) {
  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-white/20 text-white backdrop-blur-md border border-white/50 hover:bg-white/30',
    outline: 'border border-blue-600 text-blue-600 hover:bg-blue-50',
    dark: 'bg-gray-900 text-white hover:bg-black'
  };

  return (
    <button 
      className={`px-6 py-2.5 rounded-lg font-semibold transition-all duration-300 active:scale-95 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
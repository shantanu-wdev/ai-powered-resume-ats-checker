function Button({ children, variant = 'primary', type = 'button', onClick, disabled, className = '' }) {
  const base =
    'inline-flex items-center justify-center rounded-full px-7 py-3 text-sm font-medium transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  const variants = {
    primary: 'bg-primary text-white hover:bg-green-600',
    secondary: 'border border-gray-300 bg-white text-gray-900 hover:bg-gray-50',
    outline: 'border border-white/25 bg-transparent text-white hover:border-primary hover:text-primary',
    ghost: 'text-primary hover:text-green-400',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;

function Badge({ children, variant = 'default' }) {
  const variants = {
    default: 'bg-green-50 text-primary',
    warning: 'bg-amber-50 text-amber-700',
    neutral: 'bg-gray-100 text-gray-600',
  };

  return (
    <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${variants[variant]}`}>
      {children}
    </span>
  );
}

export default Badge;

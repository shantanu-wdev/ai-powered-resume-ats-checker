function Spinner({ label, dark = true }) {
  return (
    <div className="flex flex-col items-center gap-3">
      <div
        className={`h-8 w-8 animate-spin rounded-full border-2 border-t-primary ${
          dark ? 'border-white/10' : 'border-gray-200'
        }`}
        role="status"
        aria-label={label || 'Loading'}
      />
      {label && <p className={`text-sm ${dark ? 'text-gray-400' : 'text-gray-500'}`}>{label}</p>}
    </div>
  );
}

export default Spinner;

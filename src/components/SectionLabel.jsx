function SectionLabel({ children, light = false }) {
  return (
    <span
      className={`text-xs font-medium uppercase tracking-[0.2em] ${
        light ? 'text-primary' : 'text-primary'
      }`}
    >
      {children}
    </span>
  );
}

export default SectionLabel;

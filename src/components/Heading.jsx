function Heading({ as: Tag = 'h2', children, className = '', light = false }) {
  const color = light ? 'text-white' : 'text-gray-900';
  const sizes = {
    h1: `text-4xl font-bold tracking-tight leading-[1.05] sm:text-5xl md:text-6xl lg:text-7xl ${color} drop-shadow-[0_0_20px_rgba(34,197,94,0.8)]`,
    h2: `text-2xl font-bold tracking-tight leading-tight sm:text-3xl md:text-4xl lg:text-5xl ${color}`,
    h3: `text-xl font-semibold sm:text-2xl ${color}`,
    h4: `text-lg font-semibold ${color}`,
  };

  return <Tag className={`${sizes[Tag] || sizes.h2} ${className}`}>{children}</Tag>;
}

export default Heading;
function FeatureCard({ number, title, description }) {
  return (
    <div className="group flex w-full flex-col gap-3 border-t-2 border-gray-200 py-6 transition-colors hover:border-primary sm:gap-4 sm:py-8">
      <span className="text-sm font-medium text-gray-400 transition-colors group-hover:text-primary">
        {number}
      </span>
      <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">{title}</h3>
      <p className="text-sm leading-relaxed text-gray-500 sm:text-base">{description}</p>
    </div>
  );
}

export default FeatureCard;
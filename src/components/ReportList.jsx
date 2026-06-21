import { FiCheck, FiAlertTriangle, FiArrowRight } from 'react-icons/fi';

const ICONS = {
  strengths: FiCheck,
  weaknesses: FiAlertTriangle,
  suggestions: FiArrowRight,
};

const STYLES = {
  strengths: { icon: 'text-primary', title: 'Strengths' },
  weaknesses: { icon: 'text-amber-500', title: 'Weaknesses' },
  suggestions: { icon: 'text-primary', title: 'Suggestions' },
};

function ReportList({ type, items, dark = false }) {
  const Icon = ICONS[type];
  const { icon, title } = STYLES[type];

  return (
    <div className="flex flex-col gap-3">
      <h3 className={`text-xs font-medium uppercase tracking-[0.15em] ${dark ? 'text-gray-500' : 'text-gray-500'}`}>
        {title}
      </h3>
      <ul className="flex flex-col gap-2">
        {items.map((item, i) => (
          <li key={i} className={`flex items-start gap-2 text-sm ${dark ? 'text-gray-300' : 'text-gray-700'}`}>
            <Icon className={`mt-0.5 h-4 w-4 shrink-0 ${icon}`} />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ReportList;

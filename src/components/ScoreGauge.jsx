function ScoreGauge({ score, dark = false }) {
  const circumference = 2 * Math.PI * 54;
  const offset = circumference - (score / 100) * circumference;

  const color =
    score >= 80 ? 'text-primary' :
    score >= 60 ? 'text-yellow-500' :
    'text-red-500';

  const strokeColor =
    score >= 80 ? 'stroke-primary' :
    score >= 60 ? 'stroke-yellow-500' :
    'stroke-red-500';

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative flex h-32 w-32 items-center justify-center">
        <svg className="h-32 w-32 -rotate-90" viewBox="0 0 120 120">
          <circle
            cx="60"
            cy="60"
            r="54"
            fill="none"
            strokeWidth="8"
            className={dark ? 'stroke-white/10' : 'stroke-gray-200'}
          />
          <circle
            cx="60"
            cy="60"
            r="54"
            fill="none"
            strokeWidth="8"
            strokeLinecap="round"
            className={strokeColor}
            strokeDasharray={circumference}
            strokeDashoffset={offset}
          />
        </svg>
        <span className={`absolute text-3xl font-bold ${color}`}>{score}</span>
      </div>
      <p className={`text-sm font-medium ${dark ? 'text-gray-500' : 'text-gray-500'}`}>ATS Score</p>
    </div>
  );
}

export default ScoreGauge;

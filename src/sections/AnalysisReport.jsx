import ScoreGauge from '../components/ScoreGauge';
import ReportList from '../components/ReportList';
import SectionLabel from '../components/SectionLabel';
import Heading from '../components/Heading';

function AnalysisReport({ report }) {
  return (
    <div className="flex w-full flex-col gap-6 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm sm:gap-8 sm:p-8">
      <div className="flex flex-col gap-2">
        <SectionLabel>Your report</SectionLabel>
        <Heading as="h3" light>ATS Analysis Results</Heading>
      </div>

      <div className="flex flex-col items-center gap-8 sm:flex-row sm:items-start">
        <ScoreGauge score={report.score} dark />
        <div className="flex flex-1 flex-col gap-6">
          <ReportList type="strengths" items={report.strengths} dark />
          <ReportList type="weaknesses" items={report.weaknesses} dark />
          <ReportList type="suggestions" items={report.suggestions} dark />
        </div>
      </div>
    </div>
  );
}

export default AnalysisReport;

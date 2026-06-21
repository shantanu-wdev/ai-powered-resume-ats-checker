import Container from '../components/Container';
import Heading from '../components/Heading';
import SectionLabel from '../components/SectionLabel';
import UploadZone from '../components/UploadZone';
import Spinner from '../components/Spinner';
import AnalysisReport from './AnalysisReport';
import Button from '../components/Button';

function Hero({ content, status, report, error, fileName, onFileSelect, onRetry }) {
  const isLoading = status === 'parsing' || status === 'analyzing';
  const loadingLabel = status === 'parsing' ? 'Extracting text from resume…' : 'Analyzing with AI…';

  return (
    <section id="hero" className="flex w-full flex-col items-center bg-slate-800">
      <Container className="flex flex-col items-center gap-8 pb-16 pt-28 sm:gap-10 sm:pb-20 sm:pt-32 md:gap-12 md:pb-24 md:pt-36 lg:pb-32">
          <div className="flex w-full flex-col items-center gap-4 text-center sm:gap-6">
            <SectionLabel>{content.label}</SectionLabel>
            <Heading as="h1" light className="max-w-5xl">
              {content.title}
            </Heading>
            <p className="max-w-2xl text-sm leading-relaxed text-gray-400 sm:text-lg">
              {content.subtitle}
            </p>
          </div>

          {isLoading ? (
            <Spinner label={loadingLabel} />
          ) : (
            <UploadZone
              onFileSelect={onFileSelect} disabled={isLoading}
              error={error && status === 'error' ? error : null} dark
            />
          )}

          {fileName && status !== 'idle' && !isLoading && (
            <p className="text-xs text-gray-600">Analyzed: {fileName}</p>
          )}

          {status === 'error' && (
            <Button variant="ghost" onClick={onRetry}>Try again</Button>
          )}

          {report && status === 'success' && <AnalysisReport report={report} />}
      </Container>
    </section>
  );
}

export default Hero;
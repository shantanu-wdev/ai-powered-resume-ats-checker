import content from './content.json';
import { useResumeAnalysis } from '../hooks/useResumeAnalysis';
import Header from '../sections/Header';
import Hero from '../sections/Hero';
import DemoVideo from '../sections/DemoVideo';
import Features from '../sections/Features';
import Benefits from '../sections/Benefits';
import About from '../sections/About';
import CtaBanner from '../sections/CtaBanner';
import Footer from '../sections/Footer';

function Home() {
  const { status, report, error, fileName, analyze, retry } = useResumeAnalysis();

  return (
    <div className="flex min-h-screen flex-col bg-surface font-sans text-white">
      <Header
        siteName={content.site.name}
        links={content.nav.links}
        cta={content.nav.cta}
      />
      <main className="flex flex-col">
        <Hero
          content={content.hero}
          status={status}
          report={report}
          error={error}
          fileName={fileName}
          onFileSelect={analyze}
          onRetry={retry}
        />
        <DemoVideo content={content.demo} />
        <Features content={content.features} />
        <Benefits content={content.benefits} />
        <About content={content.about} />
        <CtaBanner content={content.cta} />
      </main>
      <Footer
        content={content.footer}
        siteName={content.site.name}
        links={content.nav.links}
      />
    </div>
  );
}

export default Home;

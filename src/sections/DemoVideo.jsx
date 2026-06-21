import Container from '../components/Container';
import Heading from '../components/Heading';
import SectionLabel from '../components/SectionLabel';

function DemoVideo({ content }) {
  return (
    <section id="demo" className="flex w-full flex-col items-center bg-white">
      <Container className="flex flex-col gap-8 py-12 sm:gap-10 sm:py-16 md:gap-12 md:py-24">
        <div className="flex flex-col gap-4">
          <SectionLabel>{content.label}</SectionLabel>
          <Heading as="h2">{content.title}</Heading>
          <p className="max-w-2xl text-sm text-gray-500 sm:text-lg">{content.subtitle}</p>
        </div>

        {content.videoUrl ? (
          <div className="flex w-full overflow-hidden rounded-2xl border border-gray-200 bg-surface shadow-2xl" style={{ aspectRatio: '16/9' }}>
            <iframe
              src={content.videoUrl}
              title="ATS Checker demo"
              className="h-full w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        ) : (
          <div
            className="flex w-full items-center justify-center rounded-2xl border border-dashed border-gray-300 bg-gray-50"
            style={{ aspectRatio: '16/9' }}
          >
            <p className="text-sm text-gray-400">Demo video coming soon</p>
          </div>
        )}
      </Container>
    </section>
  );
}

export default DemoVideo;
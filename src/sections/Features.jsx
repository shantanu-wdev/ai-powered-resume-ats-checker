import Container from '../components/Container';
import Heading from '../components/Heading';
import SectionLabel from '../components/SectionLabel';
import FeatureCard from '../components/FeatureCard';

function Features({ content }) {
  return (
    <section id="features" className="flex w-full flex-col items-center bg-gray-100">
      <Container className="flex flex-col gap-10 py-12 sm:gap-12 sm:py-16 md:gap-16 md:py-24">
        <div className="flex flex-col gap-4">
          <SectionLabel>{content.label}</SectionLabel>
          <Heading as="h2" className="max-w-4xl">{content.title}</Heading>
          <p className="max-w-2xl text-sm text-gray-500 sm:text-lg">{content.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {content.items.map((item, i) => (
            <FeatureCard
              key={item.title}
              number={String(i + 1).padStart(2, '0')}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Features;
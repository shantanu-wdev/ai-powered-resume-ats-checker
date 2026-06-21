import { FiArrowRight } from 'react-icons/fi';
import Container from '../components/Container';
import Heading from '../components/Heading';
import SectionLabel from '../components/SectionLabel';

function Benefits({ content }) {
  return (
    <section id="benefits" className="flex w-full flex-col items-center bg-surface">
      <Container className="flex flex-col gap-10 py-12 sm:gap-12 sm:py-16 md:gap-16 md:py-24">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex flex-col gap-4 lg:max-w-2xl">
            <SectionLabel>{content.label}</SectionLabel>
            <Heading as="h2" light className="max-w-3xl">{content.title}</Heading>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-gray-400 lg:text-right">
            {content.subtitle}
          </p>
        </div>

        <div className="flex w-full flex-col">
          {content.items.map((item, i) => (
            <div
              key={item.title}
              className="group flex w-full items-start gap-4 border-t-2 border-white/10 py-6 transition-colors hover:border-primary/50 sm:gap-6 sm:py-8"
            >
              <span className="text-sm font-medium text-gray-600 transition-colors group-hover:text-primary">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div className="flex flex-1 flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <h3 className="text-lg font-semibold text-white sm:text-xl">{item.title}</h3>
                <p className="max-w-md text-sm leading-relaxed text-gray-500">{item.description}</p>
              </div>
              <FiArrowRight className="hidden h-5 w-5 shrink-0 text-gray-600 transition-colors group-hover:text-primary sm:block" />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Benefits;
import Container from '../components/Container';
import Heading from '../components/Heading';
import SectionLabel from '../components/SectionLabel';

function About({ content }) {
  return (
    <section id="about" className="flex w-full flex-col items-center bg-white">
      <Container className="flex flex-col gap-6 py-12 sm:gap-8 sm:py-16 md:py-24">
        <SectionLabel>{content.label}</SectionLabel>
        <Heading as="h2" className="max-w-4xl">{content.title}</Heading>
        <p className="max-w-3xl text-sm leading-relaxed text-gray-500 sm:text-lg">{content.body}</p>
      </Container>
    </section>
  );
}

export default About;
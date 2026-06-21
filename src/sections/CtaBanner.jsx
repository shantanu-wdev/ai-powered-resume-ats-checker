import Container from '../components/Container';
import Heading from '../components/Heading';
import Button from '../components/Button';

function CtaBanner({ content }) {
  const scrollToHero = () => {
    document.querySelector('#hero')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="flex w-full flex-col items-center border-t border-white/10 bg-surface-elevated">
      <Container className="flex flex-col items-start gap-6 py-12 sm:gap-8 sm:py-16 md:py-24">
        <Heading as="h2" light className="max-w-3xl">{content.title}</Heading>
        <p className="max-w-xl text-sm text-gray-400 sm:text-lg">{content.subtitle}</p>
        <Button variant="primary" onClick={scrollToHero}>{content.button}</Button>
      </Container>
    </section>
  );
}

export default CtaBanner;
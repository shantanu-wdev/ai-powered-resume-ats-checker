import Container from '../components/Container';

function Footer({ content, siteName, links }) {
  const scrollTo = (href) => {
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="flex w-full flex-col items-center border-t border-white/10 bg-white">
      <Container className="flex flex-col gap-10 py-12 sm:gap-12 sm:py-16">
        <div className="flex w-full flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div className="flex max-w-sm flex-col gap-4">
            <span className="text-lg font-semibold text-gray-800">{siteName}</span>
            <p className="text-sm leading-relaxed text-gray-500">{content.tagline}</p>
          </div>

          <div className="flex flex-col gap-8 sm:flex-row sm:flex-wrap sm:gap-12 md:gap-16">
            {content.columns.map((column) => (
              <div key={column.title} className="flex flex-col gap-4">
                <span className="text-xs font-medium uppercase tracking-[0.15em] text-gray-500">
                  {column.title}
                </span>
                <ul className="flex flex-col gap-3">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <button
                        type="button"
                        onClick={() => scrollTo(link.href)}
                        className="text-sm text-gray-600 transition-colors hover:text-primary"
                      >
                        {link.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex w-full flex-col gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-gray-600">{content.text}</p>
          <div className="flex flex-wrap items-center gap-4">
            {links.map((link) => (
              <button
                key={link.href}
                type="button"
                onClick={() => scrollTo(link.href)}
                className="text-sm text-gray-600 transition-colors hover:text-primary"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
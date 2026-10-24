import { useEffect } from 'react';
import type { SitePage } from '../content/site-pages';
import { Footer } from './Footer';
import { Header } from './Header';

export function InfoPage({ page }: { page: SitePage }) {
  useEffect(() => {
    document.title = `${page.title} — Gestão Pro`;
    window.scrollTo(0, 0);
  }, [page]);

  return (
    <>
      <a href="#conteudo" className="skip-link">Ir para o conteúdo</a>
      <Header />
      <main id="conteudo" className="px-5 pb-20 pt-28 lg:px-8">
        <article className="mx-auto max-w-3xl">
          <p className="text-sm font-semibold text-primary-700">Gestão Pro</p>
          <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">{page.title}</h1>
          <p className="mt-4 text-lg leading-8 text-slate-600">{page.intro}</p>
          <p className="mt-3 text-sm text-slate-500">Atualizado em 24 de outubro de 2026</p>
          <div className="mt-10 space-y-8">
            {page.sections.map((section) => (
              <section key={section.title}>
                <h2 className="font-display text-2xl font-bold text-ink">{section.title}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="mt-3 leading-7 text-slate-600">{paragraph}</p>
                ))}
                {section.items && (
                  <ul className="mt-3 list-disc space-y-2 pl-5 leading-7 text-slate-600">
                    {section.items.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                )}
              </section>
            ))}
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}

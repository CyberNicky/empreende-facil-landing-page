import { Minus, Plus } from 'lucide-react';
import { useState } from 'react';
import { SectionHeading } from './SectionHeading';

const questions = [
  {
    question: 'Preciso cadastrar um cartão para começar?',
    answer: 'Não. O plano Gratuito não exige cartão e não possui prazo de expiração. Você só faz upgrade quando precisar de mais recursos ou capacidade.',
  },
  {
    question: 'Consigo trocar de plano depois?',
    answer: 'Sim. A área de assinatura permite consultar o plano atual, acompanhar o uso e solicitar mudança de plano conforme a necessidade do negócio.',
  },
  {
    question: 'O que acontece quando chego perto de um limite?',
    answer: 'A plataforma apresenta avisos antes de o limite ser atingido. Assim, você pode organizar o uso ou escolher um plano com maior capacidade.',
  },
  {
    question: 'Relatórios avançados, exportação e backup estão em todos os planos?',
    answer: 'Não. O Starter inclui relatórios avançados, mas não permite exportar Excel/PDF nem usar backup automático. Exportação e backup são recursos do Pro.',
  },
  {
    question: 'Meus dados ficam misturados com os de outras empresas?',
    answer: 'Não. Cada conta acessa apenas os próprios registros. As regras de acesso são validadas pela API da plataforma, além das proteções da interface.',
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="duvidas" className="section-padding bg-slate-50">
      <div className="mx-auto max-w-4xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Dúvidas frequentes"
          title="Antes de começar, vale saber"
          description="Reunimos respostas diretas para ajudar você a escolher com tranquilidade."
        />

        <div className="mt-12 space-y-3" data-reveal>
          {questions.map((item, index) => {
            const isOpen = openIndex === index;
            const panelId = `faq-panel-${index}`;
            return (
              <article key={item.question} className={`rounded-2xl border bg-white transition-all ${isOpen ? 'border-primary-200 shadow-card' : 'border-slate-200'}`}>
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    className="flex w-full items-center justify-between gap-4 rounded-2xl p-5 text-left font-display text-base font-semibold text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 sm:p-6 sm:text-lg"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                  >
                    {item.question}
                    <span className={`grid h-8 w-8 shrink-0 place-items-center rounded-full ${isOpen ? 'bg-primary-500 text-white' : 'bg-slate-100 text-slate-500'}`}>
                      {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                    </span>
                  </button>
                </h3>
                {isOpen && <div id={panelId} className="px-5 pb-5 text-sm leading-7 text-slate-600 sm:px-6 sm:pb-6">{item.answer}</div>}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

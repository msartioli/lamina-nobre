import { TESTIMONIALS } from '../../constants/config'
import SectionTitle from '../ui/SectionTitle'

function QuoteIcon() {
  return (
    <svg className="h-8 w-8 text-barber-gold/30" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
    </svg>
  )
}

export default function Testimonials() {
  return (
    <section id="depoimentos" className="section-padding bg-barber-charcoal">
      <div className="mx-auto max-w-7xl">
        <div className="animate-on-scroll">
          <SectionTitle
            label="Depoimentos"
            title="O que nossos clientes dizem"
            subtitle="A experiência de quem já passou pela Barbearia Moderna."
          />
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((item, index) => (
            <blockquote
              key={item.name}
              className="animate-on-scroll flex flex-col border border-barber-slate/30 bg-barber-graphite/40 p-8"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <QuoteIcon />
              <p className="mt-4 flex-1 text-sm leading-relaxed text-barber-cream/80 md:text-base">
                &ldquo;{item.text}&rdquo;
              </p>
              <footer className="mt-6 border-t border-barber-slate/30 pt-4">
                <cite className="not-italic">
                  <span className="block text-sm font-medium text-white">{item.name}</span>
                  <span className="text-xs text-barber-muted">Cliente</span>
                </cite>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}

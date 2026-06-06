import { SERVICES } from '../../constants/config'
import SectionTitle from '../ui/SectionTitle'
import WhatsAppButton from '../ui/WhatsAppButton'

function formatPrice(value) {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
}

export default function Services() {
  return (
    <section id="servicos" className="section-padding bg-barber-black">
      <div className="mx-auto max-w-7xl">
        <div className="animate-on-scroll">
          <SectionTitle
            label="Serviços"
            title="Cuidado completo para o seu estilo"
            subtitle="Serviços pensados para quem busca qualidade, precisão e um acabamento impecável."
          />
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {SERVICES.map((service, index) => (
            <div
              key={service.name}
              className={`animate-on-scroll group relative overflow-hidden rounded-sm border p-8 transition-all duration-500 hover:-translate-y-1 ${
                service.featured
                  ? 'border-barber-gold/25 bg-gradient-to-br from-barber-graphite to-barber-charcoal shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:border-barber-gold/40 hover:shadow-[0_16px_48px_rgba(201,169,98,0.1)]'
                  : 'border-barber-slate/30 bg-barber-graphite/40 hover:border-barber-gold/20 hover:shadow-[0_12px_40px_rgba(0,0,0,0.35)]'
              }`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div
                className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-barber-gold/5 blur-2xl transition-opacity duration-500 group-hover:bg-barber-gold/10"
                aria-hidden="true"
              />

              {service.featured && (
                <span className="absolute right-4 top-4 rounded-sm border border-barber-gold/30 bg-barber-black/40 px-2 py-0.5 font-sans text-[9px] font-semibold uppercase tracking-[0.2em] text-barber-gold backdrop-blur-sm">
                  Popular
                </span>
              )}

              <h3 className="font-display text-xl font-medium tracking-wide text-white">
                {service.name}
              </h3>
              <p className="mt-5 font-sans text-3xl font-semibold text-barber-gold">
                {formatPrice(service.price)}
              </p>
              <div className="mt-6 h-px w-10 bg-gradient-to-r from-barber-gold/50 to-transparent transition-all duration-500 group-hover:w-20" />
            </div>
          ))}
        </div>

        <div className="animate-on-scroll mt-16 text-center">
          <WhatsAppButton />
        </div>
      </div>
    </section>
  )
}

import { SERVICES } from '../../constants/config'
import SectionTitle from '../ui/SectionTitle'
import WhatsAppButton from '../ui/WhatsAppButton'

function formatPrice(value) {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
}

export default function Services() {
  return (
    <section id="servicos" className="section-padding bg-barber-black">
      <div className="section-container">
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
              className={`animate-on-scroll group flex min-h-[160px] flex-col justify-between rounded-sm border p-6 transition-colors duration-300 ${
                service.featured
                  ? 'border-barber-gold/25 bg-barber-graphite'
                  : 'border-barber-slate/30 bg-barber-graphite/50 hover:border-barber-gold/20'
              }`}
              style={{ transitionDelay: `${index * 60}ms` }}
            >
              <div>
                {service.featured && (
                  <span className="mb-3 inline-block font-sans text-[9px] font-semibold uppercase tracking-[0.2em] text-barber-gold">
                    Popular
                  </span>
                )}
                <h3 className="font-display text-lg font-medium tracking-wide text-white md:text-xl">
                  {service.name}
                </h3>
              </div>
              <div>
                <p className="mt-3 font-sans text-2xl font-semibold text-barber-gold md:text-3xl">
                  {formatPrice(service.price)}
                </p>
                <div className="mt-4 h-px w-10 bg-barber-gold/40 transition-all duration-300 group-hover:w-16" />
              </div>
            </div>
          ))}
        </div>

        <div className="animate-on-scroll mt-10 text-center md:mt-12">
          <WhatsAppButton />
        </div>
      </div>
    </section>
  )
}

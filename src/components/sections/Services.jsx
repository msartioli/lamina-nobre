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

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, index) => (
            <div
              key={service.name}
              className={`animate-on-scroll group relative border p-8 transition-all duration-500 hover:border-barber-gold/40 ${
                service.featured
                  ? 'border-barber-gold/30 bg-barber-graphite'
                  : 'border-barber-slate/40 bg-barber-charcoal/50'
              }`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              {service.featured && (
                <span className="absolute right-4 top-4 text-[10px] font-medium uppercase tracking-widest text-barber-gold">
                  Popular
                </span>
              )}

              <h3 className="font-display text-xl font-medium text-white">{service.name}</h3>
              <p className="mt-4 font-display text-3xl font-semibold text-barber-gold">
                {formatPrice(service.price)}
              </p>
              <div className="mt-6 h-px w-8 bg-barber-gold/40 transition-all duration-500 group-hover:w-16" />
            </div>
          ))}
        </div>

        <div className="animate-on-scroll mt-14 text-center">
          <WhatsAppButton />
        </div>
      </div>
    </section>
  )
}

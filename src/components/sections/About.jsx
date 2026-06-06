import { ASSETS } from '../../constants/config'
import SectionTitle from '../ui/SectionTitle'

export default function About() {
  return (
    <section id="sobre" className="section-padding bg-barber-charcoal">
      <div className="mx-auto max-w-7xl">
        <div className="animate-on-scroll">
          <SectionTitle
            label="Sobre nós"
            title="Lâmina Nobre"
            subtitle="Presença, técnica e estilo em cada detalhe."
          />
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="animate-on-scroll space-y-8">
            <p className="font-sans text-base leading-relaxed text-barber-cream/85 md:text-lg md:leading-8">
              A Lâmina Nobre nasceu para transformar o cuidado masculino em uma experiência
              premium. Unimos técnica, estilo e atenção aos detalhes para entregar cortes, barba e
              acabamento com presença, conforto e personalidade.
            </p>

            <div className="grid gap-5 sm:grid-cols-3">
              {[
                { value: '10+', label: 'Anos de experiência' },
                { value: '3', label: 'Barbeiros especialistas' },
                { value: '100%', label: 'Foco no cliente' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="border border-barber-slate/50 bg-barber-graphite/50 p-6 text-center"
                >
                  <p className="font-display text-2xl font-semibold tracking-wide text-barber-gold md:text-3xl">
                    {stat.value}
                  </p>
                  <p className="mt-2 font-sans text-[11px] uppercase tracking-widebrand text-barber-muted">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="animate-on-scroll grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="overflow-hidden">
                <img
                  src={ASSETS.aboutService}
                  alt="Atendimento premium na Lâmina Nobre"
                  className="aspect-[3/4] w-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="space-y-4 pt-10">
              <div className="overflow-hidden">
                <img
                  src={ASSETS.aboutBeard}
                  alt="Serviço de barba e acabamento"
                  className="aspect-[3/4] w-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

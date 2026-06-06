import { ASSETS } from '../../constants/config'

const BULLETS = [
  'Atendimento premium',
  'Técnicas modernas',
  'Ambiente sofisticado',
]

export default function About() {
  return (
    <section id="sobre" className="section-padding overflow-hidden bg-barber-black">
      <div className="section-container">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
          <div className="animate-on-scroll flex flex-col items-center text-center lg:items-start lg:text-left">
            <span className="inline-flex items-center gap-3 font-sans text-[11px] font-semibold uppercase tracking-widebrand text-barber-gold md:text-xs">
              <span className="h-px w-8 bg-barber-gold/50" aria-hidden="true" />
              Sobre nós
            </span>

            <h2 className="mt-4 font-display text-3xl font-semibold leading-tight tracking-wide text-white md:text-4xl">
              Lâmina Nobre
            </h2>

            <p className="mt-3 max-w-lg font-sans text-base text-barber-muted md:text-lg">
              Presença, técnica e estilo em cada detalhe.
            </p>

            <p className="mt-5 max-w-lg font-sans text-base leading-relaxed text-barber-cream/80 md:text-lg">
              A Lâmina Nobre nasceu para transformar o cuidado masculino em uma experiência
              premium. Unimos técnica, estilo e atenção aos detalhes para entregar cortes, barba e
              acabamento com presença, conforto e personalidade.
            </p>

            <div className="mt-6 h-px w-16 bg-barber-gold/50" />

            <ul className="mt-6 w-full max-w-lg space-y-3">
              {BULLETS.map((item) => (
                <li
                  key={item}
                  className="flex items-center justify-center gap-3 rounded-sm border border-barber-slate/30 bg-barber-charcoal/50 px-4 py-3 font-sans text-sm text-barber-cream/85 lg:justify-start"
                >
                  <span
                    className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-barber-gold/30 text-[9px] text-barber-gold"
                    aria-hidden="true"
                  >
                    ✦
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="animate-on-scroll mx-auto w-full max-w-sm lg:mx-0 lg:max-w-none">
            <div className="relative h-[320px] sm:h-[360px] lg:h-[400px]">
              <div className="absolute left-0 top-0 z-10 w-[65%] overflow-hidden rounded-sm border border-barber-gold/20 shadow-lg">
                <img
                  src={ASSETS.aboutService}
                  alt="Atendimento premium na Lâmina Nobre"
                  className="h-full w-full object-cover object-center"
                  loading="lazy"
                />
              </div>

              <div className="absolute bottom-0 right-0 z-20 w-[50%] overflow-hidden rounded-sm border border-barber-gold/25 shadow-lg">
                <img
                  src={ASSETS.aboutBeard}
                  alt="Serviço de barba e acabamento"
                  className="h-[200px] w-full object-cover object-center sm:h-[220px] lg:h-[240px]"
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

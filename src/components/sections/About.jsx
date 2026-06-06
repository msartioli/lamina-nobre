import { ASSETS } from '../../constants/config'

const BULLETS = [
  'Atendimento premium',
  'Técnicas modernas',
  'Ambiente sofisticado',
]

export default function About() {
  return (
    <section id="sobre" className="section-padding overflow-hidden bg-barber-black">
      <div className="relative mx-auto max-w-6xl">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          <div className="animate-on-scroll flex flex-col items-center text-center lg:items-start lg:text-left">
            <span className="inline-flex items-center gap-3 font-sans text-[11px] font-semibold uppercase tracking-widebrand text-barber-gold md:text-xs">
              <span className="h-px w-8 bg-barber-gold/50" aria-hidden="true" />
              Sobre nós
            </span>

            <h2 className="mt-5 font-display text-3xl font-semibold leading-[1.15] tracking-wide text-white md:text-4xl lg:text-5xl">
              Lâmina Nobre
            </h2>

            <p className="mt-4 max-w-lg font-sans text-base text-barber-muted md:text-lg">
              Presença, técnica e estilo em cada detalhe.
            </p>

            <p className="mt-6 max-w-lg font-sans text-base leading-relaxed text-barber-cream/80 md:text-lg md:leading-8">
              A Lâmina Nobre nasceu para transformar o cuidado masculino em uma experiência
              premium. Unimos técnica, estilo e atenção aos detalhes para entregar cortes, barba e
              acabamento com presença, conforto e personalidade.
            </p>

            <div className="mt-8 h-px w-20 bg-gradient-to-r from-barber-gold/60 to-transparent" />

            <ul className="mt-8 w-full max-w-lg space-y-4">
              {BULLETS.map((item) => (
                <li
                  key={item}
                  className="flex items-center justify-center gap-4 rounded-sm border border-barber-slate/30 bg-barber-charcoal/50 px-5 py-3.5 font-sans text-sm text-barber-cream/85 transition-colors duration-300 hover:border-barber-gold/20 md:text-base lg:justify-start"
                >
                  <span
                    className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-barber-gold/30 text-[10px] text-barber-gold"
                    aria-hidden="true"
                  >
                    ✦
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="animate-on-scroll mx-auto w-full max-w-md lg:mx-0 lg:max-w-none">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-sm sm:max-w-md lg:max-w-none">
              <div
                className="absolute -inset-3 rounded-sm bg-barber-gold/5 blur-xl"
                aria-hidden="true"
              />

              <div className="absolute left-0 top-0 z-10 w-[68%] overflow-hidden rounded-sm border border-barber-gold/20 shadow-[0_24px_60px_rgba(0,0,0,0.45)]">
                <img
                  src={ASSETS.aboutService}
                  alt="Atendimento premium na Lâmina Nobre"
                  className="aspect-[3/4] w-full object-cover object-center transition-transform duration-700 hover:scale-[1.03]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-barber-black/30 to-transparent" />
              </div>

              <div className="absolute bottom-0 right-0 z-20 w-[52%] overflow-hidden rounded-sm border border-barber-gold/30 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                <img
                  src={ASSETS.aboutBeard}
                  alt="Serviço de barba e acabamento"
                  className="aspect-[3/4] w-full object-cover object-center transition-transform duration-700 hover:scale-[1.03]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-barber-black/40 to-transparent" />
              </div>

              <div className="absolute -right-2 top-1/2 z-30 hidden -translate-y-1/2 border border-barber-gold/20 bg-barber-charcoal/90 px-4 py-3 backdrop-blur-sm lg:block">
                <p className="font-display text-2xl font-semibold text-barber-gold">10+</p>
                <p className="mt-0.5 font-sans text-[10px] uppercase tracking-widebrand text-barber-muted">
                  Anos
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

import { ASSETS } from '../../constants/config'

const BULLETS = [
  'Atendimento premium',
  'Técnicas modernas',
  'Ambiente sofisticado',
]

export default function About() {
  return (
    <section id="sobre" className="section-padding overflow-hidden bg-barber-charcoal">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          <div className="animate-on-scroll flex flex-col items-center text-center lg:items-start lg:text-left">
            <span className="font-sans text-[11px] font-semibold uppercase tracking-widebrand text-barber-gold md:text-xs">
              Sobre nós
            </span>

            <h2 className="mt-4 font-display text-3xl font-semibold leading-[1.2] tracking-wide text-white md:text-4xl lg:text-5xl">
              Lâmina Nobre
            </h2>

            <p className="mt-4 max-w-lg font-sans text-base text-barber-muted md:text-lg">
              Presença, técnica e estilo em cada detalhe.
            </p>

            <p className="mt-6 max-w-lg font-sans text-base leading-relaxed text-barber-cream/85 md:text-lg md:leading-8">
              A Lâmina Nobre nasceu para transformar o cuidado masculino em uma experiência
              premium. Unimos técnica, estilo e atenção aos detalhes para entregar cortes, barba e
              acabamento com presença, conforto e personalidade.
            </p>

            <div className="mt-8 h-px w-16 bg-barber-gold/60" />

            <ul className="mt-8 space-y-3">
              {BULLETS.map((item) => (
                <li
                  key={item}
                  className="flex items-center justify-center gap-3 font-sans text-sm text-barber-cream/80 md:text-base lg:justify-start"
                >
                  <span className="h-px w-5 shrink-0 bg-barber-gold/50" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="animate-on-scroll mx-auto w-full max-w-md lg:mx-0 lg:max-w-none">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-sm sm:max-w-md lg:max-w-none">
              <div className="absolute left-0 top-0 z-10 w-[70%] overflow-hidden rounded-sm border border-barber-gold/20 shadow-[0_20px_50px_rgba(0,0,0,0.4)]">
                <img
                  src={ASSETS.aboutService}
                  alt="Atendimento premium na Lâmina Nobre"
                  className="aspect-[3/4] w-full object-cover object-center transition-transform duration-700 hover:scale-[1.02]"
                  loading="lazy"
                />
              </div>

              <div className="absolute bottom-0 right-0 z-20 w-[55%] overflow-hidden rounded-sm border border-barber-gold/25 shadow-[0_16px_40px_rgba(0,0,0,0.45)]">
                <img
                  src={ASSETS.aboutBeard}
                  alt="Serviço de barba e acabamento"
                  className="aspect-[3/4] w-full object-cover object-center transition-transform duration-700 hover:scale-[1.02]"
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

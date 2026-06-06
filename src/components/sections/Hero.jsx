import { ASSETS } from '../../constants/config'
import WhatsAppButton from '../ui/WhatsAppButton'

const HERO_STRIP = [
  {
    title: 'Serviços',
    description: 'Corte masculino, barba, acabamento',
    href: '#servicos',
  },
  {
    title: 'Galeria',
    description: 'Cortes, barba e ambiente',
    href: '#galeria',
  },
  {
    title: 'Barbeiros',
    description: 'Profissionais especializados',
    href: '#barbeiros',
  },
]

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative min-h-[85vh]">
        <div className="absolute inset-0">
          <img
            src={ASSETS.hero}
            alt=""
            aria-hidden="true"
            className="h-full w-full object-cover object-center opacity-45 lg:opacity-55"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-barber-black via-barber-black/80 to-barber-black/50 lg:to-barber-black/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-barber-black/80 via-transparent to-barber-black/30" />
        </div>

        <div className="section-container relative z-10">
          <div className="grid items-center gap-8 pb-10 pt-24 md:gap-10 md:pb-12 md:pt-28 lg:grid-cols-2 lg:gap-12">
            <div className="flex w-full flex-col items-start text-left">
              <span className="mb-4 block h-px w-12 bg-barber-gold/50" aria-hidden="true" />

              <h1 className="font-display text-4xl font-semibold leading-[1.15] tracking-wide text-white sm:text-5xl lg:text-[3.5rem]">
                <span className="block">Precisão no corte.</span>
                <span className="mt-1 block bg-gradient-to-r from-barber-gold via-barber-gold-light to-barber-gold bg-clip-text text-transparent">
                  Presença no estilo.
                </span>
              </h1>

              <p className="mt-5 max-w-lg text-left font-sans text-base leading-relaxed text-barber-cream/75 md:text-lg">
                Cortes modernos, barba alinhada e atendimento premium para homens que valorizam
                imagem, cuidado e personalidade.
              </p>

              <div className="mt-8 flex w-full flex-col items-start gap-4 sm:flex-row sm:items-center">
                <WhatsAppButton size="lg" />
                <a
                  href="#sobre"
                  className="inline-flex items-center gap-2 font-sans text-sm font-medium uppercase tracking-[0.15em] text-barber-cream/60 transition-colors hover:text-barber-gold"
                >
                  Conheça a barbearia
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="mx-auto w-full max-w-sm lg:mx-0 lg:max-w-md">
              <div className="overflow-hidden rounded-sm border border-barber-gold/25 shadow-[0_16px_40px_rgba(0,0,0,0.4)]">
                <img
                  src={ASSETS.gallery[1]}
                  alt="Corte degradê masculino na Lâmina Nobre"
                  className="aspect-[4/5] w-full object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-barber-gold/10 bg-barber-charcoal">
        <div className="section-container grid divide-y divide-barber-slate/40 md:grid-cols-3 md:divide-x md:divide-y-0">
          {HERO_STRIP.map((item) => (
            <a
              key={item.title}
              href={item.href}
              className="group flex flex-col gap-1.5 px-2 py-6 transition-colors duration-300 hover:bg-barber-graphite/40 md:px-6 md:py-7"
            >
              <span className="font-display text-base font-medium tracking-wide text-white transition-colors group-hover:text-barber-gold md:text-lg">
                {item.title}
              </span>
              <span className="font-sans text-sm text-barber-muted">{item.description}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

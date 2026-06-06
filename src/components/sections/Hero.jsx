import { ASSETS, SITE_TAGLINE } from '../../constants/config'
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
      <div className="relative min-h-[100svh] lg:min-h-screen">
        {/* Background ambiente — sutil */}
        <div className="absolute inset-0">
          <img
            src={ASSETS.hero}
            alt=""
            aria-hidden="true"
            className="h-full w-full object-cover object-center opacity-40 lg:opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-barber-black via-barber-black/85 to-barber-black/60 lg:from-barber-black lg:via-barber-black/80 lg:to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-barber-black via-transparent to-barber-black/40" />
        </div>

        {/* Glow dourado decorativo */}
        <div
          className="pointer-events-none absolute right-0 top-1/4 hidden h-[500px] w-[500px] rounded-full bg-barber-gold/5 blur-[120px] lg:block"
          aria-hidden="true"
        />

        <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col px-5 pb-8 pt-28 md:px-8 lg:min-h-screen lg:flex-row lg:items-center lg:gap-12 lg:px-12 lg:pb-0 lg:pt-24">
          {/* Coluna texto */}
          <div className="flex flex-1 flex-col justify-center lg:max-w-xl lg:py-20 xl:max-w-2xl">
            <span className="mb-6 inline-flex w-fit items-center gap-3 font-sans text-[10px] font-semibold uppercase tracking-[0.3em] text-barber-gold animate-fade-in md:text-xs">
              <span className="h-px w-8 bg-barber-gold/50" aria-hidden="true" />
              {SITE_TAGLINE}
              <span className="hidden sm:inline">&middot; São Paulo</span>
            </span>

            <h1 className="font-display text-4xl font-semibold leading-[1.1] tracking-wide text-white animate-fade-in-up sm:text-5xl md:text-[3.25rem] lg:text-6xl xl:text-[4rem]">
              Precisão no corte.
              <br />
              <span className="bg-gradient-to-r from-barber-gold via-barber-gold-light to-barber-gold bg-clip-text text-transparent">
                Presença no estilo.
              </span>
            </h1>

            <p className="mt-7 max-w-lg font-sans text-base font-normal leading-relaxed text-barber-cream/70 animate-fade-in-up [animation-delay:200ms] md:text-lg md:leading-8">
              Cortes modernos, barba alinhada e atendimento premium para homens que valorizam
              imagem, cuidado e personalidade.
            </p>

            <div className="mt-10 flex animate-fade-in-up flex-col gap-4 [animation-delay:400ms] sm:flex-row sm:items-center">
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

          {/* Coluna imagem destaque */}
          <div className="relative mt-10 flex flex-1 items-center justify-center lg:mt-0 lg:justify-end">
            <div className="relative w-full max-w-md lg:max-w-lg xl:max-w-xl">
              <div
                className="absolute -inset-4 rounded-sm bg-gradient-to-br from-barber-gold/20 via-transparent to-barber-gold/5 blur-2xl"
                aria-hidden="true"
              />
              <div className="gold-glow relative overflow-hidden rounded-sm border border-barber-gold/25">
                <img
                  src={ASSETS.gallery[1]}
                  alt="Corte degradê masculino na Lâmina Nobre"
                  className="aspect-[4/5] w-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-barber-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 border-t border-barber-gold/20 bg-barber-black/50 px-5 py-4 backdrop-blur-sm">
                  <p className="font-display text-sm tracking-wide text-white">
                    Experiência premium
                  </p>
                  <p className="mt-0.5 font-sans text-xs text-barber-muted">
                    Corte, barba e presença visual
                  </p>
                </div>
              </div>

              <div className="absolute -bottom-6 -left-4 hidden overflow-hidden rounded-sm border border-barber-gold/20 shadow-[0_16px_40px_rgba(0,0,0,0.5)] sm:block sm:w-36 lg:-left-8 lg:w-44">
                <img
                  src={ASSETS.aboutBeard}
                  alt="Acabamento de barba profissional"
                  className="aspect-square w-full object-cover object-center"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Faixa premium inferior */}
      <div className="relative z-20 border-t border-barber-gold/10 bg-barber-charcoal">
        <div className="mx-auto grid max-w-7xl divide-y divide-barber-slate/40 md:grid-cols-3 md:divide-x md:divide-y-0">
          {HERO_STRIP.map((item) => (
            <a
              key={item.title}
              href={item.href}
              className="group flex flex-col gap-2 px-6 py-8 transition-colors duration-300 hover:bg-barber-graphite/50 md:px-8 md:py-10"
            >
              <span className="font-display text-lg font-medium tracking-wide text-white transition-colors group-hover:text-barber-gold md:text-xl">
                {item.title}
              </span>
              <span className="font-sans text-sm text-barber-muted">{item.description}</span>
              <span className="mt-2 h-px w-0 bg-barber-gold/50 transition-all duration-500 group-hover:w-12" />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

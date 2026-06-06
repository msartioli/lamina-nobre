import { ASSETS, SITE_TAGLINE } from '../../constants/config'
import WhatsAppButton from '../ui/WhatsAppButton'

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={ASSETS.hero}
          alt="Interior premium da Lâmina Nobre"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-barber-black/85 via-barber-black/70 to-barber-black/95" />
        <div className="absolute inset-0 bg-barber-black/25" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-5 py-36 text-center md:px-8">
        <span className="mb-8 inline-block font-sans text-[11px] font-medium uppercase tracking-widebrand text-barber-gold animate-fade-in md:text-xs">
          {SITE_TAGLINE} &middot; São Paulo
        </span>

        <h1 className="font-display text-4xl font-semibold leading-[1.15] tracking-wide text-white animate-fade-in-up sm:text-5xl md:text-6xl lg:text-[4.25rem]">
          Precisão no corte.
          <br />
          <span className="text-barber-gold">Presença no estilo.</span>
        </h1>

        <p className="mx-auto mt-8 max-w-2xl font-sans text-base font-normal leading-relaxed text-barber-cream/75 animate-fade-in-up [animation-delay:200ms] md:text-lg md:leading-8">
          Cortes modernos, barba alinhada e atendimento premium para homens que valorizam imagem,
          cuidado e personalidade.
        </p>

        <div className="mt-12 animate-fade-in-up [animation-delay:400ms]">
          <WhatsAppButton size="lg" />
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#sobre" aria-label="Rolar para a seção sobre" className="text-barber-gold/50">
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
          </svg>
        </a>
      </div>
    </section>
  )
}

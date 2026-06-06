import { ASSETS } from '../../constants/config'
import WhatsAppButton from '../ui/WhatsAppButton'

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={ASSETS.hero}
          alt="Interior premium da Barbearia Moderna"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-barber-black/80 via-barber-black/70 to-barber-black/90" />
        <div className="absolute inset-0 bg-barber-black/30" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-5 py-32 text-center md:px-8">
        <span className="mb-6 inline-block text-xs font-medium uppercase tracking-[0.3em] text-barber-gold animate-fade-in">
          São Paulo &middot; Atendimento premium
        </span>

        <h1 className="font-display text-4xl font-semibold leading-tight text-white animate-fade-in-up sm:text-5xl md:text-6xl lg:text-7xl">
          Seu estilo começa com um bom corte.
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-barber-cream/80 animate-fade-in-up [animation-delay:200ms] md:text-lg">
          Cortes modernos, barba alinhada e atendimento premium para quem valoriza estilo e
          cuidado.
        </p>

        <div className="mt-10 animate-fade-in-up [animation-delay:400ms]">
          <WhatsAppButton size="lg" />
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#sobre" aria-label="Rolar para a seção sobre" className="text-barber-gold/60">
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
          </svg>
        </a>
      </div>
    </section>
  )
}

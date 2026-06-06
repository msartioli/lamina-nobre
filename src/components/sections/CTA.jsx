import { ASSETS } from '../../constants/config'
import WhatsAppButton from '../ui/WhatsAppButton'

export default function CTA() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={ASSETS.ctaBg}
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-barber-black/90 via-barber-black/80 to-barber-black/70" />
        <div className="absolute inset-0 bg-barber-black/30" />
      </div>

      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-barber-gold/5 blur-[100px]"
        aria-hidden="true"
      />

      <div className="section-padding relative z-10 mx-auto max-w-3xl text-center">
        <div className="animate-on-scroll">
          <span className="inline-flex items-center gap-3 font-sans text-[11px] font-semibold uppercase tracking-widebrand text-barber-gold md:text-xs">
            <span className="h-px w-8 bg-barber-gold/50" aria-hidden="true" />
            Agende agora
            <span className="h-px w-8 bg-barber-gold/50" aria-hidden="true" />
          </span>

          <h2 className="mt-6 font-display text-3xl font-semibold leading-[1.15] tracking-wide text-white md:text-4xl lg:text-5xl xl:text-[3.5rem]">
            Pronto para elevar seu estilo?
          </h2>

          <p className="mx-auto mt-6 max-w-xl font-sans text-base leading-relaxed text-barber-cream/75 md:text-lg md:leading-8">
            Reserve seu horário e venha viver a experiência Lâmina Nobre. Atendimento
            personalizado, ambiente premium e resultado que faz diferença.
          </p>

          <div className="mt-10">
            <WhatsAppButton size="lg" />
          </div>
        </div>
      </div>
    </section>
  )
}

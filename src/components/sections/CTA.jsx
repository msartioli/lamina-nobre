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
        <div className="absolute inset-0 bg-barber-black/80" />
      </div>

      <div className="section-container relative z-10 py-16 text-center md:py-20">
        <div className="animate-on-scroll mx-auto max-w-2xl">
          <span className="font-sans text-[11px] font-semibold uppercase tracking-widebrand text-barber-gold md:text-xs">
            Agende agora
          </span>

          <h2 className="mt-4 font-display text-3xl font-semibold leading-tight tracking-wide text-white md:text-4xl">
            Pronto para elevar seu estilo?
          </h2>

          <p className="mx-auto mt-4 max-w-xl font-sans text-base leading-relaxed text-barber-cream/75">
            Reserve seu horário e venha viver a experiência Lâmina Nobre. Atendimento
            personalizado, ambiente premium e resultado que faz diferença.
          </p>

          <div className="mt-8">
            <WhatsAppButton size="lg" />
          </div>
        </div>
      </div>
    </section>
  )
}

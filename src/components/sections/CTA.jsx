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
        <div className="absolute inset-0 bg-barber-black/75" />
      </div>

      <div className="section-padding relative z-10 mx-auto max-w-3xl text-center">
        <div className="animate-on-scroll">
          <span className="font-sans text-[11px] font-semibold uppercase tracking-widebrand text-barber-gold md:text-xs">
            Agende agora
          </span>
          <h2 className="mt-5 font-display text-3xl font-semibold tracking-wide text-white md:text-4xl lg:text-5xl">
            Pronto para elevar o seu estilo?
          </h2>
          <p className="mx-auto mt-6 max-w-xl font-sans text-base leading-relaxed text-barber-cream/80 md:text-lg md:leading-8">
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

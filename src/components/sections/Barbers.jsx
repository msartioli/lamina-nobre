import { BARBERS } from '../../constants/config'
import SectionTitle from '../ui/SectionTitle'

export default function Barbers() {
  return (
    <section id="barbeiros" className="section-padding bg-barber-black">
      <div className="section-container">
        <div className="animate-on-scroll">
          <SectionTitle
            label="Equipe"
            title="Nossos barbeiros"
            subtitle="Profissionais experientes, cada um com sua especialidade e olhar para o detalhe."
          />
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {BARBERS.map((barber, index) => (
            <article
              key={barber.name}
              className="animate-on-scroll group"
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div className="premium-card relative overflow-hidden rounded-sm">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img
                    src={barber.image}
                    alt={barber.name}
                    className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-barber-black via-barber-black/10 to-transparent" />
                </div>

                <div className="absolute inset-x-0 bottom-0 p-5">
                  <div className="mb-2 h-px w-8 bg-barber-gold/50" />
                  <h3 className="font-display text-lg font-semibold tracking-wide text-white md:text-xl">
                    {barber.name}
                  </h3>
                  <p className="mt-1 font-sans text-xs font-medium uppercase tracking-[0.15em] text-barber-gold/90">
                    {barber.role}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

import { BARBERS } from '../../constants/config'
import SectionTitle from '../ui/SectionTitle'

export default function Barbers() {
  return (
    <section id="barbeiros" className="section-padding bg-barber-black">
      <div className="mx-auto max-w-7xl">
        <div className="animate-on-scroll">
          <SectionTitle
            label="Equipe"
            title="Nossos barbeiros"
            subtitle="Profissionais experientes, cada um com sua especialidade e olhar para o detalhe."
          />
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {BARBERS.map((barber, index) => (
            <article
              key={barber.name}
              className="animate-on-scroll group"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="premium-card relative overflow-hidden rounded-sm">
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={barber.image}
                    alt={barber.name}
                    className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-barber-black via-barber-black/20 to-transparent opacity-90" />
                  <div className="absolute inset-0 bg-barber-gold/0 transition-colors duration-500 group-hover:bg-barber-gold/5" />
                </div>

                <div className="absolute inset-x-0 bottom-0 p-6 md:p-7">
                  <div className="mb-3 h-px w-8 bg-barber-gold/50 transition-all duration-500 group-hover:w-14" />
                  <h3 className="font-display text-xl font-semibold tracking-wide text-white md:text-2xl">
                    {barber.name}
                  </h3>
                  <p className="mt-1.5 font-sans text-sm font-medium uppercase tracking-[0.15em] text-barber-gold/90">
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

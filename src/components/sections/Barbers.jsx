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

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {BARBERS.map((barber, index) => (
            <article
              key={barber.name}
              className="animate-on-scroll group"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden border border-barber-slate/30 bg-barber-charcoal">
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={barber.image}
                    alt={barber.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-barber-black via-transparent to-transparent opacity-80" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <h3 className="font-display text-xl font-semibold text-white">{barber.name}</h3>
                  <p className="mt-1 text-sm text-barber-gold">{barber.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

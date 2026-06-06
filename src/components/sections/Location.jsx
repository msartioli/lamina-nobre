import { ADDRESS, HOURS } from '../../constants/config'
import SectionTitle from '../ui/SectionTitle'

export default function Location() {
  const mapQuery = encodeURIComponent(ADDRESS)
  const mapSrc = `https://maps.google.com/maps?q=${mapQuery}&t=&z=15&ie=UTF8&iwloc=&output=embed`

  return (
    <section id="localizacao" className="section-padding bg-barber-black">
      <div className="mx-auto max-w-7xl">
        <div className="animate-on-scroll">
          <SectionTitle
            label="Localização"
            title="Venha nos visitar"
            subtitle="Estamos prontos para recebê-lo com conforto e atenção aos detalhes."
          />
        </div>

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="animate-on-scroll space-y-8">
            <div className="border border-barber-slate/30 bg-barber-charcoal p-8">
              <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-barber-gold">
                Endereço
              </h3>
              <p className="mt-3 text-lg text-white">{ADDRESS}</p>
            </div>

            <div className="border border-barber-slate/30 bg-barber-charcoal p-8">
              <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-barber-gold">
                Horário de funcionamento
              </h3>
              <p className="mt-3 text-lg text-white">{HOURS}</p>
            </div>
          </div>

          <div className="animate-on-scroll overflow-hidden border border-barber-slate/30">
            <iframe
              title="Localização da Barbearia Moderna"
              src={mapSrc}
              className="aspect-[4/3] w-full grayscale transition-all duration-500 hover:grayscale-0 lg:aspect-auto lg:h-full lg:min-h-[360px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

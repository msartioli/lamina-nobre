import { ASSETS } from '../../constants/config'
import SectionTitle from '../ui/SectionTitle'

const GALLERY_ITEMS = [
  { src: ASSETS.gallery[0], alt: 'Ambiente premium da barbearia' },
  { src: ASSETS.gallery[1], alt: 'Corte degradê masculino' },
  { src: ASSETS.gallery[2], alt: 'Acabamento de barba profissional' },
  { src: ASSETS.gallery[3], alt: 'Cadeira premium de barbearia' },
]

export default function Gallery() {
  return (
    <section id="galeria" className="section-padding bg-barber-charcoal">
      <div className="mx-auto max-w-7xl">
        <div className="animate-on-scroll">
          <SectionTitle
            label="Galeria"
            title="Estilo em cada detalhe"
            subtitle="Um olhar sobre o ambiente, os cortes e a experiência que entregamos."
          />
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-12 lg:gap-6">
          {GALLERY_ITEMS.map((item, index) => (
            <div
              key={item.alt}
              className={`animate-on-scroll group relative overflow-hidden rounded-sm border border-barber-slate/30 ${
                index === 0
                  ? 'sm:col-span-2 lg:col-span-7'
                  : index === 1
                    ? 'lg:col-span-5'
                    : index === 2
                      ? 'lg:col-span-5'
                      : 'sm:col-span-2 lg:col-span-7'
              }`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div
                className={`overflow-hidden ${index === 0 || index === 3 ? 'aspect-[16/9] lg:aspect-[21/9]' : 'aspect-[4/3]'}`}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-barber-black/80 via-barber-black/20 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-90" />
              <div className="absolute inset-0 bg-barber-gold/0 transition-colors duration-500 group-hover:bg-barber-gold/5" />

              <div className="absolute inset-x-0 bottom-0 translate-y-2 p-6 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <div className="mb-3 h-px w-10 bg-barber-gold/60" />
                <p className="font-display text-base tracking-wide text-white md:text-lg">
                  {item.alt}
                </p>
              </div>

              <div className="absolute left-4 top-4 rounded-sm border border-barber-gold/20 bg-barber-black/50 px-3 py-1 font-sans text-[10px] uppercase tracking-widebrand text-barber-gold/80 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-0">
                0{index + 1}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

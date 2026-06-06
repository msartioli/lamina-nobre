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
      <div className="section-container">
        <div className="animate-on-scroll">
          <SectionTitle
            label="Galeria"
            title="Estilo em cada detalhe"
            subtitle="Um olhar sobre o ambiente, os cortes e a experiência que entregamos."
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:gap-5">
          {GALLERY_ITEMS.map((item, index) => (
            <div
              key={item.alt}
              className={`animate-on-scroll group relative overflow-hidden rounded-sm border border-barber-slate/30 ${
                index === 0 ? 'sm:col-span-2' : ''
              }`}
              style={{ transitionDelay: `${index * 60}ms` }}
            >
              <div className={`overflow-hidden ${index === 0 ? 'aspect-[21/9]' : 'aspect-[4/3]'}`}>
                <img
                  src={item.src}
                  alt={item.alt}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>

              <div className="absolute inset-0 bg-barber-black/0 transition-colors duration-300 group-hover:bg-barber-black/40" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-barber-black/80 to-transparent p-4 opacity-80 transition-opacity duration-300 group-hover:opacity-100">
                <p className="font-display text-sm tracking-wide text-white md:text-base">
                  {item.alt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

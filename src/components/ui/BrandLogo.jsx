import { SITE_TAGLINE } from '../../constants/config'

export default function BrandLogo({ size = 'md', showTagline = true }) {
  const nameSize = {
    sm: 'text-lg tracking-[0.14em]',
    md: 'text-xl md:text-2xl tracking-[0.16em]',
    lg: 'text-3xl md:text-4xl tracking-[0.18em]',
  }[size]

  const taglineSize = size === 'lg' ? 'text-xs md:text-sm' : 'text-[10px] md:text-xs'

  return (
    <div className="flex flex-col">
      <span className={`font-display font-semibold uppercase leading-none text-white ${nameSize}`}>
        Lâmina <span className="text-barber-gold">Nobre</span>
      </span>
      {showTagline && (
        <span
          className={`mt-1.5 font-sans font-medium uppercase tracking-[0.22em] text-barber-muted ${taglineSize}`}
        >
          {SITE_TAGLINE}
        </span>
      )}
    </div>
  )
}

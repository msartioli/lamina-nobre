export default function BrandLogo({ size = 'md', showTagline = true }) {
  const nameSize = {
    sm: 'text-lg tracking-[0.18em]',
    md: 'text-xl md:text-2xl tracking-[0.2em]',
    lg: 'text-3xl md:text-[2.5rem] tracking-[0.22em]',
  }[size]

  return (
    <div className="flex flex-col">
      <span
        className={`font-display font-semibold uppercase leading-none text-white ${nameSize}`}
      >
        Lâmina{' '}
        <span className="bg-gradient-to-r from-barber-gold to-barber-gold-light bg-clip-text text-transparent">
          Nobre
        </span>
      </span>
      {showTagline && (
        <span className="mt-2 h-px w-8 bg-barber-gold/40" aria-hidden="true" />
      )}
    </div>
  )
}

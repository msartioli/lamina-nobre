export default function SectionTitle({ label, title, subtitle, align = 'center' }) {
  const alignClass =
    align === 'left' ? 'text-left items-start' : 'text-center items-center'

  return (
    <div className={`mb-14 flex flex-col gap-4 ${alignClass}`}>
      {label && (
        <span className="text-xs font-medium uppercase tracking-[0.25em] text-barber-gold">
          {label}
        </span>
      )}
      <h2 className="font-display text-3xl font-semibold leading-tight text-white md:text-4xl lg:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="max-w-2xl text-base leading-relaxed text-barber-muted md:text-lg">
          {subtitle}
        </p>
      )}
      <div className={`gold-line ${align === 'left' ? 'mx-0' : ''}`} />
    </div>
  )
}

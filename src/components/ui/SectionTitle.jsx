export default function SectionTitle({ label, title, subtitle, align = 'center' }) {
  const alignClass =
    align === 'left' ? 'text-left items-start' : 'text-center items-center'

  return (
    <div className={`mb-16 flex flex-col gap-5 md:mb-20 md:gap-6 ${alignClass}`}>
      {label && (
        <span className="font-sans text-[11px] font-semibold uppercase tracking-widebrand text-barber-gold md:text-xs">
          {label}
        </span>
      )}
      <h2 className="font-display text-3xl font-semibold leading-[1.2] tracking-wide text-white md:text-4xl lg:text-5xl xl:text-[3.25rem]">
        {title}
      </h2>
      {subtitle && (
        <p className="max-w-2xl font-sans text-base font-normal leading-relaxed text-barber-muted md:text-lg md:leading-8">
          {subtitle}
        </p>
      )}
      <div className={`gold-line ${align === 'left' ? 'mx-0' : ''}`} />
    </div>
  )
}

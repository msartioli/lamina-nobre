import { ADDRESS, HOURS, NAV_LINKS, SITE_NAME, WHATSAPP_URL } from '../../constants/config'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-barber-slate/40 bg-barber-charcoal">
      <div className="section-padding mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <p className="font-display text-2xl font-semibold text-white">{SITE_NAME}</p>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-barber-muted">
              Cortes modernos, barba alinhada e atendimento premium para quem valoriza estilo e
              cuidado com a imagem.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-barber-gold">
              Navegação
            </h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-barber-muted transition-colors hover:text-barber-cream"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-barber-gold">
              Contato
            </h3>
            <ul className="space-y-3 text-sm text-barber-muted">
              <li>{ADDRESS}</li>
              <li>{HOURS}</li>
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-barber-gold transition-colors hover:text-barber-gold-light"
                >
                  Agendar pelo WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-barber-slate/30 pt-8 md:flex-row">
          <p className="text-xs text-barber-muted">
            &copy; {year} {SITE_NAME}. Todos os direitos reservados.
          </p>
          <p className="text-xs text-barber-muted/60">
            Site demonstrativo criado por{' '}
            <a
              href="https://artiolidigital.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="text-barber-muted/80 transition-colors hover:text-barber-gold"
            >
              Artioli Digital
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

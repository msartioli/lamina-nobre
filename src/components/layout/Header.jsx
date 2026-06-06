import { useEffect, useState } from 'react'
import { NAV_LINKS } from '../../constants/config'
import BrandLogo from '../ui/BrandLogo'
import WhatsAppButton from '../ui/WhatsAppButton'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 border-b transition-all duration-500 ${
        scrolled || menuOpen
          ? 'border-barber-slate/30 bg-barber-black/95 shadow-lg shadow-black/30 backdrop-blur-md'
          : 'border-transparent bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 md:px-8 lg:px-12">
        <a href="#" className="group transition-opacity hover:opacity-90">
          <BrandLogo size="md" />
        </a>

        <nav className="hidden items-center gap-10 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-[13px] font-medium uppercase tracking-widebrand text-barber-cream/75 transition-colors duration-300 after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-barber-gold after:transition-all after:duration-300 hover:text-barber-gold hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <WhatsAppButton size="sm" />
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
        >
          <span
            className={`block h-px w-6 bg-barber-gold transition-all duration-300 ${
              menuOpen ? 'translate-y-[5px] rotate-45' : ''
            }`}
          />
          <span
            className={`block h-px w-6 bg-barber-gold transition-all duration-300 ${
              menuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block h-px w-6 bg-barber-gold transition-all duration-300 ${
              menuOpen ? '-translate-y-[5px] -rotate-45' : ''
            }`}
          />
        </button>
      </div>

      <div
        className={`fixed inset-0 top-[76px] z-30 bg-barber-black/98 backdrop-blur-lg transition-all duration-500 lg:hidden ${
          menuOpen ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      >
        <nav className="flex flex-col gap-1 px-5 py-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="border-b border-barber-slate/40 py-4 font-medium uppercase tracking-widebrand text-barber-cream/90 transition-colors hover:text-barber-gold"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-8">
            <WhatsAppButton className="w-full" />
          </div>
        </nav>
      </div>
    </header>
  )
}

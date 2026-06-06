export const SITE_NAME = 'Lâmina Nobre'
export const SITE_TAGLINE = 'Barbearia & Estilo Masculino'

export const WHATSAPP_URL =
  'https://wa.me/5511999999999?text=Olá,%20quero%20agendar%20um%20horário%20na%20Lâmina%20Nobre.'

export const ADDRESS = 'Rua Exemplo, 123 — São Paulo/SP'
export const HOURS = 'Segunda a sábado, das 09h às 20h'

export const NAV_LINKS = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Galeria', href: '#galeria' },
  { label: 'Barbeiros', href: '#barbeiros' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'Localização', href: '#localizacao' },
]

export const ASSETS = {
  hero: '/assets/barbearia-moderna/hero-barbearia-moderna.png',
  heroAlt: '/assets/barbearia-moderna/ambiente-hero-alternativo.png',
  aboutService: '/assets/barbearia-moderna/sobre-atendimento-premium.png',
  aboutBeard: '/assets/barbearia-moderna/sobre-servico-barba.png',
  gallery: [
    '/assets/barbearia-moderna/galeria-01-ambiente-premium.png',
    '/assets/barbearia-moderna/galeria-02-corte-degrade.png',
    '/assets/barbearia-moderna/galeria-03-acabamento-barba.png',
    '/assets/barbearia-moderna/galeria-04-cadeira-premium.png',
  ],
  barbers: {
    rafael: '/assets/barbearia-moderna/barbeiro-rafael-costa.png',
    bruno: '/assets/barbearia-moderna/barbeiro-bruno-lima.png',
    diego: '/assets/barbearia-moderna/barbeiro-diego-martins.png',
  },
  ctaBg: '/assets/barbearia-moderna/cta-final-bg.png',
}

export const SERVICES = [
  { name: 'Corte masculino', price: 45 },
  { name: 'Barba', price: 35 },
  { name: 'Corte + barba', price: 70, featured: true },
  { name: 'Sobrancelha', price: 20 },
  { name: 'Pigmentação', price: 50 },
  { name: 'Pacote completo', price: 95, featured: true },
]

export const BARBERS = [
  {
    name: 'Rafael Costa',
    role: 'Especialista em degradê',
    image: ASSETS.barbers.rafael,
  },
  {
    name: 'Bruno Lima',
    role: 'Barba e acabamento',
    image: ASSETS.barbers.bruno,
  },
  {
    name: 'Diego Martins',
    role: 'Cortes clássicos e modernos',
    image: ASSETS.barbers.diego,
  },
]

export const TESTIMONIALS = [
  {
    name: 'Lucas Mendes',
    text: 'Atendimento impecável. Saí com o degradê exatamente como queria e o ambiente é de outro nível.',
  },
  {
    name: 'Fernando Alves',
    text: 'Melhor barba que já fiz. Cuidado nos detalhes e profissionais que realmente entendem de estilo.',
  },
  {
    name: 'Thiago Ribeiro',
    text: 'Espaço premium, sem pressa. Você sente que está em um lugar feito para homens que valorizam a imagem.',
  },
]

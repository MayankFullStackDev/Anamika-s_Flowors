import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight, Menu, X } from 'lucide-react'

const links = [
  ['Home', '#home'],
  ['Collection', '#collection'],
  ['Price list', '#pricing'],
  ['Finishing touches', '#add-ons'],
  ['Our story', '#story'],
  ['Contact', '#contact'],
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const reducedMotion = useReducedMotion()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className={`site-header${scrolled ? ' is-scrolled' : ''}`}>
      <nav className="nav-shell" aria-label="Main navigation">
        <a className="brand-lockup" href="#home" onClick={closeMenu} aria-label="Anamika Godbole handmade ribbon flowers home">
          <span className="brand-mark" aria-hidden="true">A</span>
          <span className="brand-name">
            <span>Anamika Godbole</span>
            <small>HANDMADE RIBBON FLOWERS</small>
          </span>
        </a>

        <div className="desktop-nav">
          {links.map(([label, href]) => (
            <a key={href} className="nav-link" href={href}>{label}</a>
          ))}
        </div>

        <a className="nav-order" href="#order">
          <span>Order now</span><ArrowUpRight size={15} strokeWidth={1.7} />
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-navigation"
            className="mobile-nav"
            initial={reducedMotion ? false : { opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={reducedMotion ? undefined : { opacity: 0, height: 0 }}
            transition={{ duration: reducedMotion ? 0 : 0.25 }}
          >
            {links.map(([label, href], index) => (
              <motion.a
                key={href}
                href={href}
                onClick={closeMenu}
                initial={reducedMotion ? false : { opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: reducedMotion ? 0 : 0.2, delay: reducedMotion ? 0 : index * 0.04 }}
              >
                {label}<ArrowUpRight size={14} />
              </motion.a>
            ))}
            <a className="mobile-nav-order" href="#order" onClick={closeMenu}>Begin an order</a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

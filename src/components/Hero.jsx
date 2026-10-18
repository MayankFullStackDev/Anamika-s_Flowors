import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown, ArrowUpRight, Flower2 } from 'lucide-react'
import { useRef } from 'react'
import { bouquets } from '../data/bouquets'
import RibbonPhoto from './RibbonPhoto'

function HeroImage() {
  const firstRose = bouquets[0]
  const reducedMotion = useReducedMotion()
  const artRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: artRef,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], [14, -14])

  return (
    <motion.div ref={artRef} className="hero-art" style={reducedMotion ? undefined : { y }}>
      <div className="hero-art-frame">
        <RibbonPhoto src={firstRose.src} alt={firstRose.alt} priority />
        <div className="hero-art-shade" />
        <div className="hero-art-copy">
          <span className="image-label">HANDMADE RIBBON FLOWERS</span>
          <span className="image-caption">A keepsake,<br />made by hand.</span>
        </div>
        <span className="hero-image-index">01 <i /> 09</span>
      </div>
      <div className="hero-art-orbit" aria-hidden="true"><span><Flower2 size={22} /></span></div>
      <div className="hero-art-note"><span>01 /</span> MADE TO BE REMEMBERED</div>
    </motion.div>
  )
}

export default function Hero() {
  const reducedMotion = useReducedMotion()
  const rise = reducedMotion ? {} : {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  }

  return (
    <section className="hero section-wrap" id="home">
      <div className="hero-copy">
        <motion.div className="eyebrow" {...rise} transition={{ ...rise.transition, delay: 0.12 }}>
          <span className="eyebrow-line" /> A LITTLE ART, A LOT OF HEART
        </motion.div>
        <div className="hero-heading-wrap">
          <motion.h1
            initial={reducedMotion ? false : 'hidden'}
            animate="show"
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.13, delayChildren: 0.22 } },
            }}
          >
            {['Not Just', 'Flowers.', 'A Feeling', 'That Lasts.'].map((line, index) => (
              <motion.span
                key={line}
                className={index === 1 || index === 3 ? 'hero-heading-accent' : ''}
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
                }}
              >
                {line}
              </motion.span>
            ))}
          </motion.h1>
        </div>
        <motion.p
          className="hero-description"
          {...rise}
          transition={{ ...rise.transition, delay: 0.8 }}
        >
          Handcrafted ribbon flower bouquets, thoughtfully created to turn your most special moments into lasting memories.
        </motion.p>
        <motion.div className="hero-actions" {...rise} transition={{ ...rise.transition, delay: 0.94 }}>
          <a className="button button-primary" href="#collection">Explore the collection <ArrowUpRight size={16} /></a>
          <a className="text-link" href="#order"><span className="text-link-icon"><ArrowUpRight size={15} /></span> Order on WhatsApp</a>
        </motion.div>
        <motion.div className="hero-footnote" {...rise} transition={{ ...rise.transition, delay: 1.08 }}>
          <Flower2 size={15} strokeWidth={1.2} /> Hand-finished, with love in every petal.
        </motion.div>
      </div>
      <motion.div
        initial={reducedMotion ? false : { opacity: 0, clipPath: 'inset(8% 0 8% 0)' }}
        animate={{ opacity: 1, clipPath: 'inset(0% 0 0% 0)' }}
        transition={{ duration: 1.1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
      >
        <HeroImage />
      </motion.div>
      <a className="hero-scroll" href="#collection"><ArrowDown size={14} /> SCROLL TO DISCOVER</a>
      <span className="hero-side-label" aria-hidden="true">ANAMIKA GODBOLE — HANDMADE RIBBON FLOWERS</span>
    </section>
  )
}

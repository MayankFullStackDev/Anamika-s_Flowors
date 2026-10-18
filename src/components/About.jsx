import { motion, useReducedMotion } from 'framer-motion'
import { Flower2 } from 'lucide-react'
import { bouquets } from '../data/bouquets'
import RibbonPhoto from './RibbonPhoto'
import Reveal from './Reveal'

export default function About() {
  const reducedMotion = useReducedMotion()

  return (
    <section className="story-section section-pad" id="story">
      <div className="section-wrap story-grid">
        <Reveal className="story-image-wrap" direction="left">
          <motion.div className="story-image" whileHover={reducedMotion ? undefined : { scale: 1.015 }} transition={{ duration: 0.7 }}>
            <RibbonPhoto src={bouquets[1].src} alt={bouquets[1].alt} />
            <span className="image-label">A DETAIL FROM THE RIBBON FLOWER EDIT</span>
          </motion.div>
          <div className="story-seal"><Flower2 size={19} strokeWidth={1.2} /><span>MADE<br />WITH LOVE</span></div>
        </Reveal>
        <Reveal className="story-copy" direction="right" delay={0.12}>
          <span className="eyebrow"><span className="eyebrow-line" /> A NOTE FROM ANAMIKA</span>
          <h2 className="section-title">Crafted by hand.<br /><em>Remembered by heart.</em></h2>
          <p>Some feelings deserve more than words. Each ribbon flower is shaped petal by petal, with care for the little details and the person who will receive it.</p>
          <p>Choose your colours, add a personal touch, and let us make a keepsake that feels like yours from the very first fold to the final ribbon.</p>
          <a className="text-link story-link" href="#order"><span className="text-link-icon">↗</span> Make it personal</a>
          <div className="story-signoff"><span className="signature">Anamika</span><small>MADE WITH CARE, ALWAYS</small></div>
        </Reveal>
      </div>
    </section>
  )
}

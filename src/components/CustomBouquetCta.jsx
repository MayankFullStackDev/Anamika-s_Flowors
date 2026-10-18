import { ArrowUpRight, Flower2 } from 'lucide-react'
import Reveal from './Reveal'

export default function CustomBouquetCta() {
  return (
    <section className="custom-cta-section">
      <Reveal className="custom-cta section-wrap">
        <Flower2 className="custom-cta-flower" size={42} strokeWidth={0.8} aria-hidden="true" />
        <span className="eyebrow">A BOUQUET THAT FEELS LIKE YOU</span>
        <h2>Have something <em>special in mind?</em></h2>
        <p>Tell us your colours, occasion and little details. We’ll talk through a custom ribbon bouquet made for your moment.</p>
        <a className="button button-primary" href="#order">Create your custom bouquet <ArrowUpRight size={16} /></a>
      </Reveal>
    </section>
  )
}

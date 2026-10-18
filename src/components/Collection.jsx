import { ArrowUpRight } from 'lucide-react'
import { bouquets } from '../data/bouquets'
import ProductCard from './ProductCard'
import Reveal from './Reveal'

export default function Collection({ onSelectBouquet }) {
  return (
    <section className="collection-section section-pad" id="collection">
      <div className="section-wrap">
        <Reveal className="section-heading-row">
          <div>
            <span className="eyebrow"><span className="eyebrow-line" /> THE COLLECTION</span>
            <h2 className="section-title">A bloom for <em>every feeling.</em></h2>
          </div>
          <p className="section-intro">Every bouquet begins with a ribbon, a little patience, and the person you have in mind.</p>
        </Reveal>
        <div className="product-grid">
          {bouquets.map((bouquet, index) => (
            <ProductCard
              key={bouquet.roses}
              bouquet={bouquet}
              index={index}
              onSelect={onSelectBouquet}
            />
          ))}
        </div>
        <Reveal className="collection-note">
          <span><i /> Each piece is made to order, just for you.</span>
          <a href="#order">Find your bouquet <ArrowUpRight size={14} /></a>
        </Reveal>
      </div>
    </section>
  )
}

import { ArrowUpRight, Sparkles } from 'lucide-react'
import { bouquets } from '../data/bouquets'
import Reveal from './Reveal'

function PriceGroup({ title, subtitle, items, onSelect }) {
  return (
    <div className="price-group">
      <div className="price-group-heading">
        <div><span className="eyebrow">{subtitle}</span><h3>{title}</h3></div>
        <span className="price-group-count">{String(items.length).padStart(2, '0')} OPTIONS</span>
      </div>
      <div className="price-list">
        {items.map((bouquet) => (
          <button
            type="button"
            className="price-row"
            key={bouquet.roses}
            onClick={() => onSelect(bouquet)}
            aria-label={`Select ${bouquet.roses} roses for ₹${bouquet.price}`}
          >
            <span className="price-roses">{String(bouquet.roses).padStart(2, '0')}</span>
            <span className="price-description"><strong>{bouquet.roses} {bouquet.roses === 1 ? 'rose' : 'roses'}</strong><small>{bouquet.name}</small></span>
            <span className="price-amount">₹{bouquet.price.toLocaleString('en-IN')}</span>
            <span className="price-select-icon"><ArrowUpRight size={15} /></span>
          </button>
        ))}
      </div>
    </div>
  )
}

export default function Pricing({ onSelectBouquet }) {
  return (
    <section className="pricing-section section-pad" id="pricing">
      <div className="section-wrap">
        <Reveal className="pricing-intro">
          <div>
            <span className="eyebrow"><span className="eyebrow-line" /> THE PRICE LIST</span>
            <h2 className="section-title">Lovely things,<br /><em>clearly priced.</em></h2>
            <p className="section-intro">Choose the size that feels right. Every order is finished by hand and can be made personal with thoughtful little details.</p>
          </div>
          <div className="pricing-side-note"><Sparkles size={17} /><span>MADE BY HAND<br />PRICED WITH CARE</span></div>
        </Reveal>
        <div className="price-groups">
          <Reveal><PriceGroup title="Small bouquets" subtitle="A gentle beginning" items={bouquets.slice(0, 4)} onSelect={onSelectBouquet} /></Reveal>
          <Reveal delay={0.1}><PriceGroup title="Medium & large" subtitle="Made to make a moment" items={bouquets.slice(4)} onSelect={onSelectBouquet} /></Reveal>
        </div>
        <p className="price-disclaimer">Prices may vary depending on the type of flower and customisation.</p>
      </div>
    </section>
  )
}

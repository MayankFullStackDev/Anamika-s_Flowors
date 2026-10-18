import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import RibbonPhoto from './RibbonPhoto'

export default function ProductCard({ bouquet, index, onSelect }) {
  const reducedMotion = useReducedMotion()

  return (
    <motion.article
      className="product-card"
      initial={reducedMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.55, delay: index % 3 * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={reducedMotion ? undefined : { y: -5 }}
    >
      <button
        className="product-image"
        type="button"
        onClick={() => onSelect(bouquet)}
        aria-label={`Select ${bouquet.name}, ${bouquet.roses} roses`}
      >
        <RibbonPhoto src={bouquet.src} alt={bouquet.alt} />
        <span className="image-label product-image-label">RIBBON FLOWER REFERENCE</span>
        <span className="product-rose-count">{String(bouquet.roses).padStart(2, '0')} ROSES</span>
        <span className="product-image-action"><ArrowUpRight size={17} /></span>
      </button>
      <div className="product-details">
        <div className="product-heading">
          <div>
            <span className="product-collection-label">THE RIBBON EDIT</span>
            <h3>{bouquet.name}</h3>
            <p>{bouquet.label}</p>
          </div>
          <strong>₹{bouquet.price.toLocaleString('en-IN')}</strong>
        </div>
        <button className="product-order-link" type="button" onClick={() => onSelect(bouquet)}>
          Choose this bouquet <ArrowUpRight size={14} />
        </button>
      </div>
    </motion.article>
  )
}

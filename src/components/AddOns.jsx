import { Crown, Flower2, Gift, Heart, Sparkles } from 'lucide-react'
import { addOns } from '../data/bouquets'
import Reveal from './Reveal'

const addOnIcons = [Crown, Heart, Gift, Sparkles, Flower2]

export default function AddOns() {
  return (
    <section className="addons-section section-pad" id="add-ons">
      <div className="section-wrap">
        <Reveal className="addons-heading">
          <span className="eyebrow"><span className="eyebrow-line" /> LITTLE FINISHING TOUCHES</span>
          <h2 className="section-title">Make it <em>uniquely yours.</em></h2>
          <p className="section-intro">Add a personal detail to your bouquet. Add-on availability and pricing are confirmed with you before your order is finalized.</p>
        </Reveal>
        <div className="addon-showcase">
          {addOns.map((addOn, index) => {
            const Icon = addOnIcons[index]
            return (
              <Reveal key={addOn} delay={index * 0.06}>
                <div className="addon-showcase-card">
                  <span className="addon-showcase-icon"><Icon size={20} strokeWidth={1.2} /></span>
                  <h3>{addOn}</h3>
                  <span className="addon-price-note">Priced on request</span>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

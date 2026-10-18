import { ArrowUpRight, Camera, MessageCircle, Phone } from 'lucide-react'
import { whatsappNumber } from '../data/bouquets'
import Reveal from './Reveal'

const whatsappLink = `https://wa.me/${whatsappNumber}`

export default function Contact() {
  return (
    <section className="contact-section section-pad" id="contact">
      <div className="section-wrap">
        <Reveal className="contact-heading">
          <span className="eyebrow"><span className="eyebrow-line" /> HERE WHEN YOU’RE READY</span>
          <h2 className="section-title">Let’s make someone <em>feel loved.</em></h2>
          <p>Questions, ideas, a colour you can’t stop thinking about? We’d love to hear from you.</p>
        </Reveal>
        <div className="contact-cards">
          <Reveal delay={0}>
            <a className="contact-card" href={whatsappLink} target="_blank" rel="noreferrer">
              <span className="contact-card-icon"><MessageCircle size={19} /></span>
              <span className="contact-card-eyebrow">THE QUICKEST WAY</span>
              <strong>Say hello on WhatsApp</strong>
              <span className="contact-card-detail">+91 93220 87967</span>
              <ArrowUpRight className="contact-card-arrow" size={17} />
            </a>
          </Reveal>
          <Reveal delay={0.08}>
            <a className="contact-card" href="tel:+919322087967">
              <span className="contact-card-icon"><Phone size={18} /></span>
              <span className="contact-card-eyebrow">PREFER A CALL?</span>
              <strong>Give us a ring</strong>
              <span className="contact-card-detail">+91 93220 87967</span>
              <ArrowUpRight className="contact-card-arrow" size={17} />
            </a>
          </Reveal>
          <Reveal delay={0.16}>
            <a className="contact-card" href="https://www.instagram.com/anamikagodbole/" target="_blank" rel="noreferrer">
              <span className="contact-card-icon"><Camera size={18} /></span>
              <span className="contact-card-eyebrow">A LITTLE INSPIRATION</span>
              <strong>Follow along on Instagram</strong>
              <span className="contact-card-detail">@anamikagodbole</span>
              <ArrowUpRight className="contact-card-arrow" size={17} />
            </a>
          </Reveal>
        </div>
        <p className="contact-advance-note">A little note: please place your handmade bouquet order at least 2 days in advance.</p>
      </div>
    </section>
  )
}

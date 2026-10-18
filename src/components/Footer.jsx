import { ArrowUpRight, Camera } from 'lucide-react'
import { whatsappNumber } from '../data/bouquets'

const footerLinks = [
  ['Home', '#home'],
  ['Collection', '#collection'],
  ['Price list', '#pricing'],
  ['Finishing touches', '#add-ons'],
  ['Our story', '#story'],
  ['Contact', '#contact'],
]
const copyrightYear = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="section-wrap footer-main">
        <div className="footer-brand">
          <a className="brand-lockup" href="#home">
            <span className="brand-mark" aria-hidden="true">A</span>
            <span className="brand-name"><span>Anamika Godbole</span><small>HANDMADE RIBBON FLOWERS</small></span>
          </a>
          <p>Not just flowers.<br />A feeling that lasts.</p>
        </div>
        <div className="footer-nav">
          <span className="footer-label">FIND YOUR WAY</span>
          {footerLinks.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
        </div>
        <div className="footer-connect">
          <span className="footer-label">LET’S CONNECT</span>
          <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noreferrer">WhatsApp <ArrowUpRight size={13} /></a>
          <a href="https://www.instagram.com/anamikagodbole/" target="_blank" rel="noreferrer"><Camera size={13} /> Instagram <ArrowUpRight size={13} /></a>
        </div>
        <a className="back-top" href="#home" aria-label="Back to top">↑</a>
      </div>
      <div className="section-wrap footer-bottom">
        <span>© {copyrightYear} Anamika Godbole</span>
        <span>MADE WITH CARE, IN EVERY PETAL <i>✳</i></span>
      </div>
    </footer>
  )
}

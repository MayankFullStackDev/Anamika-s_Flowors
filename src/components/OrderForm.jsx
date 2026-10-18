import { useMemo, useState } from 'react'
import { ArrowUpRight, Check, MessageCircle, Minus, Plus } from 'lucide-react'
import { addOns, bouquets, whatsappNumber } from '../data/bouquets'
import Reveal from './Reveal'

const initialForm = {
  name: '',
  phone: '',
  quantity: 1,
  occasion: '',
  colours: '',
  banner: '',
  instructions: '',
}

export default function OrderForm({ selectedBouquet, onSelectBouquet }) {
  const [form, setForm] = useState(initialForm)
  const [selectedAddOns, setSelectedAddOns] = useState([])
  const [errors, setErrors] = useState({})
  const [attemptedSubmit, setAttemptedSubmit] = useState(false)

  const activeRoses = selectedBouquet?.roses
  const bouquet = bouquets.find((item) => item.roses === activeRoses)
  const subtotal = useMemo(
    () => (bouquet ? bouquet.price * form.quantity : 0),
    [bouquet, form.quantity],
  )

  const update = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
    setErrors((current) => ({ ...current, [name]: '' }))
  }

  const chooseBouquet = (event) => {
    const nextBouquet = bouquets.find((item) => item.roses === Number(event.target.value))
    if (nextBouquet) onSelectBouquet(nextBouquet)
    setErrors((current) => ({ ...current, bouquetRoses: '' }))
  }

  const toggleAddOn = (addOn) => {
    setSelectedAddOns((current) => (
      current.includes(addOn)
        ? current.filter((item) => item !== addOn)
        : [...current, addOn]
    ))
  }

  const validate = () => {
    const nextErrors = {}
    if (!form.name.trim()) nextErrors.name = 'Please enter your name.'
    const phoneDigits = form.phone.replace(/\D/g, '')
    if (!phoneDigits) nextErrors.phone = 'Please enter a contact number.'
    else if (phoneDigits.length < 10 || phoneDigits.length > 15) {
      nextErrors.phone = 'Please enter a valid number with 10 to 15 digits.'
    }
    if (!activeRoses) nextErrors.bouquetRoses = 'Please choose a bouquet size.'
    return nextErrors
  }

  const submit = (event) => {
    event.preventDefault()
    setAttemptedSubmit(true)
    const nextErrors = validate()
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length) return

    const message = [
      'Hello Anamika! I would love to enquire about a handmade ribbon bouquet.',
      '',
      `Name: ${form.name.trim()}`,
      `Phone: ${form.phone.trim()}`,
      `Bouquet: ${bouquet.roses} ${bouquet.roses === 1 ? 'rose' : 'roses'} — ${bouquet.name}`,
      `Quantity: ${form.quantity}`,
      `Estimated bouquet subtotal: ₹${subtotal.toLocaleString('en-IN')}`,
      `Add-ons: ${selectedAddOns.length ? selectedAddOns.join(', ') : 'None'}`,
      `Occasion: ${form.occasion || 'Not specified'}`,
      `Preferred ribbon colours: ${form.colours.trim() || 'Not specified'}`,
      `Custom banner text: ${form.banner.trim() || 'None'}`,
      `Additional instructions: ${form.instructions.trim() || 'None'}`,
      '',
      'Please confirm availability, add-on charges and the final price.',
    ].join('\n')
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
  }

  return (
    <section className="order-section section-pad" id="order">
      <div className="section-wrap">
        <Reveal className="order-heading">
          <span className="eyebrow"><span className="eyebrow-line" /> YOUR MOMENT, YOUR WAY</span>
          <h2 className="section-title">Tell us what you’re <em>dreaming of.</em></h2>
          <p>Share a few details and we’ll help bring your bouquet to life.</p>
        </Reveal>
        <div className="order-layout">
          <Reveal className="order-aside" direction="left">
            <span className="order-aside-number">01 <i /> 02</span>
            <h3>A thoughtful gift<br />starts <em>right here.</em></h3>
            <p>Choose a bouquet and the little details that make it yours. We’ll confirm your request and final price with you on WhatsApp.</p>
            <div className="order-summary">
              <div className="summary-top"><span>YOUR SELECTION</span><span className="summary-flower">✳</span></div>
              <p>{bouquet ? `${bouquet.roses} ${bouquet.roses === 1 ? 'rose' : 'roses'} · ${bouquet.name}` : 'Choose your bouquet to begin'}</p>
              <div className="summary-bottom"><span>ESTIMATED SUBTOTAL</span><strong>₹{subtotal.toLocaleString('en-IN')}</strong></div>
              <small>Excludes any add-on charges. Final price to be confirmed.</small>
            </div>
            <div className="order-note"><MessageCircle size={16} /><span>We’ll continue the conversation on WhatsApp.</span></div>
          </Reveal>

          <Reveal className="order-form-wrap" direction="right" delay={0.1}>
            <form className="order-form" onSubmit={submit} noValidate>
              <div className="form-section-title"><span>01</span><h3>Your details</h3><i /></div>
              <div className="form-grid">
                <label className="form-field">
                  <span>Your name <b>*</b></span>
                  <input name="name" value={form.name} onChange={update} autoComplete="name" placeholder="How should we address you?" aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? 'name-error' : undefined} />
                  {errors.name && <small className="field-error" id="name-error">{errors.name}</small>}
                </label>
                <label className="form-field">
                  <span>Phone number <b>*</b></span>
                  <input name="phone" type="tel" value={form.phone} onChange={update} autoComplete="tel" inputMode="tel" placeholder="+91 00000 00000" aria-invalid={Boolean(errors.phone)} aria-describedby={errors.phone ? 'phone-error' : undefined} />
                  {errors.phone && <small className="field-error" id="phone-error">{errors.phone}</small>}
                </label>
              </div>

              <div className="form-section-title"><span>02</span><h3>Your bouquet</h3><i /></div>
              <div className="form-grid bouquet-quantity-row">
                <label className="form-field">
                  <span>Bouquet size <b>*</b></span>
                  <select name="bouquetRoses" value={activeRoses || ''} onChange={chooseBouquet} aria-invalid={Boolean(errors.bouquetRoses)} aria-describedby={errors.bouquetRoses ? 'bouquet-error' : undefined}>
                    <option value="">Choose a bouquet</option>
                    {bouquets.map((item) => (
                      <option key={item.roses} value={item.roses}>{item.roses} {item.roses === 1 ? 'rose' : 'roses'} — ₹{item.price.toLocaleString('en-IN')}</option>
                    ))}
                  </select>
                  {errors.bouquetRoses && <small className="field-error" id="bouquet-error">{errors.bouquetRoses}</small>}
                </label>
                <div className="form-field">
                  <span>Quantity</span>
                  <div className="quantity-control" aria-label="Bouquet quantity">
                    <button type="button" aria-label="Decrease quantity" onClick={() => setForm((current) => ({ ...current, quantity: Math.max(1, current.quantity - 1) }))}><Minus size={14} /></button>
                    <output>{form.quantity}</output>
                    <button type="button" aria-label="Increase quantity" onClick={() => setForm((current) => ({ ...current, quantity: Math.min(20, current.quantity + 1) }))}><Plus size={14} /></button>
                  </div>
                </div>
              </div>

              <fieldset className="addon-fieldset">
                <legend>Add a little extra <small>— final cost confirmed by seller</small></legend>
                <div className="addon-options">
                  {addOns.map((addOn) => {
                    const checked = selectedAddOns.includes(addOn)
                    return (
                      <button
                        className={`addon-chip${checked ? ' is-selected' : ''}`}
                        type="button"
                        key={addOn}
                        aria-pressed={checked}
                        onClick={() => toggleAddOn(addOn)}
                      >
                        <span className="addon-check">{checked && <Check size={12} />}</span>{addOn}
                      </button>
                    )
                  })}
                </div>
              </fieldset>

              <div className="form-section-title"><span>03</span><h3>Make it personal</h3><i /></div>
              <div className="form-grid">
                <label className="form-field">
                  <span>What’s the occasion?</span>
                  <input name="occasion" value={form.occasion} onChange={update} placeholder="Birthday, anniversary, just because…" />
                </label>
                <label className="form-field">
                  <span>Preferred ribbon colours</span>
                  <input name="colours" value={form.colours} onChange={update} placeholder="e.g. ivory, burgundy, soft blue" />
                </label>
              </div>
              <label className="form-field">
                <span>Custom banner text <small>optional</small></span>
                <input name="banner" value={form.banner} onChange={update} maxLength={80} placeholder="A little message for your bouquet" />
              </label>
              <label className="form-field">
                <span>Anything else we should know? <small>optional</small></span>
                <textarea name="instructions" rows="3" value={form.instructions} onChange={update} placeholder="Share any special details or instructions…" />
              </label>

              {attemptedSubmit && Object.keys(errors).length > 0 && (
                <p className="form-error-summary" role="alert">Please check the highlighted fields above before continuing.</p>
              )}
              <button className="button button-primary order-submit" type="submit">
                Send enquiry on WhatsApp <ArrowUpRight size={16} />
              </button>
              <p className="order-disclaimer">Please place your handmade bouquet order at least 2 days in advance. Your order, add-on charges and final price will be confirmed through WhatsApp.</p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

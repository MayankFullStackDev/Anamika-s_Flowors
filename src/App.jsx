import { useState } from 'react'
import About from './components/About'
import AddOns from './components/AddOns'
import Collection from './components/Collection'
import Contact from './components/Contact'
import CustomBouquetCta from './components/CustomBouquetCta'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import OrderForm from './components/OrderForm'
import Pricing from './components/Pricing'
import { bouquets } from './data/bouquets'
import './App.css'

function App() {
  const [selectedBouquet, setSelectedBouquet] = useState(null)

  const selectBouquet = (bouquet) => {
    const validBouquet = bouquets.find((item) => item.roses === bouquet.roses)
    if (!validBouquet) return
    setSelectedBouquet({ ...validBouquet })
    window.setTimeout(() => {
      document.getElementById('order')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 0)
  }

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <div className="craft-strip" aria-label="Handcrafted, personal and made to last">
          <div className="section-wrap craft-strip-inner">
            <span>HANDCRAFTED</span><i />
            <span>MADE PERSONAL</span><i />
            <span>MADE TO LAST</span><i />
            <span>GIFTED WITH LOVE</span>
          </div>
        </div>
        <Collection onSelectBouquet={selectBouquet} />
        <Pricing onSelectBouquet={selectBouquet} />
        <AddOns />
        <About />
        <OrderForm selectedBouquet={selectedBouquet} onSelectBouquet={setSelectedBouquet} />
        <CustomBouquetCta />
        <Contact />
      </main>
      <Footer />
      <a className="mobile-order-bar" href="#order"><span>Ready to make it personal?</span><strong>Begin an order <span>↗</span></strong></a>
    </>
  )
}

export default App

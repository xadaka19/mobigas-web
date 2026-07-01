import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HelmetProvider, Helmet } from 'react-helmet-async'
import Nav from './components/Nav'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import ForVendors from './components/ForVendors'
import WhyMobiGas from './components/WhyMobiGas'
import Stats from './components/Stats'
import Download from './components/Download'
import Footer from './components/Footer'
import ChatBot from './components/ChatBot'
import LegalPage from './pages/LegalPage'
import FaqPage from './pages/FaqPage'
import AreasPage from './pages/AreasPage'
import CountyPage from './pages/CountyPage'
import VendorAreasPage from './pages/VendorAreasPage'
import BuyGasOnCreditPage from './pages/BuyGasOnCreditPage'
import GasVendorLoanPage from './pages/GasVendorLoanPage'
import GasPricesPage from './pages/GasPricesPage'
import SameDayDeliveryPage from './pages/SameDayDeliveryPage'
import TrustPage from './pages/TrustPage'
import GasLoanAppsPage from './pages/GasLoanAppsPage'
import GasBrandsPage from './pages/GasBrandsPage'
import HowToGetGasCreditPage from './pages/HowToGetGasCreditPage'
import VendorRegistrationPage from './pages/VendorRegistrationPage'
import NairobiPage from './pages/cities/NairobiPage'
import MombasaPage from './pages/cities/MombasaPage'
import KisumuPage from './pages/cities/KisumuPage'
import NakuruPage from './pages/cities/NakuruPage'
import EldoretPage from './pages/cities/EldoretPage'
import KiambuPage from './pages/cities/KiambuPage'
import ThikaPage from './pages/cities/ThikaPage'
import GasDeliveryAppPage from './pages/GasDeliveryAppPage'
import LpgGasDeliveryPage from './pages/LpgGasDeliveryPage'
import EmergencyGasPage from './pages/EmergencyGasPage'
import MpesaGasPage from './pages/MpesaGasPage'
import BusinessGasPage from './pages/BusinessGasPage'
import VendorCountyPage from './pages/VendorCountyPage'

function Home() {
  return (
    <>
      <Helmet>
        <title>MobiGas - Gas on Credit Kenya | Cooking Gas Delivery, Pay Later via M-Pesa</title>
        <meta name="description" content="Order cooking gas on credit in Kenya. MobiGas delivers LPG gas in 10-40 minutes - pay your partner bank within 30 days via M-Pesa. No cash needed upfront." />
        <script type="application/ld+json">{`{"@context":"https://schema.org","@type":"Organization","name":"MobiGas","url":"https://mobigas.co.ke","logo":"https://mobigas.co.ke/favicon.svg","description":"Kenya's first gas-on-credit delivery platform. Order cooking gas now, pay within 30 days via M-Pesa.","email":"hello@mobigas.co.ke","areaServed":"KE","sameAs":[]}`}</script>
      </Helmet>
      <Nav />
      <Hero />
      <Stats />
      <HowItWorks />
      <WhyMobiGas />
      <ForVendors />
      <Download />
      <Footer />
      <ChatBot />
    </>
  )
}

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/terms" element={<LegalPage type="terms" />} />
        <Route path="/privacy" element={<LegalPage type="privacy" />} />
        <Route path="/data-protection" element={<LegalPage type="data" />} />
        <Route path="/odpc" element={<LegalPage type="odpc" />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/areas" element={<AreasPage />} />
        <Route path="/areas/:slug" element={<CountyPage />} />
        <Route path="/vendors" element={<VendorAreasPage />} />
        <Route path="/vendors/:slug" element={<VendorCountyPage />} />
        <Route path="/buy-gas-on-credit" element={<BuyGasOnCreditPage />} />
        <Route path="/gas-vendor-loan" element={<GasVendorLoanPage />} />
        <Route path="/cooking-gas-prices-kenya" element={<GasPricesPage />} />
        <Route path="/gas-delivery-same-day" element={<SameDayDeliveryPage />} />
        <Route path="/is-mobigas-safe" element={<TrustPage />} />
        <Route path="/gas-delivery-for-business" element={<BusinessGasPage />} />
        <Route path="/gas-loan-apps-kenya" element={<GasLoanAppsPage />} />
        <Route path="/cooking-gas-brands-kenya" element={<GasBrandsPage />} />
        <Route path="/how-to-get-gas-on-credit" element={<HowToGetGasCreditPage />} />
        <Route path="/gas-vendor-registration-kenya" element={<VendorRegistrationPage />} />
        <Route path="/gas-delivery-nairobi" element={<NairobiPage />} />
        <Route path="/gas-delivery-mombasa" element={<MombasaPage />} />
        <Route path="/gas-delivery-kisumu" element={<KisumuPage />} />
        <Route path="/gas-delivery-nakuru" element={<NakuruPage />} />
        <Route path="/gas-delivery-eldoret" element={<EldoretPage />} />
        <Route path="/gas-delivery-kiambu" element={<KiambuPage />} />
        <Route path="/gas-delivery-thika" element={<ThikaPage />} />
        <Route path="/gas-delivery-app-kenya" element={<GasDeliveryAppPage />} />
        <Route path="/lpg-gas-delivery-kenya" element={<LpgGasDeliveryPage />} />
        <Route path="/cooking-gas-emergency-kenya" element={<EmergencyGasPage />} />
        <Route path="/mpesa-gas-payment-kenya" element={<MpesaGasPage />} />
      </Routes>
    </BrowserRouter>
    </HelmetProvider>
  )
}

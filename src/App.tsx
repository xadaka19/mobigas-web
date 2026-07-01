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
import GasNoDepositPage from './pages/GasNoDepsositPage'
import HowMobiGasWorksPage from './pages/HowMobiGasWorksPage'
import StudentsGasPage from './pages/StudentsGasPage'
import AffordableGasPage from './pages/AffordableGasPage'
import MachakosPage from './pages/cities/MachakosPage'
import MeruPage from './pages/cities/MeruPage'
import NyeriPage from './pages/cities/NyeriPage'
import KakamegaPage from './pages/cities/KakamegaPage'
import KerichoPage from './pages/cities/KerichoPage'
import EmbuPage from './pages/cities/EmbuPage'
import GarissaPage from './pages/cities/GarissaPage'
import MalindiPage from './pages/cities/MalindiPage'
import KisiiPage from './pages/cities/KisiiPage'
import BungomPage from './pages/cities/BungomPage'
import NaivhashaPage from './pages/cities/NaivhashaPage'
import KapsabetPage from './pages/cities/KapsabetPage'
import MumiastPage from './pages/cities/MumiastPage'
import VoiPage from './pages/cities/VoiPage'
import MigoriPage from './pages/cities/MigoriPage'
import HolaPage from './pages/cities/HolaPage'
import KituiPage from './pages/cities/KituiPage'
import LodwarPage from './pages/cities/LodwarPage'
import MaralalPage from './pages/cities/MaralalPage'
import KitaleePage from './pages/cities/KitaleePage'
import HombayPage from './pages/cities/HombayPage'
import KapenguriaPage from './pages/cities/KapenguriaPage'
import MarsakitPage from './pages/cities/MarsakitPage'
import WajirPage from './pages/cities/WajirPage'
import ManderaPage from './pages/cities/ManderaPage'
import IsioloPage from './pages/cities/IsioloPage'
import NanyukiPage from './pages/cities/NanyukiPage'
import NarokPage from './pages/cities/NarokPage'
import KabarnetPage from './pages/cities/KabarnetPage'
import LamuPage from './pages/cities/HolaPage2'
import ChukkaPage from './pages/cities/ChukkaPage'
import WotePage from './pages/cities/WotePage'
import OlKalouPage from './pages/cities/OlKalouPage'
import KerugoyaPage from './pages/cities/KerugoyaPage'
import BometPage from './pages/cities/BometPage'
import SiayaPage from './pages/cities/SiayaPage'
import NyamiraPage from './pages/cities/NyamiraPage'
import ItenPage from './pages/cities/MoiUniversityPage'
import RumurtiPage from './pages/cities/RumurtiPage'
import LiteinPage from './pages/cities/LiteinPage'
import WebueyePage from './pages/cities/WebueyePage'
import KanduduPage from './pages/cities/KanduduPage'
import RuiruPage from './pages/cities/RuiruPage'
import JujaPage from './pages/cities/JujaPage'
import KikuyuPage from './pages/cities/KikuyuPage'
import AtriRiverPage from './pages/cities/AtriRiverPage'
import LimuruPage from './pages/cities/LimuruPage'
import KahawePage from './pages/cities/KahawePage'
import EmbakasPage from './pages/cities/EmbakasPage'
import KabetePage from './pages/cities/KabetePage'
import DagorettiPage from './pages/cities/DagorettiPage'
import LangataPage from './pages/cities/LangataPage'
import WestlandsPage from './pages/cities/WestlandsPage'
import KilimaniPage from './pages/cities/KilimaniPage'
import KasaraniPage from './pages/cities/KasaraniPage'
import EastleighPage from './pages/cities/EastleighPage'
import KiberaPage from './pages/cities/KiberaPage'
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
        <Route path="/gas-on-credit-no-deposit" element={<GasNoDepositPage />} />
        <Route path="/how-mobigas-works" element={<HowMobiGasWorksPage />} />
        <Route path="/cooking-gas-for-students-kenya" element={<StudentsGasPage />} />
        <Route path="/affordable-gas-kenya" element={<AffordableGasPage />} />
        <Route path="/gas-delivery-machakos" element={<MachakosPage />} />
        <Route path="/gas-delivery-meru" element={<MeruPage />} />
        <Route path="/gas-delivery-nyeri" element={<NyeriPage />} />
        <Route path="/gas-delivery-kakamega" element={<KakamegaPage />} />
        <Route path="/gas-delivery-kericho" element={<KerichoPage />} />
        <Route path="/gas-delivery-embu" element={<EmbuPage />} />
        <Route path="/gas-delivery-garissa" element={<GarissaPage />} />
        <Route path="/gas-delivery-malindi" element={<MalindiPage />} />
        <Route path="/gas-delivery-kisii" element={<KisiiPage />} />
        <Route path="/gas-delivery-bungoma" element={<BungomPage />} />
        <Route path="/gas-delivery-naivasha" element={<NaivhashaPage />} />
        <Route path="/gas-delivery-kapsabet" element={<KapsabetPage />} />
        <Route path="/gas-delivery-mumias" element={<MumiastPage />} />
        <Route path="/gas-delivery-voi" element={<VoiPage />} />
        <Route path="/gas-delivery-migori" element={<MigoriPage />} />
        <Route path="/gas-delivery-hola" element={<HolaPage />} />
        <Route path="/gas-delivery-kitui" element={<KituiPage />} />
        <Route path="/gas-delivery-lodwar" element={<LodwarPage />} />
        <Route path="/gas-delivery-maralal" element={<MaralalPage />} />
        <Route path="/gas-delivery-kitale" element={<KitaleePage />} />
        <Route path="/gas-delivery-homa-bay" element={<HombayPage />} />
        <Route path="/gas-delivery-kapenguria" element={<KapenguriaPage />} />
        <Route path="/gas-delivery-marsabit" element={<MarsakitPage />} />
        <Route path="/gas-delivery-wajir" element={<WajirPage />} />
        <Route path="/gas-delivery-mandera" element={<ManderaPage />} />
        <Route path="/gas-delivery-isiolo" element={<IsioloPage />} />
        <Route path="/gas-delivery-nanyuki" element={<NanyukiPage />} />
        <Route path="/gas-delivery-narok" element={<NarokPage />} />
        <Route path="/gas-delivery-kabarnet" element={<KabarnetPage />} />
        <Route path="/gas-delivery-lamu" element={<LamuPage />} />
        <Route path="/gas-delivery-chuka" element={<ChukkaPage />} />
        <Route path="/gas-delivery-wote" element={<WotePage />} />
        <Route path="/gas-delivery-ol-kalou" element={<OlKalouPage />} />
        <Route path="/gas-delivery-kerugoya" element={<KerugoyaPage />} />
        <Route path="/gas-delivery-bomet" element={<BometPage />} />
        <Route path="/gas-delivery-siaya" element={<SiayaPage />} />
        <Route path="/gas-delivery-nyamira" element={<NyamiraPage />} />
        <Route path="/gas-delivery-iten" element={<ItenPage />} />
        <Route path="/gas-delivery-rumuruti" element={<RumurtiPage />} />
        <Route path="/gas-delivery-litein" element={<LiteinPage />} />
        <Route path="/gas-delivery-webuye" element={<WebueyePage />} />
        <Route path="/gas-delivery-kandara" element={<KanduduPage />} />
        <Route path="/gas-delivery-ruiru" element={<RuiruPage />} />
        <Route path="/gas-delivery-juja" element={<JujaPage />} />
        <Route path="/gas-delivery-kikuyu" element={<KikuyuPage />} />
        <Route path="/gas-delivery-athi-river" element={<AtriRiverPage />} />
        <Route path="/gas-delivery-limuru" element={<LimuruPage />} />
        <Route path="/gas-delivery-kahawa" element={<KahawePage />} />
        <Route path="/gas-delivery-embakasi" element={<EmbakasPage />} />
        <Route path="/gas-delivery-kabete" element={<KabetePage />} />
        <Route path="/gas-delivery-dagoretti" element={<DagorettiPage />} />
        <Route path="/gas-delivery-langata" element={<LangataPage />} />
        <Route path="/gas-delivery-westlands" element={<WestlandsPage />} />
        <Route path="/gas-delivery-kilimani" element={<KilimaniPage />} />
        <Route path="/gas-delivery-kasarani" element={<KasaraniPage />} />
        <Route path="/gas-delivery-eastleigh" element={<EastleighPage />} />
        <Route path="/gas-delivery-kibera" element={<KiberaPage />} />
      </Routes>
    </BrowserRouter>
    </HelmetProvider>
  )
}

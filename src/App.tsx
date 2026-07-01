import { lazy, Suspense } from 'react'
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
const LegalPage = lazy(() => import('./pages/LegalPage'))
const FaqPage = lazy(() => import('./pages/FaqPage'))
const AreasPage = lazy(() => import('./pages/AreasPage'))
const CountyPage = lazy(() => import('./pages/CountyPage'))
const VendorAreasPage = lazy(() => import('./pages/VendorAreasPage'))
const BuyGasOnCreditPage = lazy(() => import('./pages/BuyGasOnCreditPage'))
const GasVendorLoanPage = lazy(() => import('./pages/GasVendorLoanPage'))
const GasPricesPage = lazy(() => import('./pages/GasPricesPage'))
const SameDayDeliveryPage = lazy(() => import('./pages/SameDayDeliveryPage'))
const TrustPage = lazy(() => import('./pages/TrustPage'))
const GasLoanAppsPage = lazy(() => import('./pages/GasLoanAppsPage'))
const GasBrandsPage = lazy(() => import('./pages/GasBrandsPage'))
const HowToGetGasCreditPage = lazy(() => import('./pages/HowToGetGasCreditPage'))
const VendorRegistrationPage = lazy(() => import('./pages/VendorRegistrationPage'))
const NairobiPage = lazy(() => import('./pages/cities/NairobiPage'))
const MombasaPage = lazy(() => import('./pages/cities/MombasaPage'))
const KisumuPage = lazy(() => import('./pages/cities/KisumuPage'))
const NakuruPage = lazy(() => import('./pages/cities/NakuruPage'))
const EldoretPage = lazy(() => import('./pages/cities/EldoretPage'))
const KiambuPage = lazy(() => import('./pages/cities/KiambuPage'))
const ThikaPage = lazy(() => import('./pages/cities/ThikaPage'))
const GasDeliveryAppPage = lazy(() => import('./pages/GasDeliveryAppPage'))
const LpgGasDeliveryPage = lazy(() => import('./pages/LpgGasDeliveryPage'))
const EmergencyGasPage = lazy(() => import('./pages/EmergencyGasPage'))
const MpesaGasPage = lazy(() => import('./pages/MpesaGasPage'))
const GasNoDepositPage = lazy(() => import('./pages/GasNoDepsositPage'))
const HowMobiGasWorksPage = lazy(() => import('./pages/HowMobiGasWorksPage'))
const StudentsGasPage = lazy(() => import('./pages/StudentsGasPage'))
const AffordableGasPage = lazy(() => import('./pages/AffordableGasPage'))
const MachakosPage = lazy(() => import('./pages/cities/MachakosPage'))
const MeruPage = lazy(() => import('./pages/cities/MeruPage'))
const NyeriPage = lazy(() => import('./pages/cities/NyeriPage'))
const KakamegaPage = lazy(() => import('./pages/cities/KakamegaPage'))
const KerichoPage = lazy(() => import('./pages/cities/KerichoPage'))
const EmbuPage = lazy(() => import('./pages/cities/EmbuPage'))
const GarissaPage = lazy(() => import('./pages/cities/GarissaPage'))
const MalindiPage = lazy(() => import('./pages/cities/MalindiPage'))
const KisiiPage = lazy(() => import('./pages/cities/KisiiPage'))
const BungomPage = lazy(() => import('./pages/cities/BungomPage'))
const NaivhashaPage = lazy(() => import('./pages/cities/NaivhashaPage'))
const KapsabetPage = lazy(() => import('./pages/cities/KapsabetPage'))
const MumiastPage = lazy(() => import('./pages/cities/MumiastPage'))
const VoiPage = lazy(() => import('./pages/cities/VoiPage'))
const MigoriPage = lazy(() => import('./pages/cities/MigoriPage'))
const HolaPage = lazy(() => import('./pages/cities/HolaPage'))
const KituiPage = lazy(() => import('./pages/cities/KituiPage'))
const LodwarPage = lazy(() => import('./pages/cities/LodwarPage'))
const MaralalPage = lazy(() => import('./pages/cities/MaralalPage'))
const KitaleePage = lazy(() => import('./pages/cities/KitaleePage'))
const HombayPage = lazy(() => import('./pages/cities/HombayPage'))
const KapenguriaPage = lazy(() => import('./pages/cities/KapenguriaPage'))
const MarsakitPage = lazy(() => import('./pages/cities/MarsakitPage'))
const WajirPage = lazy(() => import('./pages/cities/WajirPage'))
const ManderaPage = lazy(() => import('./pages/cities/ManderaPage'))
const IsioloPage = lazy(() => import('./pages/cities/IsioloPage'))
const NanyukiPage = lazy(() => import('./pages/cities/NanyukiPage'))
const NarokPage = lazy(() => import('./pages/cities/NarokPage'))
const KabarnetPage = lazy(() => import('./pages/cities/KabarnetPage'))
const LamuPage = lazy(() => import('./pages/cities/HolaPage2'))
const ChukkaPage = lazy(() => import('./pages/cities/ChukkaPage'))
const WotePage = lazy(() => import('./pages/cities/WotePage'))
const OlKalouPage = lazy(() => import('./pages/cities/OlKalouPage'))
const KerugoyaPage = lazy(() => import('./pages/cities/KerugoyaPage'))
const BometPage = lazy(() => import('./pages/cities/BometPage'))
const SiayaPage = lazy(() => import('./pages/cities/SiayaPage'))
const NyamiraPage = lazy(() => import('./pages/cities/NyamiraPage'))
const ItenPage = lazy(() => import('./pages/cities/MoiUniversityPage'))
const RumurtiPage = lazy(() => import('./pages/cities/RumurtiPage'))
const LiteinPage = lazy(() => import('./pages/cities/LiteinPage'))
const WebueyePage = lazy(() => import('./pages/cities/WebueyePage'))
const KanduduPage = lazy(() => import('./pages/cities/KanduduPage'))
const RuiruPage = lazy(() => import('./pages/cities/RuiruPage'))
const JujaPage = lazy(() => import('./pages/cities/JujaPage'))
const KikuyuPage = lazy(() => import('./pages/cities/KikuyuPage'))
const AtriRiverPage = lazy(() => import('./pages/cities/AtriRiverPage'))
const LimuruPage = lazy(() => import('./pages/cities/LimuruPage'))
const KahawePage = lazy(() => import('./pages/cities/KahawePage'))
const EmbakasPage = lazy(() => import('./pages/cities/EmbakasPage'))
const KabetePage = lazy(() => import('./pages/cities/KabetePage'))
const DagorettiPage = lazy(() => import('./pages/cities/DagorettiPage'))
const LangataPage = lazy(() => import('./pages/cities/LangataPage'))
const WestlandsPage = lazy(() => import('./pages/cities/WestlandsPage'))
const KilimaniPage = lazy(() => import('./pages/cities/KilimaniPage'))
const KasaraniPage = lazy(() => import('./pages/cities/KasaraniPage'))
const EastleighPage = lazy(() => import('./pages/cities/EastleighPage'))
const KiberaPage = lazy(() => import('./pages/cities/KiberaPage'))
const UkundaPage = lazy(() => import('./pages/cities/UkundaPage'))
const MoloPage = lazy(() => import('./pages/cities/MoloPage'))
const GilgilPage = lazy(() => import('./pages/cities/GilgilPage'))
const MoyalePage = lazy(() => import('./pages/cities/MoyalePage'))
const MariakaniPage = lazy(() => import('./pages/cities/MalindaiPage'))
const WatamPage = lazy(() => import('./pages/cities/WatamPage'))
const MwingiPage = lazy(() => import('./pages/cities/MwingiPage'))
const KangundoPage = lazy(() => import('./pages/cities/KangundoPage'))
const OthayaPage = lazy(() => import('./pages/cities/OthayaPage'))
const KaratniPage = lazy(() => import('./pages/cities/KaratniPage'))
const KiambuTownPage = lazy(() => import('./pages/cities/KiambuTownPage'))
const NgongPage = lazy(() => import('./pages/cities/NgongPage'))
const KitelengelaPage = lazy(() => import('./pages/cities/KitelengelaPage'))
const RongaiPage = lazy(() => import('./pages/cities/RongaiPage'))
const SaganaPage = lazy(() => import('./pages/cities/SaganaPage'))
const MurangaTownPage = lazy(() => import('./pages/cities/MurangaTownPage'))
const NyahururuPage = lazy(() => import('./pages/cities/NyahururuPage'))
const MtombaPage = lazy(() => import('./pages/cities/MtombaPage'))
const KilifiTownPage = lazy(() => import('./pages/cities/KilifiTownPage'))
const TavetaPage = lazy(() => import('./pages/cities/TavetaPage'))
const GasCylinderSwapPage = lazy(() => import('./pages/GasCylinderSwapPage'))
const LandlordsGasPage = lazy(() => import('./pages/LandlordsGasPage'))
const ReferralPage = lazy(() => import('./pages/ReferralPage'))
const GasCreditLimitPage = lazy(() => import('./pages/GasCreditLimitPage'))
const CylinderSizesPage = lazy(() => import('./pages/CylinderSizesPage'))
const VendorEarnPage = lazy(() => import('./pages/VendorEarnPage'))
const GasSafetyPage = lazy(() => import('./pages/GasSafetyPage'))
const PartnerBanksPage = lazy(() => import('./pages/PartnerBanksPage'))
const BusinessGasPage = lazy(() => import('./pages/BusinessGasPage'))
const VendorCountyPage = lazy(() => import('./pages/VendorCountyPage'))

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
      <Suspense fallback={<div className="min-h-screen bg-gray-50 flex items-center justify-center"><div className="text-gray-400 text-sm">Loading...</div></div>}>
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
        <Route path="/gas-delivery-ukunda" element={<UkundaPage />} />
        <Route path="/gas-delivery-molo" element={<MoloPage />} />
        <Route path="/gas-delivery-gilgil" element={<GilgilPage />} />
        <Route path="/gas-delivery-moyale" element={<MoyalePage />} />
        <Route path="/gas-delivery-mariakani" element={<MariakaniPage />} />
        <Route path="/gas-delivery-watamu" element={<WatamPage />} />
        <Route path="/gas-delivery-mwingi" element={<MwingiPage />} />
        <Route path="/gas-delivery-kangundo" element={<KangundoPage />} />
        <Route path="/gas-delivery-othaya" element={<OthayaPage />} />
        <Route path="/gas-delivery-karatina" element={<KaratniPage />} />
        <Route path="/gas-delivery-kiambu-town" element={<KiambuTownPage />} />
        <Route path="/gas-delivery-ngong" element={<NgongPage />} />
        <Route path="/gas-delivery-kitengela" element={<KitelengelaPage />} />
        <Route path="/gas-delivery-rongai" element={<RongaiPage />} />
        <Route path="/gas-delivery-sagana" element={<SaganaPage />} />
        <Route path="/gas-delivery-muranga-town" element={<MurangaTownPage />} />
        <Route path="/gas-delivery-nyahururu" element={<NyahururuPage />} />
        <Route path="/gas-delivery-mtwapa" element={<MtombaPage />} />
        <Route path="/gas-delivery-kilifi-town" element={<KilifiTownPage />} />
        <Route path="/gas-delivery-taveta" element={<TavetaPage />} />
        <Route path="/gas-cylinder-swap-kenya" element={<GasCylinderSwapPage />} />
        <Route path="/gas-for-landlords-kenya" element={<LandlordsGasPage />} />
        <Route path="/mobigas-referral" element={<ReferralPage />} />
        <Route path="/gas-credit-limit-kenya" element={<GasCreditLimitPage />} />
        <Route path="/lpg-cylinder-sizes-kenya" element={<CylinderSizesPage />} />
        <Route path="/gas-vendor-earn-kenya" element={<VendorEarnPage />} />
        <Route path="/cooking-gas-safety-kenya" element={<GasSafetyPage />} />
        <Route path="/mobigas-partner-banks" element={<PartnerBanksPage />} />
      </Routes>
      </Suspense>
    </BrowserRouter>
    </HelmetProvider>
  )
}

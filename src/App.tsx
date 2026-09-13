import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
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
import { country } from './config/countries'
const LegalPage = lazy(() => import('./pages/LegalPage'))
const FaqPage = lazy(() => import('./pages/FaqPage'))
const AreasPage = lazy(() => import('./pages/AreasPage'))
const GasDeliveryHubPage = lazy(() => import('./pages/GasDeliveryHubPage'))
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
const BungomaPage = lazy(() => import('./pages/cities/BungomaPage'))
const NaivashaPage = lazy(() => import('./pages/cities/NaivashaPage'))
const KapsabetPage = lazy(() => import('./pages/cities/KapsabetPage'))
const MumiasPage = lazy(() => import('./pages/cities/MumiasPage'))
const VoiPage = lazy(() => import('./pages/cities/VoiPage'))
const MigoriPage = lazy(() => import('./pages/cities/MigoriPage'))
const HolaPage = lazy(() => import('./pages/cities/HolaPage'))
const KituiPage = lazy(() => import('./pages/cities/KituiPage'))
const LodwarPage = lazy(() => import('./pages/cities/LodwarPage'))
const MaralalPage = lazy(() => import('./pages/cities/MaralalPage'))
const KitalePage = lazy(() => import('./pages/cities/KitalePage'))
const HomabayPage = lazy(() => import('./pages/cities/HomabayPage'))
const KapenguriaPage = lazy(() => import('./pages/cities/KapenguriaPage'))
const MarsabitPage = lazy(() => import('./pages/cities/MarsabitPage'))
const WajirPage = lazy(() => import('./pages/cities/WajirPage'))
const ManderaPage = lazy(() => import('./pages/cities/ManderaPage'))
const IsioloPage = lazy(() => import('./pages/cities/IsioloPage'))
const NanyukiPage = lazy(() => import('./pages/cities/NanyukiPage'))
const NarokPage = lazy(() => import('./pages/cities/NarokPage'))
const KabarnetPage = lazy(() => import('./pages/cities/KabarnetPage'))
const LamuPage = lazy(() => import('./pages/cities/HolaPage2'))
const ChukaPage = lazy(() => import('./pages/cities/ChukaPage'))
const WotePage = lazy(() => import('./pages/cities/WotePage'))
const OlKalouPage = lazy(() => import('./pages/cities/OlKalouPage'))
const KerugoyaPage = lazy(() => import('./pages/cities/KerugoyaPage'))
const BometPage = lazy(() => import('./pages/cities/BometPage'))
const SiayaPage = lazy(() => import('./pages/cities/SiayaPage'))
const NyamiraPage = lazy(() => import('./pages/cities/NyamiraPage'))
const ItenPage = lazy(() => import('./pages/cities/MoiUniversityPage'))
const RumurutiPage = lazy(() => import('./pages/cities/RumurutiPage'))
const LiteinPage = lazy(() => import('./pages/cities/LiteinPage'))
const WebuyePage = lazy(() => import('./pages/cities/WebuyePage'))
const KanduduPage = lazy(() => import('./pages/cities/KanduduPage'))
const RuiruPage = lazy(() => import('./pages/cities/RuiruPage'))
const JujaPage = lazy(() => import('./pages/cities/JujaPage'))
const KikuyuPage = lazy(() => import('./pages/cities/KikuyuPage'))
const AtriRiverPage = lazy(() => import('./pages/cities/AtriRiverPage'))
const LimuruPage = lazy(() => import('./pages/cities/LimuruPage'))
const KahawaPage = lazy(() => import('./pages/cities/KahawaPage'))
const EmbakasiPage = lazy(() => import('./pages/cities/EmbakasiPage'))
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
const MariakaniPage = lazy(() => import('./pages/cities/MariakaniPage'))
const WatamuPage = lazy(() => import('./pages/cities/WatamuPage'))
const MwingiPage = lazy(() => import('./pages/cities/MwingiPage'))
const KangundoPage = lazy(() => import('./pages/cities/KangundoPage'))
const OthayaPage = lazy(() => import('./pages/cities/OthayaPage'))
const KaratinaPage = lazy(() => import('./pages/cities/KaratinaPage'))
const KiambuTownPage = lazy(() => import('./pages/cities/KiambuTownPage'))
const NgongPage = lazy(() => import('./pages/cities/NgongPage'))
const KitengelaPage = lazy(() => import('./pages/cities/KitengelaPage'))
const RongaiPage = lazy(() => import('./pages/cities/RongaiPage'))
const SaganaPage = lazy(() => import('./pages/cities/SaganaPage'))
const MurangaTownPage = lazy(() => import('./pages/cities/MurangaTownPage'))
const NyahururuPage = lazy(() => import('./pages/cities/NyahururuPage'))
const MtwapaPage = lazy(() => import('./pages/cities/MtwapaPage'))
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
const CashOrderPage = lazy(() => import('./pages/CashOrderPage'))
const CompareVendorsPage = lazy(() => import('./pages/CompareVendorsPage'))
const DeleteAccountPage = lazy(() => import('./pages/DeleteAccountPage'))

const creditOnly = (el: React.ReactNode) =>
  country.showCredit ? el : <Navigate to="/" replace />

function Home() {
  return (
    <>
      <Helmet>
        <title>{country.showCredit
          ? 'MobiGas - Gas on Credit Kenya | Cooking Gas Delivery, Pay Later via M-Pesa'
          : `MobiGas ${country.name} - Fast LPG Gas Delivery | Order Cooking Gas, Pay on Delivery`}</title>
        <meta name="description" content={country.showCredit
          ? 'Order cooking gas on credit in Kenya. MobiGas delivers LPG gas in 10-40 minutes - pay your partner bank within 30 days via M-Pesa. No cash needed upfront.'
          : `Order LPG cooking gas in ${country.name}. MobiGas delivers in 10-40 minutes - pay on delivery via ${country.payment}. Fast, verified vendors near you.`} />
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'MobiGas',
          url: country.baseUrl,
          logo: `${country.baseUrl}/favicon.svg`,
          description: country.showCredit
            ? "Kenya's first gas-on-credit delivery platform. Order cooking gas now, pay within 30 days via M-Pesa."
            : `${country.name}'s fast LPG delivery platform. Order cooking gas now, pay on delivery.`,
          email: country.email,
          areaServed: country.code,
          sameAs: [],
        })}</script>
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
        <Route path="/buy-gas-on-credit" element={creditOnly(<BuyGasOnCreditPage />)} />
        <Route path="/gas-vendor-loan" element={creditOnly(<GasVendorLoanPage />)} />
        <Route path="/cooking-gas-prices-kenya" element={<GasPricesPage />} />
        <Route path="/gas-delivery-same-day" element={<SameDayDeliveryPage />} />
        <Route path="/is-mobigas-safe" element={<TrustPage />} />
        <Route path="/gas-delivery-for-business" element={<BusinessGasPage />} />
        <Route path="/gas-loan-apps-kenya" element={creditOnly(<GasLoanAppsPage />)} />
        <Route path="/cooking-gas-brands-kenya" element={<GasBrandsPage />} />
        <Route path="/how-to-get-gas-on-credit" element={creditOnly(<HowToGetGasCreditPage />)} />
        <Route path="/gas-vendor-registration-kenya" element={<VendorRegistrationPage />} />
        <Route path="/gas-delivery" element={<GasDeliveryHubPage />} />
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
        <Route path="/gas-on-credit-no-deposit" element={creditOnly(<GasNoDepositPage />)} />
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
        <Route path="/gas-delivery-bungoma" element={<BungomaPage />} />
        <Route path="/gas-delivery-naivasha" element={<NaivashaPage />} />
        <Route path="/gas-delivery-kapsabet" element={<KapsabetPage />} />
        <Route path="/gas-delivery-mumias" element={<MumiasPage />} />
        <Route path="/gas-delivery-voi" element={<VoiPage />} />
        <Route path="/gas-delivery-migori" element={<MigoriPage />} />
        <Route path="/gas-delivery-hola" element={<HolaPage />} />
        <Route path="/gas-delivery-kitui" element={<KituiPage />} />
        <Route path="/gas-delivery-lodwar" element={<LodwarPage />} />
        <Route path="/gas-delivery-maralal" element={<MaralalPage />} />
        <Route path="/gas-delivery-kitale" element={<KitalePage />} />
        <Route path="/gas-delivery-homa-bay" element={<HomabayPage />} />
        <Route path="/gas-delivery-kapenguria" element={<KapenguriaPage />} />
        <Route path="/gas-delivery-marsabit" element={<MarsabitPage />} />
        <Route path="/gas-delivery-wajir" element={<WajirPage />} />
        <Route path="/gas-delivery-mandera" element={<ManderaPage />} />
        <Route path="/gas-delivery-isiolo" element={<IsioloPage />} />
        <Route path="/gas-delivery-nanyuki" element={<NanyukiPage />} />
        <Route path="/gas-delivery-narok" element={<NarokPage />} />
        <Route path="/gas-delivery-kabarnet" element={<KabarnetPage />} />
        <Route path="/gas-delivery-lamu" element={<LamuPage />} />
        <Route path="/gas-delivery-chuka" element={<ChukaPage />} />
        <Route path="/gas-delivery-wote" element={<WotePage />} />
        <Route path="/gas-delivery-ol-kalou" element={<OlKalouPage />} />
        <Route path="/gas-delivery-kerugoya" element={<KerugoyaPage />} />
        <Route path="/gas-delivery-bomet" element={<BometPage />} />
        <Route path="/gas-delivery-siaya" element={<SiayaPage />} />
        <Route path="/gas-delivery-nyamira" element={<NyamiraPage />} />
        <Route path="/gas-delivery-iten" element={<ItenPage />} />
        <Route path="/gas-delivery-rumuruti" element={<RumurutiPage />} />
        <Route path="/gas-delivery-litein" element={<LiteinPage />} />
        <Route path="/gas-delivery-webuye" element={<WebuyePage />} />
        <Route path="/gas-delivery-kandara" element={<KanduduPage />} />
        <Route path="/gas-delivery-ruiru" element={<RuiruPage />} />
        <Route path="/gas-delivery-juja" element={<JujaPage />} />
        <Route path="/gas-delivery-kikuyu" element={<KikuyuPage />} />
        <Route path="/gas-delivery-athi-river" element={<AtriRiverPage />} />
        <Route path="/gas-delivery-limuru" element={<LimuruPage />} />
        <Route path="/gas-delivery-kahawa" element={<KahawaPage />} />
        <Route path="/gas-delivery-embakasi" element={<EmbakasiPage />} />
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
        <Route path="/gas-delivery-watamu" element={<WatamuPage />} />
        <Route path="/gas-delivery-mwingi" element={<MwingiPage />} />
        <Route path="/gas-delivery-kangundo" element={<KangundoPage />} />
        <Route path="/gas-delivery-othaya" element={<OthayaPage />} />
        <Route path="/gas-delivery-karatina" element={<KaratinaPage />} />
        <Route path="/gas-delivery-kiambu-town" element={<KiambuTownPage />} />
        <Route path="/gas-delivery-ngong" element={<NgongPage />} />
        <Route path="/gas-delivery-kitengela" element={<KitengelaPage />} />
        <Route path="/gas-delivery-rongai" element={<RongaiPage />} />
        <Route path="/gas-delivery-sagana" element={<SaganaPage />} />
        <Route path="/gas-delivery-muranga-town" element={<MurangaTownPage />} />
        <Route path="/gas-delivery-nyahururu" element={<NyahururuPage />} />
        <Route path="/gas-delivery-mtwapa" element={<MtwapaPage />} />
        <Route path="/gas-delivery-kilifi-town" element={<KilifiTownPage />} />
        <Route path="/gas-delivery-taveta" element={<TavetaPage />} />
        <Route path="/gas-cylinder-swap-kenya" element={<GasCylinderSwapPage />} />
        <Route path="/gas-for-landlords-kenya" element={<LandlordsGasPage />} />
        <Route path="/mobigas-referral" element={<ReferralPage />} />
        <Route path="/gas-credit-limit-kenya" element={creditOnly(<GasCreditLimitPage />)} />
        <Route path="/lpg-cylinder-sizes-kenya" element={<CylinderSizesPage />} />
        <Route path="/gas-vendor-earn-kenya" element={<VendorEarnPage />} />
        <Route path="/cooking-gas-safety-kenya" element={<GasSafetyPage />} />
        <Route path="/mobigas-partner-banks" element={creditOnly(<PartnerBanksPage />)} />
        <Route path="/order-gas-cash-on-delivery" element={<CashOrderPage />} />
        <Route path="/compare-gas-vendors-kenya" element={<CompareVendorsPage />} />
        <Route path="/delete-account" element={<DeleteAccountPage />} />
      </Routes>
      </Suspense>
    </BrowserRouter>
    </HelmetProvider>
  )
}

import { Flame, ArrowLeft, Scale, MapPin, Star, Banknote } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

const compareFeatures = [
  { icon: Banknote, title: 'Live prices side by side', text: 'Every vendor lists their own 3kg, 6kg and 13kg prices. See them all before you order — no calling around.' },
  { icon: MapPin, title: 'Distance and delivery time', text: 'The app shows vendors within 8km of you, sorted by distance, with each vendor\'s typical delivery time.' },
  { icon: Star, title: 'Ratings from real customers', text: 'Every completed order can be rated, so you can see how each vendor performs before choosing.' },
  { icon: Scale, title: 'Brands and cylinder sizes', text: 'Filter by the gas brand you use — Total, K-Gas, Pro Gas, Hashi and more — and the size you need.' },
]

export default function CompareVendorsPage() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Compare Gas Vendors & Prices Near You | Best LPG Deals Kenya - MobiGas</title>
        <meta name="description" content="Compare cooking gas vendors and LPG prices near you in Kenya. See live 6kg and 13kg refill prices, delivery times and ratings from verified vendors — then order with cash or credit." />
      </Helmet>

      <div className="bg-[#0D1B40] py-6 px-6">
        <div className="max-w-3xl mx-auto flex items-center gap-4">
          <button onClick={() => navigate('/')} className="text-gray-400 hover:text-white transition-colors">
            <ArrowLeft size={20} />
          </button>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#F97316] rounded-lg flex items-center justify-center">
              <Flame size={16} className="text-white" />
            </div>
            <span className="font-bold text-white">MobiGas</span>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-black text-[#0D1B40] mb-4">
          Compare Gas Vendors & Prices Near You
        </h1>
        <p className="text-gray-500 text-lg mb-10 max-w-2xl">
          Gas prices vary from vendor to vendor — sometimes by hundreds of shillings
          for the same cylinder. MobiGas shows every verified vendor near you with
          their live prices, delivery times and ratings, so you always know you're
          getting a fair deal.
        </p>

        <div className="grid sm:grid-cols-2 gap-3 mb-12">
          {compareFeatures.map(f => (
            <div key={f.title} className="bg-white rounded-xl border border-gray-100 p-4">
              <div className="flex items-center gap-2 mb-1">
                <f.icon size={16} className="text-[#F97316] flex-shrink-0" />
                <span className="font-bold text-[#0D1B40] text-sm">{f.title}</span>
              </div>
              <p className="text-gray-500 text-xs leading-relaxed pl-6">{f.text}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 p-6 mb-10">
          <h2 className="text-lg font-bold text-[#0D1B40] mb-3">Why compare before ordering?</h2>
          <p className="text-gray-500 text-sm leading-relaxed">
            Walk-in gas shop prices in Kenya are rarely displayed, and doorstep prices
            from unknown riders can be inflated. Because MobiGas vendors publish their
            prices in the app and get paid the exact listed amount on delivery
            confirmation, comparing takes seconds and the price can't change at your
            door. Pay with cash on delivery, or order on credit and repay within 30
            days via M-Pesa.
          </p>
        </div>

        <div className="bg-[#0D1B40] rounded-2xl p-8 text-center">
          <h3 className="text-xl font-bold text-white mb-2">See vendor prices near you</h3>
          <p className="text-gray-300 text-sm mb-6 max-w-md mx-auto">
            Download MobiGas and compare every verified gas vendor within 8km of your location.
          </p>
          <a
            href="/#download"
            className="inline-block bg-[#F97316] text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-orange-600 transition-colors"
          >
            Download MobiGas
          </a>
        </div>
      </div>
    </div>
  )
}

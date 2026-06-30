import { Flame, ArrowLeft, CheckCircle, TrendingUp } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

const cylinderSizes = [
  { size: '6kg', use: 'Best for small households or singles', note: 'Most popular size in Kenya' },
  { size: '13kg', use: 'Best for families and regular cooking', note: 'Lasts longer, fewer refills' },
  { size: '3kg', use: 'Best for students or minimal cooking', note: 'Compact and easy to carry' },
]

export default function GasPricesPage() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Cooking Gas Prices in Kenya 2026 | 6kg & 13kg LPG Gas - MobiGas</title>
        <meta name="description" content="Compare cooking gas prices in Kenya for 6kg and 13kg LPG cylinders. See live vendor prices near you on MobiGas and order on credit - pay later via M-Pesa." />
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
          Cooking Gas Prices in Kenya
        </h1>
        <p className="text-gray-500 text-lg mb-10 max-w-2xl">
          LPG gas prices in Kenya vary by cylinder size, brand, and vendor location. On MobiGas,
          you see live prices from verified vendors near you and can order on credit — no need
          to compare prices across multiple shops or have cash ready upfront.
        </p>

        <div className="space-y-4 mb-12">
          {cylinderSizes.map(item => (
            <div key={item.size} className="bg-white rounded-xl border border-gray-100 p-5 flex items-center justify-between">
              <div>
                <h3 className="font-bold text-[#0D1B40] text-lg">{item.size} Cylinder</h3>
                <p className="text-gray-500 text-sm">{item.use}</p>
              </div>
              <span className="bg-orange-50 text-[#F97316] text-xs font-semibold px-3 py-1.5 rounded-full">
                {item.note}
              </span>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 p-6 mb-10">
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp size={20} className="text-[#F97316]" />
            <h2 className="text-lg font-bold text-[#0D1B40]">Why prices vary between vendors</h2>
          </div>
          <div className="space-y-2">
            {[
              'Gas brand — Total, K-Gas, Hashi, Pro Gas and others price slightly differently',
              'Refill vs full kit (cylinder + gas) — full kits cost more upfront',
              'Delivery distance and vendor operating costs',
              'Local supply and demand in your specific area',
            ].map(point => (
              <div key={point} className="flex items-center gap-2 text-sm text-gray-600">
                <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
                {point}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#0D1B40] rounded-2xl p-8 text-center">
          <h3 className="text-xl font-bold text-white mb-2">See live prices near you</h3>
          <p className="text-gray-300 text-sm mb-6 max-w-md mx-auto">
            Open the MobiGas app to compare real-time prices from verified vendors in your area —
            then order on credit, no cash needed.
          </p>
          <a
            href="/#download"
            className="inline-block bg-[#F97316] text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-orange-600 transition-colors"
          >
            Check prices in the app
          </a>
        </div>
      </div>
    </div>
  )
}

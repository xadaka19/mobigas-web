import { Flame, ArrowLeft, MapPin, TrendingUp } from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useNavigate, Link } from 'react-router-dom'
import { kenyaCounties } from '../data/kenyaCounties'

export default function VendorAreasPage() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Become a Gas Vendor in Kenya | LPG Dealer Stock Loan & Instant M-Pesa Payouts</title>
        <meta name="description" content="Join MobiGas as a verified LPG gas vendor in Kenya. Get instant M-Pesa payouts on every delivery and unlock vendor stock financing loans from partner banks." />
      </Helmet>
      <div className="bg-[#0D1B40] py-6 px-6">
        <div className="max-w-4xl mx-auto flex items-center gap-4">
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

      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="flex items-center gap-2 mb-4">
          <TrendingUp size={20} className="text-[#F97316]" />
          <span className="text-sm font-semibold text-[#F97316] uppercase tracking-wide">For Gas Vendors</span>
        </div>
        <h1 className="text-4xl font-black text-[#0D1B40] mb-4">
          Gas Vendors Across Kenya
        </h1>
        <p className="text-gray-500 text-lg mb-8 max-w-2xl">
          Join MobiGas as a verified LPG vendor in any of these counties. Get new customers,
          instant M-Pesa payouts on every delivery, and unlock Stock Boost Loans from our
          partner banks after 3 consistent months on the platform.
        </p>

        <div className="grid sm:grid-cols-3 gap-4 mb-12">
          {[
            { title: 'Instant payouts', desc: 'Get paid to M-Pesa the moment a delivery is confirmed — no waiting.' },
            { title: 'Stock Boost Loans', desc: 'Qualify for vendor stock financing from partner banks after 3 months active.' },
            { title: 'New customers', desc: 'Get matched with customers within 8km of your business automatically.' },
          ].map(item => (
            <div key={item.title} className="bg-white rounded-xl border border-gray-100 p-5">
              <h3 className="font-bold text-[#0D1B40] text-sm mb-2">{item.title}</h3>
              <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <h2 className="text-lg font-bold text-[#0D1B40] mb-4">
          Become a vendor in your county
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-12">
          {kenyaCounties.map(county => (
            <Link
              key={county.slug}
              to={`/vendors/${county.slug}`}
              className="bg-white rounded-xl border border-gray-100 px-4 py-3 hover:border-[#F97316] hover:shadow-sm transition-all flex items-center gap-2"
            >
              <MapPin size={14} className="text-[#F97316] flex-shrink-0" />
              <span className="text-sm font-medium text-[#0D1B40]">{county.name}</span>
            </Link>
          ))}
        </div>

        <div className="bg-[#0D1B40] rounded-2xl p-8 text-center">
          <h3 className="text-xl font-bold text-white mb-2">Ready to grow your gas business?</h3>
          <p className="text-gray-300 text-sm mb-6 max-w-md mx-auto">
            Download the MobiGas Vendor app, get verified within 24 hours, and start receiving orders.
          </p>
          <a
            href="/#for-vendors"
            className="inline-block bg-[#F97316] text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-orange-600 transition-colors"
          >
            Join as a vendor
          </a>
        </div>
      </div>
    </div>
  )
}

import { Flame, ArrowLeft, MapPin, TrendingUp, Banknote, Users } from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useNavigate, useParams, Navigate } from 'react-router-dom'
import { kenyaCounties } from '../data/kenyaCounties'

export default function VendorCountyPage() {
  const navigate = useNavigate()
  const { slug } = useParams<{ slug: string }>()
  const county = kenyaCounties.find(c => c.slug === slug)

  if (!county) {
    return <Navigate to="/vendors" replace />
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Gas Vendor Opportunities in {county.name} | Join MobiGas, Get Stock Financing</title>
        <meta name="description" content={`Become a gas vendor in ${county.name} County, Kenya. Get instant M-Pesa payouts and unlock vendor stock financing loans from MobiGas partner banks.`} />
      </Helmet>
      <div className="bg-[#0D1B40] py-6 px-6">
        <div className="max-w-3xl mx-auto flex items-center gap-4">
          <button onClick={() => navigate('/vendors')} className="text-gray-400 hover:text-white transition-colors">
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
        <div className="flex items-center gap-2 mb-4">
          <TrendingUp size={20} className="text-[#F97316]" />
          <span className="text-sm font-semibold text-[#F97316] uppercase tracking-wide">Become a Vendor</span>
        </div>
        <h1 className="text-4xl font-black text-[#0D1B40] mb-4">
          Sell Gas as a MobiGas Vendor in {county.name} County
        </h1>
        <p className="text-gray-500 text-lg mb-8 max-w-xl">
          Join MobiGas as a verified LPG gas vendor in {county.name}. Receive orders from
          nearby customers, get instant M-Pesa payouts, and access Stock Boost Loans to grow
          your gas business — all backed by our regulated partner banks.
        </p>

        <div className="bg-white rounded-2xl border border-gray-100 p-6 mb-8">
          <h2 className="text-lg font-bold text-[#0D1B40] mb-4">
            Areas you'll serve in {county.name}
          </h2>
          <div className="grid grid-cols-2 gap-3">
            {county.areas.map(area => (
              <div key={area} className="flex items-center gap-2 text-sm text-gray-600">
                <MapPin size={14} className="text-[#F97316] flex-shrink-0" />
                {area}
              </div>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 mb-12">
          <div className="bg-white rounded-xl border border-gray-100 p-5">
            <Banknote size={20} className="text-green-500 mb-2" />
            <h3 className="font-bold text-[#0D1B40] text-sm mb-1">Instant M-Pesa payouts</h3>
            <p className="text-gray-500 text-xs leading-relaxed">
              No waiting for payment — the bank pays you the moment a customer confirms delivery.
            </p>
          </div>
          <div className="bg-white rounded-xl border border-gray-100 p-5">
            <Users size={20} className="text-blue-500 mb-2" />
            <h3 className="font-bold text-[#0D1B40] text-sm mb-1">New customers in {county.name}</h3>
            <p className="text-gray-500 text-xs leading-relaxed">
              Get matched automatically with customers ordering gas within 8km of your business.
            </p>
          </div>
        </div>

        <div className="bg-[#0D1B40] rounded-2xl p-8 text-center">
          <h3 className="text-xl font-bold text-white mb-2">
            Start selling gas in {county.name} today
          </h3>
          <p className="text-gray-300 text-sm mb-6 max-w-md mx-auto">
            Download the MobiGas Vendor app, register your business, and get verified within 24 hours.
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

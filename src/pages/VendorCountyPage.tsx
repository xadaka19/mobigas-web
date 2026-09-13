import { Flame, ArrowLeft, MapPin, TrendingUp, Banknote, Users, ShieldCheck } from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useNavigate, useParams, Navigate } from 'react-router-dom'
import { regions } from '../data/regions'
import { country } from '../config/countries'

export default function VendorCountyPage() {
  const navigate = useNavigate()
  const { slug } = useParams<{ slug: string }>()
  const region = regions.find(c => c.slug === slug)

  if (!region) {
    return <Navigate to="/vendors" replace />
  }

  const label = `${region.name}${country.code === 'KE' ? ' County' : ''}`
  const intro = country.showCredit
    ? `Join MobiGas as a verified LPG gas vendor in ${region.name}. Receive orders from nearby customers, get instant M-Pesa payouts, and access Stock Boost Loans to grow your gas business — all backed by our regulated partner banks.`
    : country.showStockBoost
      ? `Join MobiGas as a verified LPG gas vendor in ${region.name}. Receive orders from nearby customers, get paid instantly, access stock boost financing from partner banks, and protect your stock with theft and fire insurance.`
      : `Join MobiGas as a verified LPG gas vendor in ${region.name}. Receive orders from nearby customers and get paid instantly on every delivery — cash or ${country.payment}.`
  const payoutDesc = country.showCredit
    ? 'No waiting for payment — the bank pays you the moment a customer confirms delivery.'
    : 'No waiting for payment — you get paid the moment a customer confirms delivery.'

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>{country.showCredit
          ? `Gas Vendor Opportunities in ${region.name} | Join MobiGas, Get Stock Financing`
          : `Gas Vendor Opportunities in ${region.name} | Join MobiGas, Get Paid Instantly`}</title>
        <meta name="description" content={country.showCredit
          ? `Become a gas vendor in ${label}, Kenya. Get instant M-Pesa payouts and unlock vendor stock financing loans from MobiGas partner banks.`
          : `Become a gas vendor in ${label}, ${country.name}. Get new customers and get paid instantly on every delivery — cash or ${country.payment}.`} />
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
          Sell Gas as a MobiGas Vendor in {label}
        </h1>
        <p className="text-gray-500 text-lg mb-8 max-w-xl">
          {intro}
        </p>

        <div className="bg-white rounded-2xl border border-gray-100 p-6 mb-8">
          <h2 className="text-lg font-bold text-[#0D1B40] mb-4">
            Areas you'll serve in {region.name}
          </h2>
          <div className="grid grid-cols-2 gap-3">
            {region.areas.map(area => (
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
            <h3 className="font-bold text-[#0D1B40] text-sm mb-1">
              {country.showCredit ? 'Instant M-Pesa payouts' : 'Instant payouts'}
            </h3>
            <p className="text-gray-500 text-xs leading-relaxed">
              {payoutDesc}
            </p>
          </div>
          <div className="bg-white rounded-xl border border-gray-100 p-5">
            <Users size={20} className="text-blue-500 mb-2" />
            <h3 className="font-bold text-[#0D1B40] text-sm mb-1">New customers in {region.name}</h3>
            <p className="text-gray-500 text-xs leading-relaxed">
              Get matched automatically with customers ordering gas within 8km of your business.
            </p>
          </div>
          {country.showStockBoost && (
            <>
              <div className="bg-white rounded-xl border border-gray-100 p-5">
                <TrendingUp size={20} className="text-[#F97316] mb-2" />
                <h3 className="font-bold text-[#0D1B40] text-sm mb-1">Stock boost financing</h3>
                <p className="text-gray-500 text-xs leading-relaxed">
                  Grow your inventory with stock financing from our regulated partner banks — not MobiGas.
                </p>
              </div>
              <div className="bg-white rounded-xl border border-gray-100 p-5">
                <ShieldCheck size={20} className="text-indigo-500 mb-2" />
                <h3 className="font-bold text-[#0D1B40] text-sm mb-1">Stock insurance</h3>
                <p className="text-gray-500 text-xs leading-relaxed">
                  Protect your gas stock against theft and fire with vendor stock cover.
                </p>
              </div>
            </>
          )}
        </div>

        <div className="bg-[#0D1B40] rounded-2xl p-8 text-center">
          <h3 className="text-xl font-bold text-white mb-2">
            Start selling gas in {region.name} today
          </h3>
          <p className="text-gray-300 text-sm mb-6 max-w-md mx-auto">
            Download the MobiGas Vendor app, register your business, and get verified within 24 hours.
          </p>
          <a
            href={country.vendorApp}
            target="_blank" rel="noopener noreferrer"
            className="inline-block bg-[#F97316] text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-orange-600 transition-colors"
          >
            Get the vendor app
          </a>
        </div>
      </div>
    </div>
  )
}

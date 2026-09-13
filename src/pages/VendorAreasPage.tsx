import { Flame, ArrowLeft, MapPin, TrendingUp } from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useNavigate, Link } from 'react-router-dom'
import { regions, regionWord } from '../data/regions'
import { country } from '../config/countries'

const perks = country.showCredit
  ? [
      { title: 'Instant payouts', desc: 'Get paid to M-Pesa the moment a delivery is confirmed — no waiting.' },
      { title: 'Stock Boost Loans', desc: 'Qualify for vendor stock financing from partner banks after 3 months active.' },
      { title: 'New customers', desc: 'Get matched with customers within 8km of your business automatically.' },
    ]
  : country.showStockBoost
    ? [
        { title: 'Instant payouts', desc: `Get paid the moment a delivery is confirmed — cash or ${country.payment}.` },
        { title: 'Stock boost financing', desc: 'Grow your inventory with stock financing from our partner banks.' },
        { title: 'Stock insurance', desc: 'Protect your gas stock against theft and fire with vendor stock cover.' },
      ]
    : [
        { title: 'Instant payouts', desc: `Get paid the moment a delivery is confirmed — cash or ${country.payment}.` },
        { title: 'Set your prices', desc: 'You control your gas pricing and delivery radius. Grow at your own pace.' },
        { title: 'New customers', desc: 'Get matched with customers within 8km of your business automatically.' },
      ]

export default function VendorAreasPage() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>{country.showCredit
          ? 'Become a Gas Vendor in Kenya | LPG Dealer Stock Loan & Instant M-Pesa Payouts'
          : `Become a Gas Vendor in ${country.name} | Sell LPG Gas, Get Paid Instantly - MobiGas`}</title>
        <meta name="description" content={country.showCredit
          ? 'Join MobiGas as a verified LPG gas vendor in Kenya. Get instant M-Pesa payouts on every delivery and unlock vendor stock financing loans from partner banks.'
          : `Join MobiGas as a verified LPG gas vendor in ${country.name}. Get new customers and get paid instantly on every delivery — cash or ${country.payment}.`} />
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
          Gas Vendors Across {country.name}
        </h1>
        <p className="text-gray-500 text-lg mb-8 max-w-2xl">
          {country.showCredit
            ? 'Join MobiGas as a verified LPG vendor in any of these counties. Get new customers, instant M-Pesa payouts on every delivery, and unlock Stock Boost Loans from our partner banks after 3 consistent months on the platform.'
            : country.showStockBoost
              ? `Join MobiGas as a verified LPG vendor in any of these ${regionWord.toLowerCase()}s. Get new customers, instant payouts on every delivery, stock boost financing from partner banks, and stock insurance against theft and fire.`
              : `Join MobiGas as a verified LPG vendor in any of these ${regionWord.toLowerCase()}s. Get new customers and instant payouts on every delivery — cash or ${country.payment}.`}
        </p>

        <div className="grid sm:grid-cols-3 gap-4 mb-12">
          {perks.map(item => (
            <div key={item.title} className="bg-white rounded-xl border border-gray-100 p-5">
              <h3 className="font-bold text-[#0D1B40] text-sm mb-2">{item.title}</h3>
              <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <h2 className="text-lg font-bold text-[#0D1B40] mb-4">
          Become a vendor in your {regionWord.toLowerCase()}
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-12">
          {regions.map(region => (
            <Link
              key={region.slug}
              to={`/vendors/${region.slug}`}
              className="bg-white rounded-xl border border-gray-100 px-4 py-3 hover:border-[#F97316] hover:shadow-sm transition-all flex items-center gap-2"
            >
              <MapPin size={14} className="text-[#F97316] flex-shrink-0" />
              <span className="text-sm font-medium text-[#0D1B40]">{region.name}</span>
            </Link>
          ))}
        </div>

        <div className="bg-[#0D1B40] rounded-2xl p-8 text-center">
          <h3 className="text-xl font-bold text-white mb-2">Ready to grow your gas business?</h3>
          <p className="text-gray-300 text-sm mb-6 max-w-md mx-auto">
            Download the MobiGas Vendor app, get verified within 24 hours, and start receiving orders.
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

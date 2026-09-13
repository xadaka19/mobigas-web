import { Flame, ArrowLeft, MapPin, Truck } from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useNavigate, Link } from 'react-router-dom'
import cities from '../data/cities.json'

export default function GasDeliveryHubPage() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Gas Delivery Areas in Kenya | LPG Delivery Near You - MobiGas</title>
        <meta
          name="description"
          content={`MobiGas delivers LPG cooking gas in ${cities.length}+ towns and cities across Kenya. Find your town for 10-40 minute delivery, pay on credit via M-Pesa.`}
        />
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
          <Truck size={20} className="text-[#F97316]" />
          <span className="text-sm font-semibold text-[#F97316] uppercase tracking-wide">Gas Delivery</span>
        </div>
        <h1 className="text-4xl font-black text-[#0D1B40] mb-4">
          Gas Delivery Across Kenya
        </h1>
        <p className="text-gray-500 text-lg mb-12 max-w-2xl">
          MobiGas delivers cooking gas in {cities.length}+ towns and cities across Kenya. Find your
          town below for 10-40 minute delivery, verified vendors, and pay on credit via M-Pesa.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-12">
          {cities.map(city => (
            <Link
              key={city.slug}
              to={city.path}
              className="bg-white rounded-xl border border-gray-100 px-4 py-3 hover:border-[#F97316] hover:shadow-sm transition-all flex items-center gap-2"
            >
              <MapPin size={14} className="text-[#F97316] flex-shrink-0" />
              <span className="text-sm font-medium text-[#0D1B40]">{city.name}</span>
            </Link>
          ))}
        </div>

        <div className="bg-[#0D1B40] rounded-2xl p-8 text-center">
          <h3 className="text-xl font-bold text-white mb-2">Don't see your town?</h3>
          <p className="text-gray-300 text-sm mb-6 max-w-md mx-auto">
            We're expanding coverage every week. Download the app to check if we've launched near you.
          </p>
          <a
            href="/#download"
            className="inline-block bg-[#F97316] text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-orange-600 transition-colors"
          >
            Check availability
          </a>
        </div>
      </div>
    </div>
  )
}

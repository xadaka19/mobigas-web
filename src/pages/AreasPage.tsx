import { Flame, ArrowLeft, MapPin } from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useNavigate, Link } from 'react-router-dom'
import { kenyaCounties } from '../data/kenyaCounties'

export default function AreasPage() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Cooking Gas Delivery Near Me | MobiGas Coverage Areas Kenya</title>
        <meta name="description" content="Find MobiGas gas delivery coverage across all 47 counties in Kenya. Order LPG cooking gas on credit and get it delivered to your door in 10-40 minutes." />
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
          <MapPin size={20} className="text-[#F97316]" />
          <span className="text-sm font-semibold text-[#F97316] uppercase tracking-wide">Coverage Areas</span>
        </div>
        <h1 className="text-4xl font-black text-[#0D1B40] mb-4">
          Gas Delivery Across Kenya
        </h1>
        <p className="text-gray-500 text-lg mb-12 max-w-2xl">
          MobiGas connects you with verified gas vendors within 8km of your location.
          Select your county below to see specific areas we serve.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {kenyaCounties.map(county => (
            <Link
              key={county.slug}
              to={`/areas/${county.slug}`}
              className="bg-white rounded-xl border border-gray-100 px-4 py-3 hover:border-[#F97316] hover:shadow-sm transition-all flex items-center gap-2"
            >
              <MapPin size={14} className="text-[#F97316] flex-shrink-0" />
              <span className="text-sm font-medium text-[#0D1B40]">{county.name}</span>
            </Link>
          ))}
        </div>

        <div className="bg-[#0D1B40] rounded-2xl p-8 text-center mt-12">
          <h3 className="text-xl font-bold text-white mb-2">Don't see your area listed?</h3>
          <p className="text-gray-300 text-sm mb-6 max-w-md mx-auto">
            We're growing fast. Download the app and check live vendor availability near you —
            new areas are added regularly as more vendors join the platform.
          </p>
          <a
            href="/#download"
            className="inline-block bg-[#F97316] text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-orange-600 transition-colors"
          >
            Check availability in the app
          </a>
        </div>
      </div>
    </div>
  )
}

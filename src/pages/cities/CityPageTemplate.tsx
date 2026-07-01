import { Flame, ArrowLeft, MapPin, CheckCircle, Clock, Zap } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

interface CityPageProps {
  city: string
  county: string
  neighborhoods: string[]
  description: string
}

export default function CityPageTemplate({ city, county, neighborhoods, description }: CityPageProps) {
  const navigate = useNavigate()
  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Gas Delivery in {city} | Order LPG Gas on Credit - MobiGas</title>
        <meta name="description" content={`Fast cooking gas delivery in ${city} in 10-40 minutes. Order LPG gas on credit and pay later via M-Pesa. Verified vendors across ${city} neighborhoods.`} />
      </Helmet>
      <div className="bg-[#0D1B40] py-6 px-6">
        <div className="max-w-3xl mx-auto flex items-center gap-4">
          <button onClick={() => navigate('/areas')} className="text-gray-400 hover:text-white transition-colors">
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
          <MapPin size={20} className="text-[#F97316]" />
          <span className="text-sm font-semibold text-[#F97316] uppercase tracking-wide">{city}, {county}</span>
        </div>
        <h1 className="text-4xl font-black text-[#0D1B40] mb-4">Gas Delivery in {city}</h1>
        <p className="text-gray-500 text-lg mb-8 max-w-2xl">{description}</p>
        <div className="grid sm:grid-cols-3 gap-4 mb-10">
          {[
            { icon: Clock, title: '10-40 min delivery', desc: `Fast delivery from verified vendors near you across ${city}.` },
            { icon: Zap, title: 'Order on credit', desc: 'No cash needed — instant bank credit approval, pay later via M-Pesa.' },
            { icon: CheckCircle, title: 'Verified vendors', desc: `Every gas vendor in ${city} is verified by our team before accepting orders.` },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bg-white rounded-xl border border-gray-100 p-4">
              <Icon size={18} className="text-[#F97316] mb-2" />
              <h3 className="font-bold text-[#0D1B40] text-sm mb-1">{title}</h3>
              <p className="text-gray-500 text-xs">{desc}</p>
            </div>
          ))}
        </div>
        <div className="bg-white rounded-2xl border border-gray-100 p-6 mb-10">
          <h2 className="text-lg font-bold text-[#0D1B40] mb-4">{city} areas we serve</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {neighborhoods.map(n => (
              <div key={n} className="flex items-center gap-2 text-sm text-gray-600">
                <CheckCircle size={14} className="text-green-500 flex-shrink-0" />
                {n}
              </div>
            ))}
          </div>
        </div>
        <div className="bg-[#0D1B40] rounded-2xl p-8 text-center">
          <h3 className="text-xl font-bold text-white mb-2">Order gas in {city} today</h3>
          <p className="text-gray-300 text-sm mb-6">Download MobiGas and get gas delivered to your door.</p>
          <a href="/#download" className="inline-block bg-[#F97316] text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-orange-600 transition-colors">
            Download MobiGas
          </a>
        </div>
      </div>
    </div>
  )
}

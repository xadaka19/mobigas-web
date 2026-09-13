import { Flame, ArrowLeft, MapPin, CheckCircle } from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useNavigate, useParams, Navigate } from 'react-router-dom'
import { regions } from '../data/regions'
import { country } from '../config/countries'

export default function CountyPage() {
  const navigate = useNavigate()
  const { slug } = useParams<{ slug: string }>()
  const region = regions.find(c => c.slug === slug)

  if (!region) {
    return <Navigate to="/areas" replace />
  }

  const label = `${region.name}${country.code === 'KE' ? ' County' : ''}`
  const orderCopy = country.showCredit
    ? `Order gas on credit and get it delivered to your door in ${label}. MobiGas connects you with verified vendors within 8km of your location — pay within 30 days via M-Pesa.`
    : `Order gas and get it delivered to your door in ${label}. MobiGas connects you with verified vendors within 8km of your location — pay on delivery via ${country.payment}.`

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>{country.showCredit
          ? `Gas Delivery in ${label} | Order LPG Gas on Credit, Pay via M-Pesa`
          : `Gas Delivery in ${label} | Order LPG Gas, Pay on Delivery - MobiGas`}</title>
        <meta name="description" content={country.showCredit
          ? `Order cooking gas on credit in ${label}, ${country.name}. MobiGas delivers LPG gas in 10-40 minutes - pay via M-Pesa within 30 days.`
          : `Order cooking gas in ${label}, ${country.name}. MobiGas delivers LPG gas in 10-40 minutes - pay on delivery via ${country.payment}.`} />
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
          <span className="text-sm font-semibold text-[#F97316] uppercase tracking-wide">Coverage Area</span>
        </div>
        <h1 className="text-4xl font-black text-[#0D1B40] mb-4">
          Gas Delivery in {label}
        </h1>
        <p className="text-gray-500 text-lg mb-10 max-w-xl">
          {orderCopy}
        </p>

        <div className="bg-white rounded-2xl border border-gray-100 p-6 mb-10">
          <h2 className="text-lg font-bold text-[#0D1B40] mb-4">
            Areas served in {region.name}
          </h2>
          <div className="grid grid-cols-2 gap-3">
            {region.areas.map(area => (
              <div key={area} className="flex items-center gap-2 text-sm text-gray-600">
                <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
                {area}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#0D1B40] rounded-2xl p-8 text-center">
          <h3 className="text-xl font-bold text-white mb-2">
            Ready to order gas in {region.name}?
          </h3>
          <p className="text-gray-300 text-sm mb-6 max-w-md mx-auto">
            Download the MobiGas app and check live vendor availability in your specific area.
          </p>
          <a
            href="/#download"
            className="inline-block bg-[#F97316] text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-orange-600 transition-colors"
          >
            Download the app
          </a>
        </div>
      </div>
    </div>
  )
}

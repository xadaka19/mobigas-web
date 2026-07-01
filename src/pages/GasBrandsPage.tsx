import { Flame, ArrowLeft, CheckCircle } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

const brands = [
  { name: 'Total Gas', description: 'One of the most widely available LPG brands in Kenya, sold in 6kg and 13kg cylinders.' },
  { name: 'K-Gas', description: 'Kenya Oil Company\'s LPG brand, popular across urban and peri-urban areas.' },
  { name: 'Hashi Gas', description: 'Widely distributed brand known for competitive pricing on refills.' },
  { name: 'Pro Gas', description: 'Trusted LPG brand available through independent vendors across Kenya.' },
  { name: 'Lake Gas', description: 'Popular in western Kenya and parts of the Rift Valley region.' },
  { name: 'Orion Gas', description: 'Available through independent distributors in major Kenyan cities.' },
  { name: 'Taifa Gas', description: 'Affordable LPG option popular in low and middle-income households.' },
  { name: 'Rubis Gas', description: 'Premium LPG brand from Rubis Energy Kenya, available in major outlets.' },
  { name: 'Supa Gas', description: 'Budget-friendly brand widely used in Nairobi and surrounding counties.' },
  { name: 'Safe Gas', description: 'LPG brand focused on safety-compliant cylinders for household use.' },
]

export default function GasBrandsPage() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Cooking Gas Brands in Kenya | LPG Cylinder Brands - MobiGas</title>
        <meta name="description" content="Find all major cooking gas brands in Kenya including Total, K-Gas, Hashi, Pro Gas, Rubis and more. Order any LPG brand on credit via MobiGas and pay later via M-Pesa." />
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
          Cooking Gas Brands in Kenya
        </h1>
        <p className="text-gray-500 text-lg mb-10 max-w-2xl">
          Kenya has a wide range of LPG cooking gas brands available through independent
          vendors. On MobiGas, you can see which brands your nearest verified vendor carries
          and order on credit — no cash needed upfront.
        </p>

        <div className="grid sm:grid-cols-2 gap-3 mb-12">
          {brands.map(brand => (
            <div key={brand.name} className="bg-white rounded-xl border border-gray-100 p-4">
              <div className="flex items-center gap-2 mb-1">
                <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
                <span className="font-bold text-[#0D1B40] text-sm">{brand.name}</span>
              </div>
              <p className="text-gray-500 text-xs leading-relaxed pl-6">{brand.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 p-6 mb-10">
          <h2 className="text-lg font-bold text-[#0D1B40] mb-3">Which gas brand is best in Kenya?</h2>
          <p className="text-gray-500 text-sm leading-relaxed">
            The best gas brand depends on your location, budget, and cylinder size preference.
            Most Kenyan households use Total, K-Gas, or Hashi Gas due to wide availability.
            On MobiGas, vendors list the brands they carry so you can choose your preferred
            brand when ordering. If your nearest vendor doesn't carry a specific brand, we'll
            match you with one who does.
          </p>
        </div>

        <div className="bg-[#0D1B40] rounded-2xl p-8 text-center">
          <h3 className="text-xl font-bold text-white mb-2">Order your preferred brand on credit</h3>
          <p className="text-gray-300 text-sm mb-6 max-w-md mx-auto">
            Find verified vendors near you carrying your preferred gas brand and order on credit today.
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

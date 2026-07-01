import { Flame, ArrowLeft, CheckCircle } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

export default function EmergencyGasPage() {
  const navigate = useNavigate()
  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Emergency Gas Delivery Kenya | Ran Out of Gas? Order Now - MobiGas</title>
        <meta name="description" content="Ran out of cooking gas in Kenya? Get emergency gas delivery in 10-40 minutes with MobiGas. Order on credit, no cash needed, and pay later via M-Pesa." />
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
        <h1 className="text-4xl font-black text-[#0D1B40] mb-4">Emergency Gas Delivery in Kenya — We're Fast</h1>
        <p className="text-gray-500 text-lg mb-10 max-w-2xl">Ran out of gas mid-cooking with no cash on hand? Don't panic. MobiGas connects you with verified gas vendors near you who can deliver in 10-40 minutes — on credit, so no cash is needed right now.</p>
                <div className="bg-white rounded-2xl border border-gray-100 p-6 mb-8">
          <h2 className="text-lg font-bold text-[#0D1B40] mb-4">What to do right now</h2>
          <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm text-gray-600">
              <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
              Download the MobiGas app if not already installed
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
              Log in and check your available credit limit
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
              Select a nearby vendor and place your order immediately
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
              Track the vendor live as they head to you
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
              Confirm delivery with your PIN and start cooking
            </div>
          </div>
        </div>
        <div className="bg-white rounded-2xl border border-gray-100 p-6 mb-8">
          <h2 className="text-lg font-bold text-[#0D1B40] mb-4">Why MobiGas is your best emergency option</h2>
          <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm text-gray-600">
              <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
              Fastest gas delivery in Kenya — 10-40 minutes from verified vendors
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
              No cash needed — order on credit, pay M-Pesa within 30 days
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
              Available day and night across major Kenyan cities
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
              No minimum order — order exactly the size you need right now
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
              Live GPS tracking so you know exactly when gas arrives
            </div>
          </div>
        </div>

        <div className="bg-[#0D1B40] rounded-2xl p-8 text-center">
          <h3 className="text-xl font-bold text-white mb-2">Get gas delivered in minutes</h3>
          <p className="text-gray-300 text-sm mb-6 max-w-md mx-auto">Download MobiGas and order from the nearest verified vendor now.</p>
          <a href="/#download" className="inline-block bg-[#F97316] text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-orange-600 transition-colors">
            Order Emergency Gas Now
          </a>
        </div>
      </div>
    </div>
  )
}

import { Flame, ArrowLeft, CheckCircle } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

export default function LpgGasDeliveryPage() {
  const navigate = useNavigate()
  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>LPG Gas Delivery in Kenya | Order Cooking Gas on Credit - MobiGas</title>
        <meta name="description" content="Order LPG cooking gas delivery anywhere in Kenya on credit. MobiGas connects you with verified LPG dealers near you — get gas in 10-40 minutes and pay later via M-Pesa." />
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
        <h1 className="text-4xl font-black text-[#0D1B40] mb-4">LPG Gas Delivery in Kenya</h1>
        <p className="text-gray-500 text-lg mb-10 max-w-2xl">Need LPG gas delivered to your home or business in Kenya? MobiGas connects you with verified LPG dealers within 8km of your location for fast delivery — on credit, so you can pay within 30 days via M-Pesa rather than needing cash upfront.</p>
                <div className="bg-white rounded-2xl border border-gray-100 p-6 mb-8">
          <h2 className="text-lg font-bold text-[#0D1B40] mb-4">What is LPG gas?</h2>
          <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm text-gray-600">
              <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
              LPG stands for Liquefied Petroleum Gas — the most common cooking fuel in Kenya
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
              Available in 3kg, 6kg, and 13kg cylinders for household and business use
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
              Brands include Total, K-Gas, Hashi, Pro Gas, Rubis, Taifa Gas and more
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
              Refill and full kit (cylinder + gas) options available through MobiGas vendors
            </div>
          </div>
        </div>
        <div className="bg-white rounded-2xl border border-gray-100 p-6 mb-8">
          <h2 className="text-lg font-bold text-[#0D1B40] mb-4">Why order LPG through MobiGas</h2>
          <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm text-gray-600">
              <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
              Order on credit — no cash needed at the time of delivery
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
              Verified LPG dealers only — every vendor is checked before joining
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
              Live tracking — see your vendor approaching on a map
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
              Fast delivery — most orders arrive within 10-40 minutes
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
              Available across Nairobi, Mombasa, Kisumu, Nakuru, and all 47 counties
            </div>
          </div>
        </div>

        <div className="bg-[#0D1B40] rounded-2xl p-8 text-center">
          <h3 className="text-xl font-bold text-white mb-2">Get LPG gas delivered today</h3>
          <p className="text-gray-300 text-sm mb-6 max-w-md mx-auto">Download MobiGas and order from verified LPG vendors near you.</p>
          <a href="/#download" className="inline-block bg-[#F97316] text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-orange-600 transition-colors">
            Order LPG Gas Now
          </a>
        </div>
      </div>
    </div>
  )
}

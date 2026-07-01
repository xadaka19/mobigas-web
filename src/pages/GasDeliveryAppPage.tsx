import { Flame, ArrowLeft, CheckCircle } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

export default function GasDeliveryAppPage() {
  const navigate = useNavigate()
  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Gas Delivery App in Kenya | Download MobiGas - Order LPG on Credit</title>
        <meta name="description" content="Download the best gas delivery app in Kenya. MobiGas lets you order LPG cooking gas on credit, track delivery live, and pay later via M-Pesa. Available on Android." />
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
        <h1 className="text-4xl font-black text-[#0D1B40] mb-4">Gas Delivery App in Kenya</h1>
        <p className="text-gray-500 text-lg mb-10 max-w-2xl">Looking for a reliable gas delivery app in Kenya? MobiGas is the only app built specifically for ordering LPG cooking gas on credit — instant bank approval, live delivery tracking, and M-Pesa repayment within 30 days.</p>
                <div className="bg-white rounded-2xl border border-gray-100 p-6 mb-8">
          <h2 className="text-lg font-bold text-[#0D1B40] mb-4">What the MobiGas app does</h2>
          <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm text-gray-600">
              <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
              Browse verified gas vendors within 8km of your location
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
              Order 3kg, 6kg, or 13kg LPG cylinders on credit instantly
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
              Track your vendor live on the map as they deliver
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
              Confirm delivery with a 4-digit PIN — vendor gets paid instantly
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
              Repay your partner bank via M-Pesa within 30 days
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
              Apply for a Stock Boost Loan as a vendor after 3 months
            </div>
          </div>
        </div>
        <div className="bg-white rounded-2xl border border-gray-100 p-6 mb-8">
          <h2 className="text-lg font-bold text-[#0D1B40] mb-4">Why MobiGas is the best gas app in Kenya</h2>
          <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm text-gray-600">
              <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
              Bank-backed credit — not an informal lender or shylock
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
              Verified vendors only — every gas dealer is vetted before onboarding
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
              Live GPS tracking — see exactly where your gas is
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
              Instant M-Pesa payouts to vendors — no cash handling needed
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
              Available across all 47 counties in Kenya
            </div>
          </div>
        </div>

        <div className="bg-[#0D1B40] rounded-2xl p-8 text-center">
          <h3 className="text-xl font-bold text-white mb-2">Download the MobiGas app today</h3>
          <p className="text-gray-300 text-sm mb-6 max-w-md mx-auto">Available on Android — search MobiGas on Google Play Store.</p>
          <a href="/#download" className="inline-block bg-[#F97316] text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-orange-600 transition-colors">
            Download MobiGas App
          </a>
        </div>
      </div>
    </div>
  )
}

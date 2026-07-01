import { Flame, ArrowLeft, CheckCircle, Smartphone, Star } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

export default function GasLoanAppsPage() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Gas Loan Apps in Kenya 2026 | Best Gas on Credit App - MobiGas</title>
        <meta name="description" content="Looking for a gas loan app in Kenya? MobiGas lets you order cooking gas on credit with instant bank approval and pay later via M-Pesa. No hidden fees." />
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
          Gas Loan Apps in Kenya
        </h1>
        <p className="text-gray-500 text-lg mb-10 max-w-2xl">
          Searching for an app to get cooking gas on credit in Kenya? MobiGas is built
          specifically for this — connecting you to verified LPG vendors with instant
          bank-backed credit, delivered fast, and repaid via M-Pesa.
        </p>

        <div className="bg-white rounded-2xl border border-gray-100 p-6 mb-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-[#F97316] rounded-xl flex items-center justify-center">
              <Flame size={22} className="text-white" />
            </div>
            <div>
              <div className="font-bold text-[#0D1B40]">MobiGas</div>
              <div className="flex items-center gap-1">
                {[1,2,3,4,5].map(i => <Star key={i} size={12} className="text-yellow-400 fill-yellow-400" />)}
                <span className="text-xs text-gray-400 ml-1">Kenya's gas-on-credit platform</span>
              </div>
            </div>
          </div>
          <div className="space-y-2">
            {[
              'Order 3kg, 6kg, 13kg LPG gas cylinders on credit',
              'Instant credit decision from regulated partner banks',
              'Gas delivered in 10-40 minutes from verified vendors',
              'Repay within 30 days via M-Pesa — no hidden charges',
              'Available across Kenya — 47 counties and growing',
            ].map(point => (
              <div key={point} className="flex items-center gap-2 text-sm text-gray-600">
                <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
                {point}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 p-6 mb-10">
          <h2 className="text-lg font-bold text-[#0D1B40] mb-4">What makes a good gas credit app?</h2>
          <div className="space-y-3">
            {[
              { title: 'Bank-backed credit', desc: 'Credit should come from a regulated lender, not an informal money lender — MobiGas works exclusively with licensed partner banks.' },
              { title: 'Transparent repayment terms', desc: 'You should know exactly what you owe and when it is due — no surprise deductions or hidden fees.' },
              { title: 'Verified vendors only', desc: 'Gas vendors on the platform should be vetted and verified before they can serve customers.' },
              { title: 'Fast delivery', desc: 'The best gas delivery apps connect you with vendors nearby for same-hour delivery.' },
            ].map(item => (
              <div key={item.title} className="flex gap-3">
                <Smartphone size={18} className="text-[#F97316] flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-medium text-[#0D1B40] text-sm">{item.title}</div>
                  <div className="text-gray-500 text-xs mt-0.5">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#0D1B40] rounded-2xl p-8 text-center">
          <h3 className="text-xl font-bold text-white mb-2">Download MobiGas today</h3>
          <p className="text-gray-300 text-sm mb-6 max-w-md mx-auto">
            Kenya's only dedicated gas-on-credit delivery app. Apply for credit, order gas, and pay later.
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

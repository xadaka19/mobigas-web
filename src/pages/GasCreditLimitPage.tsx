import { Flame, ArrowLeft, CheckCircle } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

export default function GasCreditLimitPage() {
  const navigate = useNavigate()
  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Gas Credit Limit Kenya | How to Increase Your MobiGas Credit - MobiGas</title>
        <meta name="description" content="Learn how your MobiGas gas credit limit is set in Kenya and how to increase it over time. Credit is provided by partner banks based on your CRB score and repayment history." />
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
        <h1 className="text-4xl font-black text-[#0D1B40] mb-4">Gas Credit Limit in Kenya — How It Works</h1>
        <p className="text-gray-500 text-lg mb-10 max-w-2xl">Your gas credit limit on MobiGas is set by our partner bank based on your creditworthiness — not by MobiGas itself. Understanding how the limit is set, and how to grow it over time, helps you get the most out of the platform.</p>
                <div className="bg-white rounded-2xl border border-gray-100 p-6 mb-8">
          <h2 className="text-lg font-bold text-[#0D1B40] mb-4">How your credit limit is set</h2>
          <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm text-gray-600">
              <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
              Partner bank runs an instant CRB (Credit Reference Bureau) check at registration
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
              Your CRB score, income signals, and guarantors influence the initial limit
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
              MobiGas does not set or control your credit limit — the bank does
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
              Initial limits vary — some customers start lower and grow over time
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
              You are notified of your approved limit before placing any order
            </div>
          </div>
        </div>
        <div className="bg-white rounded-2xl border border-gray-100 p-6 mb-8">
          <h2 className="text-lg font-bold text-[#0D1B40] mb-4">How to increase your gas credit limit over time</h2>
          <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm text-gray-600">
              <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
              Repay on time consistently — timely repayment improves your CRB profile
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
              Use your credit regularly — active accounts may be reviewed for limit increases
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
              Ensure your guarantors have clean CRB records
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
              Contact your partner bank directly to request a limit review
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
              Avoid late payments — these negatively affect your CRB score and limit
            </div>
          </div>
        </div>

        <div className="bg-[#0D1B40] rounded-2xl p-8 text-center">
          <h3 className="text-xl font-bold text-white mb-2">Get your gas credit limit today</h3>
          <p className="text-gray-300 text-sm mb-6 max-w-md mx-auto">Download MobiGas, apply for credit, and start ordering gas without cash.</p>
          <a href="/#download" className="inline-block bg-[#F97316] text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-orange-600 transition-colors">
            Apply for Gas Credit Now
          </a>
        </div>
      </div>
    </div>
  )
}

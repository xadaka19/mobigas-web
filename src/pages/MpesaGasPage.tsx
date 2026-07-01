import { Flame, ArrowLeft, CheckCircle } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

export default function MpesaGasPage() {
  const navigate = useNavigate()
  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Pay for Gas via M-Pesa in Kenya | Gas on Credit, Repay via M-Pesa - MobiGas</title>
        <meta name="description" content="Order cooking gas on credit and repay via M-Pesa within 30 days. MobiGas works with partner banks to give you instant gas credit — pay back whenever convenient via M-Pesa." />
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
        <h1 className="text-4xl font-black text-[#0D1B40] mb-4">Pay for Gas via M-Pesa in Kenya</h1>
        <p className="text-gray-500 text-lg mb-10 max-w-2xl">M-Pesa is Kenya's most trusted payment platform, and MobiGas is built around it. Order gas on credit now and repay your partner bank directly via M-Pesa within 30 days — at any time, from anywhere.</p>
                <div className="bg-white rounded-2xl border border-gray-100 p-6 mb-8">
          <h2 className="text-lg font-bold text-[#0D1B40] mb-4">How M-Pesa gas payment works on MobiGas</h2>
          <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm text-gray-600">
              <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
              Apply for credit once — partner bank sets your limit via instant CRB check
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
              Order gas on credit anytime within your approved limit
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
              Vendor delivers and gets paid instantly to their M-Pesa by the bank
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
              You repay the bank via M-Pesa within 30 days at your convenience
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
              No card needed, no bank account required — just M-Pesa
            </div>
          </div>
        </div>
        <div className="bg-white rounded-2xl border border-gray-100 p-6 mb-8">
          <h2 className="text-lg font-bold text-[#0D1B40] mb-4">Why M-Pesa gas credit makes sense in Kenya</h2>
          <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm text-gray-600">
              <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
              M-Pesa is already on your phone — no new accounts or apps to set up for payment
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
              Pay back on your own schedule within the 30-day window
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
              Transparent repayment — you know exactly what you owe before you order
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
              Credit is provided by regulated partner banks, not informal lenders
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
              Build a repayment track record that can increase your credit limit over time
            </div>
          </div>
        </div>

        <div className="bg-[#0D1B40] rounded-2xl p-8 text-center">
          <h3 className="text-xl font-bold text-white mb-2">Order gas on credit and pay via M-Pesa</h3>
          <p className="text-gray-300 text-sm mb-6 max-w-md mx-auto">Download MobiGas and get cooking gas delivered today.</p>
          <a href="/#download" className="inline-block bg-[#F97316] text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-orange-600 transition-colors">
            Order Gas, Pay via M-Pesa
          </a>
        </div>
      </div>
    </div>
  )
}

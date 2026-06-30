import { Flame, ArrowLeft, CheckCircle, Banknote, TrendingUp, Clock } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

export default function GasVendorLoanPage() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Gas Dealer Stock Loan Kenya | LPG Vendor Stock Financing - MobiGas</title>
        <meta name="description" content="Grow your gas business with a Stock Boost Loan from MobiGas partner banks. LPG dealers in Kenya can access stock financing after 3 months active on the platform." />
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
          Gas Dealer Stock Loan in Kenya
        </h1>
        <p className="text-gray-500 text-lg mb-10 max-w-2xl">
          Running low on gas stock and losing customers to competitors? MobiGas connects
          verified LPG vendors with Stock Boost Loans from our partner banks — buy more
          stock, fulfill more orders, and grow your gas business without using your own savings.
        </p>

        <div className="grid sm:grid-cols-3 gap-4 mb-12">
          {[
            { icon: Banknote, title: 'Bank-backed financing', desc: 'Loans provided by regulated partner banks, not informal lenders or shylocks.' },
            { icon: TrendingUp, title: 'Grow with demand', desc: 'Buy more cylinders to meet rising orders from MobiGas customers near you.' },
            { icon: Clock, title: 'Fast disbursement', desc: 'Once approved, funds are disbursed quickly so you can restock without delay.' },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bg-white rounded-xl border border-gray-100 p-5">
              <Icon size={20} className="text-[#F97316] mb-2" />
              <h3 className="font-bold text-[#0D1B40] text-sm mb-1">{title}</h3>
              <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 p-6 mb-10">
          <h2 className="text-lg font-bold text-[#0D1B40] mb-4">Who qualifies for a Stock Boost Loan?</h2>
          <div className="space-y-2">
            {[
              'Active on the MobiGas vendor platform for at least 3 consistent months',
              'Completed 30 or more deliveries through MobiGas',
              'Verified business with valid registration or National ID on file',
              'Good standing with no flagged fraud or compliance issues',
            ].map(point => (
              <div key={point} className="flex items-center gap-2 text-sm text-gray-600">
                <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
                {point}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 p-6 mb-10">
          <h2 className="text-lg font-bold text-[#0D1B40] mb-4">How it works</h2>
          <div className="space-y-3">
            {[
              'Register as a MobiGas vendor and get verified within 24 hours.',
              'Deliver orders consistently and build your track record on the platform.',
              'After 3 months and 30+ deliveries, apply for a Stock Boost Loan in the vendor app.',
              'Our partner bank reviews your application and disburses funds if approved.',
              'Use the funds to buy more gas stock and serve more customers.',
            ].map((step, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#F97316]/10 text-[#F97316] text-xs font-bold flex items-center justify-center flex-shrink-0">
                  {i + 1}
                </div>
                <p className="text-sm text-gray-600">{step}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#0D1B40] rounded-2xl p-8 text-center">
          <h3 className="text-xl font-bold text-white mb-2">Start building your track record today</h3>
          <p className="text-gray-300 text-sm mb-6 max-w-md mx-auto">
            Join MobiGas as a vendor now to begin qualifying for stock financing.
          </p>
          <a
            href="/#for-vendors"
            className="inline-block bg-[#F97316] text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-orange-600 transition-colors"
          >
            Join as a vendor
          </a>
        </div>
      </div>
    </div>
  )
}

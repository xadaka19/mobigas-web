import { Flame, ArrowLeft, Building2, Repeat, Receipt } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

export default function BusinessGasPage() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Gas Delivery for Restaurants & Businesses in Kenya | MobiGas</title>
        <meta name="description" content="Reliable cooking gas delivery for restaurants, cafes, and small businesses in Kenya. Order on credit, manage recurring gas needs, and pay later via M-Pesa." />
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
        <div className="inline-flex items-center gap-2 bg-orange-50 text-[#F97316] text-sm font-semibold px-4 py-2 rounded-full mb-6">
          <Building2 size={14} />
          For restaurants, cafes & small businesses
        </div>
        <h1 className="text-4xl font-black text-[#0D1B40] mb-4">
          Gas Delivery for Your Business
        </h1>
        <p className="text-gray-500 text-lg mb-10 max-w-2xl">
          Running out of gas mid-service can stop a kitchen cold. MobiGas helps restaurants,
          cafes, and small food businesses in Kenya keep cooking gas stocked reliably \u2014
          ordered on credit, delivered fast, with no need to disrupt cash flow.
        </p>

        <div className="grid sm:grid-cols-3 gap-4 mb-12">
          {[
            { icon: Repeat, title: 'Reliable restocking', desc: 'Order gas whenever you need it from verified vendors near your business, without cash on hand.' },
            { icon: Receipt, title: 'Track your orders', desc: 'Keep a clear record of every gas order and repayment through the app.' },
            { icon: Building2, title: 'Built for businesses', desc: 'Whether you order weekly or occasionally, MobiGas scales to your kitchen\u2019s gas needs.' },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bg-white rounded-xl border border-gray-100 p-5">
              <Icon size={20} className="text-[#F97316] mb-2" />
              <h3 className="font-bold text-[#0D1B40] text-sm mb-1">{title}</h3>
              <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 p-6 mb-10">
          <h2 className="text-lg font-bold text-[#0D1B40] mb-4">Why businesses choose gas on credit</h2>
          <div className="space-y-2 text-sm text-gray-600">
            <p>• Avoid disrupting daily cash flow for routine gas restocking</p>
            <p>• Get gas delivered fast \u2014 don't let your kitchen sit idle waiting</p>
            <p>• Repay within 30 days via M-Pesa once revenue comes in</p>
            <p>• Credit is provided by regulated partner banks, fully transparent</p>
          </div>
        </div>

        <div className="bg-[#0D1B40] rounded-2xl p-8 text-center">
          <h3 className="text-xl font-bold text-white mb-2">Keep your kitchen running</h3>
          <p className="text-gray-300 text-sm mb-6 max-w-md mx-auto">
            Download MobiGas and order gas for your business today.
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

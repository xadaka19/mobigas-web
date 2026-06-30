import { Flame, ArrowLeft, CheckCircle, Zap, Shield, Clock } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

export default function BuyGasOnCreditPage() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Buy Gas on Credit in Kenya | No Deposit, Pay Later via M-Pesa</title>
        <meta name="description" content="Buy cooking gas on credit in Kenya with no deposit required. Get instant credit approval, gas delivered in 10-40 minutes, and repay within 30 days via M-Pesa." />
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
          Buy Gas on Credit in Kenya — No Deposit Required
        </h1>
        <p className="text-gray-500 text-lg mb-10 max-w-2xl">
          Never run out of cooking gas because you're short on cash. MobiGas lets you order
          6kg or 13kg LPG gas cylinders on credit, delivered to your door, with no upfront
          payment — repay your partner bank within 30 days via M-Pesa.
        </p>

        <div className="grid sm:grid-cols-3 gap-4 mb-12">
          {[
            { icon: Zap, title: 'Instant approval', desc: 'Apply once and get an instant credit decision from our partner bank — no waiting days for a loan.' },
            { icon: Clock, title: '10–40 min delivery', desc: 'Order gas now and get it delivered to your home or business the same hour.' },
            { icon: Shield, title: 'No hidden fees', desc: 'Transparent pricing. Repay exactly what your partner bank approved, within 30 days.' },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bg-white rounded-xl border border-gray-100 p-5">
              <Icon size={20} className="text-[#F97316] mb-2" />
              <h3 className="font-bold text-[#0D1B40] text-sm mb-1">{title}</h3>
              <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 p-6 mb-10">
          <h2 className="text-lg font-bold text-[#0D1B40] mb-4">How buying gas on credit works</h2>
          <div className="space-y-3">
            {[
              'Download the MobiGas app and register with your National ID and phone number.',
              'Apply for credit — our partner bank runs an instant CRB check and sets your limit.',
              'Browse verified gas vendors near you and select your cylinder size (6kg, 13kg etc.).',
              'Confirm your order — no cash needed. Your vendor delivers in 10–40 minutes.',
              'Give the vendor your 4-digit PIN to confirm delivery — the bank pays them instantly.',
              'Repay your partner bank via M-Pesa anytime within 30 days.',
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

        <div className="bg-white rounded-2xl border border-gray-100 p-6 mb-10">
          <h2 className="text-lg font-bold text-[#0D1B40] mb-4">Why buy gas on credit instead of cash?</h2>
          <div className="space-y-2">
            {[
              'No need to have cash ready exactly when you run out of gas',
              'Avoid borrowing from friends or family for an emergency gas purchase',
              'Credit is provided by regulated, licensed partner banks — not informal lenders',
              'Build a credit history with your partner bank through consistent repayment',
              'Same fast delivery as paying cash — 10 to 40 minutes',
            ].map(point => (
              <div key={point} className="flex items-center gap-2 text-sm text-gray-600">
                <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
                {point}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#0D1B40] rounded-2xl p-8 text-center">
          <h3 className="text-xl font-bold text-white mb-2">Ready to order gas on credit?</h3>
          <p className="text-gray-300 text-sm mb-6 max-w-md mx-auto">
            Download the app, apply for your credit limit, and get gas delivered today.
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

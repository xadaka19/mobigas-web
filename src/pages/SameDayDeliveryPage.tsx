import { Flame, ArrowLeft, Zap, MapPin, Clock } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

export default function SameDayDeliveryPage() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Same Day Gas Delivery in Kenya | Emergency LPG Gas - MobiGas</title>
        <meta name="description" content="Run out of cooking gas? Get same-day emergency gas delivery in Kenya in 10-40 minutes with MobiGas - order on credit, no cash needed, pay later via M-Pesa." />
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
          <Zap size={14} />
          Gas delivered in 10–40 minutes
        </div>
        <h1 className="text-4xl font-black text-[#0D1B40] mb-4">
          Ran Out of Gas? Get Same-Day Delivery Now
        </h1>
        <p className="text-gray-500 text-lg mb-10 max-w-2xl">
          Nothing worse than running out of cooking gas mid-meal with no cash on hand.
          MobiGas connects you with verified vendors near you for fast, same-day gas
          delivery — on credit, so you don't need money upfront.
        </p>

        <div className="grid sm:grid-cols-3 gap-4 mb-12">
          {[
            { icon: Clock, title: '10–40 minutes', desc: 'Most deliveries arrive within this window depending on vendor proximity.' },
            { icon: MapPin, title: 'Vendors near you', desc: 'We match you with verified vendors within 8km of your location automatically.' },
            { icon: Zap, title: 'No cash needed', desc: 'Order on credit instantly if you already have an approved limit — pay later via M-Pesa.' },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bg-white rounded-xl border border-gray-100 p-5">
              <Icon size={20} className="text-[#F97316] mb-2" />
              <h3 className="font-bold text-[#0D1B40] text-sm mb-1">{title}</h3>
              <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 p-6 mb-10">
          <h2 className="text-lg font-bold text-[#0D1B40] mb-4">What to do right now</h2>
          <div className="space-y-3">
            {[
              'Download the MobiGas app if you haven\u2019t already.',
              'If you have an approved credit limit, place your order immediately.',
              'If not yet approved, apply now — our partner bank gives an instant credit decision.',
              'Track your vendor live on the map as they head to you.',
              'Confirm delivery with your 4-digit PIN and start cooking.',
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
          <h3 className="text-xl font-bold text-white mb-2">Get your gas delivered now</h3>
          <p className="text-gray-300 text-sm mb-6 max-w-md mx-auto">
            Download MobiGas and order from verified vendors near you in minutes.
          </p>
          <a
            href="/#download"
            className="inline-block bg-[#F97316] text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-orange-600 transition-colors"
          >
            Order gas now
          </a>
        </div>
      </div>
    </div>
  )
}

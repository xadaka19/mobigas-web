import { Flame, ArrowLeft, Banknote, ShieldCheck, MapPin, Clock } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

const steps = [
  { title: 'Download MobiGas & set your location', text: 'The app shows verified gas vendors within 8km of you, with their live prices.' },
  { title: 'Choose a vendor and select cash payment', text: 'Pick your cylinder size and brand, then choose "Pay cash on delivery" at checkout — no credit application needed.' },
  { title: 'Pay the rider when your gas arrives', text: 'Confirm delivery with your secure PIN and pay the exact price shown in the app. The vendor only gets marked as paid after you confirm.' },
]

const benefits = [
  { icon: Banknote, title: 'No credit needed', text: 'Cash orders skip the credit application entirely — anyone can order.' },
  { icon: ShieldCheck, title: 'Price locked in the app', text: 'You pay exactly what the app showed when you ordered. No inflated doorstep prices.' },
  { icon: MapPin, title: 'Verified vendors only', text: 'Every vendor is EPRA-document verified by MobiGas before they can sell.' },
  { icon: Clock, title: 'Delivery in 10-40 minutes', text: 'Vendors near you deliver fast — most orders arrive within the hour.' },
]

export default function CashOrderPage() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Order Gas Cash on Delivery in Kenya | Pay When It Arrives - MobiGas</title>
        <meta name="description" content="Order cooking gas and pay cash on delivery anywhere in Kenya. Compare verified vendor prices in the MobiGas app, order in seconds, and pay the rider when your gas arrives." />
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
          Order Gas, Pay Cash on Delivery
        </h1>
        <p className="text-gray-500 text-lg mb-10 max-w-2xl">
          Prefer paying cash? MobiGas isn't only gas on credit — you can order from
          verified vendors near you and pay cash when your cylinder arrives. Compare
          prices upfront, order in seconds, and pay only after you confirm delivery.
        </p>

        <div className="grid sm:grid-cols-2 gap-3 mb-12">
          {benefits.map(b => (
            <div key={b.title} className="bg-white rounded-xl border border-gray-100 p-4">
              <div className="flex items-center gap-2 mb-1">
                <b.icon size={16} className="text-[#F97316] flex-shrink-0" />
                <span className="font-bold text-[#0D1B40] text-sm">{b.title}</span>
              </div>
              <p className="text-gray-500 text-xs leading-relaxed pl-6">{b.text}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 p-6 mb-10">
          <h2 className="text-lg font-bold text-[#0D1B40] mb-4">How cash on delivery works</h2>
          <div className="space-y-4">
            {steps.map((s, i) => (
              <div key={s.title} className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-[#F97316] text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                  {i + 1}
                </div>
                <div>
                  <p className="font-bold text-[#0D1B40] text-sm">{s.title}</p>
                  <p className="text-gray-500 text-xs leading-relaxed">{s.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 p-6 mb-10">
          <h2 className="text-lg font-bold text-[#0D1B40] mb-3">Cash or credit — which should you choose?</h2>
          <p className="text-gray-500 text-sm leading-relaxed">
            Cash on delivery is the fastest way to order: no application, no approval,
            just pick a vendor and pay when the gas arrives. Gas on credit is for the
            days cash is tight — a MobiGas partner bank pays the vendor for you, and
            you repay within 30 days via M-Pesa. You can switch between the two on
            every order.
          </p>
        </div>

        <div className="bg-[#0D1B40] rounded-2xl p-8 text-center">
          <h3 className="text-xl font-bold text-white mb-2">Order gas with cash today</h3>
          <p className="text-gray-300 text-sm mb-6 max-w-md mx-auto">
            Download MobiGas, compare vendor prices near you, and pay cash on delivery.
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

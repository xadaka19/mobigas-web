import { Flame, ArrowLeft, CheckCircle } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

export default function HowToGetGasCreditPage() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>How to Get Gas on Credit in Kenya | Step-by-Step Guide - MobiGas</title>
        <meta name="description" content="Step-by-step guide to getting cooking gas on credit in Kenya using MobiGas. Apply for instant bank credit, order gas, and repay within 30 days via M-Pesa." />
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
          How to Get Gas on Credit in Kenya
        </h1>
        <p className="text-gray-500 text-lg mb-10 max-w-2xl">
          Getting cooking gas on credit in Kenya is straightforward with MobiGas.
          Here's exactly what you need and how the process works from registration
          to your first delivery.
        </p>

        <div className="bg-white rounded-2xl border border-gray-100 p-6 mb-8">
          <h2 className="text-lg font-bold text-[#0D1B40] mb-4">What you need to apply</h2>
          <div className="space-y-2">
            {[
              'A Kenyan National ID (16-digit ID number)',
              'A working Safaricom M-Pesa phone number',
              'Two guarantors (name and phone number)',
              'A selfie photo for identity verification',
              'Your home or delivery location',
            ].map(item => (
              <div key={item} className="flex items-center gap-2 text-sm text-gray-600">
                <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 p-6 mb-8">
          <h2 className="text-lg font-bold text-[#0D1B40] mb-5">Step-by-step process</h2>
          <div className="space-y-6">
            {[
              {
                step: 1,
                title: 'Download the MobiGas app',
                desc: 'Available on Google Play Store. Search "MobiGas" and install the customer app.',
              },
              {
                step: 2,
                title: 'Register your account',
                desc: 'Enter your name, phone number, National ID, and two guarantors. Upload a selfie photo for verification.',
              },
              {
                step: 3,
                title: 'Apply for credit',
                desc: 'Our partner bank runs an instant CRB (Credit Reference Bureau) check and sets your credit limit — usually within minutes.',
              },
              {
                step: 4,
                title: 'Browse vendors near you',
                desc: 'See verified gas vendors within 8km of your location, their prices, brands, and estimated delivery times.',
              },
              {
                step: 5,
                title: 'Place your order',
                desc: 'Select your cylinder size (3kg, 6kg, or 13kg), confirm your address, and order — no cash needed.',
              },
              {
                step: 6,
                title: 'Track delivery live',
                desc: 'Watch your vendor on the map as they head to you. Typical delivery is 10-40 minutes.',
              },
              {
                step: 7,
                title: 'Confirm with your PIN',
                desc: 'Give the vendor your 4-digit confirmation PIN when they arrive. The bank pays them instantly.',
              },
              {
                step: 8,
                title: 'Repay within 30 days',
                desc: 'Send your repayment directly to the partner bank via M-Pesa at any time within 30 days.',
              },
            ].map(item => (
              <div key={item.step} className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-[#F97316] text-white text-sm font-bold flex items-center justify-center flex-shrink-0">
                  {item.step}
                </div>
                <div>
                  <div className="font-bold text-[#0D1B40] text-sm">{item.title}</div>
                  <div className="text-gray-500 text-sm mt-0.5">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 p-6 mb-10">
          <h2 className="text-lg font-bold text-[#0D1B40] mb-3">Frequently asked questions</h2>
          <div className="space-y-4">
            {[
              { q: 'How long does credit approval take?', a: 'Usually a few minutes — it\'s an instant automated CRB check by our partner bank.' },
              { q: 'What if my credit application is rejected?', a: 'The partner bank will inform you of the reason. You can reapply after improving your CRB score.' },
              { q: 'Can I order more than once per month?', a: 'Yes, as long as you have available credit within your approved limit.' },
            ].map(item => (
              <div key={item.q}>
                <div className="font-medium text-[#0D1B40] text-sm">{item.q}</div>
                <div className="text-gray-500 text-sm mt-1">{item.a}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#0D1B40] rounded-2xl p-8 text-center">
          <h3 className="text-xl font-bold text-white mb-2">Ready to get started?</h3>
          <p className="text-gray-300 text-sm mb-6 max-w-md mx-auto">
            Download MobiGas and apply for your gas credit limit today.
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

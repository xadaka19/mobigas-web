import { Flame, ArrowLeft, ShieldCheck, Building2, Lock, FileCheck } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

export default function TrustPage() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Is MobiGas Safe and Legit? | Gas on Credit Kenya Explained</title>
        <meta name="description" content="MobiGas is a regulated digital marketplace connecting Kenyans to verified gas vendors and licensed partner banks. Learn how gas-on-credit works safely and transparently." />
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
          Is MobiGas Safe and Legitimate?
        </h1>
        <p className="text-gray-500 text-lg mb-10 max-w-2xl">
          If you're new to gas-on-credit, it's reasonable to ask how it works and whether it's
          trustworthy. Here's exactly how MobiGas operates, in plain terms.
        </p>

        <div className="space-y-4 mb-12">
          {[
            {
              icon: Building2,
              title: 'MobiGas is a marketplace, not a lender',
              desc: 'We never lend you money or hold your funds. All credit is provided exclusively by regulated partner banks and SACCOs licensed by the Central Bank of Kenya.',
            },
            {
              icon: FileCheck,
              title: 'Every vendor is verified',
              desc: 'Gas vendors on the platform go through a verification process including business registration and ID checks before they can receive orders.',
            },
            {
              icon: ShieldCheck,
              title: 'Your credit is assessed by a real bank',
              desc: "Your credit limit comes from an instant CRB (Credit Reference Bureau) check run by our partner bank \u2014 the same kind of check used for formal bank loans.",
            },
            {
              icon: Lock,
              title: 'Your data is protected',
              desc: "All personal data is encrypted in transit and at rest, and handled according to Kenya's Data Protection Act (KDPA). We never sell your data.",
            },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bg-white rounded-xl border border-gray-100 p-5 flex gap-4">
              <div className="w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon size={20} className="text-[#F97316]" />
              </div>
              <div>
                <h3 className="font-bold text-[#0D1B40] text-sm mb-1">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 p-6 mb-10">
          <h2 className="text-lg font-bold text-[#0D1B40] mb-4">What MobiGas does NOT do</h2>
          <div className="space-y-2 text-sm text-gray-600">
            <p>• We do not lend money or charge interest ourselves \u2014 that's set by your partner bank</p>
            <p>• We do not hold your gas, money, or any physical inventory</p>
            <p>• We do not sell your personal data to advertisers or third parties</p>
            <p>• We do not make credit approval decisions \u2014 the bank does, based on your CRB check</p>
          </div>
        </div>

        <div className="bg-[#0D1B40] rounded-2xl p-8 text-center">
          <h3 className="text-xl font-bold text-white mb-2">Still have questions?</h3>
          <p className="text-gray-300 text-sm mb-6 max-w-md mx-auto">
            Read our full FAQ or reach out directly \u2014 we're happy to explain anything.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="/faq"
              className="inline-block bg-[#F97316] text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-orange-600 transition-colors"
            >
              Read the FAQ
            </a>
            <a
              href="mailto:hello@mobigas.co.ke"
              className="inline-block bg-white/10 text-white border border-white/20 px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-white/20 transition-colors"
            >
              Email us
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

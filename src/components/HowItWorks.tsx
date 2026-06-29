import { UserPlus, CreditCard, ShoppingBag, CheckCircle } from 'lucide-react'

const steps = [
  {
    icon: UserPlus,
    title: 'Sign up in 2 minutes',
    desc: 'Download the app, register with your ID and phone number. Add two guarantors.',
    color: 'bg-blue-500',
  },
  {
    icon: CreditCard,
    title: 'Get instant credit limit',
    desc: 'Our partner bank runs an instant CRB check and sets your credit limit in seconds. Like a credit card — but for gas.',
    color: 'bg-purple-500',
  },
  {
    icon: ShoppingBag,
    title: 'Order gas anytime',
    desc: 'Browse verified vendors near you. Select your gas size and confirm. Vendor delivers in 10–40 min.',
    color: 'bg-[#F97316]',
  },
  {
    icon: CheckCircle,
    title: 'Confirm & pay later',
    desc: 'Give the vendor your 4-digit PIN. Bank pays vendor instantly. You repay within 30 days via M-Pesa. Bank interest applies.',
    color: 'bg-green-500',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block bg-orange-100 text-[#F97316] text-sm font-semibold px-4 py-2 rounded-full mb-4">
            Simple process
          </div>
          <h2 className="text-4xl font-black text-[#0D1B40] mb-4">
            Gas on credit in 4 steps
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            No bank visits. No forms. No waiting. Just gas delivered to your door.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map(({ icon: Icon, title, desc, color }, i) => (
            <div key={title} className="relative">
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gray-200 z-0 -translate-x-4"></div>
              )}
              <div className="relative z-10 text-center">
                <div className={`w-16 h-16 ${color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                  <Icon size={28} className="text-white" />
                </div>
                <div className="text-xs font-bold text-gray-400 uppercase mb-2">Step {i + 1}</div>
                <h3 className="font-bold text-[#0D1B40] text-lg mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

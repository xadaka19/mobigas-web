import { Zap, Shield, MapPin, Star, Smartphone, Building2 } from 'lucide-react'

const features = [
  {
    icon: Zap,
    title: 'Instant credit decision',
    desc: 'No waiting days for loan approval. Our partner bank runs an instant CRB check and sets your limit in seconds.',
    color: 'text-yellow-500 bg-yellow-50',
  },
  {
    icon: Shield,
    title: 'Zero risk to vendors',
    desc: 'Vendors get paid instantly by the bank on PIN confirmation. They never extend credit themselves.',
    color: 'text-green-500 bg-green-50',
  },
  {
    icon: MapPin,
    title: 'Hyperlocal delivery',
    desc: 'Only verified vendors within 8km of you appear in the app. Fast, reliable, nearby.',
    color: 'text-blue-500 bg-blue-50',
  },
  {
    icon: Star,
    title: 'Verified vendors only',
    desc: 'Every vendor is verified by our team before going live. Rated by customers after every delivery.',
    color: 'text-orange-500 bg-orange-50',
  },
  {
    icon: Smartphone,
    title: 'M-Pesa repayment',
    desc: 'Repay anytime within 30 days via M-Pesa. No bank account needed. No queues.',
    color: 'text-purple-500 bg-purple-50',
  },
  {
    icon: Building2,
    title: 'Bank-backed credit',
    desc: 'Credit is provided by regulated partner banks and SACCOs — not MobiGas. Safe, compliant, transparent.',
    color: 'text-indigo-500 bg-indigo-50',
  },
]

export default function WhyMobiGas() {
  return (
    <section id="why-mobigas" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block bg-orange-100 text-[#F97316] text-sm font-semibold px-4 py-2 rounded-full mb-4">
            Why choose us
          </div>
          <h2 className="text-4xl font-black text-[#0D1B40] mb-4">
            Built for Kenyan households
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Running out of gas mid-cooking is an emergency. MobiGas solves it — instantly, on credit.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map(({ icon: Icon, title, desc, color }) => (
            <div key={title} className="p-6 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow group">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${color} group-hover:scale-110 transition-transform`}>
                <Icon size={24} />
              </div>
              <h3 className="font-bold text-[#0D1B40] text-lg mb-2">{title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

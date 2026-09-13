import { ArrowRight, TrendingUp, Users, Shield, Banknote } from 'lucide-react'
import { country } from '../config/countries'

const creditBullets = [
  { icon: Banknote, text: 'Bank pays your M-Pesa instantly after PIN confirmation' },
  { icon: Users, text: 'New customers from the platform — no marketing needed' },
  { icon: Shield, text: 'Zero credit risk — you never lend money to customers' },
  { icon: TrendingUp, text: 'Unlock stock boost loans after 3 months of deliveries' },
]

// Cash markets with vendor stock-boost/insurance (KE): payouts are direct,
// financing is a separate bank-backed vendor perk, plus theft/fire cover.
const stockBoostBullets = [
  { icon: Banknote, text: 'Get paid instantly after the customer confirms delivery' },
  { icon: Users, text: 'New customers from the platform — no marketing needed' },
  { icon: TrendingUp, text: 'Stock boost financing from partner banks to grow your inventory' },
  { icon: Shield, text: 'Stock insurance covering theft and fire on your gas stock' },
]

// Plain cash markets (TZ/UG): no financing or insurance yet.
const cashBullets = [
  { icon: Banknote, text: 'Get paid instantly after the customer confirms delivery' },
  { icon: Users, text: 'New customers from the platform — no marketing needed' },
  { icon: Shield, text: 'Set your own prices and delivery radius' },
  { icon: TrendingUp, text: 'Build a rating and grow repeat business' },
]

const earnings = {
  KE: { note: 'Based on avg KES 1,600 per 6kg delivery', tiers: [
    { label: '2 deliveries/day', daily: 'KES 3,200', monthly: 'KES 96,000' },
    { label: '4 deliveries/day', daily: 'KES 6,400', monthly: 'KES 192,000' },
    { label: '6 deliveries/day', daily: 'KES 9,600', monthly: 'KES 288,000' },
  ]},
  TZ: { note: 'Based on avg TSh 4,000 per 6kg delivery', tiers: [
    { label: '2 deliveries/day', daily: 'TSh 8,000', monthly: 'TSh 240,000' },
    { label: '4 deliveries/day', daily: 'TSh 16,000', monthly: 'TSh 480,000' },
    { label: '6 deliveries/day', daily: 'TSh 24,000', monthly: 'TSh 720,000' },
  ]},
  UG: { note: 'Based on avg USh 6,000 per 6kg delivery', tiers: [
    { label: '2 deliveries/day', daily: 'USh 12,000', monthly: 'USh 360,000' },
    { label: '4 deliveries/day', daily: 'USh 24,000', monthly: 'USh 720,000' },
    { label: '6 deliveries/day', daily: 'USh 36,000', monthly: 'USh 1,080,000' },
  ]},
}[country.code]

const bullets = country.showCredit
  ? creditBullets
  : country.showStockBoost
    ? stockBoostBullets
    : cashBullets

const intro = country.showCredit
  ? 'Join MobiGas as a vendor and get new customers delivered to you. The bank pays you on every delivery — zero credit risk, zero paperwork.'
  : country.showStockBoost
    ? 'Join MobiGas as a vendor and get new customers delivered to you. Get paid on every delivery, access stock boost financing to grow, and protect your stock with theft and fire insurance.'
    : 'Join MobiGas as a vendor and get new customers delivered to you. Get paid on every delivery — set your prices, grow your business.'

export default function ForVendors() {
  return (
    <section id="for-vendors" className="py-24 bg-[#0D1B40] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#F97316]/10 rounded-full blur-3xl"></div>
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block bg-orange-500/20 text-orange-300 text-sm font-semibold px-4 py-2 rounded-full mb-6">
              For gas vendors
            </div>
            <h2 className="text-4xl font-black text-white mb-6 leading-tight">
              Deliver gas.<br />
              <span className="text-[#F97316]">Get paid instantly.</span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-10">
              {intro}
            </p>

            <div className="space-y-4 mb-10">
              {bullets.map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-[#F97316]/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon size={16} className="text-[#F97316]" />
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">{text}</p>
                </div>
              ))}
            </div>

            <a href={country.vendorApp}
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#F97316] text-white px-8 py-4 rounded-2xl font-bold hover:bg-orange-600 transition-all hover:scale-105">
              Join as a vendor
              <ArrowRight size={20} />
            </a>
          </div>

          <div className="bg-white/5 backdrop-blur rounded-3xl border border-white/10 p-8">
            <h3 className="text-white font-bold text-xl mb-2">Earnings calculator</h3>
            <p className="text-gray-400 text-sm mb-8">Estimated monthly earnings as a MobiGas vendor</p>

            <div className="space-y-6">
              {earnings.tiers.map(({ label, daily, monthly }, i) => (
                <div key={label} className={`rounded-2xl p-5 ${i === 1 ? 'bg-[#F97316] border-2 border-orange-400' : 'bg-white/5 border border-white/10'}`}>
                  <div className="flex items-center justify-between mb-3">
                    <span className={`font-semibold text-sm ${i === 1 ? 'text-white' : 'text-gray-300'}`}>{label}</span>
                    {i === 1 && <span className="bg-white/20 text-white text-xs px-2 py-0.5 rounded-full">Popular</span>}
                  </div>
                  <div className="flex items-end justify-between">
                    <div>
                      <div className={`text-xs ${i === 1 ? 'text-orange-100' : 'text-gray-500'}`}>Daily</div>
                      <div className={`font-bold text-lg ${i === 1 ? 'text-white' : 'text-gray-300'}`}>{daily}</div>
                    </div>
                    <div className="text-right">
                      <div className={`text-xs ${i === 1 ? 'text-orange-100' : 'text-gray-500'}`}>Monthly</div>
                      <div className="font-black text-2xl text-white">{monthly}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-gray-500 text-xs mt-4 text-center">{earnings.note}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

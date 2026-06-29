import { ArrowRight, Star, Shield, Zap } from 'lucide-react'

export default function Hero() {
  return (
    <section className="min-h-screen bg-[#0D1B40] flex items-center relative overflow-hidden pt-16">
      {/* Background blobs */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-[#F97316]/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange-900/20 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto px-6 py-20 w-full">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/30 rounded-full px-4 py-2 mb-8">
              <Zap size={14} className="text-[#F97316]" />
              <span className="text-orange-300 text-sm font-medium">Gas delivered in 10–40 minutes</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-black text-white leading-tight mb-6">
              Cook now,<br />
              <span className="text-[#F97316]">pay later.</span>
            </h1>

            <p className="text-gray-300 text-xl leading-relaxed mb-10 max-w-lg">
              Order gas on credit. Get it delivered to your door in under 40 minutes. 
              Pay within 30 days via M-Pesa. No paperwork. No waiting.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a href="#download"
                className="flex items-center justify-center gap-2 bg-[#F97316] text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-orange-600 transition-all hover:scale-105 shadow-lg shadow-orange-500/30">
                Order gas now
                <ArrowRight size={20} />
              </a>
              <a href="#how-it-works"
                className="flex items-center justify-center gap-2 bg-white/10 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white/20 transition-colors border border-white/20">
                How it works
              </a>
            </div>

            {/* Trust signals */}
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2">
                <Shield size={18} className="text-green-400" />
                <span className="text-gray-300 text-sm">Bank-backed credit</span>
              </div>
              <div className="flex items-center gap-2">
                <Star size={18} className="text-yellow-400" />
                <span className="text-gray-300 text-sm">Verified vendors only</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap size={18} className="text-[#F97316]" />
                <span className="text-gray-300 text-sm">Instant credit decision</span>
              </div>
            </div>
          </div>

          {/* Phone mockup */}
          <div className="hidden md:flex justify-center">
            <div className="relative">
              {/* Glow */}
              <div className="absolute inset-0 bg-[#F97316]/30 blur-3xl rounded-full scale-75"></div>
              {/* Phone */}
              <div className="relative w-72 h-[560px] bg-[#1a2a50] rounded-[3rem] border-4 border-white/10 shadow-2xl overflow-hidden">
                {/* Screen */}
                <div className="absolute inset-2 bg-[#0D1B40] rounded-[2.5rem] overflow-hidden">
                  {/* Status bar */}
                  <div className="bg-[#0D1B40] px-6 py-3 flex justify-between items-center">
                    <span className="text-white text-xs font-medium">9:41</span>
                    <div className="w-24 h-5 bg-black rounded-full"></div>
                    <div className="flex gap-1">
                      <div className="w-4 h-2 bg-white/60 rounded-sm"></div>
                    </div>
                  </div>
                  {/* App content */}
                  <div className="px-4 pt-4">
                    <div className="text-gray-400 text-xs">Welcome back 👋</div>
                    <div className="text-white font-bold text-lg mb-4">Jane Wanjiku</div>

                    {/* Credit card */}
                    <div className="bg-[#F97316] rounded-2xl p-4 mb-4">
                      <div className="text-white/80 text-xs mb-1">Available credit</div>
                      <div className="text-white font-black text-3xl">KES 5,000</div>
                    </div>

                    {/* Order button */}
                    <div className="bg-[#F97316] rounded-xl p-3 flex items-center justify-center gap-2 mb-4">
                      <span className="text-white font-bold">Order gas now</span>
                    </div>

                    {/* Vendor cards */}
                    <div className="text-white text-xs font-semibold mb-2">Nearby vendors</div>
                    {['Kamau Gas · 0.4km · KES 1,500', 'Wanjiku Gas · 0.9km · KES 1,480'].map((v, i) => (
                      <div key={i} className="bg-white/10 rounded-xl p-3 mb-2 flex items-center justify-between">
                        <span className="text-white text-xs">{v}</span>
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

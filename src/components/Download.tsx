import { Smartphone, ArrowRight } from 'lucide-react'

export default function Download() {
  return (
    <section id="download" className="py-24 bg-gradient-to-br from-[#F97316] to-orange-600 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border-4 border-white rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 border-4 border-white rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 border-4 border-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <div className="w-20 h-20 bg-white/20 rounded-3xl flex items-center justify-center mx-auto mb-8">
          <Smartphone size={40} className="text-white" />
        </div>

        <h2 className="text-5xl font-black text-white mb-6 leading-tight">
          Download MobiGas<br />today
        </h2>
        <p className="text-orange-100 text-xl mb-12 max-w-xl mx-auto">
          Available on Android. iOS coming soon. Sign up takes 2 minutes — start ordering gas on credit today.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#"
            className="flex items-center justify-center gap-3 bg-white text-[#F97316] px-8 py-4 rounded-2xl font-bold text-lg hover:bg-orange-50 transition-colors shadow-xl">
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
              <path d="M3.18 23.76c.3.17.65.21.98.1L13.64 12 3.89.13c-.32-.1-.66-.07-.97.1C2.34.6 2 1.18 2 1.8v20.4c0 .62.34 1.19.92 1.56h.26z"/>
              <path d="M17.28 8.28L5.22.54l9.56 9.56 2.5-1.82zM5.22 23.46l12.06-7.74-2.5-1.82-9.56 9.56zM20.6 10.54l-2.1-1.22-2.82 2.68 2.82 2.68 2.1-1.22c.6-.35.98-.98.98-1.68-.01-.7-.38-1.33-.98-1.68v-.04z"/>
            </svg>
            Download for Android
          </a>

          <a href="https://wa.me/254700000000"
            className="flex items-center justify-center gap-3 bg-white/20 text-white border-2 border-white/50 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white/30 transition-colors">
            Contact us on WhatsApp
            <ArrowRight size={20} />
          </a>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-8 text-orange-100 text-sm">
          <span>✓ Free to download</span>
          <span>✓ No hidden charges</span>
          <span>✓ Instant credit decision</span>
          <span>✓ Repay via M-Pesa</span>
        </div>
      </div>
    </section>
  )
}

import { Flame, Mail, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#0D1B40] py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-[#F97316] rounded-xl flex items-center justify-center">
                <Flame size={20} className="text-white" />
              </div>
              <span className="font-bold text-xl text-white">MobiGas</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Kenya's first gas-on-credit delivery platform. Order gas now, pay within 30 days.
              Powered by partner banks and local gas vendors.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="mailto:hello@mobigas.co.ke" className="flex items-center gap-2 text-gray-400 hover:text-white text-sm transition-colors">
                <Mail size={16} />
                hello@mobigas.co.ke
              </a>
            </div>
            <div className="flex gap-4 mt-3">
              <a href="tel:+254700000000" className="flex items-center gap-2 text-gray-400 hover:text-white text-sm transition-colors">
                <Phone size={16} />
                +254 700 000 000
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-3">
              {['How it works', 'For customers', 'For vendors', 'Download app'].map(item => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-3">
              {[
                { label: 'Terms of Service', href: '/terms' },
                { label: 'Privacy Policy', href: '/privacy' },
                { label: 'Data Protection', href: '/data-protection' },
                { label: 'ODPC Compliance', href: '/odpc' },
              ].map(({ label, href }) => (
                <li key={label}>
                  <a href={href} className="text-gray-400 hover:text-white text-sm transition-colors">{label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © 2026 MobiGas Inc. All rights reserved. Nairobi, Kenya.
          </p>
          <p className="text-gray-500 text-xs">
            Credit provided by regulated partner banks and SACCOs. MobiGas is a digital marketplace platform — not a lender.
          </p>
        </div>
      </div>
    </footer>
  )
}

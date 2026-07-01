import { Flame, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#0D1B40] py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-5 gap-8 mb-12">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-[#F97316] rounded-xl flex items-center justify-center">
                <Flame size={20} className="text-white" />
              </div>
              <span className="font-bold text-xl text-white">MobiGas</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Kenya's first gas-on-credit delivery platform. Order gas now, pay within 30 days.
              Powered by partner banks and local gas vendors.
            </p>
            <a href="mailto:hello@mobigas.co.ke" className="flex items-center gap-2 text-gray-400 hover:text-white text-sm transition-colors">
              <Mail size={14} />
              hello@mobigas.co.ke
            </a>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-3">
              {[
                { label: 'How it works', href: '/how-mobigas-works' },
                { label: 'Gas on credit', href: '/buy-gas-on-credit' },
                { label: 'No deposit required', href: '/gas-on-credit-no-deposit' },
                { label: 'For vendors', href: '/gas-vendor-registration-kenya' },
                { label: 'Stock loan', href: '/gas-vendor-loan' },
                { label: 'Partner banks', href: '/mobigas-partner-banks' },
                { label: 'Download app', href: '/#download' },
              ].map(({ label, href }) => (
                <li key={label}>
                  <a href={href} className="text-gray-400 hover:text-white text-sm transition-colors">{label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-3">
              {[
                { label: 'FAQ', href: '/faq' },
                { label: 'Gas prices Kenya', href: '/cooking-gas-prices-kenya' },
                { label: 'Cylinder sizes', href: '/lpg-cylinder-sizes-kenya' },
                { label: 'Gas safety tips', href: '/cooking-gas-safety-kenya' },
                { label: 'Is MobiGas safe?', href: '/is-mobigas-safe' },
                { label: 'Coverage areas', href: '/areas' },
                { label: 'Refer a friend', href: '/mobigas-referral' },
              ].map(({ label, href }) => (
                <li key={label}>
                  <a href={href} className="text-gray-400 hover:text-white text-sm transition-colors">{label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Top Cities */}
          <div>
            <h4 className="text-white font-semibold mb-4">Top Cities</h4>
            <ul className="space-y-3">
              {[
                { label: 'Gas delivery Nairobi', href: '/gas-delivery-nairobi' },
                { label: 'Gas delivery Mombasa', href: '/gas-delivery-mombasa' },
                { label: 'Gas delivery Kisumu', href: '/gas-delivery-kisumu' },
                { label: 'Gas delivery Nakuru', href: '/gas-delivery-nakuru' },
                { label: 'Gas delivery Eldoret', href: '/gas-delivery-eldoret' },
                { label: 'Gas delivery Kiambu', href: '/gas-delivery-kiambu' },
                { label: 'Gas delivery Thika', href: '/gas-delivery-thika' },
              ].map(({ label, href }) => (
                <li key={label}>
                  <a href={href} className="text-gray-400 hover:text-white text-sm transition-colors">{label}</a>
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

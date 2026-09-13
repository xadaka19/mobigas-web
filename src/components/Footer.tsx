import { Flame, Mail } from 'lucide-react'
import { country } from '../config/countries'

const hq = { KE: 'Nairobi, Kenya', TZ: 'Dar es Salaam, Tanzania', UG: 'Kampala, Uganda' }[country.code]

const productLinks = [
  { label: 'How it works', href: '/how-mobigas-works' },
  ...(country.showCredit ? [
    { label: 'Gas on credit', href: '/buy-gas-on-credit' },
    { label: 'No deposit required', href: '/gas-on-credit-no-deposit' },
  ] : []),
  { label: 'For vendors', href: '/gas-vendor-registration-kenya' },
  ...(country.showCredit ? [
    { label: 'Stock loan', href: '/gas-vendor-loan' },
    { label: 'Partner banks', href: '/mobigas-partner-banks' },
  ] : []),
  { label: 'Download app', href: '/#download' },
]

const resourceLinks = [
  { label: 'FAQ', href: '/faq' },
  { label: `Gas prices ${country.name}`, href: '/cooking-gas-prices-kenya' },
  { label: 'Cylinder sizes', href: '/lpg-cylinder-sizes-kenya' },
  { label: 'Gas safety tips', href: '/cooking-gas-safety-kenya' },
  { label: 'Is MobiGas safe?', href: '/is-mobigas-safe' },
  { label: 'Coverage areas', href: '/areas' },
  { label: 'Refer a friend', href: '/mobigas-referral' },
]

const cityLinks = {
  KE: [
    { label: 'Gas delivery Nairobi', href: '/gas-delivery-nairobi' },
    { label: 'Gas delivery Mombasa', href: '/gas-delivery-mombasa' },
    { label: 'Gas delivery Kisumu', href: '/gas-delivery-kisumu' },
    { label: 'Gas delivery Nakuru', href: '/gas-delivery-nakuru' },
    { label: 'Gas delivery Eldoret', href: '/gas-delivery-eldoret' },
    { label: 'Gas delivery Kiambu', href: '/gas-delivery-kiambu' },
    { label: 'Gas delivery Thika', href: '/gas-delivery-thika' },
  ],
  TZ: [
    { label: 'Gas delivery Dar es Salaam', href: '/areas' },
    { label: 'Gas delivery Mwanza', href: '/areas' },
    { label: 'Gas delivery Arusha', href: '/areas' },
    { label: 'Gas delivery Dodoma', href: '/areas' },
    { label: 'Gas delivery Mbeya', href: '/areas' },
    { label: 'Gas delivery Zanzibar', href: '/areas' },
    { label: 'Gas delivery Morogoro', href: '/areas' },
  ],
  UG: [
    { label: 'Gas delivery Kampala', href: '/areas' },
    { label: 'Gas delivery Entebbe', href: '/areas' },
    { label: 'Gas delivery Jinja', href: '/areas' },
    { label: 'Gas delivery Gulu', href: '/areas' },
    { label: 'Gas delivery Mbarara', href: '/areas' },
    { label: 'Gas delivery Mbale', href: '/areas' },
    { label: 'Gas delivery Wakiso', href: '/areas' },
  ],
}[country.code]

export default function Footer() {
  return (
    <footer className="bg-[#0D1B40] py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-5 gap-8 mb-12">

          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-[#F97316] rounded-xl flex items-center justify-center">
                <Flame size={20} className="text-white" />
              </div>
              <span className="font-bold text-xl text-white">MobiGas</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              {country.footerBlurb}
            </p>
            <a href={`mailto:${country.email}`} className="flex items-center gap-2 text-gray-400 hover:text-white text-sm transition-colors">
              <Mail size={14} />
              {country.email}
            </a>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-3">
              {productLinks.map(({ label, href }) => (
                <li key={label}>
                  <a href={href} className="text-gray-400 hover:text-white text-sm transition-colors">{label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-3">
              {resourceLinks.map(({ label, href }) => (
                <li key={label}>
                  <a href={href} className="text-gray-400 hover:text-white text-sm transition-colors">{label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Top Cities</h4>
            <ul className="space-y-3">
              {cityLinks.map(({ label, href }) => (
                <li key={label}>
                  <a href={href} className="text-gray-400 hover:text-white text-sm transition-colors">{label}</a>
                </li>
              ))}
              {country.code === 'KE' && (
                <li>
                  <a href="/gas-delivery" className="text-gray-400 hover:text-white text-sm font-semibold transition-colors">
                    View all cities →
                  </a>
                </li>
              )}
            </ul>
          </div>

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
            © 2026 MobiGas Inc. All rights reserved. {hq}.
          </p>
          {country.showCredit && (
            <p className="text-gray-500 text-xs">
              Credit provided by regulated partner banks and SACCOs. MobiGas is a digital marketplace platform — not a lender.
            </p>
          )}
        </div>
      </div>
    </footer>
  )
}

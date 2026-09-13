export type CountryCode = 'KE' | 'TZ' | 'UG'

export interface CountryConfig {
  code: CountryCode
  name: string
  currency: string
  symbol: string
  dial: string
  email: string
  supportEmail: string
  domain: string
  baseUrl: string
  regulator: string
  dataLaw: string
  payment: string
  showCredit: boolean
  showStockBoost: boolean
  customerApp: string
  vendorApp: string
  heroTagline: string
  heroSub: string
  footerBlurb: string
}

// Google Play listings — same apps served in every market for now.
const CUSTOMER_APP = 'https://play.google.com/store/apps/details?id=com.mobigas.mobigas'
const VENDOR_APP = 'https://play.google.com/store/apps/details?id=com.mobigas.vendor'

const KE: CountryConfig = {
  code: 'KE',
  name: 'Kenya',
  currency: 'KES',
  symbol: 'KES',
  dial: '+254',
  email: 'hello@mobigas.co.ke',
  supportEmail: 'support@mobigas.co.ke',
  domain: 'mobigas.co.ke',
  baseUrl: 'https://mobigas.co.ke',
  regulator: 'EPRA',
  dataLaw: "Kenya's Data Protection Act (KDPA)",
  payment: 'M-Pesa',
  showCredit: true,
  showStockBoost: true,
  customerApp: CUSTOMER_APP,
  vendorApp: VENDOR_APP,
  heroTagline: 'Gas delivered fast.',
  heroSub:
    'Order LPG gas and get it delivered to your door in under 40 minutes. Pay on delivery via M-Pesa. No paperwork. No waiting.',
  footerBlurb:
    "Kenya's fast LPG delivery platform. Order gas now, pay on delivery. Powered by verified local gas vendors.",
}

const TZ: CountryConfig = {
  code: 'TZ',
  name: 'Tanzania',
  currency: 'TZS',
  symbol: 'TSh',
  dial: '+255',
  email: 'hello@mobigas.co.tz',
  supportEmail: 'support@mobigas.co.tz',
  domain: 'mobigas.co.tz',
  baseUrl: 'https://mobigas.co.tz',
  regulator: 'EWURA',
  dataLaw: "Tanzania's Personal Data Protection Act, 2022",
  payment: 'M-Pesa, Tigo Pesa, Airtel Money or Mixx by Yas',
  showCredit: false,
  showStockBoost: false,
  customerApp: CUSTOMER_APP,
  vendorApp: VENDOR_APP,
  heroTagline: 'Gas delivered fast.',
  heroSub:
    'Order LPG gas and get it delivered to your door in under 40 minutes. Pay on delivery via mobile money. No paperwork. No waiting.',
  footerBlurb:
    "Tanzania's fast LPG delivery platform. Order gas now, pay on delivery. Powered by verified local gas vendors.",
}

const UG: CountryConfig = {
  code: 'UG',
  name: 'Uganda',
  currency: 'UGX',
  symbol: 'USh',
  dial: '+256',
  email: 'hello@mobigas.co.ug',
  supportEmail: 'support@mobigas.co.ug',
  domain: 'mobigas.co.ug',
  baseUrl: 'https://mobigas.co.ug',
  regulator: 'Ministry of Energy and Mineral Development (Petroleum Supply Act, 2003)',
  dataLaw: "Uganda's Data Protection and Privacy Act, 2019",
  payment: 'MTN MoMo or Airtel Money',
  showCredit: false,
  showStockBoost: false,
  customerApp: CUSTOMER_APP,
  vendorApp: VENDOR_APP,
  heroTagline: 'Gas delivered fast.',
  heroSub:
    'Order LPG gas and get it delivered to your door in under 40 minutes. Pay on delivery via MTN MoMo or Airtel Money. No paperwork. No waiting.',
  footerBlurb:
    "Uganda's fast LPG delivery platform. Order gas now, pay on delivery. Powered by verified local gas vendors.",
}

const configs: Record<CountryCode, CountryConfig> = { KE, TZ, UG }

const active = (import.meta.env.VITE_COUNTRY as CountryCode) || 'KE'

export const country: CountryConfig = configs[active] ?? KE

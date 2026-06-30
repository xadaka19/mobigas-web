import { Flame, ArrowLeft, ChevronDown } from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const faqs = [
  {
    category: 'Getting Started',
    items: [
      {
        q: 'What is MobiGas?',
        a: "MobiGas is Kenya's gas-on-credit delivery platform. Order gas now, get it delivered in 10–40 minutes, and repay within 30 days via M-Pesa.",
      },
      {
        q: 'How do I sign up?',
        a: 'Download the MobiGas app, register with your National ID and phone number, add two guarantors, and apply for your credit limit. The whole process takes about 2 minutes.',
      },
      {
        q: 'Is MobiGas available in my area?',
        a: 'We match you with verified vendors within 8km of your location. Coverage is expanding across Kenya — check the app to see vendors near you.',
      },
    ],
  },
  {
    category: 'Credit & Payments',
    items: [
      {
        q: 'How does the credit work?',
        a: 'You apply once through the app. Our partner bank runs an instant credit check (CRB) and sets your credit limit. You can then order gas anytime within that limit.',
      },
      {
        q: 'Who provides the credit — MobiGas or a bank?',
        a: "Credit is provided exclusively by our partner banks and SACCOs, not MobiGas. We're a platform that connects you to vendors and credit providers — we don't lend money ourselves.",
      },
      {
        q: 'How do I repay?',
        a: 'Repay your partner bank directly via M-Pesa within 30 days. Bank interest applies per your agreement with them.',
      },
      {
        q: 'What happens if I miss a repayment?',
        a: 'Late repayments may affect your credit limit and future ability to order on credit. Contact your partner bank directly if you anticipate difficulty repaying on time.',
      },
    ],
  },
  {
    category: 'Orders & Delivery',
    items: [
      {
        q: 'How long does delivery take?',
        a: 'Typically 10–40 minutes depending on your location and vendor proximity.',
      },
      {
        q: 'Are vendors verified?',
        a: 'Yes, every vendor is verified by our team before they can receive orders, including business registration and ID checks.',
      },
      {
        q: 'What if I have an issue with my delivery?',
        a: 'Use the chat assistant on this site or email support@mobigas.co.ke with your order details and our team will follow up promptly.',
      },
    ],
  },
  {
    category: 'For Vendors',
    items: [
      {
        q: 'How do I become a MobiGas vendor?',
        a: 'Download the MobiGas Vendor app, register your business details, upload your business certificate or ID, add your gas products and pricing. Our team verifies you within 24 hours.',
      },
      {
        q: 'How do vendors get paid?',
        a: 'Instantly to M-Pesa once the customer confirms delivery with their 4-digit PIN. The bank pays directly — no waiting.',
      },
      {
        q: 'What is the Stock Boost Loan?',
        a: 'A loan vendors can apply for after 3 consistent months on the platform with 30+ deliveries, to help buy more gas stock in bulk. Provided by partner banks, not MobiGas.',
      },
    ],
  },
  {
    category: 'Security & Privacy',
    items: [
      {
        q: 'Is my data safe?',
        a: "Yes. All data is encrypted in transit and at rest, and we follow Kenya's Data Protection Act (KDPA) requirements. See our Privacy Policy for details.",
      },
      {
        q: 'Does MobiGas sell my data?',
        a: 'No. We never sell your personal data. It is only shared with partner banks for credit assessment and with vendors for delivery purposes.',
      },
    ],
  },
]

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="font-medium text-[#0D1B40] text-sm pr-4">{q}</span>
        <ChevronDown
          size={18}
          className={`text-gray-400 flex-shrink-0 transition-transform ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && (
        <p className="text-gray-500 text-sm leading-relaxed pb-4 pr-8">{a}</p>
      )}
    </div>
  )
}

export default function FaqPage() {
  const navigate = useNavigate()
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.flatMap(section => section.items.map(item => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": { "@type": "Answer", "text": item.a },
    }))),
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Gas on Credit FAQ | How MobiGas Works in Kenya</title>
        <meta name="description" content="Frequently asked questions about ordering gas on credit, repayment via M-Pesa, becoming a MobiGas vendor, and how our partner banks provide instant credit decisions." />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
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
        <h1 className="text-4xl font-black text-[#0D1B40] mb-3">Frequently Asked Questions</h1>
        <p className="text-gray-500 mb-12">
          Everything you need to know about ordering gas on credit, repayments, and becoming a vendor.
        </p>

        <div className="space-y-10">
          {faqs.map(section => (
            <div key={section.category}>
              <h2 className="text-lg font-bold text-[#0D1B40] mb-2">{section.category}</h2>
              <div className="bg-white rounded-2xl border border-gray-100 px-5">
                {section.items.map(item => (
                  <FaqItem key={item.q} q={item.q} a={item.a} />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 p-6 bg-[#0D1B40] rounded-2xl text-center">
          <p className="text-gray-300 text-sm mb-3">Still have questions?</p>
          <a
            href="mailto:hello@mobigas.co.ke"
            className="inline-block bg-[#F97316] text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-orange-600 transition-colors"
          >
            Email us at hello@mobigas.co.ke
          </a>
        </div>
      </div>
    </div>
  )
}

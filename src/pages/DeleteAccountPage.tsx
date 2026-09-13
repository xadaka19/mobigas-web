import { useState } from 'react'
import { Flame, ArrowLeft, Trash2, ShieldAlert, FileClock, CheckCircle2 } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

// The URL Firebase printed for requestAccountDeletion on deploy.
// v2 functions get a *-uc.a.run.app address AND this cloudfunctions.net
// alias; both work. If the form 404s, paste the exact run.app URL from
// the deploy output here — same as STK_CALLBACK_URL in functions.
const FUNCTION_URL =
  'https://us-central1-mobigas-prod.cloudfunctions.net/requestAccountDeletion'

const deleted = {
  customer: [
    'Your name, phone number, email and photo',
    'Saved delivery addresses and location data',
    'Chat messages and notifications',
    'Referral code and referral history',
    'Your sign-in — you will not be able to log in again',
  ],
  vendor: [
    'Your business profile, listings and prices',
    'Your contact details and saved locations',
    'Verification documents and business photos',
    'Chat messages and notifications',
    'Your sign-in — you will not be able to log in again',
  ],
}

const retained = {
  customer: [
    'Records of completed orders and M-Pesa payments, kept in minimal form for up to 7 years as Kenyan tax law requires',
    'Any outstanding gas credit, until it is repaid',
    'Records needed to resolve an open dispute or investigation',
  ],
  vendor: [
    'Records of completed orders and M-Pesa payments, kept in minimal form for up to 7 years as Kenyan tax law requires',
    'Any unpaid platform fees, until they are settled',
    'Records needed to resolve an open dispute or investigation',
  ],
}

const steps = [
  {
    icon: FileClock,
    title: 'Submit this form',
    text: 'Use the phone number registered on your MobiGas account.',
  },
  {
    icon: ShieldAlert,
    title: 'We verify it is you',
    text: 'We call or SMS that number, so nobody else can delete your account.',
  },
  {
    icon: CheckCircle2,
    title: 'Deleted within 7 days',
    text: 'Your account and personal data are removed and you get an SMS confirmation.',
  },
]

export default function DeleteAccountPage() {
  const navigate = useNavigate()
  const [app, setApp] = useState<'customer' | 'vendor'>('customer')
  const [phone, setPhone] = useState('')
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [reason, setReason] = useState('')
  const [confirmed, setConfirmed] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [done, setDone] = useState(false)
  const [error, setError] = useState('')

  const validPhone = (p: string) =>
    /^(?:\+?254|0)(7\d{8}|1\d{8})$/.test(p.replace(/[\s-]/g, ''))

  const submit = async () => {
    setError('')
    if (!validPhone(phone)) {
      setError('Enter the Kenyan phone number registered on your account, for example 0712 345 678.')
      return
    }
    if (!confirmed) {
      setError('Tick the box to confirm you understand deletion is permanent.')
      return
    }

    setSubmitting(true)
    try {
      const res = await fetch(FUNCTION_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          app,
          phone: phone.trim(),
          fullName: fullName.trim(),
          email: email.trim(),
          reason: reason.trim(),
        }),
      })
      const data = await res.json()

      if (res.ok) {
        setDone(true)
        return
      }
      if (data.error === 'PENDING_EXISTS') {
        setError('A deletion request for this number is already being processed. We will contact you shortly.')
      } else if (data.error === 'INVALID_PHONE') {
        setError('That does not look like a Kenyan mobile number. Try 0712 345 678.')
      } else {
        setError('We could not submit your request. Please try again, or email hello@mobigas.co.ke.')
      }
    } catch {
      setError('We could not reach MobiGas. Check your connection, or email hello@mobigas.co.ke.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Delete Your MobiGas Account | Request Data Deletion - MobiGas</title>
        <meta
          name="description"
          content="Request permanent deletion of your MobiGas customer or vendor account and the personal data associated with it. Submit the form and we delete your account within 7 days."
        />
        <link rel="canonical" href="https://mobigas.co.ke/delete-account" />
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
        <h1 className="text-4xl font-black text-[#0D1B40] mb-4">
          Delete Your MobiGas Account
        </h1>
        <p className="text-gray-600 text-lg mb-12">
          Request permanent deletion of your account in the <strong>MobiGas</strong> app
          (customers) or the <strong>MobiGas Vendor</strong> app, along with the personal
          data associated with it.
        </p>

        {/* How it works */}
        <div className="grid sm:grid-cols-3 gap-4 mb-12">
          {steps.map((s) => (
            <div key={s.title} className="bg-white rounded-2xl border border-gray-200 p-5">
              <div className="w-9 h-9 bg-[#F97316]/10 rounded-lg flex items-center justify-center mb-3">
                <s.icon size={18} className="text-[#F97316]" />
              </div>
              <h3 className="font-bold text-[#0D1B40] mb-1">{s.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{s.text}</p>
            </div>
          ))}
        </div>

        <p className="text-sm text-gray-600 mb-12">
          You can also delete your account from inside the app under{' '}
          <strong>Profile → Edit profile → Delete account</strong>, or email{' '}
          <a href="mailto:hello@mobigas.co.ke" className="text-[#F97316] font-semibold">
            hello@mobigas.co.ke
          </a>{' '}
          from your registered email address.
        </p>

        {/* What happens to your data */}
        <div className="grid md:grid-cols-2 gap-4 mb-14">
          <div className="bg-white rounded-2xl border border-gray-200 p-6">
            <h2 className="font-bold text-[#0D1B40] mb-3">What is deleted</h2>
            <ul className="space-y-2">
              {deleted[app].map((item) => (
                <li key={item} className="text-sm text-gray-600 flex gap-2 leading-relaxed">
                  <span className="text-[#F97316] mt-0.5">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-2xl border border-gray-200 p-6">
            <h2 className="font-bold text-[#0D1B40] mb-3">What we must keep</h2>
            <ul className="space-y-2">
              {retained[app].map((item) => (
                <li key={item} className="text-sm text-gray-600 flex gap-2 leading-relaxed">
                  <span className="text-[#F97316] mt-0.5">•</span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-xs text-gray-500 mt-4 leading-relaxed">
              Retained records are no longer linked to a usable account and are never
              used for marketing.
            </p>
          </div>
        </div>

        {/* Request form */}
        <div id="request" className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8">
          {done ? (
            <div className="text-center py-6">
              <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 size={24} className="text-green-600" />
              </div>
              <h2 className="text-2xl font-black text-[#0D1B40] mb-2">Request received</h2>
              <p className="text-gray-600 max-w-md mx-auto leading-relaxed">
                We will contact <strong>{phone}</strong> to verify the request, then delete
                the account within 7 days. You will get an SMS confirmation once it is done.
              </p>
            </div>
          ) : (
            <>
              <h2 className="text-2xl font-black text-[#0D1B40] mb-6">
                Request account deletion
              </h2>

              <label className="block text-sm font-semibold text-[#0D1B40] mb-2">
                Which app is your account in?
              </label>
              <div className="grid grid-cols-2 gap-3 mb-6">
                {(['customer', 'vendor'] as const).map((a) => (
                  <button
                    key={a}
                    type="button"
                    onClick={() => setApp(a)}
                    className={`px-4 py-3 rounded-xl border text-sm font-semibold transition-colors ${
                      app === a
                        ? 'bg-[#F97316] border-[#F97316] text-white'
                        : 'bg-white border-gray-200 text-gray-600 hover:border-gray-300'
                    }`}
                  >
                    {a === 'customer' ? 'MobiGas (customer)' : 'MobiGas Vendor'}
                  </button>
                ))}
              </div>

              <label htmlFor="phone" className="block text-sm font-semibold text-[#0D1B40] mb-2">
                Registered phone number <span className="text-[#F97316]">*</span>
              </label>
              <input
                id="phone"
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="0712 345 678"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 mb-5 focus:outline-none focus:border-[#F97316] focus:ring-2 focus:ring-[#F97316]/20"
              />

              <label htmlFor="name" className="block text-sm font-semibold text-[#0D1B40] mb-2">
                Full name <span className="font-normal text-gray-400">(optional)</span>
              </label>
              <input
                id="name"
                type="text"
                autoComplete="name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 mb-5 focus:outline-none focus:border-[#F97316] focus:ring-2 focus:ring-[#F97316]/20"
              />

              <label htmlFor="email" className="block text-sm font-semibold text-[#0D1B40] mb-2">
                Email <span className="font-normal text-gray-400">(optional)</span>
              </label>
              <input
                id="email"
                type="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 mb-5 focus:outline-none focus:border-[#F97316] focus:ring-2 focus:ring-[#F97316]/20"
              />

              <label htmlFor="reason" className="block text-sm font-semibold text-[#0D1B40] mb-2">
                Why are you leaving? <span className="font-normal text-gray-400">(optional)</span>
              </label>
              <textarea
                id="reason"
                rows={3}
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                placeholder="This helps us improve. Not required."
                className="w-full px-4 py-3 rounded-xl border border-gray-200 mb-6 focus:outline-none focus:border-[#F97316] focus:ring-2 focus:ring-[#F97316]/20"
              />

              <label className="flex gap-3 items-start mb-6 cursor-pointer">
                <input
                  type="checkbox"
                  checked={confirmed}
                  onChange={(e) => setConfirmed(e.target.checked)}
                  className="mt-1 accent-[#F97316] w-4 h-4"
                />
                <span className="text-sm text-gray-600 leading-relaxed">
                  I understand deletion is <strong>permanent</strong>. My order history,
                  saved addresses and account access cannot be recovered.
                </span>
              </label>

              {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 text-sm rounded-xl px-4 py-3 mb-5 leading-relaxed">
                  {error}
                </div>
              )}

              <button
                type="button"
                onClick={submit}
                disabled={submitting}
                className="w-full bg-[#F97316] hover:bg-[#ea6a0c] disabled:opacity-60 text-white font-bold py-4 rounded-xl transition-colors flex items-center justify-center gap-2"
              >
                <Trash2 size={18} />
                {submitting ? 'Submitting…' : 'Request account deletion'}
              </button>
            </>
          )}
        </div>

        <p className="text-center text-sm text-gray-500 mt-8">
          Questions about your data? Read our{' '}
          <a href="/legal" className="text-[#F97316] font-semibold">Privacy Policy</a> or email{' '}
          <a href="mailto:hello@mobigas.co.ke" className="text-[#F97316] font-semibold">
            hello@mobigas.co.ke
          </a>.
        </p>
      </div>
    </div>
  )
}

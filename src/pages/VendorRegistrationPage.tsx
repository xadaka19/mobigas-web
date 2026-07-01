import { Flame, ArrowLeft, CheckCircle, Upload, Clock, Banknote } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

export default function VendorRegistrationPage() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Gas Vendor Registration Kenya | Join MobiGas as an LPG Dealer</title>
        <meta name="description" content="Register as a gas vendor on MobiGas Kenya. Get verified in 24 hours, receive orders from nearby customers, and get instant M-Pesa payouts on every delivery." />
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
          Gas Vendor Registration in Kenya
        </h1>
        <p className="text-gray-500 text-lg mb-10 max-w-2xl">
          Are you a gas dealer or LPG distributor in Kenya looking to grow your customer base?
          Join MobiGas as a verified vendor, receive orders from nearby customers automatically,
          and get paid instantly to M-Pesa on every delivery — no waiting, no paperwork.
        </p>

        <div className="grid sm:grid-cols-3 gap-4 mb-12">
          {[
            { icon: Clock, title: 'Verified in 24 hours', desc: 'Submit your details and business documents — our team verifies you within 24 hours.' },
            { icon: Banknote, title: 'Instant M-Pesa payouts', desc: 'The bank pays you directly to M-Pesa the moment a customer confirms delivery.' },
            { icon: Upload, title: 'Easy to get started', desc: 'Register via the MobiGas Vendor app — no complex setup or technical knowledge needed.' },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bg-white rounded-xl border border-gray-100 p-5">
              <Icon size={20} className="text-[#F97316] mb-2" />
              <h3 className="font-bold text-[#0D1B40] text-sm mb-1">{title}</h3>
              <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 p-6 mb-8">
          <h2 className="text-lg font-bold text-[#0D1B40] mb-4">What you need to register</h2>
          <div className="space-y-2">
            {[
              'National ID or Business Registration Certificate',
              'M-Pesa Till Number or Paybill for receiving payments',
              'Your business location (latitude/longitude set via the app)',
              'List of gas brands you carry and cylinder sizes with prices',
              'A profile photo of your business or gas stock',
            ].map(item => (
              <div key={item} className="flex items-center gap-2 text-sm text-gray-600">
                <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 p-6 mb-10">
          <h2 className="text-lg font-bold text-[#0D1B40] mb-5">How vendor registration works</h2>
          <div className="space-y-4">
            {[
              { step: 1, title: 'Download the MobiGas Vendor app', desc: 'Search "MobiGas Vendor" on Google Play Store and install it.' },
              { step: 2, title: 'Sign in with Google', desc: 'Use your Google account to create your vendor profile quickly.' },
              { step: 3, title: 'Fill in your business details', desc: 'Enter your business name, location, payment method, and gas brands.' },
              { step: 4, title: 'Upload your certificate or ID', desc: 'Upload a photo of your business registration or National ID for verification.' },
              { step: 5, title: 'Wait for verification', desc: 'Our team reviews your application and approves you within 24 hours.' },
              { step: 6, title: 'Go online and receive orders', desc: 'Set yourself as online in the app and start receiving orders from nearby customers.' },
            ].map(item => (
              <div key={item.step} className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-[#F97316] text-white text-sm font-bold flex items-center justify-center flex-shrink-0">
                  {item.step}
                </div>
                <div>
                  <div className="font-bold text-[#0D1B40] text-sm">{item.title}</div>
                  <div className="text-gray-500 text-sm mt-0.5">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#0D1B40] rounded-2xl p-8 text-center">
          <h3 className="text-xl font-bold text-white mb-2">Register as a vendor today</h3>
          <p className="text-gray-300 text-sm mb-6 max-w-md mx-auto">
            Join verified gas vendors already earning on MobiGas across Kenya.
          </p>
          <a
            href="/#for-vendors"
            className="inline-block bg-[#F97316] text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-orange-600 transition-colors"
          >
            Join as a vendor
          </a>
        </div>
      </div>
    </div>
  )
}

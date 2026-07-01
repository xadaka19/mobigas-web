import { Flame, ArrowLeft, CheckCircle } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

export default function CylinderSizesPage() {
  const navigate = useNavigate()
  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>LPG Cylinder Sizes in Kenya | 3kg vs 6kg vs 13kg Gas Cylinder - MobiGas</title>
        <meta name="description" content="Compare LPG gas cylinder sizes in Kenya — 3kg, 6kg, and 13kg. Find out which size is best for your household or business and order on credit via MobiGas." />
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
        <h1 className="text-4xl font-black text-[#0D1B40] mb-4">LPG Cylinder Sizes in Kenya — Which is Right for You?</h1>
        <p className="text-gray-500 text-lg mb-10 max-w-2xl">Kenyan households and businesses use different LPG cylinder sizes depending on cooking frequency, household size, and budget. Here is a complete comparison of the three most common sizes available through MobiGas vendors.</p>
                <div className="bg-white rounded-2xl border border-gray-100 p-6 mb-8">
          <h2 className="text-lg font-bold text-[#0D1B40] mb-4">3kg cylinder — best for minimal cooking</h2>
          <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm text-gray-600">
              <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
              Ideal for single people, students, or occasional cooking
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
              Lightest and easiest to carry — popular in student hostels and bedsitters
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
              Lasts approximately 1-2 weeks for a single person cooking daily
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
              Lowest upfront cost but highest cost per kg of gas
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
              Available from most MobiGas vendors on credit
            </div>
          </div>
        </div>
        <div className="bg-white rounded-2xl border border-gray-100 p-6 mb-8">
          <h2 className="text-lg font-bold text-[#0D1B40] mb-4">6kg cylinder — most popular for households</h2>
          <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm text-gray-600">
              <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
              Best for small to medium households of 2-4 people
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
              Lasts approximately 3-5 weeks depending on cooking frequency
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
              Good balance between cost per kg and manageability
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
              Most widely available cylinder size across Kenya
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
              The most popular size ordered through MobiGas
            </div>
          </div>
        </div>
        <div className="bg-white rounded-2xl border border-gray-100 p-6 mb-8">
          <h2 className="text-lg font-bold text-[#0D1B40] mb-4">13kg cylinder — best value for families and businesses</h2>
          <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm text-gray-600">
              <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
              Ideal for large families of 5 or more, or small businesses
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
              Lowest cost per kg — best value for regular heavy cooking
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
              Lasts 6-10 weeks for a family cooking 3 meals daily
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
              Heavier and less portable but great for fixed kitchen setups
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
              Popular with restaurants, schools, and catering businesses
            </div>
          </div>
        </div>

        <div className="bg-[#0D1B40] rounded-2xl p-8 text-center">
          <h3 className="text-xl font-bold text-white mb-2">Order any cylinder size on credit today</h3>
          <p className="text-gray-300 text-sm mb-6 max-w-md mx-auto">Download MobiGas and choose your preferred cylinder size from verified vendors near you.</p>
          <a href="/#download" className="inline-block bg-[#F97316] text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-orange-600 transition-colors">
            Order Your Cylinder on Credit
          </a>
        </div>
      </div>
    </div>
  )
}

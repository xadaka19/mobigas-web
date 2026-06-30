import { useState } from 'react'
import { Menu, X, Flame } from 'lucide-react'

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <div className="w-9 h-9 bg-[#F97316] rounded-xl flex items-center justify-center">
            <Flame size={20} className="text-white" />
          </div>
          <span className="font-bold text-xl text-[#0D1B40]">MobiGas</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a href="#how-it-works" className="text-gray-600 hover:text-[#F97316] transition-colors text-sm font-medium">How it works</a>
          <a href="#for-vendors" className="text-gray-600 hover:text-[#F97316] transition-colors text-sm font-medium">For vendors</a>
          <a href="#why-mobigas" className="text-gray-600 hover:text-[#F97316] transition-colors text-sm font-medium">Why MobiGas</a>
          <a href="/faq" className="text-gray-600 hover:text-[#F97316] transition-colors text-sm font-medium">FAQ</a>
          <a href="#download" className="bg-[#F97316] text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-orange-600 transition-colors">
            Get the app
          </a>
        </div>

        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 space-y-4">
          <a href="#how-it-works" className="block text-gray-600 font-medium" onClick={() => setOpen(false)}>How it works</a>
          <a href="#for-vendors" className="block text-gray-600 font-medium" onClick={() => setOpen(false)}>For vendors</a>
          <a href="#why-mobigas" className="block text-gray-600 font-medium" onClick={() => setOpen(false)}>Why MobiGas</a>
          <a href="/faq" className="block text-gray-600 font-medium">FAQ</a>
          <a href="#download" className="block bg-[#F97316] text-white px-5 py-2.5 rounded-full text-sm font-semibold text-center" onClick={() => setOpen(false)}>Get the app</a>
        </div>
      )}
    </nav>
  )
}

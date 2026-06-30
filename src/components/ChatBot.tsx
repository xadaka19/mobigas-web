import { useState, useRef, useEffect } from 'react'
import { MessageCircle, X, Send, Flame, UserRound, CheckCircle } from 'lucide-react'
import { faqData, defaultAnswer } from '../data/chatbotFaq'
import { db } from '../firebase'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'

interface Message {
  sender: 'bot' | 'user'
  text: string
}

type Mode = 'chat' | 'ticketForm' | 'ticketSent'

function findAnswer(input: string): string {
  const lower = input.toLowerCase()
  for (const entry of faqData) {
    if (entry.keywords.some((kw: string) => lower.includes(kw))) {
      return entry.answer
    }
  }
  return defaultAnswer
}

export default function ChatBot() {
  const [open, setOpen] = useState(false)
  const [mode, setMode] = useState<Mode>('chat')
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: 'bot',
      text: "Hi! 👋 I'm the MobiGas assistant. Ask me about ordering gas, becoming a vendor, credit, repayment, or anything else!",
    },
  ])
  const [input, setInput] = useState('')
  const [ticketName, setTicketName] = useState('')
  const [ticketEmail, setTicketEmail] = useState('')
  const [ticketPhone, setTicketPhone] = useState('')
  const [ticketMessage, setTicketMessage] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const endRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, open, mode])

  const handleSend = () => {
    const trimmed = input.trim()
    if (!trimmed) return

    const userMsg: Message = { sender: 'user', text: trimmed }
    const botMsg: Message = { sender: 'bot', text: findAnswer(trimmed) }

    setMessages(prev => [...prev, userMsg, botMsg])
    setInput('')
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend()
  }

  const handleTicketSubmit = async () => {
    if (!ticketName.trim() || !ticketEmail.trim() || !ticketMessage.trim()) return
    setSubmitting(true)
    try {
      await addDoc(collection(db, 'support_tickets'), {
        name: ticketName.trim(),
        email: ticketEmail.trim(),
        phone: ticketPhone.trim(),
        message: ticketMessage.trim(),
        status: 'open',
        source: 'website_chat',
        createdAt: serverTimestamp(),
      })
      setMode('ticketSent')
    } catch (e) {
      console.error('Failed to submit ticket', e)
      alert('Something went wrong sending your message. Please email hello@mobigas.co.ke directly.')
    }
    setSubmitting(false)
  }

  const resetTicketForm = () => {
    setTicketName('')
    setTicketEmail('')
    setTicketPhone('')
    setTicketMessage('')
    setMode('chat')
  }

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#F97316] rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
        aria-label="Chat with MobiGas"
      >
        {open ? <X size={24} className="text-white" /> : <MessageCircle size={24} className="text-white" />}
      </button>

      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-80 sm:w-96 h-[28rem] bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden">
          <div className="bg-[#0D1B40] px-4 py-3 flex items-center gap-2">
            <div className="w-8 h-8 bg-[#F97316] rounded-lg flex items-center justify-center">
              <Flame size={16} className="text-white" />
            </div>
            <div>
              <div className="text-white font-semibold text-sm">MobiGas Assistant</div>
              <div className="text-gray-400 text-xs flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span>
                Always here to help
              </div>
            </div>
          </div>

          {mode === 'chat' && (
            <>
              <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50">
                {messages.map((m, i) => (
                  <div key={i} className={`flex ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div
                      className={`max-w-[80%] px-3 py-2 rounded-2xl text-sm leading-relaxed ${
                        m.sender === 'user'
                          ? 'bg-[#F97316] text-white rounded-br-sm'
                          : 'bg-white text-gray-700 border border-gray-200 rounded-bl-sm'
                      }`}
                    >
                      {m.text}
                    </div>
                  </div>
                ))}
                <div ref={endRef} />
              </div>

              <div className="px-3 pt-2 pb-1 bg-white border-t border-gray-100">
                <button
                  onClick={() => setMode('ticketForm')}
                  className="w-full flex items-center justify-center gap-2 text-xs text-[#F97316] font-medium py-1.5 hover:underline"
                >
                  <UserRound size={14} />
                  Talk to a real person instead
                </button>
              </div>

              <div className="p-3 border-t border-gray-100 bg-white flex items-center gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask a question..."
                  className="flex-1 border border-gray-200 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#F97316]"
                />
                <button
                  onClick={handleSend}
                  className="w-9 h-9 bg-[#F97316] rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors flex-shrink-0"
                  aria-label="Send"
                >
                  <Send size={16} className="text-white" />
                </button>
              </div>
            </>
          )}

          {mode === 'ticketForm' && (
            <div className="flex-1 overflow-y-auto p-4 bg-gray-50 space-y-3">
              <button
                onClick={() => setMode('chat')}
                className="text-xs text-gray-400 hover:text-gray-600 mb-1"
              >
                ← Back to chat
              </button>
              <div className="text-sm font-semibold text-[#0D1B40] mb-1">
                Send us a message
              </div>
              <p className="text-xs text-gray-500 mb-2">
                Our team will get back to you by email.
              </p>
              <input
                type="text"
                placeholder="Your name"
                value={ticketName}
                onChange={e => setTicketName(e.target.value)}
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#F97316]"
              />
              <input
                type="email"
                placeholder="Your email"
                value={ticketEmail}
                onChange={e => setTicketEmail(e.target.value)}
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#F97316]"
              />
              <input
                type="tel"
                placeholder="Phone (optional)"
                value={ticketPhone}
                onChange={e => setTicketPhone(e.target.value)}
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#F97316]"
              />
              <textarea
                placeholder="How can we help?"
                value={ticketMessage}
                onChange={e => setTicketMessage(e.target.value)}
                rows={4}
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#F97316] resize-none"
              />
              <button
                onClick={handleTicketSubmit}
                disabled={submitting || !ticketName.trim() || !ticketEmail.trim() || !ticketMessage.trim()}
                className="w-full bg-[#F97316] text-white py-2.5 rounded-lg font-semibold text-sm hover:bg-orange-600 disabled:opacity-50 transition-colors"
              >
                {submitting ? 'Sending...' : 'Send message'}
              </button>
            </div>
          )}

          {mode === 'ticketSent' && (
            <div className="flex-1 flex flex-col items-center justify-center p-6 bg-gray-50 text-center">
              <CheckCircle size={40} className="text-green-500 mb-3" />
              <div className="font-semibold text-[#0D1B40] mb-1">Message sent!</div>
              <p className="text-sm text-gray-500 mb-4">
                Our team will reach out to you by email shortly.
              </p>
              <button
                onClick={resetTicketForm}
                className="text-sm text-[#F97316] font-medium hover:underline"
              >
                Back to chat
              </button>
            </div>
          )}
        </div>
      )}
    </>
  )
}

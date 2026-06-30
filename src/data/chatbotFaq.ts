export interface FaqEntry {
  keywords: string[];
  answer: string;
}

export const faqData: FaqEntry[] = [
  {
    keywords: ['what is mobigas', 'about mobigas', 'what do you do'],
    answer: "MobiGas is Kenya's gas-on-credit delivery platform. Order gas now, get it delivered in 10–40 minutes, and repay within 30 days via M-Pesa.",
  },
  {
    keywords: ['credit', 'how does credit work', 'loan'],
    answer: 'You apply once through the app. Our partner bank runs an instant credit check (CRB) and sets your credit limit. You can then order gas anytime within that limit.',
  },
  {
    keywords: ['who lends', 'who provides credit', 'is mobigas a lender', 'is mobigas a bank'],
    answer: "Credit is provided exclusively by our partner banks and SACCOs, not MobiGas. We're a platform that connects you to vendors and credit providers — we don't lend money ourselves.",
  },
  {
    keywords: ['delivery time', 'how long', 'how fast'],
    answer: 'Typically 10–40 minutes depending on your location and vendor proximity.',
  },
  {
    keywords: ['repay', 'pay back', 'repayment', 'how do i pay'],
    answer: 'Repay your partner bank directly via M-Pesa within 30 days. Bank interest applies per your agreement with them.',
  },
  {
    keywords: ['vendor verified', 'verified vendor', 'trust vendor'],
    answer: 'Yes, every vendor is verified by our team before they can receive orders, including business registration/ID checks.',
  },
  {
    keywords: ['become a vendor', 'join as vendor', 'sign up vendor', 'register vendor'],
    answer: 'Download the MobiGas Vendor app, register your business details, upload your business certificate or ID, add your gas products and pricing. Our team verifies you within 24 hours.',
  },
  {
    keywords: ['how vendors paid', 'vendor payment', 'when do vendors get paid'],
    answer: 'Instantly to M-Pesa once the customer confirms delivery with their 4-digit PIN. The bank pays directly — no waiting.',
  },
  {
    keywords: ['stock boost', 'stock loan', 'vendor loan'],
    answer: 'A loan vendors can apply for after 3 consistent months on the platform with 30+ deliveries, to help buy more gas stock in bulk. Provided by partner banks, not MobiGas.',
  },
  {
    keywords: ['areas', 'coverage', 'location', 'where do you deliver'],
    answer: 'We match you with verified vendors within 8km of your location for fast, reliable delivery.',
  },
  {
    keywords: ['data safe', 'privacy', 'security', 'data protection'],
    answer: "Yes. All data is encrypted in transit and at rest, and we follow Kenya's Data Protection Act (KDPA) requirements. See our Privacy Policy for details.",
  },
  {
    keywords: ['complaint', 'issue', 'problem', 'bad delivery', 'help'],
    answer: 'Sorry to hear that. Please email support@mobigas.co.ke with details and our team will follow up promptly.',
  },
  {
    keywords: ['download', 'get the app', 'install', 'where to download'],
    answer: "You can download the MobiGas customer app from the Download section on this page, or visit the Google Play Store and search 'MobiGas'.",
  },
  {
    keywords: ['contact', 'phone number', 'email', 'reach you'],
    answer: 'You can reach us at hello@mobigas.co.ke or +254 700 000 000.',
  },
  {
    keywords: ['hi', 'hello', 'hey', 'good morning', 'good afternoon'],
    answer: "Hi there! 👋 I'm the MobiGas assistant. Ask me anything about ordering gas, becoming a vendor, or how credit works.",
  },
];

export const defaultAnswer =
  "I'm not sure about that one. For anything specific, email us at support@mobigas.co.ke and our team will help you directly.";

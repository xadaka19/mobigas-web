import { Flame, ArrowLeft } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const content: Record<string, { title: string; sections: { heading: string; body: string }[] }> = {
  terms: {
    title: 'Terms of Service',
    sections: [
      { heading: '1. About MobiGas', body: 'MobiGas is a digital marketplace platform that connects customers with local gas vendors and regulated financial institutions for gas purchases on credit. MobiGas does not issue credit, lend money, or hold customer funds.' },
      { heading: '2. Gas Credit', body: 'Credit is provided exclusively by our partner banks and SACCOs, not by MobiGas. You repay the bank directly within the agreed period. MobiGas earns a referral fee from the bank for connecting you to their services.' },
      { heading: '3. Eligibility', body: 'To use MobiGas you must be 18 years or older, a resident of Kenya, hold a valid National ID, and provide accurate personal information during registration. MobiGas reserves the right to deny service to any user.' },
      { heading: '4. Your Responsibilities', body: 'You must provide accurate personal information. You must have an empty cylinder ready for exchange on delivery (for refill orders). You must repay the bank within the agreed period. You are responsible for the accuracy of guarantor information you provide.' },
      { heading: '5. Guarantors', body: 'By adding guarantors, you confirm you have obtained their express consent to be listed. Guarantors may be contacted by the partner bank in cases of payment default. MobiGas is not responsible for disputes between customers and guarantors.' },
      { heading: '6. Delivery', body: 'Gas is delivered by independently registered vendors. MobiGas is not responsible for delivery delays, product quality issues, or disputes caused by vendors or third parties. All vendor complaints should be reported through the app.' },
      { heading: '7. Account Security', body: 'You are responsible for keeping your account credentials and 4-digit delivery PIN secure. Notify us immediately at security@mobigas.co.ke of any unauthorized access to your account.' },
      { heading: '8. Termination', body: 'MobiGas may suspend or terminate accounts that violate these terms, engage in fraudulent activity, or default on credit obligations. Termination does not waive any outstanding obligations to partner banks.' },
      { heading: '9. Limitation of Liability', body: 'MobiGas is a platform intermediary and is not liable for actions of vendors, partner banks, or third parties. Our liability is limited to the fees collected by MobiGas on your transactions.' },
      { heading: '10. Governing Law', body: 'These terms are governed by the laws of Kenya. Any disputes shall be resolved under Kenyan jurisdiction.' },
      { heading: '11. Contact', body: 'For questions about these terms, contact us at legal@mobigas.co.ke.' },
    ],
  },
  privacy: {
    title: 'Privacy Policy',
    sections: [
      { heading: '1. Data We Collect', body: 'We collect: Personal identification data (name, phone number, email, National ID number); Location data (GPS coordinates for vendor matching and delivery); Biometric data (selfie photograph for identity verification); Financial data (credit history shared by partner banks, repayment records); Device data (FCM token for push notifications, device type); Usage data (app interactions, order history).' },
      { heading: '2. How We Use Your Data', body: 'We use your data to: Create and manage your MobiGas account; Match you with nearby verified gas vendors; Share your KYC data with partner banks for credit assessment; Send order status and payment notifications; Verify your identity via selfie photograph; Improve our platform and services; Comply with legal and regulatory obligations.' },
      { heading: '3. Data Sharing', body: 'We share your personal data only with: Partner banks and SACCOs for credit assessment and disbursement; Gas vendors for delivery purposes (name, delivery address, phone); Regulatory authorities as required by Kenyan law; Service providers who help us operate the platform under strict confidentiality agreements. We do NOT sell your personal data to third parties or use it for advertising purposes.' },
      { heading: '4. Data Storage & Security', body: 'Your data is stored on Google Firebase servers located in Europe. Selfie photographs are stored in Firebase Storage with encryption at rest. We use industry-standard TLS encryption for data in transit. Access to personal data is restricted to authorized MobiGas personnel only.' },
      { heading: '5. Data Retention', body: 'We retain your personal data for as long as your account is active, plus 7 years thereafter for compliance with Kenyan financial regulations. You may request deletion of your account and data, subject to regulatory retention requirements.' },
      { heading: '6. Your Rights', body: 'Under the Kenya Data Protection Act 2019, you have the right to: Access your personal data; Correct inaccurate data; Object to processing; Request data portability; Lodge a complaint with the ODPC. Contact: privacy@mobigas.co.ke' },
      { heading: '7. CRB & Credit Consent', body: 'By applying for gas credit on MobiGas, you consent to sharing your personal and financial information with partner financial institutions for credit assessment, including Credit Reference Bureau (CRB) checks.' },
      { heading: '8. Changes to This Policy', body: 'We may update this Privacy Policy from time to time. We will notify you of significant changes via the app. Continued use of MobiGas after changes constitutes acceptance.' },
      { heading: '9. Contact', body: 'Data Protection Officer: dpo@mobigas.co.ke | Office: Nairobi, Kenya' },
    ],
  },
  data: {
    title: 'Data Protection Policy',
    sections: [
      { heading: 'Our Commitment', body: 'MobiGas is committed to protecting the personal data of all users in accordance with the Kenya Data Protection Act 2019 (KDPA) and the General Data Protection Regulation (GDPR) principles.' },
      { heading: 'Legal Basis for Processing', body: 'We process personal data under the following legal bases: Contractual necessity (to provide our gas delivery and credit facilitation services); Legitimate interests (to improve our platform and prevent fraud); Legal obligation (to comply with Kenyan financial and data protection regulations); Consent (for optional features such as marketing communications).' },
      { heading: 'Data Minimization', body: 'We collect only the minimum personal data necessary to provide our services. We do not collect sensitive personal data beyond what is required for identity verification and credit facilitation.' },
      { heading: 'International Transfers', body: 'Your data is stored on Google Firebase servers in Europe. Google LLC is certified under the EU-US Data Privacy Framework. All international data transfers are conducted under appropriate safeguards.' },
      { heading: 'Data Breach Procedures', body: 'In the event of a personal data breach, MobiGas will notify the ODPC within 72 hours and affected users without undue delay, as required by the KDPA.' },
      { heading: 'Data Protection Officer', body: 'Our designated Data Protection Officer can be reached at dpo@mobigas.co.ke. You may contact them for any data protection queries, access requests, or complaints.' },
    ],
  },
  odpc: {
    title: 'ODPC Compliance',
    sections: [
      { heading: 'Registration', body: 'MobiGas is registered with the Office of the Data Protection Commissioner (ODPC) of Kenya as a Data Controller and Data Processor under the Kenya Data Protection Act 2019.' },
      { heading: 'Our Obligations', body: 'As a registered data processor, MobiGas: Processes personal data only for specified, explicit, and legitimate purposes; Ensures data is accurate and kept up to date; Implements appropriate technical and organizational security measures; Maintains records of all data processing activities; Conducts regular data protection impact assessments.' },
      { heading: 'Digital Marketplace Classification', body: 'MobiGas operates as a Digital Marketplace Technology Provider. We are not classified as a lender or financial institution. Credit services are provided exclusively by our regulated partner banks and SACCOs who hold their own CBK licenses.' },
      { heading: 'User Rights Under KDPA', body: 'Every MobiGas user has the right to: Be informed about how their data is used; Access their personal data; Correct inaccurate data; Object to data processing; Port their data to another service; Lodge a complaint with the ODPC at info@odpc.go.ke or call +254 20 8099000.' },
      { heading: 'Compliance Contact', body: 'For ODPC-related inquiries: Data Protection Officer — dpo@mobigas.co.ke | MobiGas Inc., Nairobi, Kenya' },
    ],
  },
}

export default function LegalPage({ type }: { type: string }) {
  const navigate = useNavigate()
  const page = content[type]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-[#0D1B40] py-6 px-6">
        <div className="max-w-4xl mx-auto flex items-center gap-4">
          <button
            onClick={() => navigate('/')}
            className="text-gray-400 hover:text-white transition-colors"
          >
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

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-black text-[#0D1B40] mb-2">{page.title}</h1>
        <p className="text-gray-400 text-sm mb-12">Last updated: June 2026</p>

        <div className="space-y-8">
          {page.sections.map(({ heading, body }) => (
            <div key={heading}>
              <h2 className="text-lg font-bold text-[#0D1B40] mb-3">{heading}</h2>
              <p className="text-gray-600 leading-relaxed">{body}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 p-6 bg-[#0D1B40] rounded-2xl">
          <p className="text-gray-300 text-sm">
            For any questions about this document, contact us at{' '}
            <a href="mailto:legal@mobigas.co.ke" className="text-[#F97316] hover:underline">
              legal@mobigas.co.ke
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

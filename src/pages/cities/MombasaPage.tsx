import CityPageTemplate from './CityPageTemplate'
export default function MombasaPage() {
  return (
    <CityPageTemplate
      city="Mombasa"
      county="Mombasa County"
      description="Order cooking gas on credit in Mombasa and get it delivered in 10-40 minutes. MobiGas connects you with verified LPG vendors across Mombasa Island, Nyali, Bamburi, Likoni and beyond — no cash needed, pay via M-Pesa within 30 days."
      neighborhoods={[
        'Mombasa Island', 'Nyali', 'Bamburi', 'Likoni', 'Changamwe',
        'Kisauni', 'Mikindani', 'Miritini', 'Tudor', 'Mwembe Tayari',
        'Kongowea', 'Shanzu', 'Kadzandani', 'Bombolulu', 'Magongo',
        'Mishomoroni', 'Mtopanga', 'Mkomani', 'Ziwa la Ng\'ombe'
      ]}
    />
  )
}

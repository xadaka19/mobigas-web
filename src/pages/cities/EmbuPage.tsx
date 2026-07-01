import CityPageTemplate from './CityPageTemplate'
export default function EmbuPage() {
  return (
    <CityPageTemplate
      city="Embu"
      county="Embu County"
      description="Fast cooking gas delivery on credit in Embu County. MobiGas connects you with verified vendors across Embu Town, Runyenjes and surrounding areas — order now and pay via M-Pesa within 30 days."
      neighborhoods={['Embu Town', 'Runyenjes', 'Siakago', 'Manyatta', 'Kibugu', 'Kianjokoma', 'Ena', 'Ishiara']}
    />
  )
}

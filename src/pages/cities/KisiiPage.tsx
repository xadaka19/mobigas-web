import CityPageTemplate from './CityPageTemplate'
export default function KisiiPage() {
  return (
    <CityPageTemplate
      city="Kisii"
      county="Kisii County"
      description="Fast cooking gas delivery on credit across Kisii Town and surrounding areas. MobiGas connects you with verified vendors in Kisii, Ogembo, Suneka and beyond — pay via M-Pesa within 30 days."
      neighborhoods={['Kisii Town', 'Ogembo', 'Suneka', 'Nyamache', 'Masimba', 'Keroka', 'Riosiri', 'Keumbu', 'Nyaribari']}
    />
  )
}

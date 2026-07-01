import CityPageTemplate from './CityPageTemplate'
export default function MeruPage() {
  return (
    <CityPageTemplate
      city="Meru"
      county="Meru County"
      description="Fast cooking gas delivery on credit across Meru County. MobiGas connects you with verified vendors in Meru Town, Nkubu, Maua and surrounding areas — order now, pay via M-Pesa within 30 days."
      neighborhoods={['Meru Town', 'Nkubu', 'Maua', 'Nchiru', 'Mikinduri', 'Timau', 'Kiirua', 'Mitunguu', 'Igoji']}
    />
  )
}

import CityPageTemplate from './CityPageTemplate'
export default function KilimaniPage() {
  return (
    <CityPageTemplate
      city="Kilimani"
      county="Nairobi County"
      description="Fast cooking gas delivery on credit in Kilimani and surrounding Nairobi Central areas. MobiGas connects you with verified LPG vendors across Kilimani, Lavington, Hurlingham and all nearby neighborhoods."
      neighborhoods={['Kilimani', 'Lavington', 'Hurlingham', 'Milimani', 'Kileleshwa', 'Yaya Centre Area', 'Adams Arcade', 'Valley Arcade', 'Denis Pritt Road']}
    />
  )
}

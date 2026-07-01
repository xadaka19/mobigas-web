import CityPageTemplate from './CityPageTemplate'
export default function MoloPage() {
  return (
    <CityPageTemplate
      city="Molo"
      county="Nakuru County"
      description="Fast cooking gas delivery on credit in Molo and surrounding Nakuru County highlands. MobiGas connects you with verified LPG vendors across Molo Town, Njoro and all nearby areas."
      neighborhoods={['Molo Town', 'Njoro', 'Elburgon', 'Olenguruone', 'Mau Summit', 'Turi', 'Keringet', 'Sirikwa']}
    />
  )
}

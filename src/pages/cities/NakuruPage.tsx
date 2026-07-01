import CityPageTemplate from './CityPageTemplate'
export default function NakuruPage() {
  return (
    <CityPageTemplate
      city="Nakuru"
      county="Nakuru County"
      description="Order LPG cooking gas on credit in Nakuru City and get it delivered fast. MobiGas connects you with verified vendors across Nakuru Town, Milimani, Lanet, Section 58 and surrounding areas — no cash needed upfront."
      neighborhoods={[
        'Nakuru Town', 'Milimani', 'Lanet', 'Section 58', 'London',
        'Bondeni', 'Kivumbini', 'Rhonda', 'Shabab', 'Free Area',
        'Kaptembwa', 'Mwariki', 'Nakuru East', 'Pipeline', 'Flamingo',
        'Kiti', 'Barut', 'Afraha', 'Pangani'
      ]}
    />
  )
}

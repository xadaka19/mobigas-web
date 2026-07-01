import CityPageTemplate from './CityPageTemplate'
export default function ThikaPage() {
  return (
    <CityPageTemplate
      city="Thika"
      county="Kiambu County"
      description="Order cooking gas on credit in Thika and get it delivered fast to your door. MobiGas connects you with verified LPG vendors across Thika Town, Makongeni, Gatuanyaga, Township and all Thika areas — pay later via M-Pesa."
      neighborhoods={[
        'Thika Town', 'Makongeni', 'Gatuanyaga', 'Township', 'Ngoingwa',
        'Landless', 'Kiandutu', 'Thika Road', 'Blue Post', 'Mangu',
        'Chania', 'Garissa Road', 'Kamenu', 'Ngoliba', 'Witeithie',
        'Ziwani', 'Maporomoko', 'Hospital Area', 'Kiganjo'
      ]}
    />
  )
}

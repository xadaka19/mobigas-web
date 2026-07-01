import CityPageTemplate from './CityPageTemplate'
export default function KiambuPage() {
  return (
    <CityPageTemplate
      city="Kiambu"
      county="Kiambu County"
      description="Fast cooking gas delivery on credit across Kiambu County. MobiGas connects you with verified vendors in Kiambu Town, Ruiru, Kahawa, Juja and all Kiambu areas — order now, pay via M-Pesa within 30 days."
      neighborhoods={[
        'Kiambu Town', 'Ruiru', 'Kahawa', 'Juja', 'Kikuyu',
        'Limuru', 'Githunguri', 'Karuri', 'Banana', 'Ndumberi',
        'Kinoo', 'Wangige', 'Dagoretti Corner', 'Kabete',
        'Tigoni', 'Kirigiti', 'Mugutha', 'Riabai', 'Kanunga',
        'Kahawa Sukari', 'Kahawa West', 'Kamiti', 'Clay City'
      ]}
    />
  )
}

import CityPageTemplate from './CityPageTemplate'
export default function HolaPage() {
  return (
    <CityPageTemplate
      city="Hola"
      county="Tana River County"
      description="Order cooking gas on credit in Hola and Tana River County. MobiGas connects you with verified LPG vendors in Hola Town, Garsen and surrounding Tana River areas — pay later via M-Pesa."
      neighborhoods={['Hola Town', 'Garsen', 'Bura', 'Madogo', 'Ngao', 'Wenje', 'Chewani']}
    />
  )
}

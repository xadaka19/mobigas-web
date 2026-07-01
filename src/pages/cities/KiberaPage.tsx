import CityPageTemplate from './CityPageTemplate'
export default function KiberaPage() {
  return (
    <CityPageTemplate
      city="Kibera"
      county="Nairobi County"
      description="Order cooking gas on credit in Kibera and surrounding areas. MobiGas connects you with verified LPG vendors across Kibera, Ayany, Lindi, Soweto and all nearby neighborhoods in Nairobi South West."
      neighborhoods={['Kibera', 'Ayany', 'Lindi', 'Soweto', 'Laini Saba', 'Makina', 'Silanga', 'Mashimoni', 'Olympic', 'Gatwekera']}
    />
  )
}

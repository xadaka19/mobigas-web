import CityPageTemplate from './CityPageTemplate'
export default function NgongPage() {
  return (
    <CityPageTemplate
      city="Ngong"
      county="Kajiado County"
      description="Fast cooking gas delivery on credit in Ngong Town and surrounding Kajiado County areas. MobiGas connects you with verified LPG vendors across Ngong, Rongai, Kiserian and all nearby areas."
      neighborhoods={['Ngong Town', 'Rongai', 'Kiserian', 'Matasia', 'Kibiko', 'Ngong Hills', 'Oloolua', 'Embulbul', 'Suswa Road']}
    />
  )
}

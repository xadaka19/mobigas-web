import CityPageTemplate from './CityPageTemplate'
export default function KisumuPage() {
  return (
    <CityPageTemplate
      city="Kisumu"
      county="Kisumu County"
      description="Fast cooking gas delivery across Kisumu City on credit. MobiGas connects you with verified gas vendors in Milimani, Kondele, Nyalenda, Mamboleo and all Kisumu neighborhoods — pay later via M-Pesa within 30 days."
      neighborhoods={[
        'Milimani', 'Kondele', 'Nyalenda', 'Mamboleo', 'Obunga',
        'Manyatta', 'Kaloleni', 'Bandani', 'Migosi', 'Kibuye',
        'Jubilee Market', 'Tom Mboya', 'Shauri Moyo', 'Nyamasaria',
        'Riat', 'Kororo', 'Arina', 'Manyatta B'
      ]}
    />
  )
}

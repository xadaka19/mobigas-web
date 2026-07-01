import CityPageTemplate from './CityPageTemplate'
export default function MumiastPage() {
  return (
    <CityPageTemplate
      city="Mumias"
      county="Kakamega County"
      description="Fast cooking gas delivery on credit in Mumias. MobiGas connects you with verified LPG vendors across Mumias Town and surrounding Kakamega County areas — pay later via M-Pesa."
      neighborhoods={['Mumias Town', 'Etago', 'Lusheya', 'Musanda', 'Matawa', 'Malaha', 'Saboti', 'Butere']}
    />
  )
}

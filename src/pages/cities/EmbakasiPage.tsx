import CityPageTemplate from './CityPageTemplate'
export default function EmbakasPage() {
  return (
    <CityPageTemplate
      city="Embakasi"
      county="Nairobi County"
      description="Fast cooking gas delivery on credit in Embakasi and surrounding Nairobi East areas. MobiGas connects you with verified LPG vendors across Embakasi, Utawala, Mihango and all nearby neighborhoods."
      neighborhoods={['Embakasi', 'Utawala', 'Mihango', 'Kamulu', 'Joska', 'Matopeni', 'Pipeline', 'Fedha', 'Greenfield', 'Imara Daima']}
    />
  )
}

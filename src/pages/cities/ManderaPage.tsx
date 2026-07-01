import CityPageTemplate from './CityPageTemplate'
export default function ManderaPage() {
  return (
    <CityPageTemplate
      city="Mandera"
      county="Mandera County"
      description="Get cooking gas delivered on credit in Mandera County. MobiGas connects you with verified LPG vendors across Mandera Town, Elwak and surrounding areas — pay later via M-Pesa."
      neighborhoods={['Mandera Town', 'Elwak', 'Rhamu', 'Banissa', 'Lafey', 'Takaba', 'Kutulo']}
    />
  )
}

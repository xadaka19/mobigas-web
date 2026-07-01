import CityPageTemplate from './CityPageTemplate'
export default function KakamegaPage() {
  return (
    <CityPageTemplate
      city="Kakamega"
      county="Kakamega County"
      description="Get cooking gas delivered on credit in Kakamega in 10-40 minutes. MobiGas connects you with verified LPG vendors across Kakamega Town, Mumias, Butere and all Kakamega neighborhoods."
      neighborhoods={['Kakamega Town', 'Mumias', 'Butere', 'Khayega', 'Lurambi', 'Shinyalu', 'Malava', 'Navakholo', 'Likuyani']}
    />
  )
}

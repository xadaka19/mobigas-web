import CityPageTemplate from './CityPageTemplate'
export default function EldoretPage() {
  return (
    <CityPageTemplate
      city="Eldoret"
      county="Uasin Gishu County"
      description="Get cooking gas delivered on credit in Eldoret in 10-40 minutes. MobiGas connects you with verified LPG vendors across Eldoret Town, Huruma, Langas, Annex and all Eldoret neighborhoods — pay later via M-Pesa."
      neighborhoods={[
        'Eldoret Town', 'Huruma', 'Langas', 'Annex', 'Munyaka',
        'Kapsoya', 'Kimumu', 'Elgon View', 'West Indies', 'Zonal',
        'Maili Nne', 'Pioneer', 'Flamingo', 'Moi University Area',
        'Ngeria', 'Racecourse', 'Sosiani', 'Kamukunji'
      ]}
    />
  )
}

import CityPageTemplate from './CityPageTemplate'
export default function NairobiPage() {
  return (
    <CityPageTemplate
      city="Nairobi"
      county="Nairobi County"
      description="Order cooking gas on credit anywhere in Nairobi and get it delivered in 10-40 minutes. MobiGas connects you with verified LPG vendors across all Nairobi neighborhoods — no cash needed, pay your partner bank within 30 days via M-Pesa."
      neighborhoods={[
        'Westlands', 'Kilimani', 'Lavington', 'Karen', "Lang'ata",
        'Kasarani', 'Roysambu', 'Ruaraka', 'Embakasi', 'South B',
        'South C', 'Upperhill', 'Hurlingham', 'Ngong Road', 'Dagoretti',
        'Kibera', 'Mathare', 'Kayole', 'Umoja', 'Donholm',
        'Buruburu', 'Eastleigh', 'Pangani', 'Parklands', 'Gigiri',
        'Runda', 'Muthaiga', 'Spring Valley', 'Loresho', 'Kikuyu Road',
        'Korogocho', 'Mukuru kwa Njenga', 'Mukuru kwa Reuben', 'Viwandani',
        'Kariobangi', 'Githurai', 'Zimmerman', 'Lucky Summer', 'Baba Dogo'
      ]}
    />
  )
}

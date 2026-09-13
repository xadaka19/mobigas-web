import { country } from '../config/countries'
import { kenyaCounties, type CountyData } from './kenyaCounties'

export type RegionData = CountyData // { slug, name, areas[] }

// Tanzania — launch mikoa (regions). Areas are real wards/suburbs.
const tanzaniaRegions: RegionData[] = [
  { slug: 'dar-es-salaam', name: 'Dar es Salaam', areas: ['Kinondoni', 'Ilala', 'Temeke', 'Ubungo', 'Kigamboni', 'Masaki', 'Mikocheni', 'Sinza', 'Mbezi', 'Tegeta'] },
  { slug: 'mwanza', name: 'Mwanza', areas: ['Nyamagana', 'Ilemela', 'Buzuruga', 'Nyakato', 'Igoma'] },
  { slug: 'arusha', name: 'Arusha', areas: ['Arusha CBD', 'Njiro', 'Sakina', 'Sekei', 'Kaloleni', 'Themi'] },
  { slug: 'dodoma', name: 'Dodoma', areas: ['Dodoma CBD', 'Kikuyu', 'Area C', 'Ipagala', 'Nala'] },
  { slug: 'mbeya', name: 'Mbeya', areas: ['Mbeya CBD', 'Iyunga', 'Forest', 'Sisimba', 'Uyole'] },
  { slug: 'zanzibar', name: 'Zanzibar', areas: ['Stone Town', 'Michenzani', 'Mazizini', 'Kariakoo', 'Fumba'] },
]

// Uganda — launch cities/districts. Areas are real divisions/suburbs.
const ugandaRegions: RegionData[] = [
  { slug: 'kampala', name: 'Kampala', areas: ['Nakawa', 'Kawempe', 'Makindye', 'Rubaga', 'Central', 'Ntinda', 'Kololo', 'Bukoto', 'Naguru', 'Muyenga'] },
  { slug: 'entebbe', name: 'Entebbe', areas: ['Entebbe Town', 'Kitoro', 'Kiwafu', 'Nakiwogo'] },
  { slug: 'jinja', name: 'Jinja', areas: ['Jinja CBD', 'Bugembe', 'Walukuba', 'Mpumudde', 'Njeru'] },
  { slug: 'gulu', name: 'Gulu', areas: ['Gulu CBD', 'Layibi', 'Bardege', 'Laroo', 'Pece'] },
  { slug: 'mbarara', name: 'Mbarara', areas: ['Mbarara CBD', 'Kakoba', 'Nyamitanga', 'Kamukuzi', 'Biharwe'] },
]

const byCountry: Record<string, RegionData[]> = {
  KE: kenyaCounties,
  TZ: tanzaniaRegions,
  UG: ugandaRegions,
}

// The active country's regions — what AreasPage/CountyPage render.
export const regions: RegionData[] = byCountry[country.code] ?? kenyaCounties

// Word used for a region in this country ("County" / "Region" / "District").
export const regionWord: string = { KE: 'County', TZ: 'Region', UG: 'District' }[country.code] ?? 'Region'

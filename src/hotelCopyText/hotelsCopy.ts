import { HotelImage1, HotelImage2, HotelImage3 } from '../assets'

export type HotelCopy = {
  title: string
  location: string
  guests: {
    adults: number
    children: number
    infants?: number
  }
  stars: 0 | 1 | 2 | 3 | 4 | 5
  date: string
  days: number
  departingFrom: string
  priceInPence: number
  description: string
  image: typeof import('*.png')
}

export const hotelsCopy: Array<HotelCopy> = [
  {
    title: 'Iberostar Grand Salome',
    location: 'Costa Adeje, Tenerife',
    guests: {
      adults: 2,
      children: 2,
      infants: 1,
    },
    stars: 5,
    date: '3rd July 2019',
    days: 7,
    departingFrom: 'Manchester',
    priceInPence: 113650,
    description: 'Placeholder description',
    image: HotelImage1,
  },
  {
    title: 'Arguamarina Golf Hotel',
    location: 'Costa Adeje, Tenerife',
    guests: {
      adults: 2,
      children: 1,
    },
    stars: 4,
    date: '27th May 2019',
    days: 7,
    departingFrom: 'Liverpool',
    priceInPence: 69680,
    description: 'Placeholder description',
    image: HotelImage2,
  },
  {
    title: 'Las Piramides Resport',
    location: 'Costa Adeje, Tenerife',
    guests: {
      adults: 2,
      children: 2,
    },
    stars: 3,
    date: '3rd July 2019',
    days: 7,
    departingFrom: 'Manchester',
    priceInPence: 49999,
    description: 'Placeholder description',
    image: HotelImage3,
  },
]

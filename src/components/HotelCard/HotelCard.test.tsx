import { render, screen } from '@testing-library/react'
import { HotelCard } from './HotelCard'
import { GuestsRow } from '../GuestsRow/GuestsRow'
import { BookButton } from '../BookButton/BookButton'
import { HotelDescription } from '../HotelDescription/HotelDescription'
import { RenderStars } from '../Stars/RenderStars'
import { HotelImage1 } from '../../assets'
import { HotelCopy } from '../../hotelCopyText/hotelsCopy'

jest.mock('../GuestsRow/GuestsRow')
jest.mock('../BookButton/BookButton')
jest.mock('../HotelDescription/HotelDescription')
jest.mock('../Stars/RenderStars')

const mockHotel = {
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
} as HotelCopy

describe('HotelCard', () => {
  const cardStrings = [
    mockHotel.title,
    mockHotel.location,
    mockHotel.date,
    `${mockHotel.days} days`,
    mockHotel.departingFrom,
  ]

  it.each(cardStrings)(
    'should render the hotel card with the line %s',
    string => {
      render(<HotelCard hotel={mockHotel} />)

      expect(screen.getByText(string, { exact: false })).toBeInTheDocument()
    },
  )
})

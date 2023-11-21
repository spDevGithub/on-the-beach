import { render, screen } from '@testing-library/react'
import { HotelCard } from './HotelCard.component'
import { HotelImage1 } from '../../assets'
import { HotelCopy } from '../../hotelCopyText/hotelsCopy'

jest.mock('../GuestsRow/GuestsRow.component', () => ({
  GuestsRow: () => <div data-testid="GuestsRow"></div>,
}))
jest.mock('../BookButton/BookButton.component', () => ({
  BookButton: () => <div data-testid="BookButton"></div>,
}))
jest.mock('../HotelDescription/HotelDescription.component', () => ({
  HotelDescription: () => <div data-testid="HotelDescription"></div>,
}))
jest.mock('../Stars/RenderStars.component', () => ({
  RenderStars: () => <div data-testid="RenderStars"></div>,
}))

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

  const additionalComponents = [
    'GuestsRow',
    'BookButton',
    'HotelDescription',
    'RenderStars',
  ]

  it.each(additionalComponents)('should render %s component', component => {
    render(<HotelCard hotel={mockHotel} />)

    expect(screen.getByTestId(component)).toBeInTheDocument()
  })
})

import { BookButton } from './BookButton.component'
import { convertPenceToString } from '../../helpers/convertPenceToString'
import { render, screen } from '@testing-library/react'

jest.mock('../../helpers/convertPenceToString')

describe('BookButton', () => {
  it('should render a button and call convertPenceToString', () => {
    render(<BookButton priceInPence={123} />)

    expect(screen.getByText('Book Now')).toBeInTheDocument()

    expect(convertPenceToString).toHaveBeenCalledWith(123)
  })
})

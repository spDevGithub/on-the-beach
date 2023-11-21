import { render, screen } from '@testing-library/react'
import { GuestsRow } from './GuestsRow'

describe('GuestsRow', () => {
  it('should include the correct with number of adults', () => {
    render(<GuestsRow guests={{ adults: 2, children: 2, infants: 2 }} />)

    const adultsText = screen.getByText('adults', { exact: false })

    expect(adultsText).toHaveTextContent('2 adults')
  })

  it('should include a singular adult if only one adult is present in guests', () => {
    render(<GuestsRow guests={{ adults: 1, children: 2, infants: 2 }} />)

    const adultsText = screen.getByText('adult', { exact: false })

    expect(adultsText).toHaveTextContent('1 adult')
  })

  it('should include the correct with number of children', () => {
    render(<GuestsRow guests={{ adults: 2, children: 2, infants: 2 }} />)

    const adultsText = screen.getByText('children', { exact: false })

    expect(adultsText).toHaveTextContent('2 children')
  })

  it('should include a singular child if only one child is present in guests', () => {
    render(<GuestsRow guests={{ adults: 1, children: 1, infants: 2 }} />)

    const adultsText = screen.getByText('child', { exact: false })

    expect(adultsText).toHaveTextContent('1 child')
  })

  it('should include the correct with number of infants', () => {
    render(<GuestsRow guests={{ adults: 2, children: 2, infants: 2 }} />)

    const adultsText = screen.getByText('infants', { exact: false })

    expect(adultsText).toHaveTextContent('2 infants')
  })

  it('should include a singular infant if only one infant is present in guests', () => {
    render(<GuestsRow guests={{ adults: 1, children: 1, infants: 1 }} />)

    const adultsText = screen.getByText('infant', { exact: false })

    expect(adultsText).toHaveTextContent('1 infant')
  })

  it('should NOT render any infant text if no infants are present in guests', () => {
    render(<GuestsRow guests={{ adults: 1, children: 1 }} />)

    expect(
      screen.queryByText('infant', { exact: false }),
    ).not.toBeInTheDocument()
  })
})

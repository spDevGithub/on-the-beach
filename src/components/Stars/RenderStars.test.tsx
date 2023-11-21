import { act, render, screen } from '@testing-library/react'
import { RenderStars } from './RenderStars.component'

describe('RenderStars', () => {
  beforeEach(() => {
    jest.useFakeTimers()
  })

  const stars = [1, 2, 3, 4, 5]
  it.each(stars)('should render %s stars after a delay', numberOfStars => {
    render(<RenderStars stars={numberOfStars} />)

    for (let i = 0; i < numberOfStars; i++)
      act(() => {
        jest.advanceTimersByTime(100)
      })

    expect(screen.getAllByTestId('star')).toHaveLength(numberOfStars)
  })
})

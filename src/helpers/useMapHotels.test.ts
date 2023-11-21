import { renderHook } from '@testing-library/react'
import { useMapHotels } from './useMapHotels'
import { hotelsCopy } from '../hotelCopyText/hotelsCopy'

describe('useMapHotels', () => {
  it('should return hotels in the correct order', () => {
    const actual = renderHook(() => useMapHotels(hotelsCopy, 'stars'))

    expect(actual.result.current[0].stars).toEqual(3)
  })
})

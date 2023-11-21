import { useMemo } from 'react'
import { HotelCopy } from '../hotelCopyText/hotelsCopy'
import { SortByType } from './useAppContext'

export const useMapHotels = (hotelsCopy: HotelCopy[], sortOrder: SortByType) =>
  useMemo(() => {
    return hotelsCopy.sort((a, b) => (a[sortOrder] < b[sortOrder] ? -1 : 1))
  }, [sortOrder])

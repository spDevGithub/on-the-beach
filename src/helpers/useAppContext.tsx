import { Dispatch, SetStateAction, createContext, useContext } from 'react'
import { HotelCopy } from '../hotelCopyText/hotelsCopy'

export type SortByType = keyof HotelCopy

export type ContextType = {
  sortOrder: SortByType
  setSortOrder: Dispatch<SetStateAction<SortByType>> | null
}

export const defaultContext: ContextType = {
  sortOrder: 'title',
  setSortOrder: null,
}

export const AppContext = createContext(defaultContext)

export const useAppContext = () => useContext(AppContext)

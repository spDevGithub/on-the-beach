import { useMemo, useState } from 'react'
import styles from './app.module.css'
import { HotelCard } from './components/HotelCard/HotelCard.component'
import { SortOptionWrapper } from './components/SortOptions/SortOptionWrapper.component'
import { AppContext, SortByType } from './helpers/useAppContext'
import { hotelsCopy } from './hotelCopyText/hotelsCopy'
import { useMapHotels } from './helpers/useMapHotels'

const App = () => {
  const [sortOrder, setSortOrder] = useState<SortByType>('title')

  const hotels = useMapHotels(hotelsCopy, sortOrder)

  return (
    <AppContext.Provider value={{ sortOrder, setSortOrder }}>
      <div className="App">
        <div className={styles.container}>
          <div className={styles.columnLeft}>
            <SortOptionWrapper />
          </div>
          <div className={styles.columnRight}>
            {hotels.map(hotel => (
              <HotelCard hotel={hotel} key={hotel.title} />
            ))}
          </div>
        </div>
      </div>
    </AppContext.Provider>
  )
}

export default App

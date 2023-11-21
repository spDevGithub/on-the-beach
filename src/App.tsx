import styles from './app.module.css'
import { HotelCard } from './components/HotelCard/HotelCard'
import { hotelsCopy } from './copy/hotelsCopy'

const App = () => {
  return (
    <div className="App">
      <div className={styles.container}>
        <div className={styles.columnLeft}></div>
        <div className={styles.columnRight}>
          {hotelsCopy.map(hotel => (
            <HotelCard hotel={hotel} key={hotel.title} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default App

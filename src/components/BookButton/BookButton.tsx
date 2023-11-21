import { convertPenceToString } from '../../helpers/convertPenceToString'
import styles from './BookButton.module.css'

export const BookButton = (props: { priceInPence: number }) => (
  <button className={styles.bookButton}>
    <div className={styles.buttonLabel}>Book Now</div>
    <div className={styles.buttonPrice}>
      {convertPenceToString(props.priceInPence)}
    </div>
  </button>
)

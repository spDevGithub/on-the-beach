import styles from './SortOptionWrapper.module.css'
import { SortButton } from '../SortButton/SortButton.component'

export const SortOptionWrapper = () => (
  <div className={styles.sortOptionsWrapper}>
    <SortButton
      label={'title'}
      text={
        <>
          sort <b>alphabetically</b>
        </>
      }
    />
    <SortButton
      label={'priceInPence'}
      text={
        <>
          sort by <b>price</b>
        </>
      }
    />
    <SortButton
      label={'stars'}
      text={
        <>
          sort by <b>star rating</b>
        </>
      }
    />
  </div>
)

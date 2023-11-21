import { useState } from 'react'
import styles from './HotelDescription.module.css'

export const HotelDescription = (props: { description: string }) => {
  const [descriptionExpanded, setDescriptionExpanded] = useState<boolean>(false)

  return (
    <>
      <button
        className={styles.descriptionButton}
        onClick={() => setDescriptionExpanded(!descriptionExpanded)}
      >
        <b>Read {descriptionExpanded ? 'less' : 'more'}</b> about this hotel
      </button>

      {descriptionExpanded && (
        <div className={styles.descriptionText}>{props.description}</div>
      )}
    </>
  )
}

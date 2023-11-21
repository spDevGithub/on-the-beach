import styles from './GuestRow.module.css'

export const GuestsRow = (props: {
  guests: { adults: number; children: number; infants?: number }
}) => {
  const {
    guests: { adults, children, infants },
  } = props

  return (
    <div className={styles.guestsRow}>
      <div>
        <b>{adults}</b> {adults > 1 ? 'adults' : 'adult'}
      </div>
      <div>
        , <b>{children}</b> {children > 1 ? 'children' : 'child'}
      </div>
      {infants && (
        <div>
          , <b>{infants}</b> {infants > 1 ? 'infants' : 'infant'}
        </div>
      )}
    </div>
  )
}

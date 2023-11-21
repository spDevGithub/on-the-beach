import { useContext } from 'react'
import styles from './SortButton.module.css'
import { SortByType, useAppContext } from '../../helpers/useAppContext'

export const SortButton = (props: { label: SortByType; text: JSX.Element }) => {
  const { sortOrder, setSortOrder } = useAppContext()

  return (
    <button
      className={`${sortOrder === props.label && styles.sortButtonActive} ${
        styles.sortButton
      }`}
      onClick={() => setSortOrder && setSortOrder(props.label)}
    >
      {props.text}
    </button>
  )
}

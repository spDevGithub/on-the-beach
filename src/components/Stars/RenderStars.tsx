import { useEffect, useState } from 'react'
import Star from '../../assets/star.png'
import styles from './RenderStars.module.css'

export const RenderStars = (props: { stars: number }) => {
  const [starsToRender, setStarsToRender] = useState<number[]>([])
  useEffect(() => {
    starsToRender.length < props.stars &&
      setTimeout(() => {
        setStarsToRender([...starsToRender, 1])
      }, 100)
  }, [starsToRender])

  return (
    <>
      {starsToRender.map((star, index) => (
        <img
          src={Star}
          className={styles.star}
          alt="star"
          key={`star-${index}`}
          data-testid="star"
        />
      ))}
    </>
  )
}

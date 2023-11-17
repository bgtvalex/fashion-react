import styles from './card.module.css'
import arrow from './../../../img/icons/arrow.svg'

const Card = ({title, img}) => {
  return (
    <div className={styles.card}>
    <a href='#!' className={styles.card__link}></a>
      <img src={img} alt="img" className={styles.card__img}></img>
      <div className={styles.card__wrapper}>
        <div className={styles.card__desc}>
          <div className={styles.card__title}>{title}</div>
          <div className={styles.card__text}>Explore Now!</div>
        </div>
        <img src={arrow} alt="arrow" className={styles.card__arrow}></img>
      </div>
    </div>
  )
}

export default Card

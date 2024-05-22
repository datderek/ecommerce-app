import styles from './InfiniteCarousel.module.css'

function InfiniteCarousel({ images }) {
  return (
    <div className={styles['carousel-wrapper']}>
      <div className={styles['carousel']}>
        {images.map((image) => <img className={styles[`carousel-item`]} src={image} alt='' />)}
        {images.map((image) => <img className={styles[`carousel-item`]} aria-hidden={true} src={image} alt='' />)}
      </div>
    </div>
  )
}

export default InfiniteCarousel;
import styles from './carousel.module.scss';

export function Carousel() {
  return (
    <div className={styles.carouselContainer}>
      <img src="/s3.jpg" alt="Pé Grande" />
    </div>
  );
}

export default Carousel;

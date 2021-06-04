import styles from './homeMoradas.module.scss';

export function HomeMoradas() {
  return (
    <div className={styles.structureContainer}>
      <div className={styles.homeMoradas}>
        <span>Conheça as opções que temos para você:</span>
        <img src="/grid1.jpg" alt="Pé Grande1" />
        <img src="/grid2.jpg" alt="Pé Grande2" />
        <img src="/grid3.jpg" alt="Pé Grande3" />
      </div>
    </div>
  );
}

export default HomeMoradas;

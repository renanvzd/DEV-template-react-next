import styles from './homeMoradas.module.scss';

export function HomeMoradas() {
  return (
    <div className={styles.homeMoradas}>
      <span>Conheça as opções que temos para você:</span>
      <div className={styles.grid}>
        <div className={styles.blockPhoto}>
          <img src="/grid1.jpg" alt="Pé Grande1" />
          <span className={styles.add}>Minilofts Pé Grande</span>
          <span className={styles.addDown}>De frente pro mar, com piscina</span>
          <span className={styles.saibaMais}>Saiba mais...</span>
        </div>
        <div className={styles.blockPhoto}>
          <img src="/grid2.jpg" alt="Pé Grande2" />
          <span className={styles.add}>Minilofts Pé Grande</span>
          <span className={styles.addDown}>De frente pro mar, com piscina</span>
          <span className={styles.saibaMais}>Saiba mais...</span>
        </div>
        <div className={styles.blockPhoto}>
          <img src="/grid3.jpg" alt="Pé Grande3" />
          <span className={styles.add}>Minilofts Pé Grande</span>
          <span className={styles.addDown}>De frente pro mar, com piscina</span>
          <span className={styles.saibaMais}>Saiba mais...</span>
        </div>
      </div>
    </div>
  );
}

export default HomeMoradas;

import styles from './navigation.module.scss';

export function Navigation() {
  return (
    <div className={styles.navigationContainer}>
      <p>Home</p>
      <p>Moradas</p>
      <p>Pé Grande nas Montanhas</p>
      <p>Sobre nós</p>
    </div>
  );
}

export default Navigation;

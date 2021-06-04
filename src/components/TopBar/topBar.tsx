import styles from './topBar.module.scss';

export function TopBar() {
  return (
    <header className={styles.headerContainer}>
      <p>Moradas do Pé Grande</p>
      <div className={styles.socialMedia}>
        <a
          href="https://www.facebook.com/pousadatramandai"
          title="Visite nosso facebook"
        >
          <img src="/Facebook.svg" alt="Facebook" />
        </a>

        <a
          href="https://www.youtube.com/channel/UCb8Jf1A0laXF7O-b6up1FJg"
          title="Visite nosso canal"
        >
          <img src="/YouTube.svg" alt="YouTube" />
        </a>

        <a
          href="https://www.instagram.com/moradas_do_pe_grande_tramandai/"
          title="Visite nosso Instagram"
        >
          <img src="/Instagram_new.svg" alt="Instagram" />
        </a>
      </div>
    </header>
  );
}

export default TopBar;

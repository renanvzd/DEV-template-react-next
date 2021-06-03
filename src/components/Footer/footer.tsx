import styles from "./footer.module.scss";

export function Footer() {
  return (
    <div className={styles.footerContainer}>
      <span>Visite nossas redes sociais:</span>
      {/* <div className={styles.socialMedia}>
        <a
          href="https://www.facebook.com/pousadatramandai"
          title="Visite nosso facebook"
        >
          <img src="/Facebook.png" alt="Facebook" />
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
      </div> */}
      <span>2020 - Moradas do Pé Grande</span>
      <span>Website by RVD. Contato: renanvz@outlook.com</span>
    </div>
  );
}

export default Footer;

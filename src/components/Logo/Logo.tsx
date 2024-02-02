import styles from "./Logo.styles";

const Logo = () => {
  return (
    <section className={styles.logoContainer}>
      Family Budget
      <img
        src={process.env.PUBLIC_URL + "/img/logo.png"}
        alt=""
        className={styles.image}
      />
    </section>
  );
};

export default Logo;

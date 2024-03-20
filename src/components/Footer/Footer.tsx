import { useAppContextContainer } from "../../context/AppContext";
import GitHubIcon from "../../svg/GitHubIcon";
import LinkedInIcon from "../../svg/LinkedInIcon";
import footerLinks from "./Footer.data";
import styles from "./Footer.style";
import FooterLink from "./FooterLink";

const Footer = () => {
  const { isDarkmode } = useAppContextContainer();

  const date = new Date();
  const footerText = `©2023-${date.getFullYear()}, Rusłan Karaniewski`;

  return (
    <footer className={styles.footerContainer}>
      <FooterLink
        link={footerLinks[0]}
        icon={<LinkedInIcon fill={isDarkmode ? "black" : "lightgray"} />}
      />
      <p>{footerText}</p>
      <FooterLink
        link={footerLinks[1]}
        icon={<GitHubIcon fill={isDarkmode ? "black" : "lightgray"} />}
      />
    </footer>
  );
};

export default Footer;

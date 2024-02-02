import { ReactNode } from "react";
import styles from "./Footer.style";

type Props = {
  link: string;
  icon: ReactNode;
};

const FooterLink = ({ link, icon }: Props) => {
  return (
    <a href={link} target="_blank" rel="noreferrer" className={styles.link}>
      {icon}
    </a>
  );
};

export default FooterLink;

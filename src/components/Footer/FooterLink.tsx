import { ReactNode } from "react";

type Props = {
  link: string;
  icon: ReactNode;
};

const FooterLink = ({ link, icon }: Props) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="hover:brightness-75 dark:hover:contrast-75"
    >
      {icon}
    </a>
  );
};

export default FooterLink;

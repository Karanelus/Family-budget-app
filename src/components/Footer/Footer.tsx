import { useAppContextContainer } from "../../context/AppContext";
import GitHubIcon from "../../svg/GitHubIcon";
import LinkedInIcon from "../../svg/LinkedInIcon";
import footerLinks from "./Footer.data";
import FooterLink from "./FooterLink";

const Footer = () => {
  const { isDarkmode } = useAppContextContainer();

  const date = new Date();
  const footerText = `©2023-${date.getFullYear()}, Rusłan Karaniewski`;

  return (
    <footer className="flex h-fit animate-footer items-center justify-center gap-6 bg-zinc-500 py-3 hover:shadow-section dark:bg-zinc-700 dark:text-black dark:hover:shadow-sectionDark">
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

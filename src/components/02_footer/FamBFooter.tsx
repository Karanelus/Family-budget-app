import { useFamBContextContainer } from "../../context/FamBContext";
import GitHubIcon from "../../svg/GitHubIcon";
import LinkedInIcon from "../../svg/LinkedInIcon";

const FamBFooter = () => {
  const { isDarkmode } = useFamBContextContainer();

  const date = new Date();

  return (
    <footer className="bg-zinc-500 dark:bg-zinc-700 dark:text-black py-3 h-fit flex justify-center items-center animate-footer hover:shadow-section dark:hover:shadow-sectionDark gap-6">
      <a
        href="https://www.linkedin.com/in/karanelus/"
        target="_blank"
        rel="noreferrer"
        className="hover:brightness-75 dark:hover:contrast-75"
      >
        <LinkedInIcon fill={isDarkmode ? "" : "lightgray"} />
      </a>
      <p>©{date.getFullYear()}, Rusłan Karaniewski</p>
      <a
        href="https://github.com/Karanelus/"
        target="_blank"
        rel="noreferrer"
        className="hover:brightness-75 dark:hover:contrast-75"
      >
        <GitHubIcon fill={isDarkmode ? "" : "lightgray"} />
      </a>
    </footer>
  );
};

export default FamBFooter;

import { useFamBContextContainer } from "../../context/FamBContext";
import GitHubIcon from "../../svg/GitHubIcon";
import LinkedInIcon from "../../svg/LinkedInIcon";

const FamBFooter = () => {
  const { isDarkmode } = useFamBContextContainer();

  const date = new Date();

  return (
    <footer className="flex h-fit animate-footer items-center justify-center gap-6 bg-zinc-500 py-3 hover:shadow-section dark:bg-zinc-700 dark:text-black dark:hover:shadow-sectionDark">
      <a
        href="https://www.linkedin.com/in/karanelus/"
        target="_blank"
        rel="noreferrer"
        className="hover:brightness-75 dark:hover:contrast-75"
      >
        <LinkedInIcon fill={isDarkmode ? "black" : "#d3d3d3"} />
      </a>
      <p>©{date.getFullYear()}, Rusłan Karaniewski</p>
      <a
        href="https://github.com/Karanelus/"
        target="_blank"
        rel="noreferrer"
        className="hover:brightness-75 dark:hover:contrast-75"
      >
        <GitHubIcon fill={isDarkmode ? "black" : "#d3d3d3"} />
      </a>
    </footer>
  );
};

export default FamBFooter;

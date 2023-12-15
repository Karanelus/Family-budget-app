import FamBMainLogo from "./FamBMainLogo";
import FamBMainRender from "./01_main/FamBMainRender";
import FamBFooter from "./02_footer/FamBFooter";
import FamBOptionsRender from "./03_options/FamBOptionsRender";

const FamBRender = () => {
  return (
    <>
      <FamBMainLogo />
      <FamBOptionsRender />
      <main className="grid place-items-center md:grid-cols-2 md:grid-rows-1 grid-rows-2 grid-cols-1 relative gap-8 mt-16 mb-10">
        <FamBMainRender />
      </main>
      <FamBFooter />
    </>
  );
};

export default FamBRender;

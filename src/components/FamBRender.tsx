import FamBMainLogo from "./FamBMainLogo";
import FamBMainRender from "./01_main/FamBMainRender";
import FamBFooter from "./02_footer/FamBFooter";
import FamBOptionsRender from "./03_options/FamBOptionsRender";

const FamBRender = () => {
  return (
    <>
      <FamBMainLogo />
      <FamBOptionsRender />
      <main className="relative mb-10 mt-16 grid grid-cols-1 grid-rows-2 place-items-center gap-8 md:grid-cols-2 md:grid-rows-1">
        <FamBMainRender />
      </main>
      <FamBFooter />
    </>
  );
};

export default FamBRender;

import FamBMainLogo from "./01_main/FamBMainLogo";
import FamBMainRender from "./01_main/FamBMainRender";
import FamBFooter from "./02_footer/FamBFooter";

const FamBRender = () => {
  return (
    <>
      <FamBMainLogo />
      <main className=" grid place-items-center md:grid-cols-2 md:grid-rows-1 grid-rows-2 grid-cols-1 relative gap-8 md:my-0 my-16">
        <FamBMainRender />
      </main>
      <FamBFooter />
    </>
  );
};

export default FamBRender;

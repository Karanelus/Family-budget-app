import FamBMainRender from "./01_main/FamBMainRender";
import FamBFooter from "./02_footer/FamBFooter";

const FamBRender = () => {
  return (
    <>
      <main className=" grid place-items-center md:grid-cols-2 md:grid-rows-1 grid-rows-2 grid-cols-1 relative gap-8">
        <FamBMainRender />
      </main>
      <FamBFooter />
    </>
  );
};

export default FamBRender;

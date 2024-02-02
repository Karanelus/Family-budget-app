import Logo from "./Logo/Logo";
import Footer from "./Footer/Footer";
import PageOption from "./PageOption/PageOption";
import Calculation from "./Calculation/Calculation";
import FamBGrafPartRender from "./Statistics/FamBGrafPartRender";

const Render = () => {
  return (
    <>
      <Logo />
      <PageOption />
      <main className="relative mb-10 mt-16 grid grid-cols-1 grid-rows-2 place-items-center gap-8 md:grid-cols-2 md:grid-rows-1">
        <Calculation />
        <FamBGrafPartRender />
      </main>
      <Footer />
    </>
  );
};

export default Render;

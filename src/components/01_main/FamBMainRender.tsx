import FamBBisPartRender from "./BisinessPart/FamBBisPartRender";
import FamBMainLogo from "./FamBMainLogo";
import FamBGrafPartRender from "./GraficPart/FamBGrafPartRender";

const FamBMainRender = () => {
  return (
    <>
      <FamBMainLogo />
      <FamBBisPartRender />
      <FamBGrafPartRender />
    </>
  );
};

export default FamBMainRender;

import FamBRender from "./components/FamBRender";
import FamBContext from "./context/FamBContext";

const App = () => {
  return (
    <FamBContext>
      <FamBRender />
    </FamBContext>
  );
};

export default App;

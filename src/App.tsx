import Render from "./components/Render";
import AppContext from "./context/AppContext";

const App = () => {
  return (
    <AppContext>
      <Render />
    </AppContext>
  );
};

export default App;

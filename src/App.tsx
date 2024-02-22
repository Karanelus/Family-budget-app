import Calculation from "./components/Calculation/Calculation";
import Date from "./components/Date/Date";
import Footer from "./components/Footer/Footer";
import Logo from "./components/Logo/Logo";
import Option from "./components/Option/Option";
import Statistics from "./components/Statistics/Statistics";
import AppContext from "./context/AppContext";

const App = () => {
  return (
    <AppContext>
      <Logo />
      <Option />
      <main className="relative mb-10 mt-16 grid grid-cols-1 grid-rows-2 place-items-center gap-8 md:grid-cols-2 md:grid-rows-1">
        <Calculation />
        <Statistics />
      </main>
      <Footer />
      <Date />
    </AppContext>
  );
};

export default App;

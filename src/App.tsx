import Calculation from "./components/Calculation/Calculation";
import Date from "./components/Date/Date";
import Footer from "./components/Footer/Footer";
import Logo from "./components/Logo/Logo";
import Option from "./components/Option/Option";
import Statistics from "./components/Statistics/Statistics";

const App = () => {
  return (
    <>
      <Logo />
      <Option />
      <main className="relative grid grid-cols-1 grid-rows-2 place-items-center gap-8 md:grid-cols-2 md:grid-rows-1">
        <Calculation />
        <Statistics />
      </main>
      <Footer />
      <Date />
    </>
  );
};

export default App;

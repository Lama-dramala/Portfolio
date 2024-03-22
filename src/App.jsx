import About from "./components/About";
import Contacts from "./components/Contacts";
import Navigation from "./components/Navigation";
import Portfolio from "./components/Portfolio";

export default function App() {
  return (
    <div>
      <Navigation />
      <About />
      <Portfolio />
      <Contacts />
    </div>
  );
}

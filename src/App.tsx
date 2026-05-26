import { Navbar }        from "./components/layout/Navbar/Navbar";
import { Footer }        from "./components/layout/Footer/Fooder";
import { Home }          from "./page/Home/Home";
import { TempButton } from "./components/ui/WhatsAppButton/TempButton";

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <Home />
      </main>
      <Footer />
      <TempButton phone="56912345678" />
    </>
  );
};

export default App;
import { Navbar }        from "./components/layout/Navbar/Navbar";
import { Footer }        from "./components/layout/Footer/Fooder";
import { Home }          from "./page/Home/Home";
import { Button } from "./components/ui/WhatsAppButton/Button";

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <Home />
      </main>
      <Footer />
      <Button phone="56912345678" />
    </>
  );
};

export default App;
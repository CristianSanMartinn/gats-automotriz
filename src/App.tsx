import { Navbar }        from "./components/layout/Navbar/Navbar";
import { Footer }        from "./components/layout/Footer/Fooder";
import { Home }          from "./page/Home/Home";
import { Whatsappbutton } from "./components/ui/WhatsAppButton/Whatsappbutton";

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <Home />
      </main>
      <Footer />
      <Whatsappbutton phone="56912345678" />
    </>
  );
};

export default App;
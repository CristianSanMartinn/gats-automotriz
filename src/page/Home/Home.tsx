import { Hero }         from "../../sections/Hero/Hero";
import { Services }     from "../../sections/Services/Services";
import { About }        from "../../sections/About/About";
import { Gallery }      from "../../sections/Gallery/Gallery";
import { CTA }          from "../../sections/CTA/CTA";
import { Reservation }  from "../../sections/Reservation/Reservation";
import { Testimonials } from "../../sections/Testimonials/Testimonials";
import { Contact }      from "../../sections/Contact/Contact";

export const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Gallery />
      <CTA />
      <Reservation />
      <Testimonials />
      <Contact />
    </>
  );
};

export default Home;
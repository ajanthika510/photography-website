import Hero from "../components/Hero";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import CameraActor from "../components/CameraActor";

const Home = ({ introStatus }) => {
  return (
    <div className="w-full relative">
        <CameraActor />

      {/* Hero Section */}
      <Hero introStatus={introStatus} />
      
      {/* Services Section */}
      <Services />

      {/* Portfolio Section */}
      <Portfolio />

      {/* About Section */}
      <About />

      {/* Contact Section */}
      <Contact />

      {/* Premium Vintage Footer */}
      <Footer/>
    </div>
  );
};

export default Home;

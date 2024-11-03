import { Outlet } from "react-router-dom";
import { Navbar } from "../../Components/Navbar";
import { FixedToTheTop, FixedWhatsappIcon } from "../../Components/FixedIcon";
import Footer from "../../Components/Footer";

const MainLayout = () => {
  function scrollToTop() {
    window.scrollTo({ behavior: "smooth", top: 0 });
  }
  return (
    <div className="relative overflow-hidden ">
      <Navbar />
      <div className="z-10 ">
        <Outlet />
      </div>
      <div className=" w-full">
        <Footer />
      </div>
      <FixedWhatsappIcon />
      <FixedToTheTop scrollToTop={scrollToTop} />
    </div>
  );
};

export default MainLayout;

import { Outlet } from "react-router-dom";
import { Navbar } from "../../Components/Navbar";
import { FixedToTheTop, FixedWhatsappIcon } from "../../Components/FixedIcon";
import Footer from "../../Components/Footer";

const MainLayout = () => {
  return (
    <div className="relative overflow-hidden">
      <Navbar />
      <div className="z-10">
        <Outlet />
      </div>
      <div className=" w-full">
        <Footer />
      </div>
      <FixedWhatsappIcon />
      <FixedToTheTop />
    </div>
  );
};

export default MainLayout;

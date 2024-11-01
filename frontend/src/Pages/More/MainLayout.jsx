import { Outlet } from "react-router-dom";
import { Navbar} from "../../Components/Navbar";

const MainLayout = () => {

  return (
    <div className="relative overflow-hidden">
      <Navbar/>
      <div className="z-10 bg-indigo-50">
        <Outlet />
      </div>
      <div className=" w-full">
      {/* <Footer/> */}

      </div>

    </div>
  );
};

export default MainLayout;

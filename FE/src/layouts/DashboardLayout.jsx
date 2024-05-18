import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const DashboardLayout = (props) => {
  const { children } = props;
  return (
    <div className="w-full flex flex-row">
      <Sidebar></Sidebar>
      <div className="relative overflow-y-auto overflow-x-hidden w-full h-screen flex flex-col flex-1">
        <Navbar></Navbar>
        <div className="overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;

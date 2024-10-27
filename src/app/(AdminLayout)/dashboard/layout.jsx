import LeftSidebar from "../../_components/dashboard/LeftSidebar";

const AdminLayout = ({ children }) => {
  return (
    <div className="grid grid-cols-12 bg-colorSolid min-h-screen">
      <div className="hidden sm:block sm:col-span-3  border-r border-colorPrimary sticky top-0 h-screen">
        <LeftSidebar />
      </div>
      <div className="col-span-12 sm:col-span-9 border-r-1 border-colorPrimary">
        <div className="block sm:hidden sticky top-0 z-50">
          {/* <DashboardNavbar /> */}
        </div>
        {children}
      </div>
    </div>
  );
};

export default AdminLayout;

import DashboardNavBar from "./Navbar";

import Sidebar from "./Sidebar";

const DashboardLayout = ({
    children
}: { children: React.ReactNode }) => {
    return (
        <div className="h-full relative">
            <div className="hidden h-full md:flex md:w-60 md:flex-col md:fixed md:insert-y-0 z-[80] bg-gray-900">
                <Sidebar />
            </div>
            <main className="md:pl-60">
                <DashboardNavBar />
                {children}
            </main>
        </div>
    )
}

export default DashboardLayout;
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import DashboardSideBar from "./Sidebar";

const MobileSideBar = () => {
    return (
        <Sheet>
            <SheetTrigger>
                <Button variant={'ghost'} size={'icon'} className="md:hidden lg:hidden">
                    <Menu />
                </Button>
            </SheetTrigger>
            <SheetContent side={'left'} className="p-0">
                <DashboardSideBar />
            </SheetContent>
        </Sheet>
        
    )
}

export default MobileSideBar;
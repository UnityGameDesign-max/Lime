
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import MobileSideBar from "./MobileSidebar";

const Navbar = () => {
    return(
        <div className="flex items-center p-4">
            <MobileSideBar />
            <div className="flex w-full justify-end">
            <Avatar>
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>

            </div>
        </div>
    )
}

export default Navbar;
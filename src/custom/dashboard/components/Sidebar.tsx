import { cn } from "@/lib/utils";
import {
  PhoneCall
} from "lucide-react";

import { 
  Link, 
  useLocation 
} from "react-router-dom";


const routes = [
  {
    label: "Leads",
    icon: PhoneCall,
    href: "/",
    color: "text-[#4FBB3E]",
  },
  
];

const Sidebar = () => {
  const location = useLocation();
  return (
    <div className="space-y-4 py-4 flex-col justify-between flex h-full bg-[#1b2e11] text-white">
      <div>
        <Link to="/dashboard" className="flex items-center px-3 py-2 mb-3">
          <div className="relative flex items-center gap-3 w-8 h-8 mr-4">
            
            
          </div>
        </Link>

       

            <div className="space-y-1 flex-1 px-3 py-2">
            {routes.map((route) => (
                <Link
                to={route.href}
                key={route.href}
                className={cn(
                    "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover: text-white hover:bg-white/10 rounded-lg transition",
                    location.pathname === route.href
                    ? "text-white bg-white/10"
                    : "text-zinc-400"
                )}
                >
                <div className="flex items-center flex-1">
                    <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                    {route.label}
                </div>
                </Link>
            ))}
            </div>
        </div>
      
    </div>
  );
};

export default Sidebar;

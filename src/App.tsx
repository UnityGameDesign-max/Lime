import { BrowserRouter, Routes, Route } from "react-router-dom";

import DashboardLayout from "./custom/dashboard/components/layout";

import Leads from "./custom/dashboard/leads";

function App() {
 

  return (
    <>
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashboardLayout children={<Leads />} />} />
        </Routes>
       </BrowserRouter>
      
    </>
  )
}

export default App

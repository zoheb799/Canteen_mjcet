import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import '../Admin.css';

import { Container } from "reactstrap";

const FullLayout = () => {
  return (
    <main>
      <div className="pageWrapper d-lg-flex">
        {/********Sidebar**********/}
        <aside className="sidebarArea shadow" id="sidebarArea">
          <Sidebar />
        </aside>
        {/********Content Area**********/}

     
        
          {/********Middle Content**********/}
          <Container className="p-4 wrapper" fluid>
            <Outlet />
          </Container>
        </div>
      
    </main>
  );
};

export default FullLayout;

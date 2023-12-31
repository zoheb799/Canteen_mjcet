import { Button, Nav, NavItem } from "reactstrap";
import Logo from "../images/logo.jpg";
import { Link, useLocation } from "react-router-dom";

const navigation = [
  {
    title: "Dashboard",
    href: "/Adminn/starter",
    icon: "bi bi-speedometer2",
  },
  {
    title: "Total Orders",
    href: "/Adminn/table",
    icon: "bi bi-layout-split",
  },
  {
    title: "Registrations",
    href: "/Adminn/forms",
    icon: "bi bi-textarea-resize",
  },
  
  
];

const Sidebar = () => {
  const showMobilemenu = () => {
    document.getElementById("sidebarArea").classList.toggle("showSidebar");
  };
  let location = useLocation();

  return (
    <div className="p-3">
      <div className="d-flex align-items-center">
      <Link to='/Admin/starter'>
      <figure><img src= {Logo} alt="signup pic" /></figure>
      </Link>
      
        <Button
          close
          size="sm"
          className="ms-auto d-lg-none"
          onClick={() => showMobilemenu()}
        ></Button>
      </div>
      <div className="pt-4 mt-2">
        <Nav vertical className="sidebarNav">
          {navigation.map((navi, index) => (
            <NavItem key={index} className="sidenav-bg">
              <Link
                to={navi.href}
                className={
                  location.pathname === navi.href
                    ? "text-primary nav-link py-3"
                    : "nav-link text-secondary py-3"
                }
              >
                <i className={navi.icon}></i>
                <span className="ms-3 d-inline-block">{navi.title}</span>
              </Link>
            </NavItem>
          ))}
          
        </Nav>
      </div>
    </div>
  );
};

export default Sidebar;

import React from "react";
import { SideBarwrapper, Logo } from "../Sidebar/Sidebar.styles";
import { NavLink } from "react-router-dom";
import { FaUsers, FaCopy, FaImage } from "react-icons/fa";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import { MdDashboard } from "react-icons/md";
import { IoHomeSharp } from "react-icons/io5";
import { FaHandHoldingWater } from "react-icons/fa";
import { GiWaterGallon } from "react-icons/gi";
import logo from "../../assets/logo.png"; 

const Sidebar = ({ setTitle, isCollapsed, setIsCollapsed }) => {
  const SidebarItem = [
    // { id: 1, name: "Home", path: "/admin", icon: <IoHomeSharp /> },
    { id: 1, name: "Dashboard", path: "/", icon: <MdDashboard /> },
    // { id: 3, name: "Users", path: "/admin/users", icon: <FaUsers /> },
    // { id: 4, name: "Devices", path: "/admin/devices", icon: <FaLaptop /> },
    // { id: 5, name: "Copies", path: "/admin/copy", icon: <FaCopy /> },
    // { id: 6, name: "Frames", path: "/admin/frame", icon: <FaImage /> },
    { id: 2, name: "Orders", path: "/admin/Orders", icon: <FaHandHoldingWater /> },
    { id: 3, name: "Payment", path: "/admin/payment", icon: <RiMoneyRupeeCircleFill /> },
    { id: 4, name: "Vendor", path: "/admin/vendorlist", icon: <FaUsers />  },
    { id: 5, name: "Water Can", path: "/admin/waterCan", icon: <GiWaterGallon /> },
  ];

  return (
    <SideBarwrapper
      isCollapsed={isCollapsed}
      onMouseEnter={() => setIsCollapsed(false)}
      onMouseLeave={() => setIsCollapsed(true)}
    >
<Logo isCollapsed={isCollapsed}>
  <img src={logo} alt="Logo" className="sidebar-logo" style={{ borderRadius: "50%"}}/>
</Logo>

      <div className="menu">
        <ul className="menu-list">
          {SidebarItem.map((item) => (
            <li className="menu-item" key={item.id}>
              <NavLink
                to={item.path}
                className={({ isActive }) => (isActive ? "menu-link active" : "menu-link")}
                onClick={() => {
                  setTitle(item.name); // Update Header Title immediately
                  localStorage.setItem("title", JSON.stringify(item.name)); // Store in Local Storage
                }}
                end
              >
                <span className="menu-link-icon">{item.icon}</span>
                {!isCollapsed && <span className="menu-link-text">{item.name}</span>}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </SideBarwrapper>
  );
};

export default Sidebar;

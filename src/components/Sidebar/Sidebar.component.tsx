import React from "react";
import { Nav } from "react-bootstrap";
import { sidebarMenuItems } from "./Sidebar.data";

const Sidebar = () => {
  return (
    <Nav
      className="bg-light sidebar"
      style={{
        height: "100vh",
      }}
    >
      {sidebarMenuItems.map((item, index) => {
        return (
          <Nav.Item key={index}>
            <Nav.Link href={item.path}>{item.label}</Nav.Link>
          </Nav.Item>
        );
      })}
    </Nav>
  );
};
export default Sidebar;

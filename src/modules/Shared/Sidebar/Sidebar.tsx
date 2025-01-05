
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Link } from "react-router-dom";

export default function SideBar() {
  

  return (
    <Sidebar className="lg:h-lvh md:h-svh">
      <Menu
    menuItemStyles={{
      button: {
        [`&.active`]: {
          border: '10rem solid black',
          color: "#EF9B28",
        },
        [`&`]: {
          padding:"2rem",
          paddingTop:"4rem",
          paddingBottom:"4rem"
          
        },
      },
    }}
  >
    <MenuItem component={<Link to="/dashboard" />}>Dashboard</MenuItem>
    <MenuItem component={<Link to="Students" />}>Students</MenuItem>
    <MenuItem component={<Link to="Group" />}>Groups</MenuItem>
    <MenuItem component={<Link to="Quizes" />}>Quizes</MenuItem>
    <MenuItem component={<Link to="Questions" />}>Questions</MenuItem>
    
  </Menu>

    </Sidebar>
  )
}

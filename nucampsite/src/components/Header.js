import { Navbar } from "reactstrap";
import { NavLink } from "react-router-dom";
import { Nav, NavbarBrand, NavItem } from "reactstrap";
import NucampLogo from "../app/assets/img/logo.png";

const Header = () => {
    return (
        <Navbar dark sticky="top" expand="md">
        <div className="container">
            <NavbarBrand className="mr-auto" href="/">
            <img
                src={NucampLogo}
                height="30"
                width="30"
                alt="NuCamp Logo"
            />
            </NavbarBrand>
            <Nav navbar>
            <NavItem>
                <NavLink className="nav-link" to="/directory">
                <i className="fa fa-list fa-lg" /> Directory
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink className="nav-link" to="/aboutus">
                <i className="fa fa-info fa-lg" /> About
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink className="nav-link" to="/contactus">
                <i className="fa fa-address-card fa-lg" /> Contact
                </NavLink>
            </NavItem>
            </Nav>
        </div>
        </Navbar>
    );
    };
    export default Header;
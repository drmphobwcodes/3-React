import { Navbar } from "reactstrap";
import {NavbarBrand } from "reactstrap";
import NucampLogo from "../app/assets/img/logo.png";

const Header = () => {
    return (

        <Navbar dark color='primary' sticky='top' expand='md'>
            <div className='container'>
                <NavbarBrand href='/'>
                    <img src={NucampLogo} height='30' width='30' alt='NuCamp Logo' />
                    NuCamp
                </NavbarBrand>
            </div>

             
            </Navbar>
    );
    };
    export default Header;
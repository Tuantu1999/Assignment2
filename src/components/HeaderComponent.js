import React from 'react'
import { Navbar, NavbarBrand, Nav, NavbarToggler, NavItem, Collapse } from 'reactstrap'

function Header () {
    return(
        <div>
            <Navbar color="primary">
                <NavbarBrand>
                    <img 
                        src='assets/images/logo.png'
                        width="40"
                        alt="Logo"
                    />
                </NavbarBrand>

                <Nav>
                    <NavItem>
                        <span className='fa fa-user fa-lg'></span> Nhân viên
                    </NavItem>

                    <NavItem>
                        <span className='fa fa-building'></span> Phòng ban
                    </NavItem>

                    <NavItem>
                        <span className='fa fa-dollar-sign'></span> Bảng lương
                    </NavItem>
                </Nav>
            </Navbar>
        </div>
    )
}

export default Header;
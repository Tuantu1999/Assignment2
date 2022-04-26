import React from 'react'
import { Navbar, NavbarBrand, Nav, NavbarToggler, NavItem, Collapse } from 'reactstrap'
import { NavLink } from 'react-router-dom'

function Header() {
    return (
        <div>
            <Navbar dark expand="md" color="primary">
                <div className="container">
                    <NavbarBrand className="mr-auto" href="/">
                        <img
                            src='assets/images/logo.png'
                            height="30"
                            width="41"
                            alt='Ristorante Con Fusion'
                        />
                    </NavbarBrand>
                    <Nav navbar>
                        <NavItem>
                            <NavLink className="nav-link" to='/staff'>
                                <span className='fa fa-user fa-lg'></span> Nhân viên
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to='/department'>
                                <span className='fa fa-id-card-o fa-lg'></span> Phòng ban
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to='/salary'>
                                <span className='fa fa-money fa-lg'></span> Bảng lương
                            </NavLink>
                        </NavItem>
                    </Nav>
                </div>
            </Navbar>
        </div>
    )
}

export default Header;
import React, { useState } from 'react';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const NavbarBlog = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Router>
                <Navbar color="dark" dark expand="md">
                    <NavbarBrand href="/">Rachael Yoder</NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <Link className='nav-link' to='/'>Home</Link>
                            </NavItem>
                            <NavItem>
                                <Link className='nav-link' to='/blog-posts'>Blog Posts</Link>
                            </NavItem>
                            <NavItem>
                                <Link className='nav-link' to='/projects'>Projects</Link>
                            </NavItem>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    Links
                            </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem>
                                        <NavLink href='https://github.com/rachyoder/'>GitHub</NavLink>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <NavLink href='https://www.linkedin.com/in/rachael-yoder-6637b9192/'>LinkedIn</NavLink>
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </Nav>
                    </Collapse>
                </Navbar>
                <Switch>
                    <Route path='/blog-posts'>

                    </Route>
                    <Route path='/projects'>

                    </Route>
                    <Route path='/'>
                    
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default NavbarBlog;

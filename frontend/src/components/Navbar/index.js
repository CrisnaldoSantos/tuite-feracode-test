import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Button
} from 'reactstrap';
import {FaEdit,FaPowerOff} from 'react-icons/fa';
import Logo from '../../assets/twitter.svg'
import {useDispatch} from 'react-redux'
import {authLogout} from '../../store/fetchActions'

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const dispatch =  useDispatch();
  function handleLogout(){
    dispatch(authLogout())
  }

  function handleNav(){
    window.location.pathname = '/settings';
  }

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Tuite <img src={Logo} alt='logo' width={20}/></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <Button className="bg-light border-light text-muted" onClick={handleNav}><FaEdit /> Editar perfil</Button>
            </NavItem>
            <NavItem>
              <Button className="bg-light border-light text-muted" onClick={handleLogout}><FaPowerOff /> Logout</Button>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Example;
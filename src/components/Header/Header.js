import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import TelegramIcon from '@mui/icons-material/Telegram';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import { Link, NavLink, withRouter } from 'react-router-dom';
import ResumeData from '../../utils/ResumeData';
import CustomButton from '../Button/Button';
import './Header.css';
const Header = (props) => {
  const path = props?.location?.pathname;
  return (
    <Navbar expand="lg" sticky='top' className='header'>
      {/* Home Link */}
      <Nav.Link as={NavLink} to='/' className='header_navlink' >
        <Navbar.Brand className='header_home'>
          <HomeIcon />
        </Navbar.Brand>
      </Nav.Link>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav className='header_left'>
          <Nav.Link as={NavLink} to='/' className={path == "/" ? "header_link_active" : "header_link"}>Resume</Nav.Link>
          <Nav.Link as={NavLink} to='/portfolio' className={path == "/portfolio" ? "header_link_active" : "header_link"}>Portfolio</Nav.Link>
        </Nav>
        <div className='header_right'>
          {Object.keys(ResumeData.socials).map(key => (
            <a href={ResumeData.socials[key].link} target='_blank'>{ResumeData.socials[key].icon}</a>
          ))}
          <CustomButton text={'Hire Me'} icon={<TelegramIcon/>} />
        </div>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header;
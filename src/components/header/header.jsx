import React, { useState, useEffect } from 'react';
import './header.css';
import { MdMenu, MdClose } from 'react-icons/md';

const Header = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navScroll = () => {
    const sections = ['about', 'experiences', 'projects', 'contact'];
    const scrollPosition = window.scrollY;
    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const { offsetTop, offsetHeight } = element;
        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          setActiveSection(section);
          break;
        }
      }
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', navScroll);
    return () => {
      window.removeEventListener('scroll', navScroll);
    };
  }, []);
  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };
  const handleLinkClick = (section) => {
    setActiveSection(section);
    setIsMenuOpen(false);
  };
  return (
    <header className = 'navbar'>
      <div className = 'header-navbar'>
      <h3 className = 'header-text1'>Portfolio</h3>
      <button onClick = { toggleMenu }>
        { isMenuOpen ? <MdClose /> : <MdMenu /> }
      </button>
      </div>
      <nav className = { `navigation ${ isMenuOpen ? 'active' : '' }` }>
        <a href = "#about" className = { activeSection === 'about' ? 'active' : '' } onClick = { () => handleLinkClick('about') }>About</a>
        <a href = "#experiences" className = { activeSection === 'experiences' ? 'active' : '' } onClick = { () => handleLinkClick('experiences') }>Experiences</a>
        <a href = "#projects" className = { activeSection === 'projects' ? 'active' : '' } onClick = { () => handleLinkClick('projects') }>Projects</a>
        <a href = "#contact" className = { activeSection === 'contact' ? 'active' : '' } onClick = { () => handleLinkClick('contact') }>Contact</a>
      </nav>
    </header>
  );
};

export default Header;
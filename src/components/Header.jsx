import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaFacebookF, FaTwitter, FaInstagram, FaPinterestP, FaBars, FaTimes } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { AiOutlineGlobal } from "react-icons/ai";
import { BsBag } from "react-icons/bs";

// Photos 
import PhoneIconn from "../image/PhoneIconn.png";
import Pin from "../image/Pin.png"
import Time from "../image/Time.png";

// Import ROUTES
import ROUTES from "../router/routes";

const HeaderContainer = styled.div`
  width: 100%;
  background-color: white;
  font-family: 'Arial', sans-serif;
  border-bottom: 0.01px solid #cbcbcb;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
`;

const TopBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
  background-color: #000000;
  height: 40px;
  width: 100%;
  
  @media (max-width: 1024px) {
    padding: 8px 0;
    height: auto;
  }
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const TopBarContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 25px;
  color: white;
  font-size: 13px;
  
  @media (max-width: 1024px) {
    gap: 15px;
    font-size: 12px;
    padding: 0 10px;
  }
  
  @media (max-width: 860px) {
    flex-wrap: wrap;
    gap: 10px;
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  
  @media (max-width: 1024px) {
    gap: 6px;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 12px;
  margin-left: 10px;
  
  @media (max-width: 1024px) {
    gap: 8px;
    margin-left: 5px;
  }
`;

const IconLink = styled.a`
  color: #fff;
  font-size: 12px;
  transition: 0.3s ease;

  &:hover {
    color: #d4af37;
  }
`;

const MainHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 5%;
  max-width: 1400px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    padding: 10px 20px;
  }
`;

const Logo = styled(Link)`
  font-size: 32px;
  font-weight: bold;
  font-family: 'Playfair Display', serif;
  color: #000000;
  text-decoration: none;
  transition: opacity 0.3s;
  z-index: 1001;

  &:hover {
    opacity: 0.8;
  }
  
  @media (max-width: 768px) {
    font-size: 28px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const NavMenu = styled.nav`
  display: flex;
  gap: 35px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  
  @media (max-width: 1024px) {
    gap: 25px;
  }
  
  @media (max-width: 900px) {
    display: none;
  }
`;

// Bu yerda NavItem komponenti aniqlangan
const NavItem = styled(Link)`
  text-decoration: none;
  color: #333;
  font-size: 15px;
  font-weight: 400;
  cursor: pointer;
  transition: all 0.3s;
  
  &:hover {
    color: #000;
    font-weight: 500;
  }

  &.active {
    color: #000;
    font-weight: 600;
    border-bottom: 2px solid #000;
  }
`;

const MobileMenuToggle = styled.div`
  display: none;
  font-size: 24px;
  cursor: pointer;
  color: #000;
  z-index: 1001;
  
  @media (max-width: 900px) {
    display: block;
  }
`;

const MobileNavMenu = styled.div`
  display: none;
  position: fixed;
  top: 0;
  right: ${props => props.isOpen ? '0' : '-100%'};
  width: 300px;
  height: 100vh;
  background-color: white;
  z-index: 1000;
  padding: 80px 30px 30px;
  box-shadow: -5px 0 15px rgba(0,0,0,0.1);
  transition: right 0.3s ease-in-out;
  overflow-y: auto;
  
  @media (max-width: 900px) {
    display: block;
  }
  
  @media (max-width: 480px) {
    width: 280px;
  }
`;

const MobileNavItem = styled(Link)`
  display: block;
  text-decoration: none;
  color: #333;
  font-size: 16px;
  font-weight: 400;
  padding: 15px 0;
  border-bottom: 1px solid #eee;
  cursor: pointer;
  transition: all 0.3s;
  
  &:hover {
    color: #000;
    font-weight: 500;
  }

  &.active {
    color: #000;
    font-weight: 600;
  }
  
  &:last-child {
    border-bottom: none;
  }
`;

const IconsContainer = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  
  @media (max-width: 768px) {
    gap: 15px;
  }
`;

const IconBox = styled.div`
  font-size: 18px;
  color: #000;
  position: relative;
  cursor: pointer;
  
  &:hover {
    opacity: 0.7;
  }
  
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const CartBadge = styled.div`
  position: absolute;
  top: -5px;
  right: -6px;
  background: #000;
  color: #fff;
  font-size: 9px;
  width: 14px;
  height: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
`;

const PhoneIcon = styled.img`
  width: 14px;
  height: 14px;
  filter: invert(1);
`;

const PinIcon = styled.img`
  width: 14px;
  height: 14px;
  filter: invert(1);
`;

const TimeIcon = styled.img`
  width: 14px;
  height: 14px;
  filter: invert(1);
`;

const Separator = styled.span`
  color: #666;
  
  @media (max-width: 860px) {
    display: none;
  }
`;

const MobileContactInfo = styled.div`
  display: none;
  padding: 20px 0;
  border-top: 1px solid #eee;
  margin-top: 20px;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 15px;
  font-size: 14px;
  color: #333;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const Overlay = styled.div`
  display: ${props => props.isOpen ? 'block' : 'none'};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0,0,0,0.5);
  z-index: 999;
`;

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <HeaderContainer>
      {/* Top bar - bir qatorda markazda */}
      <TopBar>
        <TopBarContent>

          <SocialIcons>
            <IconLink href="#" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </IconLink>
            <IconLink href="#" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </IconLink>
            <IconLink href="#" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </IconLink>
            <IconLink href="#" target="_blank" rel="noopener noreferrer">
              <FaPinterestP />
            </IconLink>
          </SocialIcons>
        </TopBarContent>
      </TopBar>

      {/* Main header */}
      <MainHeader>
        {/* Mobile menu toggle button */}
        <MobileMenuToggle onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </MobileMenuToggle>
        
        {/* Logo - HOME sahifasiga link */}
        <Logo to={ROUTES.HOME} onClick={closeMobileMenu}>MiSto</Logo>
        
        {/* Desktop Navigation menu */}
        <NavMenu>
          <NavItem to={ROUTES.ABOUT}>AboutUs</NavItem>
          <NavItem to={ROUTES.WOMEN}>Women</NavItem>
          <NavItem to={ROUTES.MEN}>Men</NavItem>
          <NavItem to={ROUTES.ELECTRONICS}>Electronics</NavItem>
          <NavItem to={ROUTES.JEWELERY}>Jewelery</NavItem>
          <NavItem to={ROUTES.CONTACT}>Contact</NavItem>
        </NavMenu>
        
        {/* Icons */}
        <IconsContainer>
          <IconBox>
            <FiSearch />
          </IconBox>
          <IconBox>
            <AiOutlineGlobal />
          </IconBox>
          <IconBox>
            <BsBag />
            <CartBadge>0</CartBadge>
          </IconBox>
        </IconsContainer>
      </MainHeader>

      {/* Mobile Navigation menu */}
      <MobileNavMenu isOpen={isMobileMenuOpen}>
        <MobileNavItem to={ROUTES.ABOUT} onClick={closeMobileMenu}>AboutUs</MobileNavItem>
        <MobileNavItem to={ROUTES.WOMEN} onClick={closeMobileMenu}>Women</MobileNavItem>
        <MobileNavItem to={ROUTES.MEN} onClick={closeMobileMenu}>Men</MobileNavItem>
        <MobileNavItem to={ROUTES.ELECTRONICS} onClick={closeMobileMenu}>Electronics</MobileNavItem>
        <MobileNavItem to={ROUTES.JEWELERY} onClick={closeMobileMenu}>Jewelery</MobileNavItem>
        <MobileNavItem to={ROUTES.CONTACT} onClick={closeMobileMenu}>Contact</MobileNavItem>
        
        <MobileContactInfo>
          <MobileContactItem>
            <PhoneIcon src={PhoneIconn} alt="Phone" />
            <span>+998 906815007</span>
          </MobileContactItem>
          <MobileContactItem>
            <PinIcon src={Pin} alt="Location" />
            <span>Ukraine, Kyiv</span>
          </MobileContactItem>
          <MobileContactItem>
            <TimeIcon src={Time} alt="Time" />
            <span>All week 24/7</span>
          </MobileContactItem>
        </MobileContactInfo>
      </MobileNavMenu>

      {/* Overlay for mobile menu */}
      <Overlay isOpen={isMobileMenuOpen} onClick={closeMobileMenu} />
    </HeaderContainer>
  );
}
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaFacebookF, FaTwitter, FaInstagram, FaPinterestP } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { AiOutlineGlobal } from "react-icons/ai";
import { BsBag } from "react-icons/bs";

// Photos 
import PhoneIconn from "../image/PhoneIconn.png";
import Pin from "../image/Pin.png"
import Time from "../image/Time.png";

// Import ROUTES
import ROUTES from "../router/routes"; // ROUTES faylining yo'lini to'g'ri ko'rsating

const HeaderContainer = styled.div`
  width: 100%;
  background-color: white;
  font-family: 'Arial', sans-serif;
`;

const TopBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
  background-color: #000000;
  height: 40px;
  width: 100%;
`;

const TopBarContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 25px;
  color: white;
  font-size: 13px;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 12px;
  margin-left: 10px;
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
  padding: 15px 40px;
  max-width: 1200px;
  margin: 0 auto;
`;

const Logo = styled(Link)`
  font-size: 32px;
  font-weight: bold;
  font-family: 'Playfair Display', serif;
  color: #000000;
  text-decoration: none;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.8;
  }
`;

const NavMenu = styled.nav`
  display: flex;
  gap: 35px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

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

const IconsContainer = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

const IconBox = styled.div`
  font-size: 18px;
  color: #000;
  position: relative;
  cursor: pointer;
  
  &:hover {
    opacity: 0.7;
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
`;

export default function Header() {
  return (
    <HeaderContainer>
      {/* Top bar - bir qatorda markazda */}
      <TopBar>
        <TopBarContent>
          <ContactItem>
            <PhoneIcon src={PhoneIconn} alt="Phone" />
            <span>+998 906815007</span>
          </ContactItem>
          
          <Separator>|</Separator>
          
          <ContactItem>
            <PinIcon src={Pin} alt="Location" />
            <span>Ukraine, Kyiv, Khreshchatyk 1</span>
          </ContactItem>
          
          <Separator>|</Separator>
          
          <ContactItem>
            <TimeIcon src={Time} alt="Time" />
            <span>All week 24/7</span>
          </ContactItem>
          
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
        {/* Logo - HOME sahifasiga link */}
        <Logo to={ROUTES.HOME}>MiSto</Logo>
        
        {/* Navigation menu - ROUTES ga asoslangan */}
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
    </HeaderContainer>
  );
}
import React from "react";
import styled from "styled-components";
import { FaFacebookF, FaTwitter, FaInstagram, FaPinterestP } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { AiOutlineGlobal } from "react-icons/ai";
import { BsBag } from "react-icons/bs";


// Photos 
import PhoneIconn from "../image/PhoneIconn.png";
import Pin from "../image/Pin.png"
import Time from "../image/Time.png";

const HeaderContainer = styled.div`
  width: 100%;
  background-color: white;
  border-bottom: 1px solid #e0e0e0;
`;

const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 40px;
  background-color: #000000;
  font-size: 14px;
  width:100%;
  color: #000000;
  border-bottom: 1px solid #e0e0e0;
`;

const ContactInfo = styled.div`
  display: flex;
  margin-left:240px;
  gap: 20px;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  color: white;
  gap: 5px;
`;

const MiddleBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 40px;
`;

const Logo = styled.div`
  font-size: 35px;
  font-weight: bold;
  margin-left:240px;
  font-family: 'Playfair Display', serif;
  color: #000000;
`;

const NavMenu = styled.nav`
  display: flex;
  gap: 30px;
`;

const NavItem = styled.a`
  text-decoration: none;
  color: #333;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: color 0.3s;
  
  &:hover {
    color: #007bff;
  }
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const SearchIcon = styled.div`
  font-size: 20px;
  cursor: pointer;
`;

const LanguageSelector = styled.div`
  font-size: 14px;
  color: #666;
  cursor: pointer;
`;


const PhoneIcon = styled.img`
  width: 25px;
  height: auto;
  /* margin-right: 5px; */
`;


const PinIcon = styled.img`
  width: 18px;
  height: auto;
  /* margin-right: 5px; */
`;


const TimeIcon = styled.img`
  width:16px;
  height:auto;

`
;


const IconLink = styled.a`
  color: #fff;
  font-size: 14px;
  transition: 0.3s ease;

  &:hover {
    color: #d4af37; /* oltin rang hover */
    transform: scale(1.1);
  }
`;


const CtnForFaIcons = styled.div`
  display:flex;
  gap:20px;
`
;



const IconBox = styled.div`
  font-size: 20px;
  color: #000;
  position: relative;
  cursor: pointer;
  margin-right:5px;
`;

const CartBadge = styled.div`
  position: absolute;
  top: -6px;
  right: -8px;
  background: #000;
  color: #fff;
  font-size: 10px;
  padding: 2px 6px;
  border-radius: 50%;
  font-weight: bold;
`;






export default function Header() {
  return (
    <HeaderContainer>
      {/* Top bar - contact information */}
      <TopBar>
        <ContactInfo>
          <ContactItem>
            <PhoneIcon src={PhoneIconn} alt="Phone Icon" />
            <span>+998 906815007</span>
          </ContactItem>
          <ContactItem>
            <PinIcon src={Pin} />
            <span>Ukraine, Kyiv, Khreshchatyk 1</span>
          </ContactItem>
          <ContactItem>
            <TimeIcon src={Time} />
            <span>All week 24/7</span>
          </ContactItem>
        </ContactInfo>

<CtnForFaIcons>

           <IconLink href="#"><FaFacebookF /></IconLink>
      <IconLink href="#"><FaTwitter /></IconLink>
      <IconLink href="#"><FaInstagram /></IconLink>
      <IconLink href="#"><FaPinterestP /></IconLink>

      </CtnForFaIcons>

      {/* Asadbek, IconLink ishlashi uchun isntall qilasan ---> npm install react-icons */}
      </TopBar>

      {/* Main navigation bar */}
      <MiddleBar>
        {/* Logo */}
        <Logo>MiSto</Logo>

        {/* Navigation menu */}
        <NavMenu>
          <NavItem>AboutUs</NavItem>
          <NavItem>Women</NavItem>
          <NavItem>Men</NavItem>
          <NavItem>Electronics</NavItem>
          <NavItem>Jewelery</NavItem>
          <NavItem>Contact</NavItem>


       
        </NavMenu>

        {/* Right section */}
        <CtnForFaIcons>
       <IconBox><FiSearch /></IconBox>
      <IconBox><AiOutlineGlobal /></IconBox>
      <IconBox>
        <BsBag />
        <CartBadge>0</CartBadge>
      </IconBox>
      </CtnForFaIcons>
      </MiddleBar>
    </HeaderContainer>
  );
}
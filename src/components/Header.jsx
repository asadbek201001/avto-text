import React from "react";
import styled from "styled-components";

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
  background-color: #f8f8f8;
  font-size: 14px;
  color: #333;
  border-bottom: 1px solid #e0e0e0;
`;

const ContactInfo = styled.div`
  display: flex;
  gap: 20px;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const MiddleBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 40px;
`;

const Logo = styled.div`
  font-size: 28px;
  font-weight: bold;
  color: #333;
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

export default function Header() {
  return (
    <HeaderContainer>
      {/* Top bar - contact information */}
      <TopBar>
        <ContactInfo>
          <ContactItem>
            <span>📞</span>
            <span>+998 906815007</span>
          </ContactItem>
          <ContactItem>
            <span>📍</span>
            <span>Ukraine, Kyiv, Khreshchatyk 1</span>
          </ContactItem>
          <ContactItem>
            <span>⏰</span>
            <span>All week 24/7</span>
          </ContactItem>
        </ContactInfo>
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
        <RightSection>
          <SearchIcon>🔍</SearchIcon>
          <LanguageSelector>Q 时</LanguageSelector>
        </RightSection>
      </MiddleBar>
    </HeaderContainer>
  );
}
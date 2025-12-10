import React from "react";
import styled from "styled-components";

//images
import CartImg from "../assets/carts.png";



const FooterContainer = styled.footer`
  background-color: #fff;
  color: #000;
  font-family: 'Arial', sans-serif;
  width: 100%;
`;

const NewsletterSection = styled.div`
  width: 100%;
  background-color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 120px;
  padding: 0 40px;
`;

const NewsletterRow = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  max-width: 1200px;
  width: 100%;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
    padding: 20px 0;
  }
`;

const NewsletterTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 1px;
  white-space: nowrap;
  margin: 0;
`;

const EmailInput = styled.input`
  padding: 12px 20px;
  background-color: #fff;
  border: none;
  color: #000;
  font-size: 14px;
  width: 300px;
  
  &::placeholder {
    color: #777;
  }
  
  &:focus {
    outline: none;
  }
  
  @media (max-width: 768px) {
    width: 100%;
    max-width: 300px;
  }
`;

const SubscribeButton = styled.button`
  padding: 12px 40px;
  background-color: #fff;
  color: #000;
  border: none;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.3s;
  white-space: nowrap;
  
  &:hover {
    background-color: #eee;
  }
  
  @media (max-width: 768px) {
    width: 100%;
    max-width: 300px;
  }
`;

const MainContent = styled.div`
  padding: 60px 40px 40px;
`;

const ColumnsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 40px;
  margin-bottom: 60px;

  @media (max-width: 992px) {
    grid-template-columns: 1fr 1fr;
    gap: 40px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
`;

const Column = styled.div``;

const ColumnTitle = styled.h3`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 25px;
  color: #000;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const LinkList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const LinkItem = styled.li`
  margin-bottom: 15px;
`;

const FooterLink = styled.a`
  color: #666;
  text-decoration: none;
  font-size: 14px;
  transition: color 0.3s;
  
  &:hover {
    color: #000;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const ContactItem = styled.div`
  color: #666;
  font-size: 14px;
  line-height: 1.5;
`;

const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 30px;
  border-top: 1px solid #eee;
  flex-wrap: wrap;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Copyright = styled.p`
  color: #666;
  font-size: 14px;
  font-weight: 300;
`;

const PaymentInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: #666;
  font-size: 14px;
  flex-wrap: wrap;
  img {
    width: 400px;
  }
`;

const PaymentIcon = styled.span`
  font-size: 16px;
`;

const Designer = styled.p`
  color: #666;
  font-size: 14px;
  font-weight: 300;
`;

export default function Footer() {
  return (
    <FooterContainer>
      {/* Newsletter Section - Black Background */}
      <NewsletterSection>
        <NewsletterRow>
          <NewsletterTitle>BE IN TOUCH WITH US:</NewsletterTitle>
          <EmailInput 
            type="email" 
            placeholder="Enter your email" 
          />
          <SubscribeButton>JOIN US</SubscribeButton>
        </NewsletterRow>
      </NewsletterSection>

      {/* Main Content - White Background */}
      <MainContent>
        {/* Four Columns Grid */}
        <ColumnsGrid>
          {/* Categories Column */}
          <Column>
            <ColumnTitle>CATEGORIES</ColumnTitle>
            <LinkList>
              <LinkItem><FooterLink href="#">Men</FooterLink></LinkItem>
              <LinkItem><FooterLink href="#">Women</FooterLink></LinkItem>
              <LinkItem><FooterLink href="#">Accessories</FooterLink></LinkItem>
              <LinkItem><FooterLink href="#">Beauty</FooterLink></LinkItem>
            </LinkList>
          </Column>

          {/* Information Column */}
          <Column>
            <ColumnTitle>INFORMATION</ColumnTitle>
            <LinkList>
              <LinkItem><FooterLink href="#">About Us</FooterLink></LinkItem>
              <LinkItem><FooterLink href="#">Contact Us</FooterLink></LinkItem>
              <LinkItem><FooterLink href="#">Blog</FooterLink></LinkItem>
              <LinkItem><FooterLink href="#">FAQs</FooterLink></LinkItem>
            </LinkList>
          </Column>

          {/* Useful Links Column */}
          <Column>
            <ColumnTitle>USEFUL LINKS</ColumnTitle>
            <LinkList>
              <LinkItem><FooterLink href="#">Terms & Conditions</FooterLink></LinkItem>
              <LinkItem><FooterLink href="#">Returns & Exchanges</FooterLink></LinkItem>
              <LinkItem><FooterLink href="#">Shipping & Delivery</FooterLink></LinkItem>
              <LinkItem><FooterLink href="#">Privacy Policy</FooterLink></LinkItem>
            </LinkList>
          </Column>

          {/* Contact Us Column */}
          <Column>
            <ColumnTitle>CONTACT US</ColumnTitle>
            <ContactInfo>
              <ContactItem>Ukraine, Kyiv, Khreshchatyk 1</ContactItem>
              <ContactItem>+38 (050) 12 34 567</ContactItem>
              <ContactItem>All week 24/7</ContactItem>
              <ContactItem>shaman.magic.music@gmail.com</ContactItem>
            </ContactInfo>
          </Column>
        </ColumnsGrid>

        {/* Bottom Section */}
        <FooterBottom>
          <Copyright>Copyright © 2022 all rights reserved.</Copyright>
          
          <PaymentInfo>
           <img src={CartImg} alt="" />
          </PaymentInfo>
          
          <Designer>Designed by Asadbek Gulomov</Designer>
        </FooterBottom>
      </MainContent>
    </FooterContainer>
  );
}
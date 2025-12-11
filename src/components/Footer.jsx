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
  height: auto;
  padding: 30px 20px;

  @media (max-width: 768px) {
    padding: 25px 15px;
  }

  @media (max-width: 480px) {
    padding: 20px 10px;
  }
`;

const NewsletterRow = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  max-width: 1200px;
  width: 100%;
  justify-content: space-between;

  @media (max-width: 1024px) {
    gap: 20px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
    padding: 0;
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

  @media (max-width: 1024px) {
    font-size: 22px;
  }

  @media (max-width: 768px) {
    font-size: 20px;
    white-space: normal;
    text-align: center;
  }

  @media (max-width: 480px) {
    font-size: 18px;
    letter-spacing: 0.5px;
  }
`;

const NewsletterForm = styled.div`
  display: flex;
  gap: 10px;
  flex: 1;
  max-width: 500px;

  @media (max-width: 1024px) {
    max-width: 400px;
  }

  @media (max-width: 768px) {
    max-width: 100%;
    flex-direction: column;
    gap: 15px;
  }
`;

const EmailInput = styled.input`
  padding: 12px 20px;
  background-color: #fff;
  border: none;
  color: #000;
  font-size: 14px;
  width: 100%;
  min-width: 200px;
  
  &::placeholder {
    color: #777;
  }
  
  &:focus {
    outline: none;
  }
  
  @media (max-width: 768px) {
    padding: 14px 20px;
    font-size: 16px;
    text-align: center;
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
  min-width: 120px;
  
  &:hover {
    background-color: #eee;
  }
  
  @media (max-width: 768px) {
    padding: 14px 40px;
    font-size: 16px;
    width: 100%;
  }
`;

const MainContent = styled.div`
  padding: 60px 40px 40px;

  @media (max-width: 1024px) {
    padding: 50px 30px 30px;
  }

  @media (max-width: 768px) {
    padding: 40px 20px 20px;
  }

  @media (max-width: 480px) {
    padding: 30px 15px 15px;
  }
`;

const ColumnsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
  margin-bottom: 60px;

  @media (max-width: 1100px) {
    gap: 30px;
  }

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 40px 30px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 30px;
    margin-bottom: 40px;
  }

  @media (max-width: 480px) {
    gap: 25px;
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

  @media (max-width: 768px) {
    margin-bottom: 20px;
    font-size: 15px;
  }

  @media (max-width: 480px) {
    margin-bottom: 15px;
    font-size: 14px;
  }
`;

const LinkList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const LinkItem = styled.li`
  margin-bottom: 15px;

  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 768px) {
    margin-bottom: 12px;
  }

  @media (max-width: 480px) {
    margin-bottom: 10px;
  }
`;

const FooterLink = styled.a`
  color: #666;
  text-decoration: none;
  font-size: 14px;
  transition: color 0.3s;
  display: inline-block;
  
  &:hover {
    color: #000;
    transform: translateX(3px);
  }
  
  @media (max-width: 768px) {
    font-size: 15px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;

  @media (max-width: 768px) {
    gap: 12px;
  }

  @media (max-width: 480px) {
    gap: 10px;
  }
`;

const ContactItem = styled.div`
  color: #666;
  font-size: 14px;
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 15px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
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
    gap: 25px;
    padding-top: 25px;
  }

  @media (max-width: 480px) {
    gap: 20px;
    padding-top: 20px;
  }
`;

const Copyright = styled.p`
  color: #666;
  font-size: 14px;
  font-weight: 300;

  @media (max-width: 768px) {
    font-size: 15px;
  }

  @media (max-width: 480px) {
    font-size: 13px;
  }
`;

const PaymentInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  color: #666;
  font-size: 14px;
  flex-wrap: wrap;
  
  img {
    max-width: 400px;
    width: 100%;
    height: auto;
  }

  @media (max-width: 1100px) {
    img {
      max-width: 350px;
    }
  }

  @media (max-width: 768px) {
    justify-content: flex-start;
    width: 100%;
    
    img {
      max-width: 300px;
    }
  }

  @media (max-width: 480px) {
    img {
      max-width: 250px;
    }
  }
`;

const Designer = styled.p`
  color: #666;
  font-size: 14px;
  font-weight: 300;

  @media (max-width: 768px) {
    font-size: 15px;
    align-self: flex-end;
  }

  @media (max-width: 480px) {
    font-size: 13px;
  }
`;

export default function Footer() {
  return (
    <FooterContainer>
      {/* Newsletter Section - Black Background */}
      <NewsletterSection>
        <NewsletterRow>
          <NewsletterTitle>BE IN TOUCH WITH US:</NewsletterTitle>
          <NewsletterForm>
            <EmailInput 
              type="email" 
              placeholder="Enter your email" 
            />
            <SubscribeButton>JOIN US</SubscribeButton>
          </NewsletterForm>
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
            <img src={CartImg} alt="Payment methods" />
          </PaymentInfo>
          
          <Designer>Designed by Asadbek G'ulomov</Designer>
        </FooterBottom>
      </MainContent>
    </FooterContainer>
  );
}
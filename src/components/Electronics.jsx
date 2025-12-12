import React, { useState } from "react";
import styled from "styled-components";

//images 
import Footer from "../components/Footer";

import Chiziq3 from "../assets/3chiziq.png";
import Header from "../components/Header";

const WomenCtn = styled.div`
  width: 100%;
  height: auto;
  background-color: white;
  padding: 50px 150px;

  @media (max-width: 1200px) {
    padding: 40px 80px;
  }

  @media (max-width: 992px) {
    padding: 35px 50px;
  }

  @media (max-width: 768px) {
    padding: 30px 30px;
  }

  @media (max-width: 576px) {
    padding: 25px 20px;
  }

  @media (max-width: 480px) {
    padding: 20px 15px;
  }
`;

const HeaderSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
  
  h6 {
    font-weight: 100;
    cursor: pointer;
    font-size: 14px;
  }
  
  h3 {
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 100;
    gap: 10px;
    margin: 0;
  }
  
  img {
    width: 30px;
    cursor: pointer;
    transition: opacity 0.3s;
    
    &:hover {
      opacity: 0.7;
    }
  }
  
  @media (max-width: 1200px) {
    gap: 20px;
  }
  
  @media (max-width: 992px) {
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;
    margin-bottom: 35px;
  }
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 25px;
    margin-bottom: 30px;
    
    h3 {
      width: 100%;
      justify-content: center;
      gap: 15px;
    }
  }
  
  @media (max-width: 576px) {
    gap: 20px;
    margin-bottom: 25px;
    
    h6 {
      font-size: 13px;
    }
    
    img {
      width: 25px;
    }
  }
  
  @media (max-width: 480px) {
    gap: 15px;
    
    h3 {
      gap: 10px;
    }
    
    img {
      width: 22px;
    }
  }
`;

const FilterGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  
  @media (max-width: 768px) {
    justify-content: center;
    width: 100%;
  }
`;

const ViewGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  
  @media (max-width: 768px) {
    justify-content: center;
    width: 100%;
  }
`;

const SortGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  
  @media (max-width: 768px) {
    justify-content: center;
    width: 100%;
  }
`;

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 25px;
  }

  @media (max-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  @media (max-width: 576px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  transition: transform 0.3s;
  
  &:hover {
    transform: translateY(-5px);
  }
  
  @media (max-width: 768px) {
    gap: 12px;
  }
  
  @media (max-width: 480px) {
    gap: 10px;
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: 350px;
  object-fit: cover;
  border-radius: 4px;

  @media (max-width: 1200px) {
    height: 300px;
  }

  @media (max-width: 992px) {
    height: 280px;
  }

  @media (max-width: 768px) {
    height: 250px;
  }

  @media (max-width: 576px) {
    height: 220px;
  }

  @media (max-width: 480px) {
    height: 280px;
  }
`;

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const ProductTitle = styled.h3`
  font-size: 16px;
  font-weight: 500;
  color: #000;
  margin: 0;
  line-height: 1.3;

  @media (max-width: 992px) {
    font-size: 15px;
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 15px;
  }
`;

const ProductSubtitle = styled.p`
  font-size: 14px;
  color: #666;
  margin: 0;
  font-weight: 300;

  @media (max-width: 992px) {
    font-size: 13px;
  }

  @media (max-width: 768px) {
    font-size: 12px;
  }

  @media (max-width: 480px) {
    font-size: 13px;
  }
`;

const ProductPrice = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: #000;

  @media (max-width: 992px) {
    font-size: 15px;
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 15px;
  }
`;

const SeeAllCtn = styled.div`
  width: 100%;
  height: 50px;
  background-color: rgb(238, 236, 236);
  color: black;
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s;
  border-radius: 4px;
  
  &:hover {
    background-color: rgb(220, 220, 220);
  }
  
  h3 {
    font-weight: 200;
    margin: 0;
    font-size: 16px;
    color: #666;
    
    &:hover {
      color: #000;
    }
  }
  
  @media (max-width: 1200px) {
    height: 48px;
    margin-top: 45px;
  }
  
  @media (max-width: 992px) {
    height: 46px;
    margin-top: 40px;
  }
  
  @media (max-width: 768px) {
    height: 44px;
    margin-top: 35px;
    
    h3 {
      font-size: 15px;
    }
  }
  
  @media (max-width: 576px) {
    height: 42px;
    margin-top: 30px;
    
    h3 {
      font-size: 14px;
    }
  }
  
  @media (max-width: 480px) {
    height: 40px;
    margin-top: 25px;
  }
`;

const AboutSection = styled.div`
  width: 100%;
  height: 80px;
  background-color: rgb(248, 248, 248);
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  font-weight: 200;
  
  h5 {
    font-weight: 100;
    font-size: 14px;
    
    strong {
      font-weight: 400;
    }
  }
  
  h1 {
    font-weight: 400;
    font-size: 24px;
  }
  
  img {
    width: 50px;
  }
  
  gap: 225px;
  
  @media (max-width: 1200px) {
    gap: 150px;
    padding: 0 50px;
  }
  
  @media (max-width: 992px) {
    gap: 100px;
    padding: 0 30px;
  }
  
  @media (max-width: 768px) {
    height: auto;
    padding: 20px;
    gap: 20px;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    
    h1 {
      order: -1;
      margin: 10px 0;
      font-size: 22px;
    }
    
    h5 {
      font-size: 13px;
    }
    
    img {
      display: none;
    }
  }
  
  @media (max-width: 576px) {
    padding: 15px;
    
    h1 {
      font-size: 20px;
    }
    
    h5 {
      font-size: 12px;
    }
  }
  
  @media (max-width: 480px) {
    padding: 12px;
    
    h1 {
      font-size: 18px;
    }
  }
`;

export default function Electronics() {
  const [showAll, setShowAll] = useState(false);

  const allProducts = [
   {
  id: 1,
  title: "Samsung Galaxy Buds Pro",
  subtitle: "Wireless Noise Cancelling",
  price: "$129.99",
  image: "https://i.pinimg.com/736x/95/fa/e7/95fae758195ba041c9166685611847c8.jpg"
},
{
  id: 2,
  title: "Apple Watch Series 9",
  subtitle: "GPS + Fitness Tracking",
  price: "$399.00",
  image: "https://i.pinimg.com/1200x/9a/36/03/9a3603193e6add051ae2baf504a723bc.jpg"
},
{
  id: 3,
  title: "Sony WH-1000XM5",
  subtitle: "Noise Cancelling Headphones",
  price: "$349.99",
  image: "https://images.pexels.com/photos/3394660/pexels-photo-3394660.jpeg"
},
{
  id: 4,
  title: "Samsung 27'' Curved Monitor",
  subtitle: "Full HD Display",
  price: "$189.99",
  image: "https://i.pinimg.com/736x/be/b7/67/beb767680834b46f5524ac13dc4b3cd2.jpg"
},
{
  id: 5,
  title: "Logitech MX Master 3S",
  subtitle: "Wireless Mouse",
  price: "$89.99",
  image: "https://i.pinimg.com/736x/c8/b5/96/c8b596dc22ce933076260f9c7ddc55cd.jpg"
},
{
  id: 6,
  title: "Anker Soundcore Motion+",
  subtitle: "Bluetooth Speaker",
  price: "$99.99",
  image: "https://i.pinimg.com/736x/c3/ad/02/c3ad021a03e154aceed0adf0f7206cc6.jpg",
},
{
  id: 7,
  title: "Xiaomi Mi Band 8",
  subtitle: "Smart Fitness Tracker",
  price: "$49.99",
  image: "https://i.pinimg.com/1200x/f2/e2/ea/f2e2eacbf70d44c182e7597b10a58798.jpg"
},
{
  id: 8,
  title: "JBL Charge 5",
  subtitle: "Portable Speaker",
  price: "$139.99",
  image: "https://i.pinimg.com/736x/9f/4d/af/9f4dafef48b3f9997430a014fceda840.jpg"
},
{
  id: 9,
  title: "Canon EOS M50 Mark II",
  subtitle: "Mirrorless Camera",
  price: "$599.99",
  image: "https://i.pinimg.com/736x/40/3b/e6/403be6c5f42612cb26a31154e21ed0a3.jpg"
},
{
  id: 10,
  title: "Acer Nitro 5",
  subtitle: "Gaming Laptop",
  price: "$899.00",
  image: "https://i.pinimg.com/1200x/43/89/d5/4389d5d9daa3766820717d7e935c528f.jpg"
},
{
  id: 11,
  title: "Apple AirPods 3",
  subtitle: "Spatial Audio",
  price: "$169.99",
  image: "https://i.pinimg.com/736x/30/87/f2/3087f22cf2fe64fde08a0447efe20559.jpg"
},
{
  id: 12,
  title: "HP DeskJet 2710",
  subtitle: "All-in-One Printer",
  price: "$49.85",
  image: "https://i.pinimg.com/736x/46/23/d1/4623d19e1b3a168584f0742f5ddfa0a2.jpg"
},
{
  id: 13,
  title: "Razer BlackWidow V3",
  subtitle: "Mechanical Keyboard",
  price: "$129.95",
  image: "https://i.pinimg.com/736x/0f/91/de/0f91de35ea48e797cc66036a4b485bbc.jpg"
},
{
  id: 14,
  title: "Logitech C920",
  subtitle: "HD Pro Webcam",
  price: "$69.99",
  image: "https://i.pinimg.com/736x/e1/2d/82/e12d823409082373ae8988565b2323a4.jpg"
},
{
  id: 15,
  title: "Asus RT-AX55",
  subtitle: "WiFi 6 Router",
  price: "$88.12",
  image: "https://i.pinimg.com/1200x/8f/bb/fa/8fbbfa6ddb78078c8da63c386ccc3e10.jpg"
},
{
  id: 16,
  title: "Xiaomi Redmi Buds 5 Pro",
  subtitle: "Active Noise Cancellation",
  price: "$59.99",
  image: "https://i.pinimg.com/736x/ee/3e/d5/ee3ed5d39b48c1c913d02034820250bb.jpg"
}

  ];

  // Ko'rsatiladigan mahsulotlar
  const displayedProducts = showAll ? allProducts : allProducts.slice(0, 8);

  const handleSeeAllClick = () => {
    setShowAll(!showAll);
  };

  return (
    <>
                                  
      <AboutSection>
        <h5>Home <strong>&gt; Electronics</strong></h5>
        <h1>Electronics</h1>
        <img src={Chiziq3} alt="" />
      </AboutSection>

      <WomenCtn>
        <HeaderSection>
          <FilterGroup>
            <img src="https://i.postimg.cc/mr27PvyJ/Screenshot-2025-12-11-at-19-48-32.png" alt="Filter" />
            <h6>FILTER</h6>
          </FilterGroup>
          
          <ViewGroup>
            <img src="https://i.postimg.cc/4yBgxhfr/Screenshot-2025-12-11-at-19-53-18.png" alt="Grid view" />
            <img src="https://i.postimg.cc/XYT0qWWf/Screenshot-2025-12-11-at-19-53-57.png" alt="List view" />
          </ViewGroup>
          
          <SortGroup>
            <h6>BESTSELLERS</h6>
            <img src="https://i.postimg.cc/cJQPJ8Xq/Screenshot-2025-12-11-at-19-54-34.png" alt="Sort" />
          </SortGroup>
        </HeaderSection>

        <ProductsGrid>
          {displayedProducts.map((product) => (
            <ProductCard key={product.id}>
              <ProductImage src={product.image} alt={product.title} />
              <ProductInfo>
                <ProductTitle>{product.title}</ProductTitle>
                <ProductSubtitle>{product.subtitle}</ProductSubtitle>
                <ProductPrice>{product.price}</ProductPrice>
              </ProductInfo>
            </ProductCard>
          ))}
        </ProductsGrid>

        <SeeAllCtn onClick={handleSeeAllClick}>
          <h3>{showAll ? "HIDE ALL" : "SEE ALL"}</h3>
        </SeeAllCtn>
      </WomenCtn>
     
    </>
  );
}
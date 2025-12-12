import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";

//images
import Image1 from "../image/image46.png";
import Image2 from "../image/image47.png";
import Image3 from "../image/image48.png";
import Image4 from "../image/image49.png";
import Chiziq3 from "../assets/3chiziq.png";

const AboutSection = styled.div`
  width: 100%;
  height: 80px;
  background-color: rgb(248, 248, 248);
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  font-weight: 200;
  
  h5 {
    font-weight: 400;
  }
  
  h1 {
    font-weight: 400;
  }
  
  img {
    width: 50px;
  }
  
  gap: 225px;
  
  /* Tablet */
  @media (max-width: 1200px) {
    gap: 100px;
    padding: 0 50px;
  }
  
  /* Mobile Large */
  @media (max-width: 992px) {
    gap: 50px;
    padding: 0 30px;
    
    h1 {
      font-size: 24px;
    }
    
    h5 {
      font-size: 14px;
    }
    
    img {
      width: 40px;
    }
  }
  
  /* Mobile */
  @media (max-width: 768px) {
    height: 120px;
    flex-direction: column;
    justify-content: center;
    gap: 15px;
    padding: 20px;
    text-align: center;
    
    h1 {
      order: -1;
      margin: 5px 0;
      font-size: 22px;
    }
    
    h5 {
      font-size: 13px;
    }
    
    img {
      display: none;
    }
  }
  
  /* Small Mobile */
  @media (max-width: 480px) {
    height: 110px;
    gap: 10px;
    padding: 15px;
    
    h1 {
      font-size: 20px;
    }
    
    h5 {
      font-size: 12px;
    }
  }
`;

const Container = styled.div`
  width: 100%;
  height: auto;
  background-color: white;
  padding: 50px 150px 50px 150px;

  /* Tablet */
  @media (max-width: 1200px) {
    padding: 50px 80px 50px 80px;
  }

  /* Tablet Small */
  @media (max-width: 992px) {
    padding: 40px 50px 40px 50px;
  }

  /* Mobile */
  @media (max-width: 768px) {
    padding: 30px 30px 30px 30px;
  }

  /* Small Mobile */
  @media (max-width: 480px) {
    padding: 25px 20px 25px 20px;
  }
`;

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;

  /* Tablet */
  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 25px;
  }

  /* Tablet Small */
  @media (max-width: 992px) {
    gap: 20px;
  }

  /* Mobile */
  @media (max-width: 768px) {
    gap: 20px;
  }

  /* Small Mobile */
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 25px;
  }
`;

const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
  
  /* Tablet */
  @media (max-width: 992px) {
    gap: 12px;
  }
  
  /* Mobile */
  @media (max-width: 768px) {
    gap: 10px;
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 8px;

  /* Tablet */
  @media (max-width: 1200px) {
    height: 280px;
  }

  /* Tablet Small */
  @media (max-width: 992px) {
    height: 250px;
  }

  /* Mobile */
  @media (max-width: 768px) {
    height: 220px;
  }

  /* Small Mobile */
  @media (max-width: 480px) {
    height: 280px;
  }
`;

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 0 5px;
`;

const ProductTitle = styled.h3`
  font-size: 18px;
  font-weight: 500;
  color: #000;
  margin: 0;
  line-height: 1.3;

  /* Tablet */
  @media (max-width: 1200px) {
    font-size: 17px;
  }

  /* Tablet Small */
  @media (max-width: 992px) {
    font-size: 16px;
  }

  /* Mobile */
  @media (max-width: 768px) {
    font-size: 15px;
  }

  /* Small Mobile */
  @media (max-width: 480px) {
    font-size: 17px;
  }
`;

const ProductSubtitle = styled.p`
  font-size: 14px;
  color: #666;
  margin: 0;
  font-weight: 300;

  /* Tablet */
  @media (max-width: 1200px) {
    font-size: 13px;
  }

  /* Tablet Small */
  @media (max-width: 992px) {
    font-size: 12px;
  }

  /* Mobile */
  @media (max-width: 768px) {
    font-size: 11px;
  }

  /* Small Mobile */
  @media (max-width: 480px) {
    font-size: 13px;
  }
`;

const ProductPrice = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: #000;

  /* Tablet */
  @media (max-width: 1200px) {
    font-size: 17px;
  }

  /* Tablet Small */
  @media (max-width: 992px) {
    font-size: 16px;
  }

  /* Mobile */
  @media (max-width: 768px) {
    font-size: 15px;
  }

  /* Small Mobile */
  @media (max-width: 480px) {
    font-size: 17px;
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
  
  /* Tablet */
  @media (max-width: 1200px) {
    height: 48px;
    margin-top: 45px;
  }
  
  /* Tablet Small */
  @media (max-width: 992px) {
    height: 46px;
    margin-top: 40px;
  }
  
  /* Mobile */
  @media (max-width: 768px) {
    height: 44px;
    margin-top: 35px;
    
    h3 {
      font-size: 15px;
    }
  }
  
  /* Small Mobile */
  @media (max-width: 576px) {
    height: 42px;
    margin-top: 30px;
    
    h3 {
      font-size: 14px;
    }
  }
  
  /* Extra Small Mobile */
  @media (max-width: 480px) {
    height: 40px;
    margin-top: 25px;
  }
`;

const HeaderSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
  padding: 0 20px;
  
  h6 {
    font-weight: 100;
    cursor: pointer;
    font-size: 14px;
    margin: 0;
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
  
  /* Tablet */
  @media (max-width: 1200px) {
    padding: 0 10px;
    gap: 20px;
    margin-bottom: 35px;
  }
  
  /* Tablet Small */
  @media (max-width: 992px) {
    flex-wrap: wrap;
    justify-content: center;
    gap: 25px;
    margin-bottom: 30px;
  }
  
  /* Mobile */
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 20px;
    margin-bottom: 25px;
    padding: 0;
    
    h3 {
      width: 100%;
      justify-content: center;
      gap: 15px;
    }
  }
  
  /* Small Mobile */
  @media (max-width: 480px) {
    gap: 15px;
    margin-bottom: 20px;
    
    h6 {
      font-size: 13px;
    }
    
    img {
      width: 25px;
    }
  }
`;

const FilterGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  
  /* Mobile */
  @media (max-width: 768px) {
    justify-content: center;
    width: 100%;
  }
`;

const ViewGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  
  /* Mobile */
  @media (max-width: 768px) {
    justify-content: center;
    width: 100%;
  }
`;

const SortGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  
  /* Mobile */
  @media (max-width: 768px) {
    justify-content: center;
    width: 100%;
  }
`;

const AboutCtn2 = styled.div`
  padding: 50px 150px;
  
  /* Tablet */
  @media (max-width: 1200px) {
    padding: 40px 80px;
  }
  
  /* Tablet Small */
  @media (max-width: 992px) {
    padding: 30px 50px;
  }
  
  /* Mobile */
  @media (max-width: 768px) {
    padding: 25px 30px;
  }
  
  /* Small Mobile */
  @media (max-width: 480px) {
    padding: 20px 20px;
  }
`;

const AboutCtn = styled.div`
  padding-top: 113px;
  
  /* Mobile */
  @media (max-width: 768px) {
    padding-top: 80px;
  }
  
  /* Small Mobile */
  @media (max-width: 480px) {
    padding-top: 70px;
  }
`;

export default function Jewelery() {
  const jeweleryProducts = [
    {
      id: 1,
      title: "Elegant Gold Necklace",
      subtitle: "Premium 18K gold necklace",
      price: "$ 299.99",
      image: Image1
    },
    {
      id: 2,
      title: "Diamond Stud Earrings",
      subtitle: "Natural diamond earrings",
      price: "$ 499.99",
      image: Image2
    },
    {
      id: 3,
      title: "Silver Bracelet Set",
      subtitle: "Sterling silver bracelet collection",
      price: "$ 199.99",
      image: Image3
    },
    {
      id: 4,
      title: "Pearl & Diamond Ring",
      subtitle: "South sea pearl with diamonds",
      price: "$ 799.99",
      image: Image4
    }
  ];

  const displayedProducts = jeweleryProducts;

  return (
    <>
      <Header />
      <AboutCtn>
        <AboutSection>
          <h5>Home <strong>&gt; Jewelery</strong></h5>
          <h1>Jewelery</h1>
          <img src={Chiziq3} alt="three lines icon" />
        </AboutSection> 
        
        <AboutCtn2>
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
        </AboutCtn2>
      </AboutCtn>
      
      <Container>
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

        <SeeAllCtn>
          <h3>SEE ALL</h3>
        </SeeAllCtn>
      </Container>
      <Footer />
    </>
  );
}
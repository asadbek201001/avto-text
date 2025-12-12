import React, { useState } from "react";
import styled from "styled-components";

//images 
import Image1 from "../image/image21.png"
import Image2 from "../image/image22.png"
import Image3 from "../image/image23.png"
import Image4 from "../image/image24.png"
import Image5 from "../image/image25.png";
import Image6 from "../image/image26.png";
import Image7 from "../image/image27.png";
import Image8 from "../image/image28.png";

import Image9 from "../image/image29.png"
import Image10 from "../image/image30.png"
import Image11 from "../image/image31.png"
import Image12 from "../image/image32.png"
// import Image13 from "../image/image33.png";
// import Image14 from "../image/image34.png";
// import Image15 from "../image/image35.png";
// import Image16 from "../image/image36.png";

import Chiziq3 from "../assets/3chiziq.png";

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

export default function WomenCard() {
  const [showAll, setShowAll] = useState(false);

  const allProducts = [
    {
      id: 1,
      title: "Striped Sweatshirt",
      price: "$ 20.99",
      image: Image1
    },
    {
      id: 2,
      title: "Man Pants",
    
      price: "$ 19.99",
      image: Image2
    },
    {
      id: 3,
      title: "Denim Trucker Jacket",
    
      price: "$ 30.99",
      image: Image3
    },
    {
      id: 4,
      title: "Denim West",
    
      price: "$ 15.99",
      image: Image4
    },
    {
      id: 5,
      title: "Leather White Trainers",
    
      price: "$ 10.99",
      image: Image5
    },
    {
      id: 6,
      title: "Men Knit Sweather",
    
      price: "$ 25.5",
      image: Image6
    },
    {
      id: 7,
      title: "Dosk Pom Beanie",
    
      price: "$ 23.5",
      image: Image7
    },
    {
      id: 8,
      title: "Checked Trailored Trousers",
    
      price: "$ 99.99",
      image: Image8
    },
    {
      id: 9,
      title: "Fjallraven - Foldsack",
    
      price: "$ 109.99",
      image: Image9
    },
    {
      id: 10,
      title: "Mens Casual",
      price: "$ 22.3",
      image: Image10
    },
    {
      id: 11,
      title: "Mens Cotton Jacket",
      price: "$ 55.99",
      image: Image11
    },
    {
      id: 12,
      title: "Mens Casual Slim Fit",
      price: "$ 15.99",
      image: Image12
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
        <h5>Home <strong>&gt; MEN</strong></h5>
        <h1>MEN</h1>
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
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

const Container = styled.div`
  width: 100%;
  height: auto;
  background-color: white;
  padding: 10px 20px;
  

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

export default function ProductCards() {
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
      image: Image9,
      title: "Fjallraven - Foldsack",
      price: "$ 109.99",

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
    <Container>
      <ProductsGrid>
        {displayedProducts.map((product) => (
          <ProductCard key={product.id}>
            <ProductImage src={product.image} alt={product.title} />
            <ProductInfo>
              <ProductTitle>{product.title}</ProductTitle>
              <ProductPrice>{product.price}</ProductPrice>
            </ProductInfo>
          </ProductCard>
        ))}
      </ProductsGrid>

      <SeeAllCtn onClick={handleSeeAllClick}>
        <h3>{showAll ? "HIDE ALL" : "SEE ALL"}</h3>
      </SeeAllCtn>
    </Container>
  );
}
import React from "react";
import styled from "styled-components";
import { useState } from "react";

//components
import Header from "../components/Header";
import Footer from "../components/Footer";
import WomenCardComponent from "../components/WomenCardComponent";
import MenCardComponent from "../components/MenCardComponent";

//images
import Image1 from "../image/image1.png"; // Main banner
import Image2 from "../image/image2.png"; // Women
import Image3 from "../image/image3.png"; // Men
import Image4 from "../image/image4.png"; // Accessories
import Image5 from "../assets/car.png"; // car
import Image6 from "../assets/reverse.png"; // reverse
import Image7 from "../assets/support.png"; // support image
import Image8 from "../image/image33.png"
import Image9 from "../image/image34.png";

import Chiziq3 from "../assets/3chiziq.png";
import Image37 from "../image/image37.png";
import Image38 from "../image/image38.png";
import Image39 from "../image/image39.png"

const HomeCtn = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 165px 150px 50px 150px;
  justify-content: center;
  align-items: center;

  /* Tablet */
  @media (max-width: 1024px) {
    padding: 165px 50px 50px 50px;
  }

  /* Mobile */
  @media (max-width: 768px) {
    padding: 165px 20px 30px 20px;
    gap: 20px;
  }

  /* Small Mobile */
  @media (max-width: 480px) {
    padding: 165px 15px 20px 15px;
    gap: 15px;
  }
`;

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  grid-template-rows: 300px 300px;
  gap: 20px;
  padding: 0 20px;
  width: 100%;
  max-width: 1200px;

  grid-template-areas:
    "main women men"
    "main accessories accessories";

  /* Tablet */
  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 250px 250px 250px;
    grid-template-areas:
      "main main"
      "women men"
      "accessories accessories";
    gap: 15px;
    padding: 0 10px;
  }

  /* Mobile */
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 200px);
    grid-template-areas:
      "main"
      "women"
      "men"
      "accessories";
    gap: 12px;
    padding: 0;
  }

  /* Small Mobile */
  @media (max-width: 480px) {
    grid-template-rows: repeat(4, 180px);
    gap: 10px;
  }
`;

const GridItem = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 8px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.05);
  }
`;

const MainItem = styled(GridItem)`
  grid-area: main;
`;

const WomenItem = styled(GridItem)`
  grid-area: women;
`;

const MenItem = styled(GridItem)`
  grid-area: men;
`;

const AccessoriesItem = styled(GridItem)`
  grid-area: accessories;
`;

const ShippingCtn = styled.div`
  width: 100%;
  max-width: 1200px;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;

  /* Tablet */
  @media (max-width: 1024px) {
    justify-content: center;
    gap: 30px;
  }

  /* Mobile */
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const ShippingCard = styled.div`
  width: 250px;
  height: 65px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 12px;
  padding: 10px;

  /* Tablet */
  @media (max-width: 1024px) {
    width: 220px;
  }

  /* Mobile */
  @media (max-width: 768px) {
    width: 100%;
    max-width: 300px;
    justify-content: center;
  }

  /* Small Mobile */
  @media (max-width: 480px) {
    height: 60px;
    gap: 10px;
  }

  img {
    width: 40px;
    height: 40px;
    object-fit: contain;

    /* Mobile */
    @media (max-width: 480px) {
      width: 35px;
      height: 35px;
    }
  }
`;

const ShippingText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  h5 {
    font-weight: 400;
    font-size: 16px;
    margin: 0;

    /* Mobile */
    @media (max-width: 480px) {
      font-size: 14px;
    }
  }

  p {
    font-size: 10px;
    margin: 0;
    color: #666;

    /* Mobile */
    @media (max-width: 480px) {
      font-size: 9px;
    }
  }
`;

const WomenText = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  height: auto;
  align-items: center;
  justify-content: space-between;
  padding: 22px 0;

  /* Tablet */
  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 15px;
    align-items: flex-start;
    padding: 15px 0;
  }

  /* Mobile */
  @media (max-width: 768px) {
    padding: 10px 0;
  }

  h2 {
    font-size: 24px;
    margin: 0;

    /* Mobile */
    @media (max-width: 768px) {
      font-size: 20px;
    }

    /* Small Mobile */
    @media (max-width: 480px) {
      font-size: 18px;
    }
  }
`;

const WomenText2 = styled.div`
  width: 40%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 10px;

  /* Tablet */
  @media (max-width: 1024px) {
    width: 100%;
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: 15px;
  }

  /* Mobile */
  @media (max-width: 768px) {
    gap: 10px;
  }

  h5 {
    font-weight: 200;
    font-size: 16px;
    margin: 0;
    white-space: nowrap;

    /* Tablet */
    @media (max-width: 1024px) {
      margin-right: 20px;
    }

    /* Mobile */
    @media (max-width: 768px) {
      font-size: 14px;
      margin-right: 15px;
    }

    /* Small Mobile */
    @media (max-width: 480px) {
      font-size: 12px;
      margin-right: 10px;
    }
  }
`;

const TwoImages = styled.div`
  width: 100%;
  max-width: 1200px;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;

  /* Tablet */
  @media (max-width: 1024px) {
    gap: 20px;
  }

  /* Mobile */
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 15px;
  }

  img {
    border-radius: 10px;
    width: 100%;
    height: auto;
    max-height: 400px;
    object-fit: cover;

    /* Mobile */
    @media (max-width: 768px) {
      max-height: 300px;
    }

    /* Small Mobile */
    @media (max-width: 480px) {
      max-height: 250px;
    }
  }
`;

const PromoOverlay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 20px 40px;
  text-align: center;
  min-width: 200px;

  /* Tablet */
  @media (max-width: 1024px) {
    padding: 15px 30px;
    min-width: 180px;
  }

  /* Mobile */
  @media (max-width: 768px) {
    padding: 12px 25px;
    min-width: 160px;
  }

  /* Small Mobile */
  @media (max-width: 480px) {
    padding: 10px 20px;
    min-width: 140px;
  }

  h4 {
    font-weight: 300;
    font-size: 14px;
    margin: 0;

    /* Mobile */
    @media (max-width: 768px) {
      font-size: 12px;
    }

    /* Small Mobile */
    @media (max-width: 480px) {
      font-size: 11px;
    }
  }

  h2 {
    font-size: 22px;
    font-weight: 600;
    margin: 5px 0 0 0;

    /* Tablet */
    @media (max-width: 1024px) {
      font-size: 20px;
    }

    /* Mobile */
    @media (max-width: 768px) {
      font-size: 18px;
    }

    /* Small Mobile */
    @media (max-width: 480px) {
      font-size: 16px;
    }
  }

  span {
    color: #ff2e63;
    font-weight: 700;
  }
`;

const ImgSection = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 50px 0;
  background-color: white;

  /* Tablet */
  @media (max-width: 1024px) {
    padding: 40px 0;
  }

  /* Mobile */
  @media (max-width: 768px) {
    padding: 30px 0;
    gap: 15px;
  }
`;

const LatestCard = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;

  /* Mobile */
  @media (max-width: 768px) {
    margin-bottom: 20px;
  }

  h1 {
    font-size: 24px;
    font-weight: 400;
    margin: 0;

    /* Tablet */
    @media (max-width: 1024px) {
      font-size: 22px;
    }

    /* Mobile */
    @media (max-width: 768px) {
      font-size: 20px;
    }

    /* Small Mobile */
    @media (max-width: 480px) {
      font-size: 18px;
    }
  }

  h3 {
    font-size: 14px;
    font-weight: 400;
    cursor: pointer;
    color: #666;
    margin: 0;

    &:hover {
      color: #000;
    }

    /* Mobile */
    @media (max-width: 768px) {
      font-size: 13px;
    }
  }
`;

const BlogCardsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;

  /* Tablet */
  @media (max-width: 1024px) {
    gap: 30px;
  }

  /* Mobile */
  @media (max-width: 768px) {
    gap: 25px;
  }
`;

const BlogCardsRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 30px;

  /* Tablet */
  @media (max-width: 1024px) {
    gap: 20px;
  }

  /* Mobile */
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 25px;
  }
`;

const BlogCard = styled.div`
  width: calc(33.333% - 20px);
  display: flex;
  flex-direction: column;
  gap: 15px;

  /* Tablet */
  @media (max-width: 1024px) {
    width: calc(33.333% - 14px);
    gap: 12px;
  }

  /* Mobile */
  @media (max-width: 768px) {
    width: 100%;
    gap: 10px;
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 4px;

  /* Tablet */
  @media (max-width: 1024px) {
    height: 180px;
  }

  /* Mobile */
  @media (max-width: 768px) {
    height: 200px;
  }

  /* Small Mobile */
  @media (max-width: 480px) {
    height: 180px;
  }
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  /* Mobile */
  @media (max-width: 768px) {
    gap: 8px;
  }
`;

const CardTitle = styled.h3`
  font-size: 18px;
  font-weight: 500;
  margin: 0;

  /* Tablet */
  @media (max-width: 1024px) {
    font-size: 16px;
  }

  /* Mobile */
  @media (max-width: 768px) {
    font-size: 16px;
  }

  /* Small Mobile */
  @media (max-width: 480px) {
    font-size: 15px;
  }
`;

const CardText = styled.p`
  font-size: 14px;
  color: #666;
  line-height: 1.5;
  margin: 0;

  /* Tablet */
  @media (max-width: 1024px) {
    font-size: 13px;
  }

  /* Mobile */
  @media (max-width: 768px) {
    font-size: 13px;
  }

  /* Small Mobile */
  @media (max-width: 480px) {
    font-size: 12px;
    line-height: 1.4;
  }
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #eee;
  margin: 10px 0;

  /* Mobile */
  @media (max-width: 768px) {
    margin: 8px 0;
  }
`;

export default function Home() {
  const allBlogPosts = [
    {
      id: 1,
      title: "THE EASIEST WAY TO BREAK",
      image: Image37,
      text: "But I must explain to you how all this mistaken idea of denouncing pleas and praising pain was bor"
    },
    {
      id: 2,
      title: "WEDDING SEASON",
      image: Image38,
      text: "But I must explain to you how all this mistaken idea of denouncing pleas and praising pain was bor"
    },
    {
      id: 3,
      title: "RECENT FAVORITES ON REPEAT",
      image: Image39,
      text: "But I must explain to you how all this mistaken idea of denouncing pleas and praising pain was bor"
    },
    // Qo'shimcha postlar (SEE ALL bosilganda chiqadi)
    {
      id: 4,
      title: "SUMMER COLLECTION",
      image: Image37,
      text: "But I must explain to you how all this mistaken idea of denouncing pleas and praising pain was bor"
    },
    {
      id: 5,
      title: "NEW TRENDS",
      image: Image38,
      text: "But I must explain to you how all this mistaken idea of denouncing pleas and praising pain was bor"
    },
    {
      id: 6,
      title: "FASHION WEEK",
      image: Image39,
      text: "But I must explain to you how all this mistaken idea of denouncing pleas and praising pain was bor"
    },
  ];
  
  const [showAll, setShowAll] = useState(false);
  
  const displayedPosts = showAll ? allBlogPosts : allBlogPosts.slice(0, 3);

  // Postlarni har 3 tadan qatorlarga ajratish
  const rows = [];
  for (let i = 0; i < displayedPosts.length; i += 3) {
    rows.push(displayedPosts.slice(i, i + 3));
  }

  const handleSeeAllClick = () => {
    setShowAll(!showAll);
  };

  return (
    <>
      <Header />
      <HomeCtn>
        <GridWrapper>
          <MainItem>
            <img src={Image1} alt="Main Banner" />
          </MainItem>

          <WomenItem>
            <img src={Image2} alt="Women" />
          </WomenItem>

          <MenItem>
            <img src={Image3} alt="Men" />
          </MenItem>

          <AccessoriesItem>
            <img src={Image4} alt="Accessories" />
          </AccessoriesItem>
        </GridWrapper>

        <ShippingCtn>
          <ShippingCard>
            <img src={Image5} alt="" />
            <ShippingText>
              <h5>FREE SHIPPING</h5>
              <p>On all UA order or order above $100</p>
            </ShippingText>
          </ShippingCard>

          <ShippingCard>
            <img src={Image6} alt="" />
            <ShippingText>
              <h5>30 DAYS RETURN</h5>
              <p>Return it within 30 days for an exchange</p>
            </ShippingText>
          </ShippingCard>

          <ShippingCard>
            <img src={Image7} alt="" />
            <ShippingText>
              <h5>SUPPORT 24/7</h5>
              <p>Contact us 24 hours a day, 7 days a week</p>
            </ShippingText>
          </ShippingCard>
        </ShippingCtn>
        
        <WomenText>
          <h2>WOMEN'S</h2>
          <WomenText2>
            <h5>NEW ARRIVALS</h5>
            <h5>SPECIALS</h5>
            <h5>MOST VIEWED</h5>
            <h5>FEATURE PRODUCTS</h5>
          </WomenText2>
        </WomenText>
        
        <WomenCardComponent />

        <WomenText>
          <h2>MEN'S</h2>
          <WomenText2>
            <h5>NEW ARRIVALS</h5>
            <h5>SPECIALS</h5>
            <h5>MOST VIEWED</h5>
            <h5>FEATURE PRODUCTS</h5>
          </WomenText2>
        </WomenText>
        
        <MenCardComponent />

        <TwoImages>
          <div style={{ position: "relative", width: "100%" }}>
            <img src={Image8} alt="" />
            <PromoOverlay>
              <h4>NEW SEASON</h4>
              <h2>LOOKBOOK COLLECTION</h2>
            </PromoOverlay>
          </div>
          <div style={{ position: "relative", width: "100%" }}>
            <img src={Image9} alt="" />
            <PromoOverlay>
              <h4>SALE</h4>
              <h2>GET UP TO <span>50% OFF</span></h2>
            </PromoOverlay>
          </div>
        </TwoImages>

        <ImgSection>
          <LatestCard>
            <h1>LATEST FROM BLOG</h1>
            <h3 onClick={handleSeeAllClick}>
              {showAll ? "HIDE" : "SEE ALL"}
            </h3>
          </LatestCard>

          <BlogCardsContainer>
            {rows.map((row, rowIndex) => (
              <BlogCardsRow key={rowIndex}>
                {row.map((post) => (
                  <BlogCard key={post.id}>
                    <CardImage src={post.image} alt={post.title} />
                    <CardContent>
                      <CardTitle>{post.title}</CardTitle>
                      <Divider />
                      <CardText>{post.text}</CardText>
                    </CardContent>
                  </BlogCard>
                ))}
              </BlogCardsRow>
            ))}
          </BlogCardsContainer>
        </ImgSection>
      </HomeCtn>
      
      <Footer />
    </>
  );
}
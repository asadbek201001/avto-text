import React, { useState } from "react";
import styled from "styled-components";

//components
import Header from "../components/Header";
import Footer from "../components/Footer";

//images
import Chiziq3 from "../assets/3chiziq.png"
import Image37 from "../image/image37.png";
import Image38 from "../image/image38.png";
import Image39 from "../image/image39.png"

const AboutCtn = styled.div`
  width: 100%;
  height: auto;
  background-color: white;
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
    font-weight: 400;
  }
  
  h1 {
    font-weight: 400;
  }
  
  img {
    width: 50px;
  }
  
  gap: 225px;
  
  /* Mobile styles */
  @media (max-width: 768px) {
    height: auto;
    padding: 15px 20px;
    gap: 20px;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    
    h1 {
      order: -1;
      margin: 10px 0;
      font-size: 24px;
    }
    
    h5 {
      font-size: 14px;
    }
    
    img {
      display: none;
    }
  }
`;

const ImgSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 50px 150px;
  background-color: white;
  
  /* Mobile styles */
  @media (max-width: 768px) {
    padding: 30px 20px;
  }
`;

const LatestCard = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
  
  h1 {
    font-size: 24px;
    font-weight: 400;
  }
  
  h3 {
    font-size: 14px;
    font-weight: 400;
    cursor: pointer;
    color: #666;
    
    &:hover {
      color: #000;
    }
  }
  
  /* Mobile styles */
  @media (max-width: 768px) {
    h1 {
      font-size: 20px;
    }
  }
`;

const BlogCardsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;
  
  /* Mobile styles */
  @media (max-width: 768px) {
    gap: 30px;
  }
`;

const BlogCardsRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 30px;
  
  /* Mobile styles */
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
  
  /* Mobile styles */
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 4px;
  
  /* Mobile styles */
  @media (max-width: 768px) {
    height: 180px;
  }
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const CardTitle = styled.h3`
  font-size: 18px;
  font-weight: 500;
  margin: 0;
  
  /* Mobile styles */
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const CardText = styled.p`
  font-size: 14px;
  color: #666;
  line-height: 1.5;
  margin: 0;
  
  /* Mobile styles */
  @media (max-width: 768px) {
    font-size: 13px;
  }
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #eee;
  margin: 10px 0;
`;

const TextCtn = styled.div`
  width: 100%;
  padding: 50px 150px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  
  /* Mobile styles */
  @media (max-width: 768px) {
    padding: 30px 20px;
    
    h1 {
      font-size: 22px;
      margin-bottom: 15px;
    }
    
    p {
      font-size: 14px;
      line-height: 1.5;
    }
  }
`;

export default function About() {
  const [showAll, setShowAll] = useState(false);

  // Barcha blog postlar
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
    {
      id: 7,
      title: "STREET STYLE",
      image: Image37,
      text: "But I must explain to you how all this mistaken idea of denouncing pleas and praising pain was bor"
    },
    {
      id: 8,
      title: "MINIMALIST DESIGN",
      image: Image38,
      text: "But I must explain to you how all this mistaken idea of denouncing pleas and praising pain was bor"
    },
    {
      id: 9,
      title: "ECO FRIENDLY FASHION",
      image: Image39,
      text: "But I must explain to you how all this mistaken idea of denouncing pleas and praising pain was bor"
    }
  ];

  // Ko'rsatiladigan postlar (SEE ALL holatiga qarab)
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
      <AboutCtn>
        <AboutSection>
          <h5>Home <strong>&gt; About Us</strong></h5>
          <h1>ABOUT US</h1>
          <img src={Chiziq3} alt="" />
        </AboutSection>

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

        <TextCtn>
          <h1>About Us</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci animi assumenda cum cumque dolores eaque, eos et ipsam molestias mollitia nulla odio perferendis placeat quo similique, tempora voluptates. Accusantium adipisci aspernatur at consectetur doloremque explicabo non odit, possimus quidem quis reiciendis soluta. Beatae consequuntur cum explicabo illo iure laudantium, magnam nostrum odit officiis omnis provident repellat repellendus sint, temporibus ullam vitae voluptate! Atque dolores eos porro quidem similique! Aliquam amet aspernatur at et harum perspiciatis quam quod similique sit suscipit! Aliquam dolores, iure repellat sit tempora voluptatibus. Ab accusamus, corporis cum error illo maiores omnis quam reiciendis sit veniam. Asperiores aspernatur blanditiis, earum exercitationem incidunt ipsum necessitatibus nemo nostrum pariatur, quam quia, quo rem voluptates. Aspernatur beatae, cupiditate earum enim ex iusto, omnis praesentium quasi quo soluta veniam voluptatum? Deserunt eum hic id in nulla odit similique sunt velit veritatis voluptatibus. A commodi esse et exercitationem ipsam minima nemo qui rem suscipit? Accusamus, assumenda atque culpa cumque delectus distinctio eos, ex hic iusto mollitia necessitatibus nihil odio pariatur provident quam quod veniam? A adipisci aliquam aperiam aut, autem doloribus dolorum est hic impedit in incidunt inventore ipsa iste laboriosam minus modi non nulla omnis perspiciatis quaerat quasi quidem rem, sit soluta vel. Dolore dolorum non temporibus. A accusamus commodi consequatur corporis cumque debitis delectus deserunt dicta dolorum eius est excepturi explicabo fugiat, fugit id, in, iusto magnam magni minima nesciunt nobis nostrum porro sapiente sit vel. Aliquam blanditiis consectetur cum deserunt doloribus et facere illum laboriosam modi molestias mollitia nam officia quo, ratione sed, sequi tempore ut! A aliquid commodi consectetur deleniti dolorem doloremque ducimus eligendi, eum fugit inventore ipsa iste, labore minus, nemo neque optio perspiciatis quaerat quis quod rem repellendus reprehenderit repudiandae sit sunt temporibus veniam veritatis voluptatem? Ab consectetur fuga iure maxime necessitatibus obcaecati quae voluptatibus. Ab accusamus alias amet consectetur distinctio dolores enim error eum expedita fuga, incidunt magnam nemo omnis perspiciatis, quasi quia, voluptates? Blanditiis deleniti ducimus labore necessitatibus perspiciatis vitae voluptatem. Eum excepturi laborum nisi quae suscipit vel veritatis? Aliquid animi at cumque dolor, earum eius eligendi, esse exercitationem fugit illo in incidunt labore laboriosam magnam maxime molestias nemo nihil numquam porro quas ratione recusandae repellendus repudiandae saepe, sed similique sint tempore totam velit voluptate. Architecto, dolor dolore dolorum eaque eligendi eum eveniet inventore itaque iure laudantium nisi pariatur quam quis quod repellat totam unde velit? Consectetur doloribus est explicabo facere necessitatibus nisi numquam odit quae, quaerat quasi ratione recusandae repellat repellendus sed similique ut voluptatibus. Accusamus architecto aspernatur consequatur cum cupiditate debitis deleniti dolor, eius eos eum exercitationem explicabo fuga inventore iure nostrum pariatur perferendis similique sit suscipit voluptatem? Ad at atque consequatur dolores hic officia quas, tempora totam. Consequatur dignissimos doloribus fugiat maxime odio quisquam ratione recusandae saepe sunt, suscipit ullam velit vero? Aliquam amet autem commodi corporis cumque debitis delectus deleniti dignissimos dolore eaque, eligendi et ex facere fugiat fugit harum iure modi nesciunt odit quidem quisquam rem totam voluptates! Delectus ipsa maiores non, ullam voluptate voluptates. Aliquam blanditiis dicta dolores in reprehenderit rerum sed, velit. Aut consectetur dolorum enim eum fugit, natus recusandae repellat saepe sed sit, tenetur velit! A, architecto beatae cumque debitis laboriosam laudantium magnam mollitia odit quam! A ad, ducimus eaque esse, ex hic illo ipsam magni minima molestiae nostrum porro provident quisquam sapiente sit suscipit tempore unde. A eaque laudantium maiores odit praesentium sit unde? Cupiditate facere illo pariatur quidem veniam! Commodi culpa dolor porro. Accusantium adipisci alias, asperiores aspernatur assumenda at cumque dolor error et ex, fugit incidunt ipsum iusto laborum neque odit officia omnis perferendis quod saepe sint tempore ut vero? Accusantium, alias animi aperiam eos ex expedita neque nisi nulla sunt suscipit. Dicta dolore eius ex, illum molestias nulla numquam obcaecati optio repellat repellendus. Assumenda aut autem cum deserunt dicta facere, inventore, minima necessitatibus non possimus quibusdam soluta sunt totam. At commodi consequatur corporis culpa dolore doloribus dolorum ducimus enim excepturi, in, nihil nisi nostrum omnis placeat praesentium quaerat, saepe soluta sunt tempora temporibus! Aliquid amet dignissimos distinctio fuga laudantium praesentium qui quidem sapiente voluptatem voluptates. Beatae blanditiis commodi cum cupiditate deserunt dolor doloribus dolorum, eius eos eveniet fuga harum in incidunt inventore ipsa laborum magni neque non odit placeat praesentium, qui quidem reiciendis rem ut! Aliquam aliquid aspernatur atque autem beatae corporis, cumque dicta eius eligendi libero natus nesciunt, non nulla quae quisquam repudiandae soluta unde. Accusantium delectus laudantium non odit temporibus? Aspernatur commodi distinctio eius facilis modi molestiae molestias quod! Ad, aliquid animi beatae consectetur cumque, delectus dicta dignissimos esse est fuga iure maiores molestias nemo qui repudiandae sed tempora veritatis. Illo ipsum nesciunt omnis porro praesentium quibusdam, rem repellat saepe. Accusantium consectetur esse excepturi expedita inventore ipsa ipsum iste magni voluptatem voluptates? Adipisci aliquam beatae commodi dignissimos dolore, explicabo ipsa ipsam, minima nemo non pariatur quos ratione voluptates? Est nemo nesciunt omnis pariatur sint. Assumenda commodi dignissimos eius exercitationem illum iusto laudantium, modi nam, quaerat quidem, quis quos rem rerum. Alias, assumenda cum, delectus doloremque ea, inventore labore magni minima nostrum possimus qui tempora totam. At autem delectus, deleniti dolore dolores ducimus hic iure praesentium provident quo quos, rem tenetur unde! Ad aliquid at quam sit! A amet aperiam asperiores blanditiis consequuntur deleniti deserunt, distinctio doloremque dolores doloribus excepturi fuga fugit illo nam, neque nesciunt nostrum pariatur perferendis placeat praesentium quae quasi ratione recusandae repellat repellendus saepe sint temporibus velit vitae voluptates. A adipisci dolorum eveniet exercitationem iusto laboriosam maiores nobis odit, optio quam quo sunt. Labore magnam molestias officia possimus ut. Accusantium harum ipsum, numquam odio reprehenderit sequi similique voluptatum? Adipisci aperiam enim itaque odio officiis porro quod rem saepe sint vitae. Amet aperiam aspernatur ducimus eligendi est et expedita fuga illo ipsam ipsum itaque iure molestiae mollitia neque odit optio pariatur perferendis perspiciatis placeat porro qui, quia quidem quos repellat unde veritatis vero voluptatem! Corporis explicabo facilis labore nemo quaerat! Accusamus commodi dolorem eligendi ex laborum, nulla officiis quasi quidem sed tempore! Aliquid atque, consectetur est nobis placeat similique? Excepturi iusto, odio ratione repudiandae rerum saepe tempore.</p>
        </TextCtn>
      </AboutCtn>
      <Footer />
    </>
  )
}
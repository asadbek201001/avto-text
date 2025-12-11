    import React from "react";
    import styled from "styled-components";
    
    //components
    import Header from "../components/Header";
    

    const Container = styled.div`
    padding: 20px;
    width:400px;
    height:auto;
    display:flex;
    justify-content:center;
    align-items:center;

    `;

    const Breadcrumb = styled.div`
    font-size: 14px;
    color: #555;
    margin-bottom: 10px;
    `;

    const PageTitleWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #ddd;
    padding-bottom: 10px;
    `;

    const PageTitle = styled.h1`
    font-size: 24px;
    font-weight: bold;
    text-transform: uppercase;
    margin: 0;
    `;

    const ShareIcon = styled.span`
    font-size: 18px;
    cursor: pointer;
    color: #888;
    `;


const BigContainer = styled.div`
    width:100%;
    height:auto;
    display:flex;


    
`
;


const AddItem = styled.div`
    
`
;



// const JustDiv = styled.div`
//     background-color:#000000;
//     width:300px;
//     height:500px;
// `
// ;


    export default function Women() {
    return (
        <>

        <BigContainer>
        <Header>
              <Container>
            <Breadcrumb>Home &gt; Women</Breadcrumb>
            <PageTitleWrapper>
            <PageTitle>Women</PageTitle>
            <ShareIcon>🔗</ShareIcon>
            </PageTitleWrapper>
        </Container>
        </Header>
          </BigContainer>


      




      
        {/* <JustDiv></JustDiv> */}
        
        </>
    );
    }

import React from "react";
import styled from "styled-components";


//components
import Header from "../components/Header";
import WomenCard from "../components/WomenCard";
import Footer from "../components/Footer";



const WomenCtn = styled.div`
width: 100%;
height: auto;
padding-top: 113px;
`;
export default function Women() {
    return (
        <>
        <Header />
        <WomenCtn>
        <WomenCard />


        </WomenCtn>

        <Footer />
        </>
    );
    }

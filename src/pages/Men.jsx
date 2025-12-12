import React from "react";
import styled from "styled-components";


//components
import Header from "../components/Header";
import Footer from "../components/Footer";
import ManCard from "../components/ManCard";



const MenCtn = styled.div`
width: 100%;
padding-top: 113px;
`;


export default function Men() {
    return (
        <>
        <Header />
        <MenCtn>
        
        <ManCard></ManCard>

        </MenCtn>

        <Footer />
        </>
    )
}
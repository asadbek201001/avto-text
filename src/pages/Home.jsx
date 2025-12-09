import React from "react";
import styled from "styled-components";


//components
import Header from "../components/Header";

//images


const HomeCtn = styled.div`
width: 100%;
height: auto;
display: flex;
flex-direction: column;
padding: 50px;
gap: 30px;

`;


export default function Home() {
    return (
        <>
        <Header />
        
        </>
    )
}
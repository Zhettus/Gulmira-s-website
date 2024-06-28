import React from 'react';
import styled, { keyframes } from 'styled-components';
import photo from "../assets/gulmira.jpeg"

const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #ffffff;
  text-align: center;
  position: relative;
`;

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const CircleText = styled.svg`
  position: absolute;
  width: 520px; /* Adjusted width */
  height: 520px; /* Adjusted height */
  animation: ${rotate} 10s linear infinite;
`;

const Photo = styled.img`
  border-radius: 50%;
  width: 400px;
  height: 400px;
  object-fit: cover;
  z-index: 1;
`;

const HomePage = () => (
  <HomeContainer id="home">
    <Photo src={photo} alt="Gulmira Tussupbekova" />
    <CircleText viewBox="0 0 420 420">
      <defs>
        <path
          id="circle"
          d="
            M 210, 210
            m -200, 0
            a 200,200 0 1,1 400,0
            a 200,200 0 1,1 -400,0
          "
        />
      </defs>
      <text fontSize="25">
        <textPath href="#circle">
          PhD Доктор наук &#x2022; 5 высших образования &#x2022; 4 успешных кейса поступления &#x2022; что-то! &#x2022; что-то2 &#x2022;
        </textPath>
      </text>
    </CircleText>
  </HomeContainer>
);

export default HomePage;

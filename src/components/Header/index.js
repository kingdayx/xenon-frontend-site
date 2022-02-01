import React from "react";
import styled from "styled-components";
import logo from "../../assets/svgs/yield.svg";
import moon from "../../assets/svgs/moon.svg";
import app from "../../assets/svgs/app.svg";

// import window from "../../assets/svgs/Safari/Light/Window.svg";

const HeaderContainer = styled.div``;

const HeaderPara = styled.div`
  display: flex;
  justify-content: center;
  font-family: Inter;
  font-style: normal;
  font-weight: bold;
  font-size: 13px;
  line-height: 16px;
  /* identical to box height */
  text-transform: uppercase;
  color: #f8c696;
  margin-bottom: 1rem;
`;

const HeaderYield = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40rem;
  margin-left: 25rem;
  @media (max-width: 460px) {
    margin-left: 1rem;
    width: 25rem;
  }
`;

const HeaderTopContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 3rem;
`;

const HeaderPara1 = styled.p`
  font-family: Colette;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 26px;
  /* or 144% */
  text-align: center;
  color: rgba(255, 255, 255, 0.8);
`;

const HeaderMoon = styled.img`
  position: relative;
  top: -10em;
  width: 30rem;
  @media (max-width: 460px) {
    width: 25rem;
  }
`;

const HeaderImage = styled.div``;

// const HeaderWindow = styled.img`
//   position: absolute;
//   top: 15em;
//   width: 40rem;
//   @media (max-width: 460px) {
//     width: 25rem;
//   }
// `;

export default function Header() {
  return (
    <HeaderContainer>
      <HeaderTopContainer>
        <HeaderPara>XEN staking is here! Earn 43.70% on your XEN</HeaderPara>
        <HeaderYield src={logo} alt="header text" />
        <HeaderPara1>
          Xenon is a decentralized lending protocol intended for liquidity
          providers.
        </HeaderPara1>
      </HeaderTopContainer>
      <HeaderMoon src={moon} alt="moon" />
      <HeaderImage src={app} alt="image of application" />
      {/* <HeaderWindow src={window} alt="window" /> */}
    </HeaderContainer>
  );
}

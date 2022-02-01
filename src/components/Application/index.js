import React from "react";
import styled from "styled-components";
// import xenon from "../../assets/svgs/Xenon.svg";
// import supplied from "../../assets/svgs/supplied.svg";
// import borrowed from "../../assets/images/borrowed.png";
// import { Link } from "react-router-dom";
import xlogo from "../../assets/svgs/Xlogo.svg";
import topx from "../../assets/svgs/top-x.svg";
import Pools from "./Pools";

const AppContainer = styled.div`
  margin: 5rem;
`;

const AppContainerTop = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const AppContainerBot = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const AppComponent = styled.div`
  display: flex;
  flex-direction: row;
  background: #161a2e;
  width: 20rem;
  border-radius: 26px;
  padding: 1rem;
`;

const AppComponentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const AppComponentHeader = styled.div`
  font-family: Colette;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 32px;
  /* identical to box height, or 246% */
  width: 10rem;
  text-align: center;

  color: rgba(255, 255, 255, 0.8);
`;

const AppTokenPrice = styled.div`
  display: flex;
  flex-direction: column;
  background: #161a2e;
  width: 8rem;
  border-radius: 26px;
  padding: 1rem;
`;

const AppToken = styled.div`
  display: flex;
  flex-direction: row;
`;

const AppTokenPriceHeader = styled.h1`
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 23px;

  color: #ffffff;
`;

const AppTokenPriceImage = styled.image``;

const AppSvg = styled.svg`
  position: relative;
  left: 4rem;
  top: 2rem;
`;

const AppComponentAmount = styled.div`
  padding: 1rem;
  color: white;
  font-style: normal;
  font-weight: bold;
  font-size: 28px;
  line-height: 36px;
`;

const AppImage = styled.image`
  height: 100%;
  width: 100%;
  color: black;
`;

export default function Application() {
  const pools = [
    {
      tokenTag1: "BTC",
      tokenTag2: "XEN",
      tokenName1: "Bitcoin",
      tokenName2: "Xenon",
      tokenImage1: "./logo.png",
      tokenImage2: "./logo.png",
    },
    {
      tokenTag1: "ETH",
      tokenTag2: "XEN",
      tokenName1: "Ethereum",
      tokenName2: "Xenon",
      tokenImage1: "./logo.png",
      tokenImage2: "./logo.png",
    },
    {
      tokenTag1: "SOL",
      tokenTag2: "XEN",
      tokenName1: "Solana",
      tokenName2: "Xenon",
      tokenImage1: "./logo.png",
      tokenImage2: "./logo.png",
    },
    {
      tokenTag1: "BTC",
      tokenTag2: "XEN",
      tokenName1: "Bitcoin",
      tokenName2: "Xenon",
      tokenImage1: "./logo.png",
      tokenImage2: "./logo.png",
    },
    {
      tokenTag1: "BTC",
      tokenTag2: "XEN",
      tokenName1: "Bitcoin",
      tokenName2: "Xenon",
      tokenImage1: "./logo.png",
      tokenImage2: "./logo.png",
    },
    {
      tokenTag1: "BTC",
      tokenTag2: "XEN",
      tokenName1: "Bitcoin",
      tokenName2: "Xenon",
      tokenImage1: "./logo.png",
      tokenImage2: "./logo.png",
    },
    {
      tokenTag1: "BTC",
      tokenTag2: "XEN",
      tokenName1: "Bitcoin",
      tokenName2: "Xenon",
      tokenImage1: "./logo.png",
      tokenImage2: "./logo.png",
    },
    {
      tokenTag1: "BTC",
      tokenTag2: "XEN",
      tokenName1: "Bitcoin",
      tokenName2: "Xenon",
      tokenImage1: "./logo.png",
      tokenImage2: "./logo.png",
    },
    {
      tokenTag1: "BTC",
      tokenTag2: "XEN",
      tokenName1: "Bitcoin",
      tokenName2: "Xenon",
      tokenImage1: "./logo.png",
      tokenImage2: "./logo.png",
    },
    {
      tokenTag1: "BTC",
      tokenTag2: "XEN",
      tokenName1: "Bitcoin",
      tokenName2: "Xenon",
      tokenImage1: "./logo.png",
      tokenImage2: "./logo.png",
    },
  ];
  return (
    <AppContainer>
      {/* <Link to="/">
        <AppLogo src={xenon} alt="logo" />
      </Link>
      <AppHeader>Application</AppHeader> */}
      <AppContainerTop>
        <AppComponent>
          <AppComponentWrapper>
            <AppImage src={topx} alt="top" />
            <AppComponentHeader>Total Value Locked</AppComponentHeader>
            <AppComponentAmount> $71,956,337 </AppComponentAmount>
          </AppComponentWrapper>
          <AppSvg
            width="38"
            height="38"
            viewBox="0 0 38 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="19" cy="19" r="19" fill="url(#paint0_linear_72_2012)" />
            <path
              d="M27.9101 18.1198V13.7298C27.9101 12.9098 27.2901 11.9798 26.5201 11.6698L20.9501 9.38982C19.7001 8.87982 18.2901 8.87982 17.0401 9.38982L11.4701 11.6698C10.7101 11.9798 10.0901 12.9098 10.0901 13.7298V18.1198C10.0901 23.0098 13.6401 27.5898 18.4901 28.9298C18.8201 29.0198 19.1801 29.0198 19.5101 28.9298C24.3601 27.5898 27.9101 23.0098 27.9101 18.1198ZM19.7501 19.8698V22.4998C19.7501 22.9098 19.4101 23.2498 19.0001 23.2498C18.5901 23.2498 18.2501 22.9098 18.2501 22.4998V19.8698C17.2401 19.5498 16.5001 18.6098 16.5001 17.4998C16.5001 16.1198 17.6201 14.9998 19.0001 14.9998C20.3801 14.9998 21.5001 16.1198 21.5001 17.4998C21.5001 18.6198 20.7601 19.5498 19.7501 19.8698Z"
              fill="white"
            />
            <defs>
              <linearGradient
                id="paint0_linear_72_2012"
                x1="0"
                y1="0"
                x2="42.9645"
                y2="31.1532"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.108037" stop-color="#5C43FF" />
                <stop offset="1" stop-color="#33CDFF" />
              </linearGradient>
            </defs>
          </AppSvg>
        </AppComponent>
        <AppComponent>
          <AppComponentWrapper>
            <AppComponentHeader>Total Value Supplied</AppComponentHeader>
            <AppComponentAmount> $71,956,337 </AppComponentAmount>
          </AppComponentWrapper>
          <AppSvg
            width="38"
            height="38"
            viewBox="0 0 38 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="19" cy="19" r="19" fill="url(#paint0_linear_72_2011)" />
            <path
              d="M27.21 14.8199L19.51 19.2799C19.2 19.4599 18.81 19.4599 18.49 19.2799L10.79 14.8199C10.24 14.4999 10.1 13.7499 10.52 13.2799C10.81 12.9499 11.14 12.6799 11.49 12.4899L16.91 9.48994C18.07 8.83994 19.95 8.83994 21.11 9.48994L26.53 12.4899C26.88 12.6799 27.21 12.9599 27.5 13.2799C27.9 13.7499 27.76 14.4999 27.21 14.8199Z"
              fill="white"
            />
            <path
              d="M18.43 21.1399V27.9599C18.43 28.7199 17.66 29.2199 16.98 28.8899C14.92 27.8799 11.45 25.9899 11.45 25.9899C10.23 25.2999 9.22998 23.5599 9.22998 22.1299V16.9699C9.22998 16.1799 10.06 15.6799 10.74 16.0699L17.93 20.2399C18.23 20.4299 18.43 20.7699 18.43 21.1399Z"
              fill="white"
            />
            <path
              d="M19.5701 21.1399V27.9599C19.5701 28.7199 20.3401 29.2199 21.0201 28.8899C23.0801 27.8799 26.5501 25.9899 26.5501 25.9899C27.7701 25.2999 28.7701 23.5599 28.7701 22.1299V16.9699C28.7701 16.1799 27.9401 15.6799 27.2601 16.0699L20.0701 20.2399C19.7701 20.4299 19.5701 20.7699 19.5701 21.1399Z"
              fill="white"
            />
            <defs>
              <linearGradient
                id="paint0_linear_72_2011"
                x1="0"
                y1="0"
                x2="42.9645"
                y2="31.1532"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.108037" stop-color="#5C43FF" />
                <stop offset="1" stop-color="#33CDFF" />
              </linearGradient>
            </defs>
          </AppSvg>
        </AppComponent>
        <AppComponent>
          <AppComponentWrapper>
            <AppComponentHeader>Total Value Borrowed</AppComponentHeader>
            <AppComponentAmount> $71,956,337 </AppComponentAmount>
          </AppComponentWrapper>
          <AppSvg
            width="38"
            height="38"
            viewBox="0 0 38 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="19" cy="19" r="19" fill="url(#paint0_linear_72_2032)" />
            <path
              d="M16.8999 9.86V18.25H22.3799C22.7899 18.25 23.1299 18.59 23.1299 19C23.1299 19.41 22.7899 19.75 22.3799 19.75H16.8999V28.14C16.8999 28.62 17.2799 29 17.7599 29C23.6499 29 27.7599 24.89 27.7599 19C27.7599 13.11 23.6499 9 17.7599 9C17.2799 9 16.8999 9.38 16.8999 9.86Z"
              fill="white"
            />
            <path
              d="M12.7999 18.2501L14.3599 16.6901C14.6499 16.4001 14.6499 15.9201 14.3599 15.6301C14.0699 15.3401 13.5899 15.3401 13.2999 15.6301L10.4599 18.4801C10.1699 18.7701 10.1699 19.2501 10.4599 19.5401L13.3099 22.3801C13.4599 22.5201 13.6499 22.6001 13.8399 22.6001C14.0299 22.6001 14.2199 22.5301 14.3699 22.3801C14.6599 22.0901 14.6599 21.6101 14.3699 21.3201L12.8099 19.7601H16.8999V18.2601H12.7999V18.2501Z"
              fill="white"
            />
            <defs>
              <linearGradient
                id="paint0_linear_72_2032"
                x1="0"
                y1="0"
                x2="42.9645"
                y2="31.1532"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.108037" stop-color="#5C43FF" />
                <stop offset="1" stop-color="#33CDFF" />
              </linearGradient>
            </defs>
          </AppSvg>
        </AppComponent>
        <AppTokenPrice>
          <AppToken>
            <AppTokenPriceImage src={xlogo} alt="token price image" />
            <AppTokenPriceHeader>Xen</AppTokenPriceHeader>
          </AppToken>
          <AppComponentAmount>$1.02</AppComponentAmount>
        </AppTokenPrice>
      </AppContainerTop>
      <AppContainerBot>
        {pools.map((index, key) => {
          return (
            <Pools
              key={key}
              tokenImage1={index.tokenImage1}
              tokenImage2={index.tokenImage2}
              tokenTag1={index.tokenTag1}
              tokenTag2={index.tokenTag2}
              tokenName1={index.tokenName1}
              tokenName2={index.tokenName2}
              page={`/${key}/pool`}
            />
          );
        })}
      </AppContainerBot>
    </AppContainer>
  );
}

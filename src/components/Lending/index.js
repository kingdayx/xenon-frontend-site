import styled from "styled-components";
import lender from "../../assets/svgs/lender.svg";
import arrow from "../../assets/svgs/arrow-right.svg";
// import LendingCard from "./LendingCard";
import "./style.css";

const LendContainer = styled.div``;

const LendWrapper = styled.div`
  position: relative;
  width: 1240px;
  height: 1505px;
  left: 100px;
  top: 20rem;

  background: linear-gradient(125.95deg, #5c43ff 10.8%, #33cdff 100%);
  border-radius: 32px;
`;

const LendTop = styled.div`
  display: flex;
  flex-direction: column;
`;
const LendTopWrapper = styled.div`
  display: flex;
  padding: 5rem 5rem 0 5rem;
`;

const LendTopIMG = styled.img``;

const LendRead = styled.div`
  position: relative;
  top: 8rem;
  display: flex;
  padding: 1rem;
  height: 2rem;
  width: 10rem;
  justify-content: center;
  align-items: center;
  background-color: white;
  color: black;
  font-style: normal;
  font-weight: 800;
  font-size: 18px;
  /* identical to box height */
  border-radius: 16px;
  color: #1a1a1a;
  cursor: pointer;
`;

const LendArrow = styled.img`
  margin-left: 1rem;
`;

const LendHeader = styled.h1`
  font-style: normal;
  font-weight: 800;
  font-size: 62px;
  line-height: 75px;

  color: #ffffff;
`;

const LendPara1 = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 26px;
  /* or 144% */
  width: 35rem;
  color: rgba(255, 255, 255, 0.8);
`;

const LendBotWrapper = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  top: 10rem;
  margin: 5rem 5rem 0 5rem;
`;

const LendBotLeft = styled.div``;

const LendBotRight = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  top: 5rem;
`;

const LendPara2 = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 26px;
  /* or 162% */

  color: rgba(255, 255, 255, 0.8);
`;

const LendingCardContainer = styled.div`
  width: 30rem;
  background: #161a2e;
  border-radius: 26px;
  width: 372px;
  height: 202px;
  margin-bottom: 0.5rem;
`;
const LendingCardContainer1 = styled.div`
  position: relative;
  right: 3rem;
  width: 30rem;
  background: #161a2e;
  border-radius: 26px;
  width: 372px;
  height: 202px;
  margin-bottom: 0.5rem;
`;

const LendingCardNumber = styled.div`
  font-style: normal;
  font-weight: 800;
  font-size: 32px;
  line-height: 39px;
  /* identical to box height */

  color: #f8c696;
`;

const LendingCardNumberWrapper = styled.div`
  position: relative;
  left: 19.5rem;
  top: -1rem;
  width: 2.5rem;
  background: #161a2e;
  border: 2px solid #f8c696;
  box-sizing: border-box;
  border-radius: 40px;
  justify-content: center;
  text-align: center;
`;

const LendingCardText = styled.h1`
  position: relative;
  top: 6rem;
  left: 2rem;
  font-style: normal;
  font-weight: 800;
  font-size: 20px;
  line-height: 24px;

  color: #ffffff;
`;

export default function Lending() {
  return (
    <LendContainer>
      <LendWrapper>
        <LendTopWrapper>
          <LendTop>
            <LendHeader>Lending your LP Tokens</LendHeader>
            <LendPara1>
              How can you earn higher yields and protect yourself from
              impermanent loss? By lending to other farmers using Indirect
              Liquidity Providing. Let borrowers carry the risk and share the
              rewards.
            </LendPara1>
            <LendRead>
              Learn More <LendArrow src={arrow} alt="arrow" />{" "}
            </LendRead>
          </LendTop>
          <LendTopIMG src={lender} alt="lending" />
        </LendTopWrapper>
        <LendBotWrapper>
          <LendBotLeft>
            <LendHeader>Borrowing your LP Tokens</LendHeader>
            <LendPara2>
              You can leverage your LP Tokens for higher yields. Here’s how:
              <ul>
                <li>
                  Use any Uniswap V2 LP token as collateral to borrow funds.{" "}
                </li>
                <li>
                  Use the borrowed funds to increase the size of your farming
                  position by up to 20x.
                </li>
                <li>Pay back the loan any time and keep the extra profits.</li>
                <li>
                  {" "}
                  Earn free XEN tokens with Xenon's liquidity mining program.
                </li>
              </ul>{" "}
            </LendPara2>
            <LendRead>
              Learn More <LendArrow src={arrow} alt="arrow" />{" "}
            </LendRead>
          </LendBotLeft>
          <LendBotRight>
            <LendingCardContainer>
              <LendingCardNumberWrapper>
                <LendingCardNumber> 1 </LendingCardNumber>
              </LendingCardNumberWrapper>
              <LendingCardText> Choose the lending pool </LendingCardText>
            </LendingCardContainer>
            <LendingCardContainer1>
              <LendingCardNumberWrapper>
                <LendingCardNumber> 2 </LendingCardNumber>
              </LendingCardNumberWrapper>
              <LendingCardText> Deposit LP Tokens </LendingCardText>
            </LendingCardContainer1>
            <LendingCardContainer>
              <LendingCardNumberWrapper>
                <LendingCardNumber> 3 </LendingCardNumber>
              </LendingCardNumberWrapper>
              <LendingCardText> Confirm the transaction </LendingCardText>
            </LendingCardContainer>
            <LendingCardContainer1>
              <LendingCardNumberWrapper>
                <LendingCardNumber> 4</LendingCardNumber>
              </LendingCardNumberWrapper>
              <LendingCardText> Repeat </LendingCardText>
            </LendingCardContainer1>
          </LendBotRight>
        </LendBotWrapper>
      </LendWrapper>
    </LendContainer>
  );
}

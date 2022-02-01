import styled from "styled-components";
import topCorner from "../../assets/svgs/topCorner.svg";
import blimish from "../../assets/svgs/leftBlimish.svg";
import place from "../../assets/svgs/leftPlace.svg";
import usdc from "../../assets/svgs/usdc.svg";
import usdt from "../../assets/svgs/USDT.svg";
import WBTC from "../../assets/svgs/WBTC.svg";
import ETH from "../../assets/svgs/ETH.svg";
import StakeCards from "./StakeCards";
import arrow from "../../assets/svgs/arrow-right.svg";
import botCorner from "../../assets/svgs/bottomCorner.svg";

const StakeContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: wrap;
`;

const StakeTopCorner = styled.img`
  width: 1rem;
`;

const StakeBottomCorner = styled.img`
  position: relative;
  top: 2rem;
  left: 12rem;
  width: 1rem;
`;

const StakeBlimish = styled.img`
  position: absolute;
  top: 118rem;
  width: 45rem;
  z-index: -1;
`;

const StakePlace = styled.img`
  position: relative;
  top: 45rem;
  left: 0;
  width: 23rem;
`;

const StakeContainerLeft = styled.div``;
const StakeContainerRight = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  top: -25rem;
  left: 30rem;
  width: 58rem;
`;

const StakeHeader = styled.h1`
  font-style: normal;
  font-weight: 800;
  font-size: 62px;
  line-height: 75px;
  color: white;
  width: 35rem;
`;

const StakePara = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 26px;
  /* or 144% */

  color: rgba(255, 255, 255, 0.8);
  color: white;
`;

const StakeRead = styled.div`
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

const StakeArrow = styled.img`
  margin-left: 1rem;
`;

const StakeCardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 5rem;
`;

const StakeTVL = styled.p`
  position: relative;
  float: right;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 26px;
  /* identical to box height, or 162% */
  margin-left: 4rem;
  color: rgba(255, 255, 255, 0.8);
`;

const StakeTVLValue = styled.h1`
  font-style: normal;
  font-weight: 800;
  font-size: 32px;
  line-height: 39px;
  /* identical to box height */

  text-align: center;

  color: #ffffff;
`;

const StakedBottomContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const StakedBottomRightContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  left: 26rem;
`;

export default function Stake() {
  return (
    <StakeContainer>
      <StakeContainerLeft>
        <StakeBlimish src={blimish} alt="blue blimish" />
        <StakePlace src={place} alt="left place" />
      </StakeContainerLeft>
      <StakeContainerRight>
        <StakeTopCorner src={topCorner} alt="top corner" />
        <StakeHeader>Up to 20% stake of all the interests</StakeHeader>
        <StakePara>
          These tokens are then distributed among XEN stakers proportionally to
          their share of the pool. By staking XEN you receive an xXEN token that
          will continuously compound staking profits. You can unstake at any
          moment in order to receive all the originally deposited XEN and any
          additional staking profit.
        </StakePara>
        <StakeCardsContainer>
          <StakeCards src={usdc} name="usdc" percent="38.4" />
          <StakeCards src={usdt} name="usdt" percent="41.24" />
          <StakeCards src={ETH} name="eth" percent="19.20" />
          <StakeCards src={WBTC} name="wbtc" percent="16.66" />
        </StakeCardsContainer>
        <StakedBottomContainer>
          <StakeRead>
            Read More <StakeArrow src={arrow} alt="corner" />{" "}
          </StakeRead>
          <StakedBottomRightContainer>
            <StakeTVL>Total Value Locked</StakeTVL>
            <StakeTVLValue>$28,914,382</StakeTVLValue>
            <StakeBottomCorner src={botCorner} alt="bottom" />
          </StakedBottomRightContainer>
        </StakedBottomContainer>
      </StakeContainerRight>
    </StakeContainer>
  );
}

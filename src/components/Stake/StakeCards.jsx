import styled from "styled-components";

const StakeCard = styled.div`
  border: 1px solid #161a2e;
  background: #161a2e;
  border-radius: 26px;
  min-width: 23rem;
  margin-right: 5rem;
  margin-bottom: 5rem;
`;

const StakeCardsIMG = styled.img`
  position: relative;
  top: -0.8rem;
  left: -0.8rem;
`;

const StakeCardName = styled.p`
  position: relative;
  top: 0;
  right: 2rem;
  float: right;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 26px;
  /* identical to box height, or 162% */
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.8);
`;

const StakeCardEarn = styled.h1`
  position: relative;
  top: 0;
  right: 2rem;
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  line-height: 32px;
  /* identical to box height, or 145% */

  text-align: right;

  color: #ffffff;
`;

const StakeCardPercent = styled.h1`
  position: relative;
  top: 0;
  right: 2rem;
  font-style: normal;
  font-weight: 800;
  font-size: 62px;
  line-height: 75px;
  /* identical to box height */

  text-align: right;

  color: #ffffff;
`;

const StakeCardAPY = styled.p`
  position: relative;
  top: 0;
  right: 2rem;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 26px;
  /* identical to box height, or 162% */

  text-align: right;

  color: rgba(255, 255, 255, 0.8);
`;

export default function StakeCards({ src, name, percent }) {
  return (
    <StakeCard>
      <StakeCardsIMG src={src} alt={name} />
      <StakeCardName> {name} </StakeCardName>
      <StakeCardEarn> Earn up to </StakeCardEarn>
      <StakeCardPercent> {percent}% </StakeCardPercent>
      <StakeCardAPY>Annual Percentage Yield (APY) </StakeCardAPY>
    </StakeCard>
  );
}

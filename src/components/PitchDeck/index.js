import styled from "styled-components";
import arrow from "../../assets/svgs/arrow-right.svg";
import hIMG from "../../assets/svgs/market.svg";
import rect1 from "../../assets/svgs/rect1.svg";
import rect2 from "../../assets/svgs/rect2.svg";

const PitchContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
const PitchDeckContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  position: relative;
  top: 7rem;
`;

const PitchRead = styled.div`
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

const PitchReadDeck = styled.div`
  position: relative;
  top: 1rem;
  left: 4rem;
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  line-height: 26px;
  /* identical to box height, or 118% */
  text-align: center;
  justify-content: center;
  color: #ffffff;
`;

const PitchArrow = styled.img`
  margin-left: 1rem;
`;

const PitchHeader = styled.h1`
  position: relative;
  left: 23rem;
  justify-content: center;
  align-items: center;

  width: 48rem;
  font-style: normal;
  font-weight: 800;
  font-size: 62px;
  line-height: 75px;
  text-align: center;

  color: #ffffff;
`;

const PitchHeaderIMG = styled.img`
  position: relative;
  right: 3rem;
  top: 1rem;
  width: 1.5rem;
`;

const PitchIMG1 = styled.img`
  position: absolute;
  right: 0;
`;

const PitchIMG2 = styled.img`
  position: absolute;
  right: 0;
  top: 215rem;
`;

export default function PitchDeck() {
  return (
    <PitchContainer>
      <PitchHeader>
        Creating a new way to participate in the liquidity
        <PitchHeaderIMG src={hIMG} alt="image" /> providing market
      </PitchHeader>
      <PitchDeckContainer>
        <PitchRead>
          Read Docs <PitchArrow src={arrow} alt="arrow" />
        </PitchRead>
        <PitchReadDeck>
          Read PitchDeck <PitchArrow src={arrow} alt="arrow" />
        </PitchReadDeck>
      </PitchDeckContainer>
      <PitchIMG1 src={rect1} alt="rectangle 1" />
      <PitchIMG2 src={rect2} alt="rectangle 2" />
    </PitchContainer>
  );
}

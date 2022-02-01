import styled from "styled-components";
import blimish from "../../assets/svgs/blueBlimish.svg";
import xenon from "../../assets/svgs/xenonWorld.svg";
import arrow from "../../assets/svgs/arrow-right.svg";

const XenonWorldContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const XenonWorldContainerLeft = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 8rem;
`;

const XenonWorldHeader = styled.h1`
  color: white;
  font-size: 62px;
`;

const XenonWorldPara = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 26px;
  /* or 144% */

  color: rgba(255, 255, 255, 0.8);
`;

const XenonWorldButtons = styled.div`
  display: flex;
  position: relative;
  top: 5rem;
  flex-direction: row;
  align-items: center;
`;

const XenonWorldButton1 = styled.div`
  display: flex;
  padding: 1rem 2rem 1rem 2rem;
  width: 6rem;
  justify-content: center;
  align-items: center;
  background-color: white;
  color: black;
  font-style: normal;
  font-weight: 800;
  font-size: 18px;
  line-height: 27px;
  /* identical to box height */
  border-radius: 16px;
  color: #1a1a1a;
  cursor: pointer;
`;

const XenonWorldButton2 = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  line-height: 26px;
  /* identical to box height, or 118% */
  margin-left: 5rem;
  color: #ffffff;
  cursor: pointer;
`;

const XenonWorldContainerRight = styled.div``;

const XenonWorldBlimish = styled.img`
  position: absolute;
  top: 40rem;
  right: 0rem;
  z-index: -1;
  width: 50rem;
`;

const XenonWorldPlace = styled.img``;

const XenonWorldArrow = styled.img`
  margin-left: 5px;
`;

const XenonWorldArrow1 = styled.img`
  margin-left: 5px;
`;

export default function XenonWorld() {
  return (
    <XenonWorldContainer>
      <XenonWorldContainerLeft>
        <XenonWorldHeader>Explore the new world of Xenon</XenonWorldHeader>
        <XenonWorldPara>
          Liquidity providers can deposit LP tokens into a lending pool and
          borrow against them to receive assets of the same type of LP pair,
          this allows for LP's to leverage yield farm. Lenders can lend out
          their tokens to any lending pool and receive high interest rates and
          experience no impermanent loss.
        </XenonWorldPara>
        <XenonWorldButtons>
          <XenonWorldButton1>
            Learn <XenonWorldArrow src={arrow} alt="arrow right" />
          </XenonWorldButton1>
          <XenonWorldButton2>
            Explore Tokens <XenonWorldArrow1 src={arrow} alt="arrow right" />
          </XenonWorldButton2>
        </XenonWorldButtons>
      </XenonWorldContainerLeft>
      <XenonWorldContainerRight>
        <XenonWorldBlimish src={blimish} alt="blue blimish" />
        <XenonWorldPlace src={xenon} alt="place" />
      </XenonWorldContainerRight>
    </XenonWorldContainer>
  );
}

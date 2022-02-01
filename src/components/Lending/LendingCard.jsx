import styled from "styled-components";

const LendingCardContainer = styled.div`
  width: 30rem;
  background: #161a2e;
  border-radius: 26px;
  width: 372px;
  height: 202px;
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

export default function LendingCard({ num, text }) {
  return (
    <LendingCardContainer>
      <LendingCardNumberWrapper>
        <LendingCardNumber> {num} </LendingCardNumber>
      </LendingCardNumberWrapper>
      <LendingCardText> {text} </LendingCardText>
    </LendingCardContainer>
  );
}

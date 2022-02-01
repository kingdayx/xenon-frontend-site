import styled from "styled-components";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowRight } from "@fortawesome/free-brands-svg-icons";

const CommunityContainer = styled.div``;

const CommunityHeader = styled.h1`
  font-family: Colette;
  font-style: normal;
  font-weight: bold;
  font-size: 62px;
  line-height: 80px;
  text-align: center;

  color: white;
`;

export default function Community() {
  return (
    <CommunityContainer>
      <CommunityHeader>Meet our worldwide community</CommunityHeader>
    </CommunityContainer>
  );
}

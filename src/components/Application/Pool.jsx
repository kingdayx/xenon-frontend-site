import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const PoolContainer = styled.div``;

const PoolText = styled.h1`
  color: white;
`;

export default function Pool() {
  const id = useParams();
  return (
    <PoolContainer>
      <PoolText> this is Pool {id} </PoolText>
    </PoolContainer>
  );
}

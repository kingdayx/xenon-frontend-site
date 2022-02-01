import React from "react";
import styled from "styled-components";
import pancakeswap from "../../assets/images/bunny.jpeg";
import { Link } from "react-router-dom";

const PoolsContainer = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #161a2e;
  border-radius: 26px;
  width: 23%;
  margin-top: 3rem;
  padding: 3rem;
  cursor: pointer;
`;

const PoolsTopImage = styled.image`
  position: absolute;
  width: 5rem;
  height: 5rem;
  background: black;
`;

const PoolsTopHeader = styled.p`
  font-family: Colette;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 13px;
  /* identical to box height, or 100% */

  text-align: center;

  color: #ffffff;
`;

const PoolsTokenName = styled.h2`
  font-family: Colette;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 23px;
  text-align: center;

  color: #ffffff;
`;

const PoolsToken1Image = styled.image``;

const PoolsToken2Image = styled.image``;

const PoolsTokenData = styled.div`
  display: flex;
  flex-direction: column;
`;

const PoolsTokenDataRow1 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const PoolsTokenDataName = styled.p`
  font-family: Colette;
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 32px;
  /* identical to box height, or 320% */

  text-align: center;

  color: rgba(255, 255, 255, 0.8);
`;

const PoolsTokenDataInfo = styled.p`
  font-family: Colette;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 32px;
  /* identical to box height, or 246% */

  text-align: center;

  color: rgba(255, 255, 255, 0.8);
`;

const PoolsTokenDataInfo1 = styled.p`
  font-family: Colette;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 23px;
  text-align: center;

  color: #ffffff;
`;

export default function Pools({
  tokenImage1,
  tokenImage2,
  tokenTag1,
  tokenTag2,
  tokenName1,
  tokenName2,
  page,
}) {
  return (
    <PoolsContainer to={page}>
      {/* <PoolsTopImage src={pancakeswap} alt="image" /> */}
      <PoolsTopHeader>Pancakeswap</PoolsTopHeader>
      <PoolsTokenName>
        {tokenTag1}/{tokenTag2}
      </PoolsTokenName>
      <PoolsToken1Image src={tokenImage1} alt="token image pair" />
      <PoolsToken2Image src={tokenImage2} alt="token image pair" />
      <PoolsTokenData>
        <PoolsTokenDataRow1>
          <PoolsTokenDataName> {tokenName1} </PoolsTokenDataName>
          <PoolsTokenDataName> {tokenName2} </PoolsTokenDataName>
        </PoolsTokenDataRow1>
        <PoolsTokenDataRow1>
          <PoolsTokenDataInfo1> $1.1M </PoolsTokenDataInfo1>
          <PoolsTokenDataInfo> Total Supply </PoolsTokenDataInfo>
          <PoolsTokenDataInfo1> $993K</PoolsTokenDataInfo1>
        </PoolsTokenDataRow1>
        <PoolsTokenDataRow1>
          <PoolsTokenDataInfo1> $675K </PoolsTokenDataInfo1>
          <PoolsTokenDataInfo> Total Borrowed </PoolsTokenDataInfo>
          <PoolsTokenDataInfo1> $616K </PoolsTokenDataInfo1>
        </PoolsTokenDataRow1>
        <PoolsTokenDataRow1>
          <PoolsTokenDataInfo1> 62.58% </PoolsTokenDataInfo1>
          <PoolsTokenDataInfo> Utilization </PoolsTokenDataInfo>
          <PoolsTokenDataInfo1> 62.04% </PoolsTokenDataInfo1>
        </PoolsTokenDataRow1>
        <PoolsTokenDataRow1>
          <PoolsTokenDataInfo1> 9.03% </PoolsTokenDataInfo1>
          <PoolsTokenDataInfo> Supply APR </PoolsTokenDataInfo>
          <PoolsTokenDataInfo1> 12.43% </PoolsTokenDataInfo1>
        </PoolsTokenDataRow1>
        <PoolsTokenDataRow1>
          <PoolsTokenDataInfo1> 16.03% </PoolsTokenDataInfo1>
          <PoolsTokenDataInfo> Borrow APR </PoolsTokenDataInfo>
          <PoolsTokenDataInfo1> 22.27% </PoolsTokenDataInfo1>
        </PoolsTokenDataRow1>
        <PoolsTokenDataRow1>
          <PoolsTokenDataInfo1> 103% </PoolsTokenDataInfo1>
          <PoolsTokenDataInfo> Farming APR </PoolsTokenDataInfo>
          <PoolsTokenDataInfo1> 113% </PoolsTokenDataInfo1>
        </PoolsTokenDataRow1>
      </PoolsTokenData>
    </PoolsContainer>
  );
}

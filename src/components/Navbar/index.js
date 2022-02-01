import React, { useState, useEffect } from "react";
import styled from "styled-components";
import xenon from "../../assets/svgs/Xenon.svg";
import { Link, useLocation } from "react-router-dom";
import search from "../../assets/images/search.png";

const NavbarContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: #040610;
  padding-top: 1rem;
`;

const NavbarMiddle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
  left: 4.5rem;
  @media (max-width: 460px) {
    display: none;
  }
`;

// const NavbarLeft = styled.div`
//   display: flex;
//   justify-content: center;
//   position: relative;
//   right: 1px;
//   float: right;
// `;

const NavbarLogo = styled.img`
  display: flex;
  position: absolute;
  top: 1rem;
  left: 5rem;
  cursor: pointer;
  @media (max-width: 460px) {
    display: none;
  }
`;

const NavLink = styled.div`
  font-family: Colette;
  font-style: bold;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: white;
  margin: 0 2em 0 2em;
  cursor: pointer;
`;

const NavLaunch = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  left: 20em;
  float: right;
  background-color: white;
  padding: 1em 3em 1em 3em;
  border-radius: 16px;
  cursor: pointer;
  color: #1a1a1a;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 22px;
  @media (max-width: 460px) {
    left: 0;
    right: 10rem;
  }
`;

const NavInput = styled.input`
  background: transparent;
  outline: none;
  font-family: Colette;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 26px;
  /* identical to box height, or 144% */

  color: rgba(255, 255, 255, 0.8);
`;

const NavSearch = styled.svg`
  position: relative;
  top: 5px;
  right: 5px;
  color: rgba(255, 255, 255, 0.8);
`;

const NavSearchBar = styled.div`
  position: relative;
  right: 10rem;
  border: 1px solid white;
  width: 20rem;
  padding: 0.5rem;
  border-radius: 0.5rem;
`;

export default function Navbar() {
  const location = useLocation();

  const page = location.pathname === "/*";

  return (
    <NavbarContainer>
      <Link to="/">
        <NavbarLogo src={xenon} alt="logo" />
      </Link>
      {page ? (
        <NavSearchBar>
          <NavSearch
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M22 22L20 20"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </NavSearch>
          <NavInput placeholder="Search Pools" />
        </NavSearchBar>
      ) : (
        <NavbarMiddle>
          <NavLink> About </NavLink>
          <NavLink> Team </NavLink>
          <NavLink> Contributors </NavLink>
        </NavbarMiddle>
      )}

      {page ? (
        <NavLaunch>Connect</NavLaunch>
      ) : (
        <Link to="/*">
          <NavLaunch>Launch App</NavLaunch>
        </Link>
      )}
    </NavbarContainer>
  );
}

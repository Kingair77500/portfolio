import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { rem } from "polished";
import Hamburger from "./Header/Hamburger";
import ElementHeader from "./Header/ElementHeader";
import { HEADER_ITEMS } from "./utils/utils";

type PropsHeaderComponent = {
  navBar: boolean;
};

const HeaderComponent = styled.header`
  display: flex;
  position: fixed;
  height: 100%;
  width: 100%;
  background-color: #263238;
  height: ${(props: PropsHeaderComponent) => (props.navBar ? "100%" : rem(48))};
  transition: background 0.36s cubic-bezier(0.32, 0.08, 0.24, 1),
    height 0.56s cubic-bezier(0.52, 0.16, 0.24, 1);
`;

const NavBar = styled.ul`
  flex: 1;
  display: flex;
  justify-content: space-between;
  margin: 0 ${rem(40)};
  padding: 0;

  @media (max-width: 500px) {
    position: absolute;
    margin: 0;
    width: 100%;
    top: ${rem(48)};
    z-index: 3;
    flex-direction: column;
    border-top: ${(props: PropsHeaderComponent) =>
      props.navBar ? "0.5px solid #9da6a9" : "none"};
    visibility: ${(props: PropsHeaderComponent) =>
      props.navBar ? "visible" : " hidden"};
    transition: visibility 0s linear 1s;
    transition-delay: 0s;
  }
`;

const Header: React.FC = () => {
  //  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isOpenNav, setIsOpenNav] = useState(false);

  /*  useEffect(() => {
    const resize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", resize);
  }, []);*/

  return (
    <HeaderComponent navBar={isOpenNav}>
      <Hamburger isOpenNav={isOpenNav} setIsOpenNav={setIsOpenNav} />
      <NavBar navBar={isOpenNav}>
        {HEADER_ITEMS.map((item: string, index: number) => {
          return (
            <ElementHeader
              item={item}
              index={index}
              isOpenNav={isOpenNav}
              setIsOpenNav={setIsOpenNav}
            />
          );
        })}
      </NavBar>
    </HeaderComponent>
  );
};

export default Header;

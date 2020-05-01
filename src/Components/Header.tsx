import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { rem } from "polished";

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

const ElementUl = styled.li`
  color: white;
  align-self: center;
  text-decoration: none;
  list-style-type: none;

  @media (max-width: 500px) {
    height: ${rem(50)};
    align-self: normal;
    transition: opacity 0.3091s cubic-bezier(0.32, 0.08, 0.24, 1) 0.03s,
      transform 0.3455s cubic-bezier(0.32, 0.08, 0.24, 1) 0.02s,
      -webkit-transform 0.3455s cubic-bezier(0.32, 0.08, 0.24, 1) 0.02s;
    opacity: ${(props: PropsHeaderComponent) => (props.navBar ? 1 : 0)};
    transform: ${(props: PropsHeaderComponent) =>
      props.navBar ? "none" : "translateY(-5px)"};
    padding: 0 ${rem(30)};
  }
`;

const IconeMenu = styled.label`
  display: block;
  position: absolute;
  opacity: 0.8;
  z-index: 3;
  top: 0;
  width: ${rem(48)};
  height: ${rem(48)};
  cursor: pointer;

  visibility: ${(props: PropsHeaderComponent) =>
    props.navBar ? "visible" : " hidden"};
`;

const Square = styled.span`
  position: absolute;
  z-index: 3;
  top: 9px;
  left: 9px;
  width: 30px;
  height: 30px;
  visibility: hidden;

  @media (max-width: 500px) {
    visibility: visible;
  }
`;

const BarOne = styled.span`
  display: block;
  width: 17px;
  height: 1px;
  background: #fff;
  border-radius: 0.5px;
  position: absolute;
  top: ${(props: PropsHeaderComponent) => (props.navBar ? "14px" : "12px")};
  left: 7px;
  z-index: 1;
  transform: ${(props: PropsHeaderComponent) =>
    props.navBar ? "rotate(45deg)" : "rotate(0)"};
`;

const BarTwo = styled(BarOne)`
  top: ${(props: PropsHeaderComponent) => (props.navBar ? "14px" : "16px")};
  transform: ${(props: PropsHeaderComponent) =>
    props.navBar ? "rotate(-45deg)" : "rotate(0)"};
`;

type Link = {
  borderBooleen: boolean;
};

const Link = styled.a`
  display: flex;

  @media (max-width: 500px) {
    width: 100%;
    height: 100%;
    border-top: ${(props: Link) =>
      props.borderBooleen ? "0.5px solid #9da6a9" : "none"};
  }
`;

const TextNav = styled.span`
  align-self: center;
`;

const Header: React.FC = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isOpenNav, setIsOpenNav] = useState(false);

  useEffect(() => {
    const resize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", resize);
  }, []);

  const openNav = (evt: any) => {
    evt.preventDefault();
    setIsOpenNav(!isOpenNav);
  };

  console.log(windowWidth);
  return (
    <HeaderComponent navBar={isOpenNav}>
      <IconeMenu navBar={isOpenNav} onClick={openNav}>
        <Square>
          <BarOne navBar={isOpenNav}></BarOne>
          <BarTwo navBar={isOpenNav}></BarTwo>
        </Square>
      </IconeMenu>
      <NavBar navBar={isOpenNav}>
        <ElementUl navBar={isOpenNav}>
          <Link borderBooleen={false}>
            <TextNav>Qui je suis?</TextNav>
          </Link>
        </ElementUl>
        <ElementUl navBar={isOpenNav}>
          <Link borderBooleen={true}>
            <TextNav>Compétences</TextNav>
          </Link>
        </ElementUl>
        <ElementUl navBar={isOpenNav}>
          <Link borderBooleen={true}>
            <TextNav>Expériences</TextNav>
          </Link>
        </ElementUl>
        <ElementUl navBar={isOpenNav}>
          <Link borderBooleen={true}>
            <TextNav>Projets</TextNav>
          </Link>
        </ElementUl>
        <ElementUl navBar={isOpenNav}>
          <Link borderBooleen={true}>
            <TextNav>Contact</TextNav>
          </Link>
        </ElementUl>
      </NavBar>
    </HeaderComponent>
  );
};

export default Header;

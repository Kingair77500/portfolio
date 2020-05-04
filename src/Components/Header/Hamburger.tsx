import React from "react";
import styled from "styled-components";
import { rem } from "polished";

type PropsHamburger = {
  isOpenNav: boolean;
  setIsOpenNav: React.Dispatch<React.SetStateAction<boolean>>;
};

type PropsIconeBurger = {
  navBarStyle: boolean;
};

const IconeMenu = styled.label`
  display: block;
  position: absolute;
  opacity: 0.8;
  z-index: 3;
  top: 0;
  width: ${rem(48)};
  height: ${rem(48)};
  cursor: pointer;

  visibility: ${(props: PropsIconeBurger) =>
    props.navBarStyle ? "visible" : " hidden"};
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
  top: ${(props: PropsIconeBurger) => (props.navBarStyle ? "14px" : "12px")};
  left: 7px;
  z-index: 1;
  transform: ${(props: PropsIconeBurger) =>
    props.navBarStyle ? "rotate(45deg)" : "rotate(0)"};
`;

const BarTwo = styled(BarOne)`
  top: ${(props: PropsIconeBurger) => (props.navBarStyle ? "14px" : "16px")};
  transform: ${(props: PropsIconeBurger) =>
    props.navBarStyle ? "rotate(-45deg)" : "rotate(0)"};
`;

const Hamburger: React.FC<PropsHamburger> = ({ isOpenNav, setIsOpenNav }) => {
  const openNav = (evt: any) => {
    evt.preventDefault();
    setIsOpenNav(!isOpenNav);
  };

  return (
    <IconeMenu navBarStyle={isOpenNav} onClick={openNav}>
      <Square>
        <BarOne navBarStyle={isOpenNav}></BarOne>
        <BarTwo navBarStyle={isOpenNav}></BarTwo>
      </Square>
    </IconeMenu>
  );
};

export default Hamburger;

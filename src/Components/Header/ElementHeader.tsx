import React from "react";
import styled from "styled-components";
import { rem } from "polished";
import { Link } from "react-scroll";

type PropsElementHeader = {
  item: string;
  index: number;
  isOpenNav: boolean;
  setIsOpenNav: React.Dispatch<React.SetStateAction<boolean>>;
};

type PropsHeaderComponent = {
  navBar: boolean;
};

const ElementUl = styled.li`
  display: flex;
  height: 100%;
  color: white;
  align-self: center;
  text-decoration: none;
  list-style-type: none;
  cursor: pointer;

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

type PropsLink = {
  borderBooleen: boolean;
};

const LinkPers = styled(Link)`
  display: flex;

  @media (max-width: 500px) {
    width: 100%;
    height: 100%;
    border-top: ${(props: PropsLink) =>
      props.borderBooleen ? "0.5px solid #9da6a9" : "none"};
  }
`;

const TextNav = styled.span`
  align-self: center;
`;

const ElementHeader: React.FC<PropsElementHeader> = ({
  item,
  index,
  isOpenNav,
  setIsOpenNav
}) => {
  return (
    <ElementUl navBar={isOpenNav}>
      <LinkPers
        borderBooleen={index === 0 ? false : true}
        onClick={() => setIsOpenNav(false)}
        activeClass="active"
        to={item}
        spy={true}
        smooth={true}
        offset={-70}
        duration={400}
      >
        <TextNav>{item}</TextNav>
      </LinkPers>
    </ElementUl>
  );
};

export default ElementHeader;

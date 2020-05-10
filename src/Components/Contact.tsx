import React from "react";
import { rem } from "polished";
import styled from "styled-components";
import { ReactComponent as GithubSVG } from "../Images/Github.svg";
import { ReactComponent as LinkedinSVG } from "../Images/Linkedin.svg";
import { Link } from "react-scroll";
import { HEADER_ITEMS } from "./utils/utils";

const ContactContainer = styled.footer`
  padding: ${rem(40)} ${rem(40)};
  background-color: #f5f5f5;

  @media (max-width: 500px) {
    padding: ${rem(40)} ${rem(10)};
  }
`;

const ContactGeneral = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-top: 1px solid #e0e0e0;
  padding-top: ${rem(20)};

  @media (max-width: 500px) {
    flex-wrap: wrap;
  }
`;

const FooterNav = styled.div`
  @media (max-width: 500px) {
    width: 30%;
  }
`;

const ContactDirect = styled.p`
  display: flex;
  flex-direction: column;
`;

const ContactInfo = styled.span`
  margin-top: ${rem(10)};
  padding-left: ${rem(10)};
`;

const ContactSocial = styled.div`
  align-self: flex-end;

  @media (max-width: 500px) {
    margin-top: ${rem(15)};
  }
`;

const Linkedin = styled(LinkedinSVG)`
  margin-right: ${rem(10)};
`;

const LinkContainer = styled.p`
  cursor: pointer;
`;

type PropsNavFooter = {
  item: string;
  index: number;
};

const NavFooter: React.FC<PropsNavFooter> = ({ item, index }) => {
  return (
    <LinkContainer>
      <Link
        activeClass="active"
        to={item}
        spy={true}
        smooth={true}
        offset={-70}
        duration={400}
      >
        {item}
      </Link>
    </LinkContainer>
  );
};

const Contact = () => {
  return (
    <ContactContainer id="Contact">
      <ContactGeneral>
        <FooterNav>
          {HEADER_ITEMS.map((item, index) => {
            return <NavFooter item={item} index={index} />;
          })}
        </FooterNav>
        <div>
          <ContactDirect>
            <span>Email:</span>
            <ContactInfo>nicolas.dubois.pro@laposte.net</ContactInfo>
          </ContactDirect>
          <ContactDirect>
            <span>Numéro:</span>
            <ContactInfo>0763204089</ContactInfo>
          </ContactDirect>
        </div>
        <ContactSocial>
          <a href="https://www.linkedin.com/in/nicolas-dubois-82b6a411a/">
            <Linkedin />
          </a>
          <a href="https://github.com/Kingair77500">
            <GithubSVG />
          </a>
        </ContactSocial>
      </ContactGeneral>
    </ContactContainer>
  );
};

export default Contact;

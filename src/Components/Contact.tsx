import React from "react";
import { rem } from "polished";
import styled from "styled-components";
import { ReactComponent as GithubSVG } from "../Images/Github.svg";
import { ReactComponent as LinkedinSVG } from "../Images/Linkedin.svg";

const ContactContainer = styled.footer`
  padding: ${rem(40)} ${rem(40)};
  background-color: #f5f5f5;
`;

const ContactGeneral = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-top: 1px solid black;
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
`;

const Linkedin = styled(LinkedinSVG)`
    margin-right: ${rem(10)};
`;

const Contact = () => {
  return (
    <ContactContainer>
      <ContactGeneral>
        <div>
            <p>Qui je suis?</p>
            <p>Compétences</p>
            <p>Expériences</p>
            <p>Projets</p>
        </div>
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
            <Linkedin />
            <GithubSVG />
        </ContactSocial>
      </ContactGeneral>
    </ContactContainer>
  );
};

export default Contact;

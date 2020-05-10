import React from "react";
import { rem } from "polished";
import styled from "styled-components";

const ExperienceComponent = styled.div`
  margin: ${rem(100)} 0 ${rem(20)} 0;
`;

const ExperienceASII = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 500px) {
    padding: 0;
    margin-left: ${rem(10)};
  }
`;

const TitleExperience = styled.h1`
  align-self: center;
  font-family: "Lobster";
`;

const SocietyComponent = styled.div`
  margin-left: ${rem(40)};
  margin-right: ${rem(40)};
  @media (max-width: 500px) {
    padding: 0;
    margin: 0;
  }
`;

const Society = styled.h2`
  font-family: "Baloo Paaji 2";
  font-size: ${rem(30)};
`;

const PosteTitle = styled.h3`
  font-family: "Baloo Paaji 2";
  font-size: ${rem(20)};
`;

const PosteExplication = styled.p`
  font-size: ${rem(18)};
`;

const Experience = () => {
  return (
    <ExperienceComponent id="Expériences">
      <ExperienceASII>
        <TitleExperience>Expériences :</TitleExperience>
        <SocietyComponent>
          <Society>ASII TELECOM: </Society>
          <PosteTitle>
            Développeur d’application: <br />
            (2018-2020)
          </PosteTitle>
          <PosteExplication>
            Réalisation d’une solution téléphonique VOIP (gestion du parc
            téléphonique), une Web App et d'un softphone.
          </PosteExplication>
          <PosteExplication>
            Une équipe constituée de 3 personnes.
          </PosteExplication>
        </SocietyComponent>
      </ExperienceASII>
    </ExperienceComponent>
  );
};

export default Experience;

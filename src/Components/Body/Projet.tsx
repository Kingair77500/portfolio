import React from "react";
import { rem } from "polished";
import styled from "styled-components";
import SkillProjet from "./SkillProjet/SkillProjet";

const ProjetComponent = styled.div`
  background: #f5f5f5;
`;

const ProjetContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 ${rem(40)};

  @media (max-width: 650px) {
    margin: 0;
  }
`;

const TitleComponent = styled.h1`
  align-self: center;
  font-family: "Lobster";
`;

const AllProjetComponent = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding-bottom: ${rem(20)};

  @media (max-width: 650px) {
    flex-direction: column;
  }
`;

const ProjetElement = styled.div`
  display: flex;
  flex-direction: column;
  width: 49%;
  background: white;
  padding-bottom: ${rem(15)};

  &:nth-child(1) {
    margin-right: 1%;
  }

  &:nth-child(2) {
    margin-left: 1%;
  }

  &:nth-child(3) {
    margin-top: ${rem(20)};
    margin-right: 1%;
  }

  &:nth-child(4) {
    margin-top: ${rem(20)};
    margin-left: 1%;
  }

  @media (max-width: 650px) {
    width: inherit;
    margin-right: ${rem(0)};
    margin-left: ${rem(0)};

    &:nth-child(1) {
      margin-bottom: ${rem(15)};
      margin-right: ${rem(0)};
      padding-left: ${rem(10)};
    }

    &:nth-child(2) {
      margin-bottom: ${rem(15)};
      margin-left: ${rem(0)};
      padding-left: ${rem(10)};
    }

    &:nth-child(3) {
      margin-bottom: ${rem(15)};
      margin-top: ${rem(0)};
      margin-right: ${rem(0)};
      padding-left: ${rem(10)};
    }

    &:nth-child(4) {
      margin-top: ${rem(0)};
      margin-left: ${rem(0)};
      padding-left: ${rem(10)};
    }
  }
`;

const ElementComponent = styled.div`
  padding-right: ${rem(20)};
  padding-left: ${rem(20)};

  @media (max-width: 650px) {
    padding-right: ${rem(0)};
    padding-left: ${rem(0)};
  }
`;

const TitleNameProjet = styled.h2`
  font-family: "Baloo Paaji 2";
`;

const ObjectifOrSkill = styled.h3`
  font-family: "Baloo Paaji 2";
`;

const Projet = () => {
  return (
    <ProjetComponent id="Projets">
      <ProjetContainer>
        <TitleComponent>Projet :</TitleComponent>
        <AllProjetComponent>
          <ProjetElement>
            <ElementComponent>
              <TitleNameProjet>Console d'admin :</TitleNameProjet>
              <div>
                <ObjectifOrSkill>Objectif :</ObjectifOrSkill>
                <div>
                  <p>
                    Permettre de créer et de gérer toute les régles lier à la
                    téléphonie d'une entreprise.
                  </p>
                  <p>
                    Exemples des options: <br />
                    (Création d'un compte utilisateur pour connecter le
                    téléphone, gestion des régles entrante/sortante, ...).
                  </p>
                </div>
              </div>
              <SkillProjet front="ReactJs" back={null} server="Asterisk" />
            </ElementComponent>
          </ProjetElement>
          <ProjetElement>
            <ElementComponent>
              <TitleNameProjet>Web App :</TitleNameProjet>
              <div>
                <ObjectifOrSkill>Objectif :</ObjectifOrSkill>
                <div>
                  <p>
                    Permettre de passer des appels téléphoniques via le réseau
                    internet depuis une page internet de son ordinateur et de
                    gérer certains paramétre de l'utilisateur.
                  </p>
                </div>
              </div>
              <SkillProjet front="ReactJs" back="NodeJs" server="Asterisk" />
            </ElementComponent>
          </ProjetElement>
          <ProjetElement>
            <ElementComponent>
              <TitleNameProjet>Softphone :</TitleNameProjet>
              <div>
                <ObjectifOrSkill>Objectif :</ObjectifOrSkill>
                <div>
                  <p>
                    Permettre de passer des appels téléphoniques via le réseaux
                    internet et de gérer certains paramètres de l'utilisateur
                    sur les appareil Android et IOS.
                  </p>
                </div>
              </div>
              <SkillProjet front="ReactJs" back="NodeJs" server="Asterisk" />
            </ElementComponent>
          </ProjetElement>
          <ProjetElement>
            <ElementComponent>
              <TitleNameProjet>Site Web :</TitleNameProjet>
              <div>
                <ObjectifOrSkill>Objectif :</ObjectifOrSkill>
                <p>Site vitrine pour la société ASII TELECOM.</p>
              </div>
              <SkillProjet front="VueJs" back={null} server={null} />
            </ElementComponent>
          </ProjetElement>
        </AllProjetComponent>
      </ProjetContainer>
    </ProjetComponent>
  );
};

export default Projet;

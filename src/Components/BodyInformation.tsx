import React from "react";
import { rem } from "polished";
import styled from "styled-components";
import WhoIAm from "./Body/WhoIAm";
import Skill from "./Body/Skill";
import Experience from "./Body/Experience";
import Projet from "./Body/Projet";

const BodyComponent = styled.div`
  padding-top: ${rem(48)};
`;

const BodyInformation: React.FC = () => {
  return (
    <BodyComponent>
      <WhoIAm />
      <Skill />
      <Experience />
      <Projet />
    </BodyComponent>
  );
};

export default BodyInformation;

import React from "react";
import { rem } from "polished";
import styled from "styled-components";
import { ReactComponent as ReactJsSVG } from "./../../../Images/ReactJs.svg";
import { ReactComponent as VusJsSVG } from "./../../../Images/VueJs.svg";
import { ReactComponent as NodeJsSVG } from "./../../../Images/NodeJs.svg";
import AsteriskImage from "./../../../Images/Asterisk.png";

const ObjectifOrSkill = styled.h3`
  font-family: "Baloo Paaji 2";
`;

const SkillComponent = styled.div`
  display: flex;
  flex-direction: column;
`;

const SkillName = styled.span`
  align-self: center;
`;

const Asterisk = styled.img`
  align-self: center;
`;

const ReactJs = styled(ReactJsSVG)`
  align-self: center;
`;

const VueJs = styled(VusJsSVG)`
  align-self: center;
`;

const NodeJS = styled(NodeJsSVG)`
  align-self: center;
`;

type PropsStyleSvgComponent = {
  marginLeft: number;
  marginTop: number;
};

const SvgComponent = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: ${(props: PropsStyleSvgComponent) =>
    props.marginLeft ? rem(props.marginLeft) : rem(0)};
  margin-top: ${(props: PropsStyleSvgComponent) =>
    props.marginTop ? rem(props.marginTop) : rem(0)};
`;

const SkillConternaire = styled.div`
  display: flex;
  flex-direction: row;
`;

const SkillDomain = styled.p`
  align-self: center;
`;

type PropsFrontEndSkill = {
  front: string | null;
};

const FrontEndSkill: React.FC<PropsFrontEndSkill> = ({ front }) => {
  return (
    <SkillConternaire>
      <SkillDomain>Front-End:</SkillDomain>
      <SvgComponent marginLeft={35} marginTop={0}>
        {front === "ReactJs" ? <ReactJs width={50} /> : <VueJs width={50} />}
        <SkillName>{front}</SkillName>
      </SvgComponent>
    </SkillConternaire>
  );
};

type PropsBackSkill = {
  back: string | null;
};

const BackEndSkill: React.FC<PropsBackSkill> = ({ back }) => {
  return (
    <SkillConternaire>
      <SkillDomain>Back-End:</SkillDomain>
      <SvgComponent marginLeft={40} marginTop={10}>
        <NodeJS width={50} />
        <SkillName>{back}</SkillName>
      </SvgComponent>
    </SkillConternaire>
  );
};

type PropsServerSkill = {
  server: string | null;
};

const ServerSkill: React.FC<PropsServerSkill> = ({ server }) => {
  return (
    <SkillConternaire>
      <SkillDomain>Serveur:</SkillDomain>
      <SvgComponent marginLeft={50} marginTop={10}>
        <Asterisk width={50} height={50} src={AsteriskImage} alt="logo" />
        <SkillName>{server}</SkillName>
      </SvgComponent>
    </SkillConternaire>
  );
};

type PropsSkill = {
  front: string | null;
  back: string | null;
  server: string | null;
};

const SkillProjet: React.FC<PropsSkill> = ({ front, back, server }) => {
  return (
    <div>
      <ObjectifOrSkill>Compétence obtenue :</ObjectifOrSkill>
      <SkillComponent>
        <FrontEndSkill front={front} />
        {back !== null ? <BackEndSkill back={back} /> : null}
        {server !== null ? <ServerSkill server={server} /> : null}
      </SkillComponent>
    </div>
  );
};

export default SkillProjet;

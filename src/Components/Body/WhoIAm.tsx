import React, { useState, useEffect } from "react";
import { rem } from "polished";
import styled from "styled-components";
import PcDeco from "./../../Images/pcDeco.jpg";
import SVGPolygone from "./SVGComponent/SvgPolygone";

const WhoIAmContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height: ${rem(450)};

  @media (max-width: 900px) {
    flex-direction: column;
    height: inherit;
  }
`;

const Test1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  align-items: center;

  @media (max-width: 900px) {
    width: 100%;
  }
`;

const WhoIAmTitle = styled.h1`
  font-family: "Lobster";
`;

const DescribeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  &:nth-child(1) {
    margin-bottom: ${rem(20)};
  }
`;

const DescribeParagraphe = styled.p`
  margin: 0;
  font-weight: 500;
`;

const ImportantInfo = styled.span`
  color: #546e7a;
  font-weight: 700;
  font-size: ${rem(25)};
  font-family: "Baloo Paaji 2";
`;

const Test2 = styled.div`
  width: 50%;
  height: 100%;

  @media (max-width: 900px) {
    width: 100%;
    heigth: 70%;
  }
`;

const Background = styled.img`
  width: 100%;
  height: 100%;
`;

const WhoIAm: React.FC = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const resize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", resize);
  }, []);

  return (
    <WhoIAmContainer id="Qui je suis?">
      <Test1>
        <WhoIAmTitle>Qui je suis ?</WhoIAmTitle>
        <div>
          <DescribeContainer>
            <DescribeParagraphe>Je m'appelle</DescribeParagraphe>
            <DescribeParagraphe>
              <ImportantInfo>Nicolas Dubois</ImportantInfo>
            </DescribeParagraphe>
          </DescribeContainer>
          <DescribeContainer>
            <DescribeParagraphe>
              Je suis un développeur passionné
            </DescribeParagraphe>
            <DescribeParagraphe>
              orienté <ImportantInfo>Front-End</ImportantInfo>
            </DescribeParagraphe>
          </DescribeContainer>
        </div>
      </Test1>
      <Test2>
        <SVGPolygone
          orientation="top"
          visibility={windowWidth <= 900 ? true : false}
          color="white"
        />
        <Background src={PcDeco} />
      </Test2>
      <SVGPolygone orientation="bottom" visibility={true} color="#f5f5f5" />
    </WhoIAmContainer>
  );
};

export default WhoIAm;

import React, { useState, useEffect, useRef } from "react";
import { rem } from "polished";
import styled from "styled-components";
import { MY_SKILL } from "../utils/utils";
import SVGPolygone from "./SVGComponent/SvgPolygone";

const SkillComponent = styled.div`
  display: flex;
  flex-direction: column;
  background: #f5f5f5;
`;

const ListSkill = styled.ul`
  text-decoration: none;
  list-style-type: none;
  width: fit-content;
  margin-bottom: ${rem(20)};

  @media (max-width: 500px) {
    padding: 0;
    margin: auto auto ${rem(25)} auto;
  }
`;

const TitleSkill = styled.h1`
  align-self: center;
  font-family: "Lobster";
`;

const SkillBar = styled.div`
  height: ${rem(30)};
  min-width: ${rem(200)};
  max-width: ${rem(300)};

  @media (max-width: 400px) {
    min-width: ${rem(100)};
    max-width: ${rem(150)};
  }

  @media (max-width: 500px) {
    min-width: ${rem(150)};
    max-width: ${rem(200)};
  }
`;

type LiContainer = {
  childrenComponent: number;
};

const LiContainer = styled.li`
  display: flex;
  width: 100%;
  height: ${rem(30)};
  background-color: #bbdefb;
  margin-top: ${rem(15)};
`;

const NameSkill = styled.div`
  align-self: center;
  margin-left: ${rem(10)};
  margin-right: ${rem(10)};
  width: ${rem(100)};
  text-align: center;

  @media (max-width: 400px) {
    margin-left: ${rem(5)};
    margin-right: ${rem(5)};
    width: ${rem(80)};
  }

  @media (max-width: 500px) {
    margin-left: ${rem(10)};
    margin-right: ${rem(10)};
    width: ${rem(100)};
  }
`;

type LevelSkill = {
  level: string;
};

const LevelSkill = styled.div`
  -webkit-transition: width 3s ease-in-out;
  -moz-transition: width 3s ease-in-out;
  -o-transition: width 3s ease-in-out;
  transition: width 2s ease-in-out;
  border-radius: ${rem(5)};
  height: ${rem(30)};
  border-radius: ${rem(0)} ${rem(10)} ${rem(10)} ${rem(0)};
  background-color: #6ab7ff;
  width: ${(props: LevelSkill) => props.level};
`;

const NumberLevel = styled.div`
  display: flex;
  align-self: center;
  width: ${rem(50)};
  height: ${rem(30)};
  padding-left: ${rem(10)};
  padding-right: ${rem(10)};
  text-align: center;
  background-color: #e0e0e0;
  justify-content: center;
  align-items: center;

  @media (max-width: 500px) {
    padding-left: ${rem(10)};
    padding-right: ${rem(10)};
    width: ${rem(50)};
  }

  @media (max-width: 400px) {
    padding-left: ${rem(5)};
    padding-right: ${rem(5)};
    width: ${rem(40)};
  }
`;

const Skill = () => {
  const [SkillData, setSkillData] = useState(MY_SKILL);

  useEffect(() => {
    setSkillData(prevItems =>
      prevItems.map((element, index) => {
        if (element.name === "React Js") {
          return { name: element.name, width: "75%" };
        } else if (element.name === "Javascript") {
          return { name: element.name, width: "85%" };
        } else if (element.name === "React-Native") {
          return { name: element.name, width: "65%" };
        } else if (element.name === "VueJS") {
          return { name: element.name, width: "50%" };
        } else if (element.name === "HTML") {
          return { name: element.name, width: "85%" };
        } else {
          return { name: element.name, width: "85%" };
        }
      })
    );
  }, []);

  const useInterval = (callback: any, delay: any) => {
    const savedCallback: any = useRef();
    useEffect(() => {
      savedCallback.current = callback;
    });

    useEffect(() => {
      function tick() {
        if (typeof savedCallback !== "undefined") {
          savedCallback.current();
        }
      }
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  };

  const CountTime = (width: any) => {
    const [count, setCount] = useState(0);

    useInterval(() => {
      if (count + "%" !== width.width) setCount(count + 1);
    }, 20);

    return <>{count + "%"}</>;
  };

  return (
    <SkillComponent id="Compétences">
      <TitleSkill>Compétences :</TitleSkill>
      <ListSkill>
        {SkillData.map((item, index) => {
          return (
            <LiContainer key={item.name}>
              <NameSkill>{item.name}</NameSkill>
              <SkillBar>
                <LevelSkill level={item.width}></LevelSkill>
              </SkillBar>
              <NumberLevel>
                <CountTime width={item.width} />
              </NumberLevel>
            </LiContainer>
          );
        })}
      </ListSkill>
      <SVGPolygone orientation="top" visibility={true} color="#f5f5f5" />
    </SkillComponent>
  );
};

export default Skill;

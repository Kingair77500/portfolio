import React from "react";
import styled from "styled-components";

type PropsSVG = {
  orientation: string;
  visibility: boolean;
  color: string;
};

type PropsSVGContainer = {
  visibility: boolean;
};

const SVGContainer = styled.div`
  position: relative;
  width: 100%;
  visibility: ${(props: PropsSVGContainer) =>
    props.visibility ? "visible" : "hidden"};
`;

type PropsSVGPolygon = {
  orientation: string;
};

const SVGPolygon = styled.svg`
  position: absolute;
  bottom: ${(props: PropsSVGPolygon) =>
    props.orientation === "bottom" ? "100%" : "inherit"};
  top: ${(props: PropsSVGPolygon) =>
    props.orientation === "top" ? "100%" : "inherit"};
  width: "100%";
`;

const SVGPolygone: React.FC<PropsSVG> = ({
  orientation,
  visibility,
  color
}) => {
  return (
    <SVGContainer visibility={visibility}>
      <SVGPolygon
        orientation={orientation}
        fill={color}
        viewBox="0 0 200 30"
        preserveAspectRatio="none"
      >
        <polygon
          points={
            orientation === "bottom"
              ? "200 30, 0 30, 200 0"
              : "200 0, 0 30, 0 0"
          }
        ></polygon>
      </SVGPolygon>
    </SVGContainer>
  );
};

export default SVGPolygone;

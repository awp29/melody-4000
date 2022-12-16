/** @jsxImportSource @emotion/react */

import { NoteType, ScaleDegree } from "../../../types";

const RADIUS = 15;

const FILL_MAP = {
  [NoteType.inChord]: "#79B473",
  [NoteType.inKey]: "#586BA4",
  [NoteType.outsideKey]: "red",
};

interface Props {
  x: number;
  y: number;
  name: string;
  type: NoteType;
  degree: ScaleDegree;
}

const Note: React.FC<Props> = (props) => {
  const { x, y, name, type, degree } = props;
  const root = degree === "i";

  return (
    <g transform={`translate(${x} ${y})`}>
      <circle
        x={x}
        y={x}
        r={RADIUS}
        fill={FILL_MAP[type]}
        stroke={root ? "#F76C5E" : "transparent"}
        strokeWidth="2"
      />

      <text
        css={{ fontWeight: "bold", fontSize: "14px" }}
        y={5}
        textAnchor="middle"
        fill="white"
      >
        {name}
        <tspan css={{ fontWeight: "normal", fontSize: "13px" }}>{degree}</tspan>
      </text>
    </g>
  );
};

export default Note;

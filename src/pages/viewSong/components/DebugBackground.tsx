/** @jsxImportSource @emotion/react */

import { NOTE_NODE_WIDTH } from "../constants";

interface Props {
  numberOfNotes: number;
}

const DebugBackground: React.FC<Props> = (props) => {
  const { numberOfNotes } = props;

  const renderDebugBackground = () => {
    const rects = [];

    for (let i = 0; i < numberOfNotes; i++) {
      const x = NOTE_NODE_WIDTH * i;
      const even = i % 2 === 0;
      const fill = even ? "#F8F8F8" : "	#E8E8E8";

      rects.push(
        <rect
          key={i}
          x={x}
          width={`${NOTE_NODE_WIDTH}px`}
          height="100%"
          fill={fill}
        />
      );
    }

    return rects;
  };

  return <g>{renderDebugBackground()}</g>;
};

export default DebugBackground;

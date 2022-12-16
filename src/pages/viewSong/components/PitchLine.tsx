/** @jsxImportSource @emotion/react */

import { NoteNode } from "../../../types";
import { getUniquePitches } from "../../../utils/calculatePitchMap";
import { NOTE_CONTAINER_HEIGHT, NOTE_NODE_WIDTH } from "../constants";

interface Props {
  notes: NoteNode[];
}

const PitchLine: React.FC<Props> = (props) => {
  const { notes } = props;

  const calculatePoints = () => {
    const uniquePitches = getUniquePitches(notes);
    const maxNumberOfUniqueNotes = uniquePitches.length;
    let points = "";

    for (let i = 0; i < notes.length; i++) {
      const note = notes[i];
      const notePosition = uniquePitches.indexOf(note.pitch);

      const x = NOTE_NODE_WIDTH * i + NOTE_NODE_WIDTH / 2;
      const y =
        NOTE_CONTAINER_HEIGHT -
        (NOTE_CONTAINER_HEIGHT / maxNumberOfUniqueNotes) * notePosition;

      points += `${x}, ${y} `;
    }

    return points;
  };

  return (
    <polyline
      points={calculatePoints()}
      fill="none"
      stroke="black"
      strokeWidth={2}
      shapeRendering="optimizeQuality"
    />
  );
};

export default PitchLine;

/** @jsxImportSource @emotion/react */

import { useLocation } from "react-router-dom";
import { Nav } from "../components/nav";
import { Song } from "../types";
import sunnyAfternoon from "../sunnyAfternoon";
import { uniq } from "lodash";
import { noteMap } from "../noteMap";

// TODO: DON'T LIKE NOTE NODE NAME
const NOTE_NODE_WIDTH = 80;
const NOTE_CONTAINER_HEIGHT = 200;

const ViewSong: React.FC = () => {
  const location = useLocation();
  // TODO: TYPE THIS CORRECTLY
  const song = sunnyAfternoon; //location.state.songToView as Song;

  const notes = [...song.sections[0].notes];
  const sortedNotes = notes.sort((a, b) => {
    console.log("a", noteMap[`${a.note.name}${a.note.number}`]);
    console.log("b", noteMap[`${a.note.name}${a.note.number}`]);
    return (
      noteMap[`${a.note.name}${a.note.number}`] -
      noteMap[`${b.note.name}${b.note.number}`]
    );
  });

  console.log("sortedNotes", sortedNotes);

  const sortedRealNotes = sortedNotes.map(
    (note) => `${note.note.name}${note.note.number}`
  );

  const uniqueNotes = uniq(sortedRealNotes);
  const numberOfUniqueNotes = uniqueNotes.length;

  const noteBlockSize = NOTE_CONTAINER_HEIGHT / numberOfUniqueNotes;

  let noteLinePath = "";
  for (let i = 0; i < song.sections[0].notes.length; i++) {
    const note = song.sections[0].notes[i];
    const notePosition = uniqueNotes.indexOf(
      `${note.note.name}${note.note.number}`
    );

    const y = NOTE_CONTAINER_HEIGHT - noteBlockSize * notePosition;
    const x = NOTE_NODE_WIDTH * i + NOTE_NODE_WIDTH / 2;

    noteLinePath += `${x}, ${y - 30} `;
  }

  console.log("noteLinePath", noteLinePath);

  return (
    <>
      <Nav css={{ justifyContent: "space-between", position: "fixed", top: 0 }}>
        <div>
          <h1 css={{ fontSize: "16px", fontWeight: "bold" }}>{song.name}</h1>
          <h2 css={{ fontSize: "12px", fontWeight: "bold" }}>{song.artist}</h2>
        </div>

        <div css={{ display: "flex", alignItems: "center" }}>
          <p css={{ marginRight: "20px" }}>Key {song.key.name}</p>

          <div css={{ display: "flex" }}>
            {song.key.notes.map((note, index) => {
              return (
                <div
                  key={`note-${index}`}
                  css={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <p
                    css={{
                      border: "1px solid black",
                      width: "24px",
                      height: "24px",
                      textAlign: "center",
                      fontSize: "14px",
                    }}
                  >
                    {numberToRomanNumeral(index)}
                  </p>
                  <p
                    css={{
                      border: "1px solid black",
                      width: "24px",
                      height: "24px",
                      textAlign: "center",
                      fontSize: "14px",
                      fontWeight: "bold",
                    }}
                  >
                    {note}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </Nav>

      <div css={{ marginTop: "120px", padding: "0px 20px" }}>
        <svg width="100%" height="300px">
          <polyline
            points={noteLinePath}
            fill="none"
            stroke="black"
            strokeWidth={4}
          />

          {song.sections[0].notes.map((note, index) => {
            const x = NOTE_NODE_WIDTH * index;
            const center = x + NOTE_NODE_WIDTH / 2;
            const even = index % 2 === 0;
            const fill = even ? "pink" : "#f0d6da";

            const notePosition = uniqueNotes.indexOf(
              `${note.note.name}${note.note.number}`
            );
            const noteY = NOTE_CONTAINER_HEIGHT - noteBlockSize * notePosition;

            const isNoteInChord = song.chords[note.chord].includes(
              note.note.name
            );

            return (
              <g key={index}>
                {/* <rect
                  x={x}
                  width={`${NOTE_NODE_WIDTH}px`}
                  height="100%"
                  fill={fill}
                /> */}

                <g width="100%" height="200px">
                  {/* <rect
                    x={x}
                    width={`${NOTE_NODE_WIDTH}px`}
                    height={`${NOTE_CONTAINER_HEIGHT}px`}
                    fill={fill}
                  /> */}
                </g>

                <rect
                  x={center - 19}
                  y={noteY - 15}
                  width="40px"
                  height="20px"
                  fill={isNoteInChord ? "green" : "white"}
                />
                <text x={center} y={noteY} textAnchor="middle">
                  {note.note.name} {note.note.number}
                </text>

                <text x={center} y={300 - 50} textAnchor="middle">
                  {note.word}
                </text>

                <text x={center} y={300 - 20} textAnchor="middle">
                  {note.chord}
                </text>
              </g>
            );
          })}
        </svg>
      </div>
    </>
  );
};

export default ViewSong;

const numerals = ["i", "ii", "iii", "iv", "v", "vi", "vii"];
function numberToRomanNumeral(index: number) {
  return numerals[index];
}

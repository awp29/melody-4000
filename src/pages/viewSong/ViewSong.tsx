/** @jsxImportSource @emotion/react */

import { useLocation } from "react-router-dom";
import { Nav } from "../../components/nav";
import sunnyAfternoon from "../../sunnyAfternoon";
import { getUniquePitches } from "../../utils/calculatePitchMap";
import { DebugBackground, Note, PitchLine } from "./components";

// TODO: DON'T LIKE NOTE NODE NAME
const NOTE_NODE_WIDTH = 80;
const NOTE_CONTAINER_HEIGHT = 200;

const ViewSong: React.FC = () => {
  const location = useLocation();
  // TODO: TYPE THIS CORRECTLY
  const song = sunnyAfternoon; //location.state.songToView as Song;

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

      <div css={{ marginTop: "80px", padding: "0px 20px" }}>
        {song.sections.map((section) => {
          const uniquePitches = getUniquePitches(section.notes);

          return (
            <div
              key={`section-${section.title}`}
              css={{ marginBottom: "40px" }}
            >
              <h2
                css={{
                  fontSize: "16px",
                  fontWeight: "bold",
                  marginBottom: "20px",
                }}
              >
                {section.title}
              </h2>
              <div
                css={{
                  width: "100%",
                  overflow: "auto",
                }}
              >
                <svg
                  width={`${NOTE_NODE_WIDTH * section.notes.length}`}
                  height="300px"
                >
                  {/* <DebugBackground
                    numberOfNotes={song.sections[0].notes.length}
                  /> */}
                  <PitchLine notes={song.sections[0].notes} />

                  {section.notes.map((note, index) => {
                    const x = NOTE_NODE_WIDTH * index;
                    const center = x + NOTE_NODE_WIDTH / 2;

                    const maxNumberOfUniqueNotes = uniquePitches.length;
                    const notePosition = uniquePitches.indexOf(note.pitch);
                    const noteY =
                      NOTE_CONTAINER_HEIGHT -
                      (NOTE_CONTAINER_HEIGHT / maxNumberOfUniqueNotes) *
                        notePosition;

                    return (
                      <g key={index}>
                        <Note
                          x={center}
                          y={noteY}
                          name={note.name}
                          type={note.type}
                          degree={note.degree}
                        />

                        <text
                          css={{ fontWeight: "bold" }}
                          x={center}
                          y={300 - 50}
                          textAnchor="middle"
                        >
                          {note.word}
                        </text>

                        <text
                          css={{ fontSize: "13px" }}
                          x={center}
                          y={300 - 20}
                          textAnchor="middle"
                        >
                          {note.chord}
                        </text>
                      </g>
                    );
                  })}
                </svg>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ViewSong;

const numerals = ["i", "ii", "iii", "iv", "v", "vi", "vii"];
function numberToRomanNumeral(index: number) {
  return numerals[index];
}

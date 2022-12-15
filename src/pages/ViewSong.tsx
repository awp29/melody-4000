/** @jsxImportSource @emotion/react */

import { useLocation } from "react-router-dom";
import { Nav } from "../components/nav";
import { NoteNode, Song } from "../types";

const ViewSong: React.FC = () => {
  const location = useLocation();
  // TODO: TYPE THIS CORRECTLY
  const song = location.state.songToView as Song;

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

      <div
        css={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "60px",
        }}
      >
        <div css={{ marginTop: "40px" }}>
          {song.sections.map((section) => {
            return (
              <div
                key={section.title}
                css={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  marginBottom: "40px",
                }}
              >
                <h2
                  css={{
                    fontWeight: "bold",
                    fontSize: "16px",
                    marginBottom: "26px",
                  }}
                >
                  {section.title}
                </h2>

                {section.lines.map((line, index) => {
                  return (
                    <div
                      key={`line-${index}`}
                      css={{ display: "flex", marginBottom: "40px" }}
                    >
                      {line.map((node: NoteNode, index) => {
                        const chord = song.chords[node.chord];
                        const resonants = chord.includes(node.note);
                        const noteIndex = song.key.notes.indexOf(node.note);

                        return (
                          <div
                            key={`word-${index}`}
                            css={{
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "center",
                              marginRight: "20px",
                            }}
                          >
                            <p
                              css={{
                                fontSize: "14px",
                                backgroundColor: resonants
                                  ? "#99C24D"
                                  : "transparent",
                                padding: "4px",
                              }}
                            >
                              {node.note}
                              <span css={{ fontSize: "11px" }}>
                                {numberToRomanNumeral(noteIndex)}
                              </span>
                            </p>
                            <p css={{ fontWeight: "bold", margin: "8px 0px" }}>
                              {node.word}
                            </p>
                            <p css={{ fontSize: "14px" }}>{node.chord}</p>
                          </div>
                        );
                      })}
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ViewSong;

const numerals = ["i", "ii", "iii", "iv", "v", "vi", "vii"];
function numberToRomanNumeral(index: number) {
  return numerals[index];
}

/** @jsxImportSource @emotion/react */

import song from "./sunnyAfternoon";
import { NoteNode, Song } from "./types";

function App() {
  return (
    <div
      css={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "100px",
      }}
    >
      <h1>{song.name}</h1>
      <h2>{song.artist}</h2>

      <div
        css={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "40px",
        }}
      >
        <p css={{ fontSize: "20px", marginBottom: "10px" }}>
          Key - {song.key.name}
        </p>
        <div css={{ display: "flex" }}>
          {song.key.notes.map((note, index) => {
            return (
              <div
                css={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  margin: "0px 10px",
                }}
              >
                <p>{numberToRomanNumeral(index)}</p>
                <p>{note}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div css={{ marginTop: "40px" }}>
        {(song as Song).lines.map((line, index) => {
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
                        backgroundColor: resonants ? "#8DB38B" : "transparent",
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
    </div>
  );
}

export default App;

const numerals = ["i", "ii", "iii", "iv", "v", "vi", "vii"];
function numberToRomanNumeral(index: number) {
  return numerals[index];
}

/** @jsxImportSource @emotion/react */

import { NoteNode, Song } from "../types";

interface Props {
  song: Song;
}

const ViewSong: React.FC<Props> = (props) => {
  const { song } = props;

  return (
    <>
      <nav
        css={{
          position: "fixed",
          top: "0px",
          width: "100%",
          padding: "20px",
          borderBottom: "1px solid black",
          backgroundColor: "#f1f0ee",
        }}
      >
        <div
          css={{
            maxWidth: "1024px",
            width: "100%",
            margin: "0 auto 0 auto",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div>
            <h1 css={{ fontWeight: "bold" }}>{song.name}</h1>
            <h2 css={{ fontWeight: "bold", fontSize: "18px" }}>
              {song.artist}
            </h2>
          </div>

          <div css={{ display: "flex", alignItems: "center" }}>
            <p css={{ marginRight: "20px", fontWeight: "bold" }}>
              KEY {song.key.name}
            </p>

            <div css={{ display: "flex" }}>
              {song.key.notes.map((note, index) => {
                return (
                  <div
                    key={`note-${index}`}
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
        </div>
      </nav>
      <div
        css={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "100px",
        }}
      >
        <div css={{ marginTop: "40px" }}>
          {song.sections.map((section) => {
            return (
              <div key={section.title} css={{ marginBottom: "80px" }}>
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
                                  ? "#8DB38B"
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

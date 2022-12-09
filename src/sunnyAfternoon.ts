import { Song } from "./types";

const song: Song = {
  artist: "The Kinks",
  name: "Sunny Afternoon",
  key: {
    name: "Dm",
    notes: ["D", "E", "F", "G", "A", "Bb", "C"],
  },
  chords: {
    Dm: ["D", "A", "F"],
    C: ["C", "E", "G"],
    F: ["F", "A", "C"],
    A: ["A", "E", "C#"],
    "G/A": ["G", "A", "E", "C#"],
    "F/A": ["F", "A", "E", "C#"],
  },
  lines: [
    // LINE 1
    [
      {
        note: "D",
        word: "The",
        chord: "Dm",
      },
      {
        note: "D",
        word: "Tax",
        chord: "Dm",
      },
      {
        note: "E",
        word: "mans",
        chord: "Dm",
      },
      {
        note: "F",
        word: "tak",
        chord: "Dm",
      },
      {
        note: "G",
        word: "en",
        chord: "Dm",
      },
      {
        note: "A",
        word: "all",
        chord: "C",
      },
      {
        note: "D",
        word: "my",
        chord: "C",
      },
      {
        note: "C",
        word: "dough",
        chord: "C",
      },
    ],
    // LINE 2
    [
      {
        note: "F",
        word: "And",
        chord: "C",
      },
      {
        note: "A",
        word: "left",
        chord: "F",
      },
      {
        note: "D",
        word: "me",
        chord: "F",
      },
      {
        note: "C",
        word: "in",
        chord: "F",
      },
      {
        note: "D",
        word: "my",
        chord: "F",
      },
      {
        note: "A",
        word: "state",
        chord: "C",
      },
      {
        note: "D",
        word: "ly",
        chord: "C",
      },
      {
        note: "C",
        word: "home",
        chord: "C",
      },
    ],
    // LINE 3
    [
      {
        note: "A",
        word: "Laz",
        chord: "A",
      },
      {
        note: "A",
        word: "ing",
        chord: "A",
      },
      {
        note: "A",
        word: "on",
        chord: "G/A",
      },
      {
        note: "A",
        word: "a",
        chord: "G/A",
      },
      {
        note: "A",
        word: "sun",
        chord: "F/A",
      },
      {
        note: "G",
        word: "ny",
        chord: "F/A",
      },
      {
        note: "F",
        word: "af",
        chord: "A",
      },
      {
        note: "E",
        word: "ter",
        chord: "A",
      },
      {
        note: "D",
        word: "noon",
        chord: "Dm",
      },
    ],
  ],
};

export default song;

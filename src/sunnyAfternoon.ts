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
    D: ["D", "A", "F#"],
    G7: ["G", "B", "D", "F"],
    C7: ["C", "E", "G", "Bb"],
    A7: ["A", "E", "G", "C#"],
    Bbmaj7: ["Bb", "A", "D", "F"],
  },
  sections: [
    {
      title: "Verse 1",
      notes: [
        {
          name: "D",
          pitch: 38,
          note: {
            name: "D",
            number: 3,
          },
          word: "The",
          chord: "Dm",
        },
        {
          name: "D",
          pitch: 38,
          note: {
            name: "D",
            number: 3,
          },
          word: "Tax",
          chord: "Dm",
        },
        {
          name: "E",
          pitch: 40,
          note: {
            name: "E",
            number: 3,
          },
          word: "mans",
          chord: "Dm",
        },
        {
          name: "F",
          pitch: 41,
          note: {
            name: "F",
            number: 3,
          },
          word: "tak",
          chord: "Dm",
        },
        {
          name: "G",
          pitch: 43,
          note: {
            name: "G",
            number: 3,
          },
          word: "en",
          chord: "Dm",
        },
        {
          name: "A",
          pitch: 45,
          note: {
            name: "A",
            number: 3,
          },
          word: "all",
          chord: "C",
        },
        {
          name: "D",
          pitch: 50,
          note: {
            name: "D",
            number: 4,
          },
          word: "my",
          chord: "C",
        },
        {
          name: "C",
          pitch: 48,
          note: {
            name: "C",
            number: 4,
          },
          word: "dough",
          chord: "C",
        },
      ],
    },
  ],
};

export default song;

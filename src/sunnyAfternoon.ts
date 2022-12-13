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
        //line 4
        [
          {
            note: "D",
            word: "And",
            chord: "Dm",
          },
          {
            note: "F",
            word: "I",
            chord: "Dm",
          },
          {
            note: "G",
            word: "can't",
            chord: "Dm",
          },
          {
            note: "A",
            word: "sail",
            chord: "C",
          },
          {
            note: "D",
            word: "my",
            chord: "C",
          },
          {
            note: "C",
            word: "yacht",
            chord: "C",
          },
        ],
        //line 5
        [
          {
            note: "F",
            word: "He's",
            chord: "F",
          },
          {
            note: "A",
            word: "tak",
            chord: "F",
          },
          {
            note: "D",
            word: "ev",
            chord: "F",
          },
          {
            note: "C",
            word: "ry",
            chord: "F",
          },
          {
            note: "A",
            word: "thing",
            chord: "C",
          },
          {
            note: "D",
            word: "I",
            chord: "C",
          },
          {
            note: "C",
            word: "got",
            chord: "C",
          },
        ],
        // line 6
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
            note: "G",
            word: "sun",
            chord: "F/A",
          },
          {
            note: "D",
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
    },
    {
      title: "Chorus 1",
      lines: [
        // line 1
        [
          {
            note: "D",
            word: "Save",
            chord: "D",
          },
          {
            note: "D",
            word: "me",
            chord: "D",
          },
          {
            note: "D",
            word: "Save",
            chord: "D",
          },
          {
            note: "D",
            word: "me",
            chord: "D",
          },
          {
            note: "D",
            word: "Save",
            chord: "D",
          },
          {
            note: "D",
            word: "me",
            chord: "D",
          },
          {
            note: "D",
            word: "from",
            chord: "D",
          },
          {
            note: "D",
            word: "this",
            chord: "D",
          },
          {
            note: "D",
            word: "sque",
            chord: "D",
          },
          {
            note: "D",
            word: "eze",
            chord: "G7",
          },
        ],
        // line 2
        [
          {
            note: "C",
            word: "I",
            chord: "G7",
          },
          {
            note: "D",
            word: "got",
            chord: "G7",
          },
          {
            note: "C",
            word: "a",
            chord: "G7",
          },
          {
            note: "D",
            word: "big",
            chord: "C7",
          },
          {
            note: "D",
            word: "fat",
            chord: "C7",
          },
          {
            note: "C",
            word: "mom",
            chord: "C7",
          },
          {
            note: "D",
            word: "ma",
            chord: "C7",
          },
          {
            note: "D",
            word: "try",
            chord: "C7",
          },
          {
            note: "C",
            word: "na",
            chord: "C7",
          },
          {
            note: "G#",
            word: "Bre",
            chord: "C7",
          },
          {
            note: "G",
            word: "ak",
            chord: "C7",
          },
          {
            note: "G#",
            word: "me",
            chord: "F",
          },
          {
            note: "A",
            word: "eeee",
            chord: "F",
          },
        ],
        // line 3
        [
          {
            note: "A",
            word: "cause",
            chord: "A7",
          },
          {
            note: "A",
            word: "I",
            chord: "A7",
          },
          {
            note: "D",
            word: "love",
            chord: "Dm",
          },
          {
            note: "A",
            word: "to",
            chord: "Dm",
          },
          {
            note: "D",
            word: "live",
            chord: "Dm",
          },
          {
            note: "A",
            word: "so",
            chord: "Dm",
          },
          {
            note: "D",
            word: "ples",
            chord: "G7",
          },
          {
            note: "A",
            word: "ant",
            chord: "G7",
          },
          {
            note: "D",
            word: "ly",
            chord: "G7",
          },
        ],
        // line 4
        [
          {
            note: "D",
            word: "Live",
            chord: "Dm",
          },
          {
            note: "D",
            word: "this",
            chord: "Dm",
          },
          {
            note: "D",
            word: "life",
            chord: "Dm",
          },
          {
            note: "D",
            word: "of",
            chord: "Dm",
          },
          {
            note: "F",
            word: "lux",
            chord: "G7",
          },
          {
            note: "F",
            word: "u",
            chord: "G7",
          },
          {
            note: "E",
            word: "r",
            chord: "G7",
          },
          {
            note: "D",
            word: "y",
            chord: "C7",
          },
        ],
        // line 5
        [
          {
            note: "C",
            word: "Laz",
            chord: "F",
          },
          {
            note: "C",
            word: "in",
            chord: "F",
          },
          {
            note: "C",
            word: "on",
            chord: "F",
          },
          {
            note: "C",
            word: "a",
            chord: "F",
          },
          {
            note: "C#",
            word: "sun",
            chord: "A7",
          },
          {
            note: "C#",
            word: "ny",
            chord: "A7",
          },
          {
            note: "D",
            word: "af",
            chord: "A7",
          },
          {
            note: "E",
            word: "ter",
            chord: "A7",
          },
          {
            note: "F",
            word: "noon",
            chord: "Dm",
          },
        ],
        // line 6
        [
          {
            note: "D",
            word: "In",
            chord: "Bbmaj7",
          },
          {
            note: "D",
            word: "the",
            chord: "Bbmaj7",
          },
          {
            note: "F",
            word: "sum",
            chord: "A",
          },
          {
            note: "D",
            word: "mer",
            chord: "A",
          },
          {
            note: "D",
            word: "time",
            chord: "G/A",
          },
        ],
        // line 7
        [
          {
            note: "D",
            word: "In",
            chord: "Bbmaj7",
          },
          {
            note: "D",
            word: "the",
            chord: "Bbmaj7",
          },
          {
            note: "F",
            word: "sum",
            chord: "A",
          },
          {
            note: "D",
            word: "mer",
            chord: "A",
          },
          {
            note: "D",
            word: "time",
            chord: "G/A",
          },
        ],
        // line 8
        [
          {
            note: "D",
            word: "In",
            chord: "Bbmaj7",
          },
          {
            note: "D",
            word: "the",
            chord: "Bbmaj7",
          },
          {
            note: "F",
            word: "sum",
            chord: "A",
          },
          {
            note: "D",
            word: "mer",
            chord: "A",
          },
          {
            note: "D",
            word: "time",
            chord: "G/A",
          },
        ],
      ],
    },
    {
      title: "Verse 2",
      lines: [
        // LINE 1
        [
          {
            note: "D",
            word: "My",
            chord: "Dm",
          },
          {
            note: "D",
            word: "girl",
            chord: "Dm",
          },
          {
            note: "E",
            word: "friend's",
            chord: "Dm",
          },
          {
            note: "F",
            word: "run",
            chord: "Dm",
          },
          {
            note: "G",
            word: "of",
            chord: "Dm",
          },
          {
            note: "A",
            word: "with",
            chord: "C",
          },
          {
            note: "D",
            word: "my",
            chord: "C",
          },
          {
            note: "C",
            word: "car",
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
            word: "gone",
            chord: "F",
          },
          {
            note: "D",
            word: "back",
            chord: "F",
          },
          {
            note: "C",
            word: "to",
            chord: "F",
          },
          {
            note: "D",
            word: "her",
            chord: "F",
          },
          {
            note: "A",
            word: "ma",
            chord: "C",
          },
          {
            note: "D",
            word: "and",
            chord: "C",
          },
          {
            note: "C",
            word: "pa",
            chord: "C",
          },
        ],
        // LINE 3
        [
          {
            note: "A",
            word: "Tell",
            chord: "A",
          },
          {
            note: "A",
            word: "in",
            chord: "A",
          },
          {
            note: "A",
            word: "tales",
            chord: "G/A",
          },
          {
            note: "A",
            word: "of",
            chord: "G/A",
          },
          {
            note: "A",
            word: "drunk",
            chord: "F/A",
          },
          {
            note: "A",
            word: "en",
            chord: "F/A",
          },
          {
            note: "G",
            word: "ness",
            chord: "F/A",
          },
          {
            note: "F",
            word: "and",
            chord: "A",
          },
          {
            note: "E",
            word: "cruel",
            chord: "A",
          },
          {
            note: "D",
            word: "ty",
            chord: "Dm",
          },
        ],
        //line 4
        [
          {
            note: "D",
            word: "Now",
            chord: "Dm",
          },
          {
            note: "F",
            word: "I'm",
            chord: "Dm",
          },
          {
            note: "A",
            word: "sit",
            chord: "C",
          },
          {
            note: "D",
            word: "tin",
            chord: "C",
          },
          {
            note: "C",
            word: "here",
            chord: "C",
          },
        ],
        //line 5
        [
          {
            note: "A",
            word: "Sip",
            chord: "F",
          },
          {
            note: "D",
            word: "in",
            chord: "F",
          },
          {
            note: "C",
            word: "at",
            chord: "F",
          },
          {
            note: "D",
            word: "my",
            chord: "F",
          },
          {
            note: "A",
            word: "ice",
            chord: "C",
          },
          {
            note: "D",
            word: "cold",
            chord: "C",
          },
          {
            note: "C",
            word: "beer",
            chord: "C",
          },
        ],
        // line 6
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
            note: "G",
            word: "sun",
            chord: "F/A",
          },
          {
            note: "D",
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
    },
    {
      title: "Chorus 2",
      lines: [
        // line 1
        [
          {
            note: "D",
            word: "Oh",
            chord: "D",
          },
          {
            note: "D",
            word: "Save",
            chord: "D",
          },
          {
            note: "D",
            word: "me",
            chord: "D",
          },
          {
            note: "D",
            word: "Save",
            chord: "D",
          },
          {
            note: "D",
            word: "me",
            chord: "D",
          },
          {
            note: "D",
            word: "Save",
            chord: "D",
          },
          {
            note: "D",
            word: "me",
            chord: "D",
          },
          {
            note: "D",
            word: "from",
            chord: "D",
          },
          {
            note: "D",
            word: "this",
            chord: "D",
          },
          {
            note: "D",
            word: "sque",
            chord: "D",
          },
          {
            note: "D",
            word: "eze",
            chord: "G7",
          },
        ],
        // line 2
        [
          {
            note: "C",
            word: "Well",
            chord: "G7",
          },
          {
            note: "D",
            word: "give",
            chord: "G7",
          },
          {
            note: "C",
            word: "me",
            chord: "G7",
          },
          {
            note: "D",
            word: "two",
            chord: "C7",
          },
          {
            note: "D",
            word: "good",
            chord: "C7",
          },
          {
            note: "C",
            word: "rea",
            chord: "C7",
          },
          {
            note: "D",
            word: "son",
            chord: "C7",
          },
          {
            note: "D",
            word: "why",
            chord: "C7",
          },
          {
            note: "C",
            word: "I",
            chord: "C7",
          },
          {
            note: "G#",
            word: "Ought",
            chord: "C7",
          },
          {
            note: "G",
            word: "a",
            chord: "C7",
          },
          {
            note: "G#",
            word: "Sta",
            chord: "F",
          },
          {
            note: "A",
            word: "y",
            chord: "F",
          },
        ],
        // line 3
        [
          {
            note: "A",
            word: "cause",
            chord: "A7",
          },
          {
            note: "A",
            word: "I",
            chord: "A7",
          },
          {
            note: "D",
            word: "love",
            chord: "Dm",
          },
          {
            note: "A",
            word: "to",
            chord: "Dm",
          },
          {
            note: "D",
            word: "live",
            chord: "Dm",
          },
          {
            note: "A",
            word: "so",
            chord: "Dm",
          },
          {
            note: "D",
            word: "ples",
            chord: "G7",
          },
          {
            note: "A",
            word: "ant",
            chord: "G7",
          },
          {
            note: "D",
            word: "ly",
            chord: "G7",
          },
        ],
        // line 4
        [
          {
            note: "D",
            word: "Live",
            chord: "Dm",
          },
          {
            note: "D",
            word: "this",
            chord: "Dm",
          },
          {
            note: "D",
            word: "life",
            chord: "Dm",
          },
          {
            note: "D",
            word: "of",
            chord: "Dm",
          },
          {
            note: "F",
            word: "lux",
            chord: "G7",
          },
          {
            note: "F",
            word: "u",
            chord: "G7",
          },
          {
            note: "E",
            word: "r",
            chord: "G7",
          },
          {
            note: "D",
            word: "y",
            chord: "C7",
          },
        ],
        // line 5
        [
          {
            note: "C",
            word: "Laz",
            chord: "F",
          },
          {
            note: "C",
            word: "in",
            chord: "F",
          },
          {
            note: "C",
            word: "on",
            chord: "F",
          },
          {
            note: "C",
            word: "a",
            chord: "F",
          },
          {
            note: "C#",
            word: "sun",
            chord: "A7",
          },
          {
            note: "C#",
            word: "ny",
            chord: "A7",
          },
          {
            note: "D",
            word: "af",
            chord: "A7",
          },
          {
            note: "E",
            word: "ter",
            chord: "A7",
          },
          {
            note: "F",
            word: "noon",
            chord: "Dm",
          },
        ],
        // line 6
        [
          {
            note: "D",
            word: "In",
            chord: "Bbmaj7",
          },
          {
            note: "D",
            word: "the",
            chord: "Bbmaj7",
          },
          {
            note: "F",
            word: "sum",
            chord: "A",
          },
          {
            note: "D",
            word: "mer",
            chord: "A",
          },
          {
            note: "D",
            word: "time",
            chord: "G/A",
          },
        ],
        // line 7
        [
          {
            note: "D",
            word: "In",
            chord: "Bbmaj7",
          },
          {
            note: "D",
            word: "the",
            chord: "Bbmaj7",
          },
          {
            note: "F",
            word: "sum",
            chord: "A",
          },
          {
            note: "D",
            word: "mer",
            chord: "A",
          },
          {
            note: "D",
            word: "time",
            chord: "G/A",
          },
        ],
        // line 8
        [
          {
            note: "D",
            word: "In",
            chord: "Bbmaj7",
          },
          {
            note: "D",
            word: "the",
            chord: "Bbmaj7",
          },
          {
            note: "F",
            word: "sum",
            chord: "A",
          },
          {
            note: "D",
            word: "mer",
            chord: "A",
          },
          {
            note: "D",
            word: "time",
            chord: "G/A",
          },
        ],
      ],
    },
    {
      title: "Chorus 3",
      lines: [
        // line 1
        [
          {
            note: "D",
            word: "Save",
            chord: "D",
          },
          {
            note: "D",
            word: "me",
            chord: "D",
          },
          {
            note: "D",
            word: "Save",
            chord: "D",
          },
          {
            note: "D",
            word: "me",
            chord: "D",
          },
          {
            note: "D",
            word: "Save",
            chord: "D",
          },
          {
            note: "D",
            word: "me",
            chord: "D",
          },
          {
            note: "D",
            word: "from",
            chord: "D",
          },
          {
            note: "D",
            word: "this",
            chord: "D",
          },
          {
            note: "D",
            word: "sque",
            chord: "D",
          },
          {
            note: "D",
            word: "eze",
            chord: "G7",
          },
        ],
        // line 2
        [
          {
            note: "C",
            word: "I",
            chord: "G7",
          },
          {
            note: "D",
            word: "got",
            chord: "G7",
          },
          {
            note: "C",
            word: "a",
            chord: "G7",
          },
          {
            note: "D",
            word: "big",
            chord: "C7",
          },
          {
            note: "D",
            word: "fat",
            chord: "C7",
          },
          {
            note: "C",
            word: "mom",
            chord: "C7",
          },
          {
            note: "D",
            word: "ma",
            chord: "C7",
          },
          {
            note: "D",
            word: "try",
            chord: "C7",
          },
          {
            note: "C",
            word: "na",
            chord: "C7",
          },
          {
            note: "G#",
            word: "Bre",
            chord: "C7",
          },
          {
            note: "G",
            word: "ak",
            chord: "C7",
          },
          {
            note: "G#",
            word: "me",
            chord: "F",
          },
          {
            note: "A",
            word: "eeee",
            chord: "F",
          },
        ],
        // line 3
        [
          {
            note: "A",
            word: "cause",
            chord: "A7",
          },
          {
            note: "A",
            word: "I",
            chord: "A7",
          },
          {
            note: "D",
            word: "love",
            chord: "Dm",
          },
          {
            note: "A",
            word: "to",
            chord: "Dm",
          },
          {
            note: "D",
            word: "live",
            chord: "Dm",
          },
          {
            note: "A",
            word: "so",
            chord: "Dm",
          },
          {
            note: "D",
            word: "ples",
            chord: "G7",
          },
          {
            note: "A",
            word: "ant",
            chord: "G7",
          },
          {
            note: "D",
            word: "ly",
            chord: "G7",
          },
        ],
        // line 4
        [
          {
            note: "D",
            word: "Live",
            chord: "Dm",
          },
          {
            note: "D",
            word: "this",
            chord: "Dm",
          },
          {
            note: "D",
            word: "life",
            chord: "Dm",
          },
          {
            note: "D",
            word: "of",
            chord: "Dm",
          },
          {
            note: "F",
            word: "lux",
            chord: "G7",
          },
          {
            note: "F",
            word: "u",
            chord: "G7",
          },
          {
            note: "E",
            word: "r",
            chord: "G7",
          },
          {
            note: "D",
            word: "y",
            chord: "C7",
          },
        ],
        // line 5
        [
          {
            note: "C",
            word: "Laz",
            chord: "F",
          },
          {
            note: "C",
            word: "in",
            chord: "F",
          },
          {
            note: "C",
            word: "on",
            chord: "F",
          },
          {
            note: "C",
            word: "a",
            chord: "F",
          },
          {
            note: "C#",
            word: "sun",
            chord: "A7",
          },
          {
            note: "C#",
            word: "ny",
            chord: "A7",
          },
          {
            note: "D",
            word: "af",
            chord: "A7",
          },
          {
            note: "E",
            word: "ter",
            chord: "A7",
          },
          {
            note: "F",
            word: "noon",
            chord: "Dm",
          },
        ],
        // line 6
        [
          {
            note: "D",
            word: "In",
            chord: "Bbmaj7",
          },
          {
            note: "D",
            word: "the",
            chord: "Bbmaj7",
          },
          {
            note: "F",
            word: "sum",
            chord: "A",
          },
          {
            note: "D",
            word: "mer",
            chord: "A",
          },
          {
            note: "D",
            word: "time",
            chord: "G/A",
          },
        ],
        // line 7
        [
          {
            note: "D",
            word: "In",
            chord: "Bbmaj7",
          },
          {
            note: "D",
            word: "the",
            chord: "Bbmaj7",
          },
          {
            note: "F",
            word: "sum",
            chord: "A",
          },
          {
            note: "D",
            word: "mer",
            chord: "A",
          },
          {
            note: "D",
            word: "time",
            chord: "G/A",
          },
        ],
        // line 8
        [
          {
            note: "D",
            word: "In",
            chord: "Bbmaj7",
          },
          {
            note: "D",
            word: "the",
            chord: "Bbmaj7",
          },
          {
            note: "F",
            word: "sum",
            chord: "A",
          },
          {
            note: "D",
            word: "mer",
            chord: "A",
          },
          {
            note: "D",
            word: "time",
            chord: "G/A",
          },
        ],
        // line 9
        [
          {
            note: "D",
            word: "In",
            chord: "Bbmaj7",
          },
          {
            note: "D",
            word: "the",
            chord: "Bbmaj7",
          },
          {
            note: "F",
            word: "sum",
            chord: "A",
          },
          {
            note: "D",
            word: "mer",
            chord: "A",
          },
          {
            note: "D",
            word: "time",
            chord: "G/A",
          },
        ],
        // line 10
      ],
    },
  ],
};

export default song;

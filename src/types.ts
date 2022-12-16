type Note =
  | "C"
  | "C#"
  | "D"
  | "D#"
  | "E"
  | "F"
  | "F#"
  | "G"
  | "G#"
  | "A"
  | "A#"
  | "B"
  | "Bb";

export enum NoteType {
  inChord,
  inKey,
  outsideKey,
}

export type ScaleDegree = "i" | "ii" | "iii" | "iv" | "v" | "vi" | "vii";

export interface NoteNode {
  name: string;
  pitch: number;
  type: NoteType;
  degree: ScaleDegree;
  word: string;
  chord: string;
}

export interface Section {
  title: string;
  notes: NoteNode[];
}

export interface Song {
  artist: string;
  name: string;
  key: {
    name: string;
    notes: Note[];
  };
  chords: { [key: string]: Note[] };
  sections: Section[];
}

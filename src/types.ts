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

export interface NoteNode {
  note: Note;
  word: string;
  chord: string;
}

export interface Song {
  artist: string;
  name: string;
  key: {
    name: string;
    notes: Note[];
  };
  chords: { [key: string]: Note[] };
  lines: NoteNode[][];
}

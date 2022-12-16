import { uniqBy } from "lodash";
import { NoteNode } from "../types";

export const getUniquePitches = (notes: NoteNode[]) => {
  const notesToSort = [...notes];
  const sortedNotes = notesToSort.sort(sortByPitch);
  const uniquePitches = uniqBy(sortedNotes, "pitch").map(mapNoteToPitch);

  return uniquePitches;
};

const sortByPitch = (a: NoteNode, b: NoteNode) => {
  return a.pitch - b.pitch;
};

const mapNoteToPitch = (note: NoteNode) => note.pitch;

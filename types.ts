
export type NoteName = string;

export interface FretboardNote {
  string: number;
  fret: number;
  noteName: NoteName;
  pc: string; // Pitch Class, e.g., "C", "F#"
}

export interface FoundScale {
  name: string;
  tonic: string | null;
  notes: string[];
}

export interface FoundChord {
  name: string;
  tonic: string | null;
  notes: string[];
}

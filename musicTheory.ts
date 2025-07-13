
import { Note, Interval, Scale, Chord } from 'tonal';
import type { FretboardNote, FoundScale, FoundChord } from '../types';
import { TUNING, FRET_COUNT } from './constants';

export const generateFretboardNotes = (): FretboardNote[][] => {
  return TUNING.map((startNote, stringIndex) => {
    const stringNotes: FretboardNote[] = [];
    for (let fret = 0; fret <= FRET_COUNT; fret++) {
      const noteName = Note.transpose(startNote, Interval.fromSemitones(fret));
      stringNotes.push({
        string: stringIndex,
        fret,
        noteName,
        pc: Note.get(noteName).pc,
      });
    }
    return stringNotes;
  });
};

export const findScalesFromNotes = (notePcs: string[]): FoundScale[] => {
  if (notePcs.length < 3) return [];

  const detectedScaleNames: string[] = Scale.detect(notePcs);

  return detectedScaleNames.map(scaleName => {
    const scaleInfo = Scale.get(scaleName);
    return {
      name: scaleName,
      tonic: scaleInfo.tonic,
      notes: scaleInfo.notes
    };
  });
};

export const findArpeggiosFromNotes = (notePcs: string[]): FoundChord[] => {
  if (notePcs.length < 3) return [];

  const detectedChordNames: string[] = Chord.detect(notePcs);

  return detectedChordNames
    .map(chordName => {
      const chordInfo = Chord.get(chordName);
      return {
        name: chordInfo.symbol,
        tonic: chordInfo.tonic,
        notes: chordInfo.notes,
      };
    })
    .filter(c => c.tonic && c.notes.length > 0);
};


export const getScaleDetails = (scaleName: string): FoundScale => {
    const scaleInfo = Scale.get(scaleName);
    return {
        name: scaleName,
        tonic: scaleInfo.tonic,
        notes: scaleInfo.notes
    };
};

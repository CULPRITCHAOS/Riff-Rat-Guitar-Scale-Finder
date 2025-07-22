
import React from 'react';
import type { FretboardNote, FoundScale, FoundChord } from './types';
import { FRET_COUNT, FRET_MARKERS, DOUBLE_FRET_MARKERS } from './constants';

interface NoteProps {
  note: FretboardNote;
  isSelected: boolean;
  isScaleNote: boolean;
  isRoot: boolean;
  onClick: (note: FretboardNote) => void;
}

const Note: React.FC<NoteProps> = ({ note, isSelected, isScaleNote, isRoot, onClick }) => {
  const getNoteClasses = () => {
    let base = "w-8 h-8 md:w-9 md:h-9 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-200 ease-in-out transform hover:scale-110 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent focus:ring-white";
    if (isRoot) {
      return `${base} bg-orange-500 text-white shadow-lg scale-110`;
    }
    if (isSelected) {
      return `${base} bg-sky-500 text-white shadow-md`;
    }
    if (isScaleNote) {
      return `${base} bg-teal-500 text-white`;
    }
    return `${base} bg-slate-600/30 text-slate-400 hover:bg-slate-500/50 hover:text-white`;
  };

  return (
    <div className="w-full h-full flex items-center justify-center">
      <button onClick={() => onClick(note)} className={getNoteClasses()}>
        {note.pc}
      </button>
    </div>
  );
};

interface FretboardProps {
  fretboardNotes: FretboardNote[][];
  selectedNotes: Map<string, FretboardNote>;
  activeDisplay: (FoundScale | FoundChord) | null;
  onNoteClick: (note: FretboardNote) => void;
}

const Fretboard: React.FC<FretboardProps> = ({ fretboardNotes, selectedNotes, activeDisplay, onNoteClick }) => {
  const fretWidth = `minmax(40px, 1fr)`;
  const nutWidth = '35px';

  return (
    <div className="p-4 md:p-8 bg-slate-800 rounded-lg shadow-2xl overflow-x-auto">
      <div style={{ display: 'grid', gridTemplateColumns: `${nutWidth} repeat(${FRET_COUNT}, ${fretWidth})` }}>
        {/* Fret numbers */}
        <div className="text-center font-bold text-slate-500"></div>
        {Array.from({ length: FRET_COUNT }, (_, i) => i + 1).map(fretNum => (
          <div key={`fret-num-${fretNum}`} className="text-center text-sm text-slate-400 py-1">
            {fretNum}
          </div>
        ))}

        {/* Fret markers */}
        <div className="col-span-1"></div>
        {Array.from({ length: FRET_COUNT }, (_, i) => i + 1).map(fretNum => (
           <div key={`marker-${fretNum}`} className="relative h-4">
             {FRET_MARKERS.includes(fretNum) && <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-slate-600 rounded-full"></div>}
             {DOUBLE_FRET_MARKERS.includes(fretNum) && 
                <>
                    <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-slate-600 rounded-full"></div>
                    <div className="absolute top-3/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-slate-600 rounded-full"></div>
                </>
             }
           </div>
        ))}

        {/* Fretboard grid */}
        {fretboardNotes.map((stringNotes, stringIndex) => (
          <React.Fragment key={`string-${stringIndex}`}>
            {stringNotes.map((note, fretIndex) => (
              <div
                key={`${stringIndex}-${fretIndex}`}
                className={`relative h-12 flex items-center justify-center ${fretIndex === 0 ? 'bg-slate-700' : 'bg-amber-900'} border-t border-slate-600 ${fretIndex > 0 ? 'border-r-2 border-slate-500' : 'border-r-4 border-slate-300'}`}
              >
                <div className="absolute w-full h-px bg-slate-400 z-0"></div>
                <div className="z-10">
                  <Note
                    note={note}
                    isSelected={selectedNotes.has(`${note.string}-${note.fret}`)}
                    isScaleNote={activeDisplay ? activeDisplay.notes.includes(note.pc) : false}
                    isRoot={activeDisplay ? note.pc === activeDisplay.tonic : false}
                    onClick={onNoteClick}
                  />
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Fretboard;

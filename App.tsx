
import React, { useState, useMemo, useCallback } from 'react';
import type { FretboardNote, FoundScale, FoundChord } from './types';
import Fretboard from './components/Fretboard';
import ScaleModal from './components/ScaleModal';
import ArpeggioModal from './components/ArpeggioModal';
import { generateFretboardNotes, findScalesFromNotes, findArpeggiosFromNotes } from './utils/musicTheory';
import { MusicNoteIcon, InfoIcon, ArpeggioIcon } from './constants';

const App: React.FC = () => {
  const [selectedNotes, setSelectedNotes] = useState<Map<string, FretboardNote>>(new Map());
  
  const [activeScale, setActiveScale] = useState<FoundScale | null>(null);
  const [activeArpeggio, setActiveArpeggio] = useState<FoundChord | null>(null);

  const [foundScales, setFoundScales] = useState<FoundScale[]>([]);
  const [foundArpeggios, setFoundArpeggios] = useState<FoundChord[]>([]);
  
  const [isScaleModalOpen, setIsScaleModalOpen] = useState(false);
  const [isArpeggioModalOpen, setIsArpeggioModalOpen] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const fretboardNotes = useMemo(() => generateFretboardNotes(), []);

  const handleNoteClick = useCallback((note: FretboardNote) => {
    setActiveScale(null);
    setActiveArpeggio(null);
    setSelectedNotes(prev => {
      const newSelection = new Map(prev);
      const key = `${note.string}-${note.fret}`;
      if (newSelection.has(key)) {
        newSelection.delete(key);
      } else {
        if (newSelection.size < 6) {
           newSelection.set(key, note);
        }
      }
      return newSelection;
    });
  }, []);

  const handleFindScales = () => {
    if (selectedNotes.size < 3) return;
    setIsLoading(true);
    setIsScaleModalOpen(true);
    
    setTimeout(() => {
        const uniqueNotePcs = [...new Set(Array.from(selectedNotes.values()).map((n: FretboardNote) => n.pc))];
        const scales = findScalesFromNotes(uniqueNotePcs);
        setFoundScales(scales);
        setIsLoading(false);
    }, 500);
  };
  
  const handleFindArpeggios = () => {
    if (selectedNotes.size < 3) return;
    setIsLoading(true);
    setIsArpeggioModalOpen(true);
    
    setTimeout(() => {
        const uniqueNotePcs = [...new Set(Array.from(selectedNotes.values()).map((n: FretboardNote) => n.pc))];
        const arpeggios = findArpeggiosFromNotes(uniqueNotePcs);
        setFoundArpeggios(arpeggios);
        setIsLoading(false);
    }, 500);
  };

  const handleScaleSelect = (scale: FoundScale) => {
    setActiveArpeggio(null);
    setActiveScale(scale);
    setIsScaleModalOpen(false);
  };
  
  const handleArpeggioSelect = (arpeggio: FoundChord) => {
    setActiveScale(null);
    setActiveArpeggio(arpeggio);
    setIsArpeggioModalOpen(false);
  };
  
  const handleClear = () => {
    setSelectedNotes(new Map());
    setActiveScale(null);
    setActiveArpeggio(null);
    setFoundScales([]);
    setFoundArpeggios([]);
  };

  const isFindButtonDisabled = selectedNotes.size < 3 || selectedNotes.size > 6;
  const activeDisplay = activeScale || activeArpeggio;

  return (
    <div className="min-h-screen bg-slate-900 text-white p-4 sm:p-6 lg:p-8">
      <ScaleModal
        isOpen={isScaleModalOpen}
        onClose={() => setIsScaleModalOpen(false)}
        scales={foundScales}
        onScaleSelect={handleScaleSelect}
        isLoading={isLoading}
      />
      <ArpeggioModal
        isOpen={isArpeggioModalOpen}
        onClose={() => setIsArpeggioModalOpen(false)}
        arpeggios={foundArpeggios}
        onArpeggioSelect={handleArpeggioSelect}
        isLoading={isLoading}
      />
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-teal-400">
            Guitar Scale & Arpeggio Finder
          </h1>
          <p className="mt-4 text-lg text-slate-400 max-w-3xl mx-auto">
            Select 3 to 6 notes on the fretboard, then find matching scales or arpeggios.
          </p>
        </header>

        <main>
          <div className="mb-6">
            <Fretboard
              fretboardNotes={fretboardNotes}
              selectedNotes={selectedNotes}
              activeDisplay={activeDisplay}
              onNoteClick={handleNoteClick}
            />
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 p-4 bg-slate-800/50 rounded-lg">
            <div className="flex items-center gap-2 text-slate-300 flex-shrink-0">
                <InfoIcon className="w-6 h-6 text-sky-400" />
                <span>Selected: <span className="font-bold text-white">{selectedNotes.size}</span> / 6</span>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
              <button
                onClick={handleFindScales}
                disabled={isFindButtonDisabled}
                className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3 font-bold text-white bg-sky-600 rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:bg-sky-500 disabled:bg-slate-600 disabled:cursor-not-allowed disabled:shadow-none transform hover:scale-105 disabled:transform-none"
              >
                <MusicNoteIcon className="w-5 h-5" />
                Find Scales
              </button>
              <button
                onClick={handleFindArpeggios}
                disabled={isFindButtonDisabled}
                className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3 font-bold text-white bg-orange-600 rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:bg-orange-500 disabled:bg-slate-600 disabled:cursor-not-allowed disabled:shadow-none transform hover:scale-105 disabled:transform-none"
              >
                <ArpeggioIcon className="w-5 h-5" />
                Find Arpeggios
              </button>
              <button
                onClick={handleClear}
                className="w-full sm:w-auto px-6 py-3 font-semibold text-slate-300 bg-transparent border-2 border-slate-600 rounded-lg transition-colors hover:bg-slate-700 hover:border-slate-500"
              >
                Clear Selection
              </button>
            </div>
          </div>
          
          {activeDisplay && (
              <div className="mt-6 p-6 bg-slate-800 rounded-lg text-center animate-fade-in">
                  <h3 className="text-2xl font-bold text-teal-400">Displaying {activeScale ? 'Scale' : 'Arpeggio'}: {activeDisplay.name}</h3>
                  <p className="text-slate-300 mt-2">Tonic: <span className="font-semibold text-white">{activeDisplay.tonic || 'N/A'}</span></p>
                  <p className="text-slate-300 mt-1">Notes: <span className="font-mono text-white bg-slate-700 px-2 py-1 rounded">{activeDisplay.notes.join(', ')}</span></p>
              </div>
          )}

        </main>

        <footer className="text-center mt-12 text-slate-500 text-sm">
            <p>Built with React, Tailwind CSS, and Tonal.js</p>
        </footer>
      </div>
    </div>
  );
};

export default App;

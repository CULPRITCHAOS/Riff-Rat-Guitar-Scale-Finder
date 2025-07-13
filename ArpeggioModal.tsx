
import React from 'react';
import type { FoundChord } from '../types';

interface ArpeggioModalProps {
  isOpen: boolean;
  onClose: () => void;
  arpeggios: FoundChord[];
  onArpeggioSelect: (arpeggio: FoundChord) => void;
  isLoading: boolean;
}

const ArpeggioModal: React.FC<ArpeggioModalProps> = ({ isOpen, onClose, arpeggios, onArpeggioSelect, isLoading }) => {
  if (!isOpen) return null;

  const handleSelect = (arpeggio: FoundChord) => {
    onArpeggioSelect(arpeggio);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
      <div className="bg-slate-800 rounded-2xl shadow-2xl w-full max-w-md max-h-[80vh] flex flex-col">
        <div className="p-6 border-b border-slate-700 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-orange-400">Found Arpeggios</h2>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white transition-colors p-2 rounded-full -mr-2"
            aria-label="Close modal"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="p-6 overflow-y-auto">
          {isLoading ? (
            <div className="flex justify-center items-center h-48">
              <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-orange-500"></div>
            </div>
          ) : arpeggios.length > 0 ? (
            <ul className="space-y-2">
              {arpeggios.map((arpeggio) => (
                <li key={arpeggio.name}>
                  <button
                    onClick={() => handleSelect(arpeggio)}
                    className="w-full text-left p-4 bg-slate-700 rounded-lg hover:bg-orange-600 hover:text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  >
                    <span className="font-semibold">{arpeggio.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <div className="text-center text-slate-400 py-10">
              <p className="text-lg">No arpeggios found.</p>
              <p className="text-sm mt-2">Try selecting 3 or 4 notes that form a common chord.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ArpeggioModal;


import React from 'react';
import type { FoundScale } from '../types';

interface ScaleModalProps {
  isOpen: boolean;
  onClose: () => void;
  scales: FoundScale[];
  onScaleSelect: (scale: FoundScale) => void;
  isLoading: boolean;
}

const ScaleModal: React.FC<ScaleModalProps> = ({ isOpen, onClose, scales, onScaleSelect, isLoading }) => {
  if (!isOpen) return null;

  const handleSelect = (scale: FoundScale) => {
    onScaleSelect(scale);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
      <div className="bg-slate-800 rounded-2xl shadow-2xl w-full max-w-md max-h-[80vh] flex flex-col">
        <div className="p-6 border-b border-slate-700 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-sky-400">Found Scales</h2>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white transition-colors p-2 rounded-full -mr-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="p-6 overflow-y-auto">
          {isLoading ? (
            <div className="flex justify-center items-center h-48">
              <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-sky-500"></div>
            </div>
          ) : scales.length > 0 ? (
            <ul className="space-y-2">
              {scales.map((scale) => (
                <li key={scale.name}>
                  <button
                    onClick={() => handleSelect(scale)}
                    className="w-full text-left p-4 bg-slate-700 rounded-lg hover:bg-sky-600 hover:text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-sky-500"
                  >
                    <span className="font-semibold">{scale.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <div className="text-center text-slate-400 py-10">
              <p className="text-lg">No scales found.</p>
              <p className="text-sm mt-2">Try selecting a different combination of notes.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ScaleModal;

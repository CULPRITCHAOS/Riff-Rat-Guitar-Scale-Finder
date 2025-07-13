
import React from 'react';

export const TUNING = ['E4', 'B3', 'G3', 'D3', 'A2', 'E2'];
export const FRET_COUNT = 22;
export const FRET_MARKERS = [3, 5, 7, 9, 15, 17, 19, 21];
export const DOUBLE_FRET_MARKERS = [12, 24];

export const MusicNoteIcon: React.FC<{className?: string}> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55c-2.21 0-4 1.79-4 4s1.79 4 4 4s4-1.79 4-4V7h4V3h-6z" />
  </svg>
);

export const ArpeggioIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19V6.16a1 1 0 011.42-.9l8 6a1 1 0 010 1.8l-8 6A1 1 0 019 19zM5 19V5" />
    </svg>
);


export const InfoIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
    </svg>
);

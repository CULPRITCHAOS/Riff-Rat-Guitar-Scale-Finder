import React from 'react';

const BrandedFooter: React.FC = () => {
  return (
    <footer className="text-center mt-12 pb-8">
      <div className="flex flex-col items-center space-y-4">
        <div className="text-slate-500 text-sm">
          <p>Built with React, Tailwind CSS, and Tonal.js</p>
        </div>
        
        <div className="flex items-center space-x-2 text-lg font-bold">
          <span className="text-slate-400">A</span>
          <div className="relative group">
            <span className="culprit-text bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 bg-clip-text text-transparent font-black text-xl tracking-wider transform transition-all duration-300 group-hover:scale-110">
              CULPRIT
            </span>
            
            {/* Electric sparks animation */}
            <div className="absolute -inset-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="spark spark-1"></div>
              <div className="spark spark-2"></div>
              <div className="spark spark-3"></div>
              <div className="spark spark-4"></div>
            </div>
            
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 via-orange-500/20 to-yellow-500/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            
            {/* Distortion overlay */}
            <div className="absolute inset-0 bg-noise opacity-0 group-hover:opacity-30 transition-opacity duration-300 mix-blend-overlay"></div>
          </div>
          <span className="text-slate-400">Product</span>
        </div>
      </div>
      
      <style>{`
        .culprit-text {
          text-shadow: 0 0 10px rgba(239, 68, 68, 0.5);
          filter: drop-shadow(0 0 8px rgba(251, 146, 60, 0.3));
        }
        
        .spark {
          position: absolute;
          width: 2px;
          height: 2px;
          background: #fbbf24;
          border-radius: 50%;
          box-shadow: 0 0 6px #fbbf24, 0 0 12px #f59e0b, 0 0 18px #d97706;
        }
        
        .spark-1 {
          top: -8px;
          left: 10%;
          animation: spark-flicker 1.5s infinite alternate;
        }
        
        .spark-2 {
          top: 50%;
          right: -8px;
          animation: spark-flicker 1.2s infinite alternate-reverse;
        }
        
        .spark-3 {
          bottom: -8px;
          left: 70%;
          animation: spark-flicker 1.8s infinite alternate;
        }
        
        .spark-4 {
          top: 20%;
          left: -8px;
          animation: spark-flicker 1.4s infinite alternate-reverse;
        }
        
        @keyframes spark-flicker {
          0%, 100% {
            opacity: 0;
            transform: scale(0.8);
          }
          50% {
            opacity: 1;
            transform: scale(1.2);
          }
        }
        
        .bg-noise {
          background-image: 
            radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(120, 219, 255, 0.3) 0%, transparent 50%);
          filter: contrast(1.2) brightness(1.1);
        }
        
        @media (hover: hover) {
          .group:hover .culprit-text {
            animation: metallic-pulse 2s infinite;
          }
        }
        
        @keyframes metallic-pulse {
          0%, 100% {
            filter: drop-shadow(0 0 8px rgba(251, 146, 60, 0.3)) hue-rotate(0deg);
          }
          25% {
            filter: drop-shadow(0 0 12px rgba(239, 68, 68, 0.5)) hue-rotate(15deg);
          }
          50% {
            filter: drop-shadow(0 0 16px rgba(251, 191, 36, 0.6)) hue-rotate(30deg);
          }
          75% {
            filter: drop-shadow(0 0 12px rgba(239, 68, 68, 0.5)) hue-rotate(15deg);
          }
        }
      `}</style>
    </footer>
  );
};

export default BrandedFooter;
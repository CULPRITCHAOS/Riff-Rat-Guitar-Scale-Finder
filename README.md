# Riff Rat 🎸

An interactive guitar fretboard application mobile friendly, that helps musicians discover scales and arpeggios based on selected notes. Perfect for guitarists looking to understand music theory, find new chord progressions, or explore creative possibilities on the fretboard.

![Riff Rat Screenshot](https://via.placeholder.com/800x400/1e293b/ffffff?text=Riff+Rat+Fretboard)

## 🎵 Features

### Interactive Fretboard
- **22-fret guitar fretboard** with standard tuning (E-A-D-G-B-E)
- **Visual fret markers** at positions 3, 5, 7, 9, 12, 15, 17, 19, 21
- **Click to select notes** - up to 6 notes at once
- **Responsive design** that works on desktop and mobile

### Scale Discovery
- **Find matching scales** from your selected notes
- **Comprehensive scale database** powered by Tonal.js
- **Visual scale highlighting** on the fretboard
- **Root note identification** with special highlighting

### Arpeggio/Chord Analysis
- **Discover chord arpeggios** that match your note selection
- **Chord symbol display** with proper notation
- **Arpeggio pattern visualization** on the fretboard
- **Root note emphasis** for better understanding

### User Experience
- **Clean, modern interface** with dark theme
- **Smooth animations** and hover effects
- **Loading states** for better feedback
- **Mobile-responsive** design
- **Accessible** with proper ARIA labels

## 🚀 Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/CULPRITCHAOS/Guitar-Scale-Finder-.git
   cd Guitar-Scale-Finder-
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to see the app

### Building for Production

```bash
npm run build
npm run preview
```

## 🎯 How to Use

### Basic Workflow

1. **Select Notes**: Click on any notes on the fretboard (3-6 notes recommended)
2. **Find Scales**: Click "Find Scales" to discover scales that contain your selected notes
3. **Find Arpeggios**: Click "Find Arpeggios" to find chord arpeggios that match
4. **Visualize**: Selected scales/arpeggios will be highlighted on the fretboard
5. **Clear**: Use "Clear Selection" to start over

### Understanding the Display

- **Blue dots**: Your selected notes
- **Teal dots**: Notes that belong to the active scale/arpeggio
- **Orange dots**: Root notes (tonic) of the scale/arpeggio
- **Gray dots**: Available notes (not selected or in active pattern)

### Tips for Best Results

- **Start with 3-4 notes** for more accurate results
- **Try common chord shapes** (triads, 7th chords) for arpeggio discovery
- **Experiment with different positions** of the same notes
- **Use the root note highlighting** to understand scale/chord relationships

## 🛠️ Technology Stack

- **React 19** - Modern UI framework
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Tonal.js** - Music theory library for scale/chord analysis
- **Vite** - Fast build tool and development server

## 📁 Project Structure

```
src/
├── App.tsx                 # Main application component
├── types.ts               # TypeScript type definitions
├── Fretboard.tsx          # Interactive fretboard component
├── ScaleModal.tsx         # Scale selection modal
├── ArpeggioModal.tsx      # Arpeggio selection modal
├── BrandedFooter.tsx      # Footer with branding
├── constants.tsx          # App constants and icons
├── musicTheory.ts         # Music theory logic and calculations
└── index.tsx             # Application entry point

public/
├── images/               # PNG images directory
└── icon.png             # App icon (add your own)
```

## 🎼 Music Theory Background

### Scales
Scales are sequences of musical notes ordered by pitch. This app can identify:
- **Major scales** (Ionian, Dorian, Phrygian, etc.)
- **Minor scales** (Natural, Harmonic, Melodic)
- **Pentatonic scales** (Major and Minor)
- **Blues scales**
- **Exotic scales** (Whole tone, Diminished, etc.)

### Arpeggios
Arpeggios are the notes of a chord played in sequence. The app recognizes:
- **Triads** (Major, Minor, Diminished, Augmented)
- **7th chords** (Major 7, Minor 7, Dominant 7, etc.)
- **Extended chords** (9th, 11th, 13th)
- **Altered chords** (b5, #5, #11, etc.)

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/amazing-feature`)
3. **Commit your changes** (`git commit -m 'Add amazing feature'`)
4. **Push to the branch** (`git push origin feature/amazing-feature`)
5. **Open a Pull Request**

### Development Guidelines

- Follow the existing code style
- Add TypeScript types for new features
- Test your changes thoroughly
- Update documentation as needed

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🎸 About

Riff Rat was created to help guitarists bridge the gap between playing by ear and understanding music theory. Whether you're a beginner learning your first scales or an advanced player exploring complex harmonies, this tool provides visual and interactive ways to understand the relationships between notes, scales, and chords.

Perfect for:
- **Music students** learning theory
- **Songwriters** finding new progressions
- **Guitar teachers** demonstrating concepts
- **Session musicians** analyzing chord changes
- **Anyone curious** about music theory

---

**Built with ❤️ by [CULPRIT](https://github.com/CULPRITCHAOS)**

*A CULPRIT Product - Empowering musicians through technology*

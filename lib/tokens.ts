// Exact Design Tokens extracted from Figma Nataku Design System
export const TOKENS = {
  colors: {
    primary: {
      10: '#FFFFFF',
      20: '#FFFAF7', // Cream Page Background
      30: '#FFF1EB',
      40: '#FFDACC',
      50: '#FFB9A1',
      60: '#FF9575',
      70: '#FB6A35', // Brand Accent Orange (CTA & Highlights)
      80: '#E65A29',
      90: '#BF441A',
      100: '#993311',
    },
    neutral: {
      10: '#FCFBF9',
      20: '#F6F4F0',
      30: '#EAE6DF',
      40: '#DCD6CC',
      50: '#C0B7A8',
      60: '#998E7D',
      70: '#7A7061',
      80: '#5C5346',
      90: '#3D362D',
      100: '#1F1B16', // Deep Espresso Text Color
    },
    success: {
      50: '#7AB77F',
      60: '#529F58', // Earthy Green On Track
      70: '#407D45',
    },
    danger: {
      50: '#E57766',
      60: '#DD4D37', // Terracotta Red (Urgent Deadlines)
    },
    warning: {
      50: '#F3AE54', // Amber Countdown
    },
  },
  typography: {
    display: "'Source Serif 4', Georgia, serif",
    sans: "'Satoshi', 'Inter', -apple-system, sans-serif",
  },
  transitions: {
    figmaBezier: 'cubic-bezier(0.534, 0, 0.58, 1)',
    spring: 'cubic-bezier(0.2, 0.8, 0.2, 1)',
  },
} as const;

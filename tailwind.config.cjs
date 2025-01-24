/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        mono: ['Share Tech Mono', 'monospace'],
      },
      fontSize: {
        'display': ['clamp(2.75rem, 4vw, 3.5rem)', { lineHeight: '1.2' }],  // 44-56px
        'h1': ['clamp(2rem, 3vw, 2.5rem)', { lineHeight: '1.2' }],         // 32-40px
        'h2': ['clamp(1.75rem, 2.5vw, 2rem)', { lineHeight: '1.3' }],      // 28-32px
        'h3': ['clamp(1.5rem, 2vw, 1.75rem)', { lineHeight: '1.3' }],      // 24-28px
        'h4': ['clamp(1.25rem, 1.5vw, 1.5rem)', { lineHeight: '1.4' }],    // 20-24px
        'base': ['1rem', { lineHeight: '1.5' }],                            // 16px
        'sm': ['0.875rem', { lineHeight: '1.5' }],                         // 14px
        'xs': ['0.75rem', { lineHeight: '1.5' }],                          // 12px
      },
      colors: {
        // Ensuring WCAG contrast ratios of at least 4.5:1
        'text': {
          primary: '#1A1A1A',    // High contrast for main text
          secondary: '#595959',  // Meets 4.5:1 on white
          light: '#737373',      // For larger text (3:1 ratio)
        },
        'background': {
          primary: '#FFFFFF',
          secondary: '#F5F5F5',
          dark: '#1A1A1A',
        }
      },
    },
  },
  plugins: [],
  // Optimize Tailwind
  future: {
    hoverOnlyWhenSupported: true,
  }
} 
// /** @type {import('tailwindcss').Config} */
// export default {
//     darkMode: ["class"],
//     content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
//   theme: {
//   	extend: {
//   		borderRadius: {
//   			lg: 'var(--radius)',
//   			md: 'calc(var(--radius) - 2px)',
//   			sm: 'calc(var(--radius) - 4px)'
//   		},
// 		  gradientColorStops: {
// 			blue: ['#ebf8ff', '#3182ce'],
// 			green: ['#f0fff4', '#38a169'],
// 			yellow: ['#fffaf0', '#d69e2e'],
// 		  },
//   		colors: {
//   			background: 'hsl(var(--background))',
//   			foreground: 'hsl(var(--foreground))',
//   			card: {
//   				DEFAULT: 'hsl(var(--card))',
//   				foreground: 'hsl(var(--card-foreground))'
//   			},
//   			popover: {
//   				DEFAULT: 'hsl(var(--popover))',
//   				foreground: 'hsl(var(--popover-foreground))'
//   			},
//   			primary: {
//   				DEFAULT: 'hsl(var(--primary))',
//   				foreground: 'hsl(var(--primary-foreground))'
//   			},
//   			secondary: {
//   				DEFAULT: 'hsl(var(--secondary))',
//   				foreground: 'hsl(var(--secondary-foreground))'
//   			},
//   			muted: {
//   				DEFAULT: 'hsl(var(--muted))',
//   				foreground: 'hsl(var(--muted-foreground))'
//   			},
//   			accent: {
//   				DEFAULT: 'hsl(var(--accent))',
//   				foreground: 'hsl(var(--accent-foreground))'
//   			},
//   			destructive: {
//   				DEFAULT: 'hsl(var(--destructive))',
//   				foreground: 'hsl(var(--destructive-foreground))'
//   			},
//   			border: 'hsl(var(--border))',
//   			input: 'hsl(var(--input))',
//   			ring: 'hsl(var(--ring))',
//   			chart: {
//   				'1': 'hsl(var(--chart-1))',
//   				'2': 'hsl(var(--chart-2))',
//   				'3': 'hsl(var(--chart-3))',
//   				'4': 'hsl(var(--chart-4))',
//   				'5': 'hsl(var(--chart-5))'
//   			},
//   			sidebar: {
//   				DEFAULT: 'hsl(var(--sidebar-background))',
//   				foreground: 'hsl(var(--sidebar-foreground))',
//   				primary: 'hsl(var(--sidebar-primary))',
//   				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
//   				accent: 'hsl(var(--sidebar-accent))',
//   				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
//   				border: 'hsl(var(--sidebar-border))',
//   				ring: 'hsl(var(--sidebar-ring))'
//   			}
//   		}
//   	}
//   },
//   plugins: [require("tailwindcss-animate")],
// }



/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["class"],
	content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
	theme: {
	  extend: {
		borderRadius: {
		  lg: 'var(--radius)',
		  md: 'calc(var(--radius) - 2px)',
		  sm: 'calc(var(--radius) - 4px)',
		  xl: '1.25rem',
		  '2xl': '1.5rem',
		},
		gradientColorStops: {
		  blue: ['#ebf8ff', '#3182ce'],
		  green: ['#f0fff4', '#38a169'],
		  yellow: ['#fffaf0', '#d69e2e'],
		},
		backgroundImage: {
		  'gradient-blue': 'linear-gradient(to right, #ebf8ff, #3182ce)',
		  'gradient-green': 'linear-gradient(to right, #f0fff4, #38a169)',
		  'gradient-yellow': 'linear-gradient(to right, #fffaf0, #d69e2e)',
		},
		boxShadow: {
		  'hover-card': '0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08)',
		  'focus-card': '0 6px 10px rgba(50, 50, 93, 0.25), 0 3px 6px rgba(0, 0, 0, 0.15)',
		},
		colors: {
		  background: 'hsl(var(--background))',
		  foreground: 'hsl(var(--foreground))',
		  brand: {
			light: '#f3e8ff',
			DEFAULT: '#7f00ff',
			dark: '#3e00a6',
		  },
		},
		animation: {
		  'fade-in': 'fadeIn 0.3s ease-in-out',
		  'scale-up': 'scaleUp 0.5s ease-in-out',
		},
		keyframes: {
		  fadeIn: {
			'0%': { opacity: 0 },
			'100%': { opacity: 1 },
		  },
		  scaleUp: {
			'0%': { transform: 'scale(0.95)' },
			'100%': { transform: 'scale(1)' },
		  },
		},
		screens: {
		  xs: '480px',
		  '3xl': '1600px',
		},
		spacing: {
		  18: '4.5rem',
		  72: '18rem',
		  80: '20rem',
		},
	  },
	},
	plugins: [
	  require("tailwindcss-animate"),
	  require("@tailwindcss/aspect-ratio"), // Add this line
	],
  };
  

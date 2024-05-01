/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				'samsung-sharp-sans': ['SamsungSharpSans', 'sans-serif'],
				'samsung-one': ['SamsungOne', 'sans-serif']
			},
			colors: {
				grayscale: {
					primary: '#F7F7F7',
					secondary: '#EEE',
					tertiary: '#555',
					quaternary: '#757575',
					quinary: '#DDD'
				},
				skyblue: {
					primary: '#2189FF'
				}
			}
		}
	},
	plugins: []
};

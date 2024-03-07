import type {Config} from 'tailwindcss'

export default {
    content: [
      "./src/**/*.{js,jsx,ts,tsx,html}",
    ],
    theme: {
      extend: {},
    },
    plugins: [],
    prefix: 'tw-'
  } satisfies Config
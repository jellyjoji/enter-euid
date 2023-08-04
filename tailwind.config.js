/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./client/**/*.html', './client/**/*.js'],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        search: "url('/assets/icons/search.svg')",
        battery: "url('/assets/icons/battery.svg')",
        lte: "url('/assets/icons/lte.svg')",
        signal: "url('/assets/icons/signal.svg')",
        'home-nofill': "url('/assets/icons/home-nofill.svg')",
        'home-fill': "url('/assets/icons/home-fill.svg')",
        'location-nofill': "url('/assets/icons/location-nofill.svg')",
        'location-fill': "url('/assets/icons/location-fill.svg')",
        board: "url('/assets/icons/board.svg')",
        chat: "url('/assets/icons/chat.svg')",
        'my-fill': "url('/assets/icons/my-fill.svg')",
        'my-nofill': "url('/assets/icons/my-nofill.svg')",
        direction: "url('/assets/icons/direction.svg')",
        'direction-left': "url('/assets/icons/direction-left.svg')",
        more: "url('/assets/icons/more.svg')",
        share: "url('/assets/icons/share.svg')",
      }),
      colors: {
        white: '#ffffff',
        black: '#000000',
        gray1: '#333333',
        gray2: '#4f4f4f',
        gray3: '#828282',
        gray4: '#bdbdbd',
        gray5: '#e0e0e0',
        gray6: '#f2f2f2',
        gray7: '#f9f9f9',
        primary: '#373F67',
        secondary: '#5A85EE',
        tertiary: '#719CF7',
      },
      fontFamily: {
        pretendard: ['pretendard'],
      },
      fontWeight: {
        thin: 100,
        normal: 400,
        bold: 600,
      },
    },
  },
  plugins: [],
};

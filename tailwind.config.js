/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}', ['./app/**/*.{ts,tsx}']],
    theme: {
        extend: {
            fontFamily: {
                sans: '"SF Pro Display",--apple-system,BlinkMacSystemFont,"Segoe UI",Rot',
            },
            fontSize: {
                xs: ['1.3rem', '1'],
                sm: ['1.4rem', '1'],
                md: ['1.6rem', '1'],
                lg: ['2.2rem', '1.3'],
                xl: ['4rem', '1'],
                '2xl': ['5rem', '1'],
                '3xl': ['6rem', '1'],
                '4xl': ['7rem', '1'],
                '5xl': ['8rem', '1'],
            },
            colors: {
                white: '#fff',
                'white-dark': '#d2d3e0',
                'white-a08': 'rgba(255, 255, 255, 0.08)',
                background: '#000212',
                purple: '#575bc7',
                'purple-light': '#666be2',
                gray: '#292a35',
                'gray-dark': '#313248',
                'gray-hover': '#2c2d42',
                'gray-dark-hover': '#3c3d53',
                destructive: '#eb5757',
                'destructive-hover': '#fa6563',
            },
            spacing: {
                0: '0',
                1: '0.4rem',
                2: '0.8rem',
                3: '1.2rem',
                4: '1.6rem',
                5: '2rem',
                6: '2.4rem',
                7: '2.8rem',
                8: '3.2rem',
                9: '3.6rem',
                10: '4rem',
                11: '4.4rem',
                12: '4.8rem',
                'navigation-height': 'var(--navigation-height)',
            },
            backgroundImage: {
                ['primary-gradient']: 'linear-gradient(rgb(44, 45, 60) 0%, rgb(25, 26, 35) 50%)',
            },
            boxShadow: {
                primary: 'rgb(0 0 0 / 15%) 0px 1px 2px',
            },
        },
    },
    plugins: [],
};

const plugin = require('tailwindcss/plugin');
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}', ['./app/**/*.{ts,tsx}']],
    theme: {
        extend: {
            fontFamily: {
                sans: '"Arial",--apple-system,BlinkMacSystemFont,"Segoe UI",Rot',
            },
            fontSize: {
                xs: ['0.75rem', '1'],
                sm: ['0.875rem', '1.25'],
                lg: ['1.125rem', '1.75'],
                xl: ['1.25rem', '1.75'],
                '2xl': ['1.5rem', '2'],
                '3xl': ['1.875rem', '2.25'],
                '4xl': ['2.25rem', '2.5'],
            },
            colors: {
                white: '#fff',
                primary: '#FCD535',
                'primary-focus': '#F0B90B',
                'primary-content': '#181720',
                secondary: '#FEF6D8',
                'secondary-focus': '#F8ECBC',
                'secondary-content': '#C99400',
                accent: '#F5F5F5',
                'accent-focus': '#EAECEF',
                'accent-content': '#707A8A',
                neutral: '#181A2A',
                'neutral-focus': '#131522',
                'neutral-content': '#EDF2F7',
                'base-100': '#FFFFFF',
                'base-200': '#FAFAFA',
                'base-300': '#B7BDC6',
                'base-400': '#474D57',
                'base-content': '#181A2A',
                'base-border': '#CFCFCF',
                info: '#01A9F2',
                'info-content': '#FFFFFF',
                success: '#0ECB81',
                'success-content': '#FFFFFF',
                warning: '#FBBD23',
                'warning-content': '#382800',
                error: '#F6465D',
                'error-content': '#FFFFFF',
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
                'navigation-height': 'var(--navigation-)',
            },
            fontWeight: {
                light: '400',
                normal: '500',
                bold: '600',
            },
            backgroundImage: {},
            boxShadow: {
                lg: '4px 4px 10px 5px rgba(0, 0, 0, 0.35)',
                md: '0px 4px 4px rgba(0, 0, 0, 0.25)',
            },
            animation: {
                scaleIn: 'scaleIn 200ms ease',
                scaleOut: 'scaleOut 200ms ease',
                fadeIn: 'fadeIn 200ms ease',
                fadeOut: 'fadeOut 200ms ease',
                enterFromLeft: 'enterFromLeft 250ms ease',
                enterFromRight: 'enterFromRight 250ms ease',
                exitToLeft: 'exitToLeft 250ms ease',
                exitToRight: 'exitToRight 250ms ease',
            },
            keyframes: {
                enterFromRight: {
                    from: { opacity: 0, transform: 'translateX(200px)' },
                    to: { opacity: 1, transform: 'translateX(0)' },
                },
                enterFromLeft: {
                    from: { opacity: 0, transform: 'translateX(-200px)' },
                    to: { opacity: 1, transform: 'translateX(0)' },
                },
                exitToRight: {
                    from: { opacity: 1, transform: 'translateX(0)' },
                    to: { opacity: 0, transform: 'translateX(200px)' },
                },
                exitToLeft: {
                    from: { opacity: 1, transform: 'translateX(0)' },
                    to: { opacity: 0, transform: 'translateX(-200px)' },
                },
                scaleIn: {
                    from: { opacity: 0, transform: 'rotateX(-10deg) scale(0.9)' },
                    to: { opacity: 1, transform: 'rotateX(0deg) scale(1)' },
                },
                scaleOut: {
                    from: { opacity: 1, transform: 'rotateX(0deg) scale(1)' },
                    to: { opacity: 0, transform: 'rotateX(-10deg) scale(0.95)' },
                },
                fadeIn: {
                    from: { opacity: 0 },
                    to: { opacity: 1 },
                },
                fadeOut: {
                    from: { opacity: 1 },
                    to: { opacity: 0 },
                },
            },
        },
    },
    plugins: [
        plugin(({ matchUtilities }) => {
            matchUtilities({
                perspective: value => ({
                    perspective: value,
                }),
            });
        }),
        plugin(function (helpers) {
            // variants that help styling Radix-UI components
            dataStateVariant('open', helpers);
            dataStateVariant('closed', helpers);
            dataStateVariant('on', helpers);
            dataStateVariant('checked', helpers);
            dataStateVariant('unchecked', helpers);
        }),
    ],
};

function dataStateVariant(
    state,
    {
        addVariant, // for registering custom variants
        e, // for manually escaping strings meant to be used in class names
    },
) {
    addVariant(`data-state-${state}`, ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
            return `.${e(`data-state-${state}${separator}${className}`)}[data-state='${state}']`;
        });
    });

    addVariant(`group-data-state-${state}`, ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
            return `.group[data-state='${state}'] .${e(`group-data-state-${state}${separator}${className}`)}`;
        });
    });

    addVariant(`peer-data-state-${state}`, ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
            return `.peer[data-state='${state}'] ~ .${e(`peer-data-state-${state}${separator}${className}`)}`;
        });
    });
}

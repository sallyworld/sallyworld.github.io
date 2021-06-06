import React from 'react';

import { colors, CssBaseline as CSSBaseline } from '@material-ui/core';
import { createMuiTheme, MuiThemeProvider, StylesProvider } from '@material-ui/core/styles';

import Header from './Header';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({
  children,
}: LayoutProps) => {
  const SpoqaHanSansNeo = [
    {
      fontFamily: 'Spoqa Han Sans Neo',
      fontWeight: 400,
      src: `
        local('Spoqa Han Sans Regular'),
        url('https://cdn.jsdelivr.net/gh/spoqa/spoqa-han-sans@latest/Subset/SpoqaHanSansNeo/SpoqaHanSansNeo-Regular.woff2') format('woff2'),
        url('https://cdn.jsdelivr.net/gh/spoqa/spoqa-han-sans@latest/Subset/SpoqaHanSansNeo/SpoqaHanSansNeo-Regular.woff') format('woff'),
        url('https://cdn.jsdelivr.net/gh/spoqa/spoqa-han-sans@latest/Subset/SpoqaHanSansNeo/SpoqaHanSansNeo-Regular.ttf') format('truetype')
      `,
    },
    {
      fontFamily: 'Spoqa Han Sans Neo',
      fontWeight: 500,
      src: `
        local('Spoqa Han Sans Medium'),
        url('https://cdn.jsdelivr.net/gh/spoqa/spoqa-han-sans@latest/Subset/SpoqaHanSansNeo/SpoqaHanSansNeo-Medium.woff2') format('woff2'),
        url('https://cdn.jsdelivr.net/gh/spoqa/spoqa-han-sans@latest/Subset/SpoqaHanSansNeo/SpoqaHanSansNeo-Medium.woff') format('woff'),
        url('https://cdn.jsdelivr.net/gh/spoqa/spoqa-han-sans@latest/Subset/SpoqaHanSansNeo/SpoqaHanSansNeo-Medium.ttf') format('truetype')
      `,
    },
    {
      fontFamily: 'Spoqa Han Sans Neo',
      fontWeight: 700,
      src: `
        local('Spoqa Han Sans Bold'),
        url('https://cdn.jsdelivr.net/gh/spoqa/spoqa-han-sans@latest/Subset/SpoqaHanSansNeo/SpoqaHanSansNeo-Bold.woff2') format('woff2'),
        url('https://cdn.jsdelivr.net/gh/spoqa/spoqa-han-sans@latest/Subset/SpoqaHanSansNeo/SpoqaHanSansNeo-Bold.woff') format('woff'),
        url('https://cdn.jsdelivr.net/gh/spoqa/spoqa-han-sans@latest/Subset/SpoqaHanSansNeo/SpoqaHanSansNeo-Bold.ttf') format('truetype')
      `,
    },
  ];

  const VarelaRound = [
    {
      fontFamily: 'Varela Round',
      fontWeight: 400,
      fontDisplay: 'swap',
      src: `
        url('https://fonts.gstatic.com/s/varelaround/v13/w8gdH283Tvk__Lua32TysjIfpcuPLdshZhVB.woff2') format('woff2')
      `,
      unicodeRange: 'U+0590-05FF, U+20AA, U+25CC, U+FB1D-FB4F',
    },
    {
      fontFamily: 'Varela Round',
      fontWeight: 400,
      fontDisplay: 'swap',
      src: `
        url('https://fonts.gstatic.com/s/varelaround/v13/w8gdH283Tvk__Lua32TysjIfqMuPLdshZhVB.woff2') format('woff2')
      `,
      unicodeRange: 'U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB',
    },
    {
      fontFamily: 'Varela Round',
      fontWeight: 400,
      fontDisplay: 'swap',
      src: `
        url('https://fonts.gstatic.com/s/varelaround/v13/w8gdH283Tvk__Lua32TysjIfqcuPLdshZhVB.woff2') format('woff2')
      `,
      unicodeRange: 'U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF',
    },
    {
      fontFamily: 'Varela Round',
      fontWeight: 400,
      fontDisplay: 'swap',
      src: `
        url('https://fonts.gstatic.com/s/varelaround/v13/w8gdH283Tvk__Lua32TysjIfp8uPLdshZg.woff2') format('woff2')
      `,
      unicodeRange: 'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD',
    },
  ];

  const theme = createMuiTheme({
    spacing: 4,
    typography: {
      fontFamily: [
        '"Spoqa Han Sans Neo"',
        '-apple-system',
        'sans-serif',
      ].join(','),
      fontSize: 10,
      htmlFontSize: 10,
      button: {
        fontWeight: 400,
      },
    },
    overrides: {
      MuiCssBaseline: {
        '@global': {
          '@font-face': [
            ...SpoqaHanSansNeo,
            ...VarelaRound,
          ],
          html: {
            WebkitFontSmoothing: 'antialiased',
          },
          body: {
            color: colors.grey[800],
            overflowWrap: 'break-word',
            wordBreak: 'keep-all',
          },
        },
      },
    },
  });

  return (
    <MuiThemeProvider theme={theme}>
      <StylesProvider injectFirst>
        <CSSBaseline />
        <Header />
        <main>
          {children}
        </main>
        <footer />
      </StylesProvider>
    </MuiThemeProvider>
  );
};

export default Layout;

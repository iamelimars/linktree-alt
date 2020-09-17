import { createGlobalStyle, ThemeProvider } from "styled-components";
import Head from "next/head";
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Noto Sans', sans-serif;
  }
`;

const theme = {
  colors: {
    primary: "#0070f3",
  },
};

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@300;400;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

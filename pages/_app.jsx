// import App from 'next/app'
import Head from 'next/head';
import { AppBar, Container, Typography } from '@material-ui/core';
import styled from 'styled-components';

const AppBarSpacer = styled.div`
  padding-top: 40px;
`;

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Around the Table</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </Head>

      <AppBar color="inherit" position="fixed">
        <Container>
          <Typography variant="h6">Around the Table</Typography>
        </Container>
      </AppBar>

      <AppBarSpacer className="WTF">
        <Component {...pageProps} />
      </AppBarSpacer>
    </>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp;

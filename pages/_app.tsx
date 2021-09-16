import type { AppProps } from 'next/app';
import CssBaseline from '@mui/material/CssBaseline';
import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider, Theme } from '@mui/material/styles';
import { CacheProvider, EmotionCache } from '@emotion/react';
import theme from '../src/theme';
import createEmotionCache from '../src/createEmotionCache';
import Header from "../src/components/common/Header";
import "../styles/index.scss"
import MobileMenu from "../src/components/common/MobileMenu";
import {Squash as Hamburger} from 'hamburger-react'

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

declare module '@mui/private-theming/defaultTheme' {
  // eslint-disable-next-line no-unused-vars
  interface DefaultTheme extends Theme {}
}

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;

}

const MyApp = (props: MyAppProps) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      // @ts-ignore
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  const [isOpenMenu, setOpenMenu] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  function getWindowDimensions() {
    if (!process.browser) {
      return {
        width: 100,
        height: 100
      };
    }
    const {innerWidth: width, innerHeight: height} = window;

    return {
      width,
      height
    };
  }

  useEffect(() => {
    if (windowDimensions.width < 900) {
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
  }, [windowDimensions.width])

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>My page</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        { !isMobile && <Header />}
        {isMobile && <MobileMenu isOpenMenu={isOpenMenu} setOpenMenu={setOpenMenu}/>}
        {isMobile && <Hamburger  toggled={isOpenMenu} onToggle={()=>setOpenMenu(current=>!current)} />}
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
};

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default MyApp;

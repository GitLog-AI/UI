import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { NextUIProvider, createTheme } from '@nextui-org/react';
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useState } from 'react';
import { LoginContext } from '@/context/LoginPopup';
import { GeistProvider } from '@geist-ui/core';
import ReactGA from "react-ga4";

const lightTheme = createTheme({
  type: "light",
});

const darkTheme = createTheme({
  type: "dark",
});


export default function App({ Component, pageProps }: AppProps) {
  ReactGA.initialize("G-M415S50XJS");

  const [showLogin, setShowLogin] = useState(false);
  return (
    // 2. Use at the root of your app
    <LoginContext.Provider value={{ showLogin, setShowLogin }}>
      <GeistProvider>

        <NextUIProvider>
          <NextThemesProvider
            defaultTheme="system"
            attribute="class"
            value={{
              light: lightTheme.className,
              dark: darkTheme.className,
            }}
          >
            <Component {...pageProps} />
          </NextThemesProvider>
        </NextUIProvider>

      </GeistProvider>
    </LoginContext.Provider>

  );
}


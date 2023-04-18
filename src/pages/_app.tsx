import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { NextUIProvider, createTheme } from '@nextui-org/react';
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useState } from 'react';
import { LoginContext } from '@/context/LoginPopup';
const lightTheme = createTheme({
  type: "light",
});

const darkTheme = createTheme({
  type: "dark",
});


export default function App({ Component, pageProps }: AppProps) {
  const [showLogin, setShowLogin] = useState(false);
  return (
    // 2. Use at the root of your app
    <LoginContext.Provider value={{ showLogin, setShowLogin }}>
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
    </LoginContext.Provider>

  );
}


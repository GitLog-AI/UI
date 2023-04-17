import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { NextUIProvider, createTheme } from '@nextui-org/react';
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { AuthUserProvider } from '../context/Auth'
const lightTheme = createTheme({
  type: "light",
});

const darkTheme = createTheme({
  type: "dark",
});


export default function App({ Component, pageProps }: AppProps) {
  return (
    // 2. Use at the root of your app
    <AuthUserProvider>
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

    </AuthUserProvider>
  );
}


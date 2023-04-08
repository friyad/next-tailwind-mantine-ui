import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { MantineProvider } from "@mantine/core";
import { Montserrat_Alternates } from "next/font/google";
import Footer from "@/components/Footer/Footer";

const monAlter = Montserrat_Alternates({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "fallback",
  variable: "--font-monAlter",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider
      theme={{
        breakpoints: {
          xs: 0,
          xxsm: 320,
          xsm: 440,
          sm: 640,
          md: 768,
          lg: 1024,
          xl: 1280,
          mxl: 1380,
          "2xl": 1536,
          "3xl": 1750,
        },
        fontFamily: "Montserrat Alternates, sans-serif",
        colorScheme: "light",
      }}
    >
      <main className={monAlter.className}>
        <div className="">
          <Component {...pageProps} />
        </div>
        <Footer />
      </main>
    </MantineProvider>
  );
}

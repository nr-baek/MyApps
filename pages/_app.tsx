import "../styles/globals.css";
import type { AppProps } from "next/app";
import { prefix } from "../config/config";
import { PortfolioProvider } from "../context/context";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PortfolioProvider value={{ prefix }}>
      <Component {...pageProps} />
    </PortfolioProvider>
  );
}

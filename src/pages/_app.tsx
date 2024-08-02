import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Analytics />
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS || ""} />
      {console.log("gtag", process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER)}
      <GoogleTagManager
        gtmId={process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER || ""}
      />
      <Component {...pageProps} />
    </>
  );
}

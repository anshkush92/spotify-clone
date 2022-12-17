import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import PlayPauseProvider from "../providers/PlayPause";

// Passing the session to the pageProps object
function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  // Passing the session to the SessionProvider, to be able to use the sessions in the Next Auth

  return (
    <SessionProvider session={session}>
      <PlayPauseProvider>
        <Component {...pageProps} />;
      </PlayPauseProvider>
    </SessionProvider>
  );
}

export default MyApp;

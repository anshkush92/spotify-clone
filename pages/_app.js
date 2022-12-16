import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";

// Passing the session to the pageProps object
function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  // Passing the session to the SessionProvider, to be able to use the sessions in the Next Auth

  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />;
    </SessionProvider>
  );
}

export default MyApp;

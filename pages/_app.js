import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";

import PlayerProvider from "../providers/PlayerProvider";
import SpotifyApiDataProvider from "../providers/SpotifyApiDataProvider";
import SpotifyApiProvider from "../providers/SpotifyApiProvider";

// Passing the session to the pageProps object
function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  // Passing the session to the SessionProvider, to be able to use the sessions in the Next Auth

  console.log(session);

  // const { status } = useSession({
  //   required: true,
  //   // If the user is not authenticated, then redirect to the login page
  //   onUnauthenticated() {
  //     router.push("/auth/signin");
  //   },
  // });

  // // Meaning the user is not logged in or is being logged in
  // if (status === "loading") return <Loader></Loader>;

  return (
    <SessionProvider session={session}>
      <SpotifyApiProvider>
        <SpotifyApiDataProvider>
          <PlayerProvider>
            <Component {...pageProps} />;
          </PlayerProvider>
        </SpotifyApiDataProvider>
      </SpotifyApiProvider>
    </SessionProvider>
  );
}

export default MyApp;

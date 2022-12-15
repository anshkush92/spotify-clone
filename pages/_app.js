import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { RecoilRoot } from "recoil";

// Passing the session to the pageProps object
function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  // Passing the session to the SessionProvider, to be able to use the sessions in the Next Auth

  // Recoil Root is similar to the <Provider store={store}> in Redux, doing so gives the state to the whole app
  return (
    <SessionProvider session={session}>
      <RecoilRoot>
        <Component {...pageProps} />;
      </RecoilRoot>
    </SessionProvider>
  );
}

export default MyApp;

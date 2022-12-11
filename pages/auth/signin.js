import { useEffect } from "react";

import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";

import { getProviders, useSession, signIn } from "next-auth/react";

import Loader from "../../components/Loader";

// Receving the providers as props at the request time
const Signin = ({ providers }) => {
  const { data: session, status } = useSession();
  const router = useRouter();

  /*
   * If the user is logged in, then redirect to the home page, otherwise show the <Loader>
   * when checking the session
   * useEffect() runs only when [session] is changed
   */
  useEffect(() => {
    if (session) {
      router.push("/");
    }
  }, [session, router]);

  // If the session is being checked / user is already logged in , then show the <Loader> instead of showing the login screen
  if (session) return <Loader></Loader>;

  return (
    <div className="flex flex-col absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 gap-y-10 items-center">
      <Head>
        <title>Login - Spotify</title>
        <meta
          name="description"
          content="Custom Login Page, having full authentication, auth powered by next auth"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Image
        src="https://res.cloudinary.com/dicbnntfh/image/upload/v1670752383/spotify-clone/Spotify_Logo_RGB_White_azxdbj.png"
        width={350}
        height={600}
        alt="Spotify Logo for the Login Screen"
        className="animate-pulse object-contain"
      ></Image>

      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button
            onClick={() => signIn(provider.id)}
            className="text-black py-4 px-6 rounded-full bg-[#85E164] transition duration-300 ease-out border border-transparent uppercase font-bold text-xs md:text-base tracking-wider hover:scale-105 hover:bg-[#87e465]"
          >
            Sign in with {provider.name}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Signin;

// ------------------------------------------------------------------------------------------------------------

/*
 * This is the server side props, which is used to get the data from the server side
 * and pass it to the client side as props, run during the request time, runs always if any change in data
 */

// Use getServerSideProps() only if absolutely neccessary because it runs on every request (making it slow) in comparision to getStaticProps() which runs only once during the build time, and then the data is cached

export const getServerSideProps = async (context) => {
  // To get the providers (Google, Facebook, Github, Spotify etc..) used for authentication purposes
  const providers = await getProviders();
  // Now passing thses providers to the client side props
  return {
    props: { providers },
  };
};

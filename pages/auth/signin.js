import React from "react";

import Head from "next/head";
import Image from "next/image";

import { getProviders, useSession, signIn } from "next-auth/react";

// Receving the providers as props at the request time
const Signin = ({ providers }) => {
  const { data: session, status } = useSession();

  return (
    <div>
      <Head>
        <title>Login - Spotify</title>
        <meta
          name="description"
          content="Custom Login Page, having full authentication, auth powered by next auth"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Image
        src="https://res.cloudinary.com/dicbnntfh/image/upload/v1670737521/spotify-clone/spotify2019-830x350_f5k157.jpg"
        width={250}
        height={600}
        alt="Spotify Logo for the Login Screen"
        className="animate-pulse object-contain"
      ></Image>

      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button
            onClick={() => signIn(provider.id)}
            className="text-white py-4 px-6 rounded-full bg-[#1db954] transition duration-300 ease-out border border-transparent uppercase font-bold text-xs md:text-base tracking-wider hover:scale-105 hover:bg-[#0db146]"
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

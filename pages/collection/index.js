import React from "react";

import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import Loader from "../../components/Loader/Loader";

import Left from "../../components/Dashboard/SideBar/Left/Left";
import CollectionProfile from "../../components/Header/Collection-Profile/CollectionProfile";
import Player from "../../components/Player/Player";

const CollectionPage = () => {
  const router = useRouter();

  const { status, data: session } = useSession({
    required: true,
    // If the user is not authenticated, then redirect to the login page
    onUnauthenticated() {
      router.push("/auth/signin");
    },
  });

  // Meaning the user is not logged in or is being logged in
  if (status === "loading") return <Loader></Loader>;

  return (
    <div>
      <Left></Left>
      <section
        className={`ml-60 flex flex-col flex-grow py-6 justify-center gap-y-8 items-start  pl-[calc(240px_-_232px)] pr-[calc(240px_-_216px)]`}
      >
        <CollectionProfile></CollectionProfile>
      </section>
      <Player></Player>
    </div>
  );
};

export default CollectionPage;

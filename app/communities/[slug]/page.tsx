"use client";
import button from "@/app/(root)/developers/[username]/button";
import React from "react";

const page = async ({params}: {params: Promise<{slug: string}>}) => {
  const {slug} = await params;

  const communities: Record<string, { name: string; description: string }> = {
    react:{
      name: "React Community",
      description: "A community for React developers to share knowledge and collaborate on projects."
    },
    nodejs:{
      name: "Node.js Community",
      description: "A community for Node.js developers to share knowledge and collaborate on projects."
    },
    python:{
      name: "Python Community",
      description: "A community for Python developers to share knowledge and collaborate on projects."
    },
    java:{ 
      name: "Java Community",
      description: "A community for Java developers to share knowledge and collaborate on projects."
    }
  };
  const community = communities[slug];
  if (!community) {
    return (
      <div>
        <h1>Community not found</h1>
      </div>
    )
  }
  return (
    <div>
      <h1>{community.name}</h1>
      <p>{community.description}</p>
      <JoinButton communityName={community.name} />

    </div>
  )
}

const JoinButton = ({communityName}: {communityName: string}) => {
  const handleJoin = () => {
    alert(`You have joined the ${communityName}!`);
  };

return (
  <button 
    onClick={handleJoin} 
    className="px-2 py-2 bg-purple-500 text-white rounded hover:bg-purple-300 transition-colors duration-300"
  >
    Join Community
  </button>
  );
};

export default page;
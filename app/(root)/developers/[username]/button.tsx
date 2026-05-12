"use client"
import {useState} from "react";

type FollowButtonProps = {
  username: string
}
export default function FollowButton({ username }: FollowButtonProps) {
     const [isFollowing, setIsFollowing] = useState(false);

     function handleFollow() {
        console.log("Follow button clicked");
         setIsFollowing(!isFollowing);
    }

    return (
        <button
            onClick={handleFollow}
            className="px-2 py-2 bg-gray-500 text-white rounded hover:bg-pink-300 transition-colors duration-300"
        >
            {isFollowing ? "Unfollow" : "Follow"}
        </button>
    );
}

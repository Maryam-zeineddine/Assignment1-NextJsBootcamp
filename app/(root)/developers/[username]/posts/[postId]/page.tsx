import React from 'react'
export const developerPosts : Record<string, Record<string, { title: string; content: string }>> = {
    "Zaynab_Zd": {
      "1": {title: "Zaynab's First Post", content: "This is the content of Zaynab's first post."},
      "2": {title: "Zaynab's Second Post", content: "This is the content of Zaynab's second post."}
    },
    "Ahmad_Fd": {
      "1": {title: "Ahmad's First Post", content: "This is the content of Ahmad's first post."},   
        "2": {title: "Ahmad's Second Post", content: "This is the content of Ahmad's second post."}
    },
    "Fatima_Tf": {
      "1": {title: "Fatima's First Post", content: "This is the content of Fatima's first post."},
        "2": {title: "Fatima's Second Post", content: "This is the content of Fatima's second post."}   
    },
    "Sami_As": {
      "1": {title: "Sami's First Post", content: "This is the content of Sami's first post."},
        "2": {title: "Sami's Second Post", content: "This is the content of Sami's second post."}
    }
  };

const page = async({params}: {params: Promise<{username: string; postId: string}>}) => {
  const {username, postId} = await params;
  type Post = {
        title: string;
        content: string;
    };

  const posts = developerPosts[username];


    return (
    <div>
        <h1>{username}</h1>
        <h2>{posts[postId]?.title}</h2>
        <p>{posts[postId]?.content}</p>
    </div>
  )
}

export default page
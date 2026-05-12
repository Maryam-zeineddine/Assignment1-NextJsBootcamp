import FollowButton from './button';
import React from 'react'

const page = async({params}: {params: Promise<{username: string}>}) => {
  const {username} = await params;
  type Developer = { name: string; role: string; bio: string };

  const developerData: Record<string, { name: string; role: string; bio: string }> = {
  "Zaynab_Zd": { name: "Zaynab_Zd", role: "UI/UX Designer", bio: "Backend developer with 5 years of experience." },
  "Ahmad_Fd": { name: "Ahmad_Fd", role: "Frontend Developer", bio: "Frontend developer specializing in React and Vue." },
  "Fatima_Tf": { name: "Fatima_Tf", role: "Frontend Developer", bio: "Frontend developer with experience in Angular and TypeScript." },
  "Sami_As": { name: "Sami_As", role: "Full Stack Developer", bio: "Full stack developer with expertise in Node.js and Python." },
};
  
  const developer = developerData[username];
  
  return (
    <div>
        <h1>{developer.name} - {developer.role}</h1>
        <p>{developer.bio}</p>
        <a href={`/developers/${username}/posts/1`}>View Post 1 </a> <br />
        <a href={`/developers/${username}/posts/2`}>View Post 2</a>
        <br />
        <FollowButton username={username} />
   
    </div>
  )
}

export default page
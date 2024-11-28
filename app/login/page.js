"use client"
import React from 'react'
import { useSession,signIn,signOut } from 'next-auth/react'
const Login = () => {
  return (
    <div className='text-white py-14 container mx-auto '>
        <h1 className=' text-center font-bold text-3xl'>Login/Signup to Get your Fans Support You</h1>

        <div className="social-loginbtns text-center flex flex-col gap-3 min-h-screen  items-center my-6">
          <button className="bg-white w-64 text-black px-4 py-2 rounded-md flex items-center justify-center">
            <img src="https://static.vecteezy.com/system/resources/previews/011/598/471/original/google-logo-icon-illustration-free-vector.jpg" alt="Apple logo" className="w-6 h-6 mr-2"/>
            Continue with Google
          </button>
          <button className="bg-white w-64 text-black px-4 py-2 rounded-md flex items-center justify-center">
            <img src="https://static.vecteezy.com/system/resources/previews/018/930/584/original/linkedin-logo-linkedin-icon-transparent-free-png.png" alt="Apple logo" className="w-6 h-6 mr-2"/>
            Continue with Linkdin
          </button>
          <button className="bg-white w-64 text-black px-4 py-2 rounded-md flex items-center justify-center">
            <img src="https://pluspng.com/img-png/twitter-logo-png-logo-twitter-in-png-2500.png" alt="Apple logo" className="w-6 h-6 mr-2"/>
            Continue with Twitter
          </button>
          <button className="bg-white w-64 text-black px-4 py-2 rounded-md flex items-center justify-center">
            <img src="https://pngimg.com/uploads/facebook_logos/facebook_logos_PNG19748.png" alt="Apple logo" className="w-6 h-6 mr-2"/>
            Continue with Facebook
          </button>
          <button onClick={()=>{signIn("github")}} className="bg-white w-64 text-black px-4 py-2 rounded-md flex items-center justify-center">
            <img src="https://static-00.iconduck.com/assets.00/github-icon-2048x2048-dpporae2.png" alt="Apple logo" className="w-6 h-6 mr-2"/>
            Continue with Github
          </button>
          <button className="bg-white w-64 text-black px-4 py-2 rounded-md flex items-center justify-center">
            <img src="https://img.favpng.com/9/24/2/apple-logo-scalable-vector-graphics-icon-png-favpng-cY95aZvvhkZ7VaUP2tcNJmi3s.jpg" alt="Apple logo" className="w-6 h-6 mr-2"/>
            Continue with Apple
          </button>
          



        </div>
    </div>
  )
}

export default Login
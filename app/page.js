import Image from "next/image";

export default function Home() {
  return (
     <>
     <div className="flex flex-col gap-4 justify-center items-center text-white h-[40vh]">
       <div className="flex gap-4 justify-center items-center font-bold text-5xl">Lets Raise some funds
        <span><img src="/piggy-bank.gif" alt="funds" width={80} /></span>
       </div>
       <p>
         A mass funding platform to raise fund for needy people and children for their welfares.<br/> Get Funded by your fans and followers. Start funding now!
       </p>
       <div>
       <button type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Start Donate Here</button>

       <button type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Read More</button>
       </div>
     </div>
  
     <div className="bg-white h-1 opacity-10">next div</div>

     <div className="text-white container mx-auto">
       <h1 className="text-3xl font-bold text-center my-14">Your fans can donate you money</h1>
       <div className="flex gap-5 justify-around">
        <div className="item space-y-3 flex flex-col justify-center items-center">
             <img className="bg-slate-900 rounded-full p-1 text-black" width={95} src="/manfund.jpg" alt="manfunding" />
             <p className="font-bold ">Fund yourself</p>
             <p className="text-center">Your fans are available for you to help </p>
          </div>

          <div className="item space-y-3 flex flex-col justify-center items-center">
             <img className="bg-slate-900 rounded-full p-1 text-black" width={80} height={120} src="/piggy-bank.gif" alt="manfunding" />
             <p className="font-bold ">Fund yourself</p>
             <p className="text-center">Your fans are available for you to help </p>
          </div>

          <div className="item space-y-3 flex flex-col justify-center items-center">
             <img className="bg-slate-900 rounded-full p-1 text-black" width={95} src="/group.gif" alt="manfunding" />
             <p className="font-bold ">Fans want to support</p>
             <p className="text-center">Your fans are available for you to help </p>
          </div>
       </div>

       
     </div>

     <div className="bg-white h-1 opacity-10 my-6">next div</div>
     <div className="text-white container mx-auto flex flex-col justify-center items-center p-6">
       <h1 className="text-3xl font-bold text-center my-8">Learn more about us</h1>
       <iframe width="560" height="315" src="https://www.youtube.com/embed/8vRLcdMZl2s?si=3x3LJYBr517mAIxy" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
     </div>
     </>
  );
}

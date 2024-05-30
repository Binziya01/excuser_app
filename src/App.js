import axios from "axios";
import { useState } from "react";


function App() {
  const [excuse,setExcuse]=useState("The alarm betrayed me today")

  const fetchData=async(ex)=>{
    const {data}= await axios.get(`https://excuser-three.vercel.app/v1/excuse/${ex}/`)
    setExcuse(data[0].excuse)

  }
  return (
    <div className="flex bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 min-h-screen justify-center flex-col items-center">
      <h1 className="text-6xl font-semibold text-pink-700">Generate an excuse</h1>
      <div className="flex gap-6 flex-col pt-16">
      <button onClick={()=>{fetchData("funny")}} className="bg-yellow-300 px-7 py-3 rounded-md text-xl">Funny</button>
      <button onClick={()=>{fetchData("developers")}} className="bg-orange-700 px-7 py-3 rounded-md text-xl">Developer</button>
      <button onClick={()=>{fetchData("office")}} className="bg-green-700 px-7 py-3 rounded-md text-xl">Office</button>
      </div>
      
      <h1 className="pt-10 text-xl">{excuse}</h1>
    </div>
  );
}

export default App;

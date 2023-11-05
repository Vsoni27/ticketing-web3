'use client';
import { useContract, useContractRead } from "@thirdweb-dev/react";
import Link from "next/link";
import { useState } from "react";

interface IntObject{
  _hex : string,
  type : Boolean,
}

const events = () => {
  const {contract} = useContract("0xA980FEd749e9b7E9fe75Ec56218d3FF68265217C");
  const { data : data, isLoading : isDataLoading } = useContractRead(contract, "getEvents")

  if(!isDataLoading){
    // setEventData(data);
    console.log(data);
  return (
    <div className="flex flex-col justify-center items-center p-4">
      <div className="flex justify-start w-[90%] mb-3">
        <Link href="/my-events">
          <button className="h-[42px] w-[140px] p-2 bg-blue-900 rounded-xl font-semibold">My events</button>
        </Link>
      </div>
      <div className="grid grid-cols-4 w-[90%] space-x-3 space-y-3">
        {data.map((it :[IntObject, string , string , string , string ,IntObject , IntObject , IntObject , IntObject , string]) =>(
           <div key={BigInt(it[0]._hex)} className="bg-gray-900 rounded-xl transform transition-transform duration-300 hover:scale-105">
            <div >
              <img src={it[9]} alt="" className="rounded-xl h-[200px]"/>
            </div>
            <div className="p-2 text-ellipsis ">
              <h1 className="text-xs my-3 text-gray-300">{it[4]}</h1>
              <h1 className="font-semibold text-white">{it[2]}</h1>
              <p className="text-sm text-gray-400 max-h-[200px] overflow-hidden"> {it[3]} </p>
            </div>
            <Link href={`/events/` + BigInt(it[0]._hex)} className="m-4 text-gray-200 font-semibold">Learn more</Link>
          </div>
        ))}
      </div>
    </div>
  )
};
}

export default events;

"use client";
import { useContract, useContractRead, Web3Button } from "@thirdweb-dev/react";
import { ethers } from "ethers";
import React from "react";

interface Props {
  params: { id: string };
}

interface IntObject {
  _hex: string;
  type: Boolean;
}

const EventDetails = ({ params }: Props) => {
  const { contract } = useContract(
    "0xA980FEd749e9b7E9fe75Ec56218d3FF68265217C"
  );
  const { data, isLoading } = useContractRead(contract, "events", [params.id]);
  if (!isLoading) {
    console.log(data);
    return (
      <div className="m-4 p-3 bg-[#171e2a] rounded-xl text-gray-200 font-semibold">
        <h1 className="text-center font-bold text-2xl">Event Details:</h1>
        <div className="p-5">
          {data.map((item: IntObject | string) => {
            if (typeof item == "string")
              return <div className="text-ellipsis">{item}</div>;
            else {
              return <div>{BigInt(item._hex).toString()}</div>;
            }
          })}
        </div>
        <form className="my-6">
          <input placeholder="Enter your name" className="rounded-md p-3" />
        </form>
        <Web3Button
          contractAddress="0xA980FEd749e9b7E9fe75Ec56218d3FF68265217C"
          action={(contract) => {
            contract.call("buyTicket", [params.id, "Ashwini"], {
              value: ethers.utils.parseEther("1"),
            });
          }}
        >
          buyTicket
        </Web3Button>
      </div>
    );
  }
};

export default EventDetails;

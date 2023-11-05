'use client';
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, TextField } from "@radix-ui/themes";
import { useContract } from "@thirdweb-dev/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { eventSchema } from "../validationSchema";
import { ethers } from "ethers";
type EventFormData = z.infer<typeof eventSchema>;

interface Event {
  title: string;
  description: string;
  location: string;
  startTime: string;
  totalTickets: string;
  ticketPrice: string;
  image: string;
}

const CreateCampaign = () => {
  const { contract } = useContract("0xA980FEd749e9b7E9fe75Ec56218d3FF68265217C");
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<EventFormData>({
    resolver: zodResolver(eventSchema),
  });
  const [data , setData] = useState({
    title : "",
    description : "",
    location : "",
    startTime : "",
    totalTickets : "",
    ticketPrice : "",
    image : "",
  });;

  const onSubmit = handleSubmit(async (data) => {
    setData(data);
    try {
      // const {mutateAsync : CreateCampaign} = useContractWrite(contract , 'createEvent');
      contract!.call("createEvent", [data.title, data.description , data.location, new Date(data.startTime).getTime()/1000 , parseInt(data.totalTickets), parseInt(data.ticketPrice) , data.image] ,{ value :  ethers.utils.parseEther((parseInt(data.totalTickets) * 0.002).toString()) })
    } catch (err) {
      console.error("contract call failure", err);
    }
  });

  return (
    <div className="container mx-auto p-4">
      <h1 className="font-semibold text-center text-gray-400">Create Event Form</h1>
      <form className="flex flex-col space-y-6 justify-center items-center mt-5" onSubmit={onSubmit}>
        <TextField.Root className="flex items-center w-1/2 rounded-full font-semibold h-[50px] text-white">
          <TextField.Input
            placeholder="Title"
            {...register("title")}
          />
        </TextField.Root>
        <TextField.Root className="flex items-center w-1/2 rounded-full font-semibold h-[50px] text-white">
          <TextField.Input
            placeholder="Description"
            {...register("description")}
          />
        </TextField.Root>
        <TextField.Root className="flex items-center w-1/2 rounded-full font-semibold h-[50px] text-white">
          <TextField.Input
            placeholder="Location"
            {...register("location")}
          />
        </TextField.Root>
        <TextField.Root className="flex items-center w-1/2 rounded-full font-semibold h-[50px] text-white">
          <TextField.Input
            placeholder="Enter the Start Time"
            {...register("startTime")}
          />
        </TextField.Root>
        <TextField.Root className="flex items-center w-1/2 rounded-full font-semibold h-[50px] text-white">
          <TextField.Input
            placeholder="Total no of Tickets"
            {...register("totalTickets")}
          />
        </TextField.Root>
        <TextField.Root className="flex items-center w-1/2 rounded-full font-semibold h-[50px] text-white">
          <TextField.Input
            placeholder="Ticket Price"
            {...register("ticketPrice")}
          />
        </TextField.Root>
        <TextField.Root className="flex items-center w-1/2 rounded-full font-semibold h-[50px] text-white">
          <TextField.Input
            placeholder="Image URL"
            {...register("image")}
          />
        </TextField.Root>
        <Button>Submit</Button>
      </form>
    </div>
  );
};

export default CreateCampaign;

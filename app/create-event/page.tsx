"use client";
// pages/FormPage.tsx

import { zodResolver } from "@hookform/resolvers/zod";
import { Button, TextField } from "@radix-ui/themes";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { eventSchema } from "../validationSchema";
import { useState } from "react";

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

// let formFields: string[] = [
//   "title",
//   "description",
//   "location",
//   "startTime",
//   "totalTickets",
//   "ticketPrice",
//   "image",
// ];

const CreateCampaign = () => {
  // const [error , setError] = useState("");
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<EventFormData>({
    resolver: zodResolver(eventSchema),
  });

  const onSubmit = handleSubmit(async (data) => {
    console.log(parseInt(data.totalTickets));
  });

  return (
    <div className="container mx-auto p-4">
      <h1 className="font-semibold text-center text-gray-400">Create Event Form</h1>
      <form className="flex flex-col space-y-6 justify-center items-center mt-5" onSubmit={onSubmit}>
        <TextField.Root className="flex items-center w-1/2 rounded-full font-medium h-[50px] text-gray-900">
          <TextField.Input
            placeholder="Title"
            {...register("title")}
          />
        </TextField.Root>
        <TextField.Root className="flex items-center w-1/2 rounded-full font-medium h-[50px] text-gray-900">
          <TextField.Input
            placeholder="Description"
            {...register("description")}
          />
        </TextField.Root>
        <TextField.Root className="flex items-center w-1/2 rounded-full font-medium h-[50px] text-gray-900">
          <TextField.Input
            placeholder="Location"
            {...register("location")}
          />
        </TextField.Root>
        <TextField.Root className="flex items-center w-1/2 rounded-full font-medium h-[50px] text-gray-900">
          <TextField.Input
            placeholder="Enter the Start Time"
            {...register("startTime")}
          />
        </TextField.Root>
        <TextField.Root className="flex items-center w-1/2 rounded-full font-medium h-[50px] text-gray-900">
          <TextField.Input
            placeholder="Total no of Tickets"
            {...register("totalTickets")}
          />
        </TextField.Root>
        <TextField.Root className="flex items-center w-1/2 rounded-full font-medium h-[50px] text-gray-900">
          <TextField.Input
            placeholder="Ticket Price"
            {...register("ticketPrice")}
          />
        </TextField.Root>
        <TextField.Root className="flex items-center w-1/2 rounded-full font-medium h-[50px] text-gray-900">
          <TextField.Input
            placeholder="Image URL"
            {...register("image")}
          />
        </TextField.Root>
        <Button>Submit Event</Button>
      </form>
    </div>
  );
};

export default CreateCampaign;

import {z} from "zod";

export const eventSchema = z.object({
    title: z.string().min(1, 'Title is required').max(200),
    description: z.string().min(1, 'description is required'),
    location: z.string().min(1, 'Location is required'),
    startTime: z.string().min(1 , 'Date is required.'),
    totalTickets: z.string(),
    ticketPrice: z.string(),
    image: z.string().min(1 , "Image is required."),
})


// interface FormData {
//     addressOwner : string,
//     title : string,
//     description : string,
//     location : string,
//     startTime : Date,
//     totalTickets : Number,
//     ticketPrice : Number,
//     image : string,
//   }
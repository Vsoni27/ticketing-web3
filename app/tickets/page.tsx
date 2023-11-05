// 'use client'
// import React from 'react'
// import { useContract, useContractEvents } from "@thirdweb-dev/react";
// import blockchain from "@/assets/blockchain.jpg";

// const tickets = () => {
//   const { contract } = useContract("0xA980FEd749e9b7E9fe75Ec56218d3FF68265217C");
//   const { data , isLoading } = useContractEvents(contract, "TicketPurchased");
//   if(!isLoading){
//     console.log(data);
//   }

//   return (
//     <>
//     {data?.map((item) => (
//       <div className='flex flex-col space-y-4 justify-center items-center p-4 mt-4'>
//       <div className='bg-blue-800 rounded-xl p-2 w-[150px] flex items-center justify-center font-semibold text-gray-400'>My Tickets</div>
//       <div className='flex items-center w-[59%]'>
//         <img src={blockchain.src} alt="" className='h-[156px] rounded-xl mr-1'/>
//         <div className='w-full mr-4 text-white rounded-xl font-semibold bg-[#34363f] h-[156px] p-4 flex flex-col justify-center'>
//           <h1 className='text-sm text-gray-300'>x3345occ34</h1>
//           {/* Ticket Number */}
//           <div className = 'flex justify-between w-full'>
//             <h1>John Smith</h1>
//             {/* TicketOwnerName */}
//             <h1>696532</h1>
//             {/* eventID */}
//           </div>
//           <h1 className='text-2xl mt-1 max-w-[50%]'>HackCBS 6.0</h1>
//           {/* Event Name */}
//           <h1 className='text-xs'>New Delhi, India</h1>
//           {/* Location */}
//         </div>
//       </div>
//     </div>
//     )}
//     </>
//   )
// }

// export default tickets
// "use client";
// import React from 'react'
// import {gql}from "@apollo/client"
// import "./task.css"

// // export const dynamic = "force-dynamic";

// import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";

// const query = gql`query {
//   tasks {
//     id
//     title
//     isComplete
//   }
// }
// `;

// export default function todoList() {
//   const { data }:any = useSuspenseQuery(query);
//   return (
//     <ul className="task-list"> {/* Apply CSS class to the ul element */}
//       {data.tasks.map((task:any) => (
//         <li key={task.id} className={task.isComplete ? 'completed' : ''}> {/* Apply CSS class based on isComplete value */}
//           {task.id}{task.title}
//         </li>
//       ))}
//     </ul>
//   );
// };
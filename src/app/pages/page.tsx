import React from 'react'
import { getClient } from "../lib/client";

import { gql } from "@apollo/client";

  const query = gql`query {
  tasks {
    id
    title
    isComplete
  }
}
`;
export default async function Page() {
  const { data } = await getClient().query({query});

   console.log(data)
  return (
    <ul>
      {data.tasks.map((task:any) => (
        <li key={task.id}>{task.title}</li>
      ))}
    </ul>
  );
}


// "use client";
// import React from 'react'
// import {gql}from "@apollo/client"

// export const dynamic = "force-dynamic";

// import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";

// const query = gql`query {
//   tasks {
//     id
//     createdAt
//     updatedAt
//     title
//     isComplete
//   }
// }
// `;

// export default function PollPage() {
//   const { data }:any = useSuspenseQuery(query);
//   console.log(data)
//   return (
//     <ul>
//       {data.tasks.map((task:any) => (
//         <li key={task.id}>{task.title}</li>
//       ))}
//     </ul>
//   );
// };

import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider, useQuery, gql } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:8000/graphql",
  cache: new InMemoryCache(),
});

const TASKS_QUERY = gql`
  query {
    tasks {
      id
      createdAt
      updatedAt
      title
      isComplete
    }
  }
`;
const App = () => {
  const { loading, error, data } = useQuery(TASKS_QUERY);
  
  console.log(data.tasks)
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      <h1>Tasks</h1>
      <ul>
        {data.tasks.map((task: any) => (
          <li key={task.id}>
            {task.title} - {task.isComplete ? "Complete" : "Incomplete"}
          </li>
        ))}
      </ul>
    </div>
  );
};

const ApolloApp = () => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

export default ApolloApp;

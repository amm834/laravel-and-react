import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import axios from "axios";

const client = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={client}>
      <Example />
    </QueryClientProvider>
  );
}

function Example() {
  const { isLoading, data, error } = useQuery(["repo"], () => {
    if (isLoading) {
      return "Loading";
    }

    if (error) {
      return "Error: " + error.message;
    }

    return fetch("https://api.github.com/repos/tannerlinsley/react-query").then(
      (res) => res.json()
    );
  });

  return (
    <>
      <h1>hello world</h1>
      <p>{data?.forks_count}</p>
    </>
  );
}

export default App;

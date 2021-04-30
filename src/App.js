import { QueryClientProvider, QueryClient } from "react-query";
import { ChakraProvider, Container } from "@chakra-ui/react";
import Index from "./views/near-earth";

const client = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={client}>
      <ChakraProvider>
        <div style={{ width: "90%", height: 1000, margin: "20px auto" }}>
          <Index />
        </div>
      </ChakraProvider>
    </QueryClientProvider>
  );
}

export default App;

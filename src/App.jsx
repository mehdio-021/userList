import axios from "axios";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import HomePage from "./pages/HomePage";
import { UserLocation } from "./components";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <HomePage />
      <UserLocation />
    </QueryClientProvider>
  );
}

export default App;

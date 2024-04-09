import "./App.css";
import MyForm from "./components/forms/MyForm";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <MyForm />
      </div>
    </QueryClientProvider>
  );
}

export default App;
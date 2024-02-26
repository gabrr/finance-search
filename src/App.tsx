import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect } from "react";
import "tailwindcss/tailwind.css";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Home/Home";

const queryClient = new QueryClient();

type SearchResult = {
  id: string;
  title: string;
  url: string;
  description: string;
  category: "VIDEOS" | "PLAYLISTS" | "BLOG_POSTS";
};

function App() {
  useEffect(() => {
    toast("loaded");
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <header className="bg-red-100">
          <h1>Search UI Challenge</h1>
          [Your UI here]
        </header>
      </div>

      <Home />

      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Bounce}
      />
    </QueryClientProvider>
  );
}

export default App;

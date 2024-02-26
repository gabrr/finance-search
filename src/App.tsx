import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect } from "react";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "tailwindcss/tailwind.css";
import { Animations } from "./components/molecules/animations";
import { Routes } from "./utils";

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
      <Routes />

      {/*<Animations.NotFoundError />
      <Animations.Loading />
      <Animations.NetworkError />
      <Animations.EmptyState />*/}

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

import { useQuery } from "@tanstack/react-query";
import "react-toastify/dist/ReactToastify.css";
import "tailwindcss/tailwind.css";

function Home() {
  const { data } = useQuery({
    queryKey: ["financeItems"],
    queryFn: () => fetch("/api/data"),
    staleTime: 60 * 1_000,
  });

  console.log(data);

  return <main className="w-full max-w-2xl mx-auto p-5"></main>;
}

export default Home;

import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { IFinanceSearchItem } from "src/data/models/IFinanceSearchItem";
import { getFinanceItems } from "src/services/financeItems";
import "tailwindcss/tailwind.css";

function Home() {
  const [query, setQuery] = useState<null | string>("budget");

  const { data, isLoading, error, isError } = useQuery<IFinanceSearchItem[]>({
    queryKey: ["financeItems", query],
    queryFn: () => getFinanceItems(query || ""),
    enabled: query !== null,
    staleTime: 60 * 1_000,
  });

  console.log({ data, isLoading, error, isError });

  return <main className="w-full max-w-2xl mx-auto p-5"></main>;
}

export default Home;

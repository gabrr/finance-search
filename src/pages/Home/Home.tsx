import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { IFinanceSearchItem } from "src/data/models/IFinanceSearchItem";
import { getFinanceItems } from "src/services/financeItems";
import "tailwindcss/tailwind.css";
import SearchForm from "./SearchForm";
import { ListItem } from "src/components/molecules";

function Home() {
  const [query, setQuery] = useState<null | string>("budget");

  const { data, isLoading, error, isError } = useQuery<IFinanceSearchItem[]>({
    queryKey: ["financeItems", query],
    queryFn: () => getFinanceItems(query || ""),
    enabled: query !== null,
    staleTime: 60 * 1_000,
  });

  return (
    <main className="w-full max-w-2xl mx-auto p-5">
      <div
        data-test="search-n-list"
        className="flex flex-col gap-2 pb-6 pt-[30vh]"
      >
        <SearchForm
          onSubmit={(e) => setQuery(e.query)}
          placeholder="Try keywords like 'Budget', 'Save Money'..."
          className="sticky mx-auto top-8 w-full max-w-lg z-20 mb-10"
        />

        {data?.map((item, index) => (
          <ListItem key={item.id} index={index} {...item} />
        ))}
      </div>
    </main>
  );
}

export default Home;

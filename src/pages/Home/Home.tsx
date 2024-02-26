import { useQuery } from "@tanstack/react-query";
import { useCallback, useState } from "react";
import { IFinanceSearchItem } from "src/data/models/IFinanceSearchItem";
import { getFinanceItems } from "src/services/financeItems";
import SearchForm from "./SearchForm";
import {
  Animations,
  ErrorState,
  ListItem,
  NotFoundState,
} from "src/components/molecules";
import { Suggestions } from "src/components/organisms";

function Home() {
  const [query, setQuery] = useState<null | string>(null);

  const { data, isLoading, error, isError } = useQuery<IFinanceSearchItem[]>({
    queryKey: ["financeItems", query],
    queryFn: () => getFinanceItems(query || ""),
    enabled: query !== null,
    staleTime: 60 * 1_000,
  });

  const handleRendering = useCallback(() => {
    if (isLoading)
      return (
        <Animations.Loading data-test="loading" className="w-3/5 mx-auto" />
      );

    if (isError) return <ErrorState message={error?.message} />;

    if (!data?.length && query !== null)
      return (
        <>
          <NotFoundState />
          <Suggestions />
        </>
      );

    return data?.map((item, index) => (
      <ListItem key={item.id} index={index} {...item} />
    ));
  }, [isLoading, isError, data, error?.message, query]);

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

        {handleRendering()}
      </div>
    </main>
  );
}

export default Home;

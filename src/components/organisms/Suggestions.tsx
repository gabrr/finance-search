import { useQuery } from "@tanstack/react-query";
import { IFinanceSearchItem } from "../../data/models/IFinanceSearchItem.d";
import { getFinanceItems } from "../../services/financeItems";
import ListItem from "./ListItem";

const QUERY = "budget";

const Suggestions = () => {
  const { data, isLoading, isError } = useQuery<IFinanceSearchItem[]>({
    queryKey: ["financeItems", QUERY],
    queryFn: () => getFinanceItems(QUERY),
    staleTime: 60 * 1_000,
  });

  if (isLoading || isError) return null;

  return (
    <div>
      <h1 className="text-gray-400 font-bold text-center text-5xl mt-10 mb-8">
        See our suggestions
      </h1>

      <div className="flex flex-col gap-2">
        {data?.map((item, index) => (
          <ListItem key={item.id} index={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Suggestions;

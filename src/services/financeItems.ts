import { IFinanceSearchItem } from "../data/models/IFinanceSearchItem";
import Api from "./api/api";

export const getFinanceItems = async (query: string) =>
  await Api.get<IFinanceSearchItem[]>(`/api/data/?search=${query}`);

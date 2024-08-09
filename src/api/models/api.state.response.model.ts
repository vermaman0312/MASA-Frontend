import { TResponseApiType } from "./api.response.model";

export type TStateResponseApiType = {
  loading: boolean;
  error: TResponseApiType | null;
  data: TResponseApiType | null;
};

import { TResponseApiType } from "./api.response.model";

export type TStateResponseApiType = {
  loading: boolean;
  data: TResponseApiType | null;
};

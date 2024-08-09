import { TResponseBodyApiType } from "./api.reasponse.body.model";

export type TResponseApiType = {
  Type: string;
  Success: boolean;
  Status: number;
  Message: string;
  Data?: TResponseBodyApiType;
};

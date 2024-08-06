export interface getUserNameInterface {
  verifyToken: string;
  ipAddress: string;
}

type APIResponseType = {
  userFirstName: string;
  userLastName: string;
};

export interface ResponseType {
  Type: string;
  Success: boolean;
  Status: number;
  Message: string;
  Data?: APIResponseType;
}

export interface getUserNameResponseAPIInterface {
  loading: boolean;
  data: ResponseType | null;
  error: ResponseType | null;
}

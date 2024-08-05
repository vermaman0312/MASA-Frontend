export interface loginFormAPIInterface {
  userEmailAddress: string;
  userPassword: string;
  verifyToken: string;
}

type ResponseType = {
  Type: string;
  Success: boolean;
  Status: number;
  Message: string;
  Data?: string;
};

export interface loginResponseAPIInterface {
  loading: boolean;
  data: ResponseType | null;
  error: ResponseType | null;
}

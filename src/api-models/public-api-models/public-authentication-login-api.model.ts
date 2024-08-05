export interface loginFormAPIInterface {
  userEmailAddress: string;
  userPassword: string;
  verifyToken: string;
}

type loginResponseType = {
  Type: string;
  Success: boolean;
  Status: number;
  Message: string;
  Data?: string;
};

export interface loginResponseAPIInterface {
  loading: boolean;
  data: loginResponseType | null;
  error: loginResponseType | null;
}

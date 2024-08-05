export interface loginFormAPIInterface {
  userEmailAddress: string;
  userPassword: string;
  verifyToken: string;
}

export interface check2FAInterface {
  verifyToken: string;
  token: string;
}

export interface ResponseType {
  Type: string;
  Success: boolean;
  Status: number;
  Message: string;
  Data?: string;
}

export interface loginResponseAPIInterface {
  loading: boolean;
  data: ResponseType | null;
  error: ResponseType | null;
}

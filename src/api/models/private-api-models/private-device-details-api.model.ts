export interface deviceDetailsApiInterface {
  verifyToken: string;
  token: string;
  browserName: string;
  browserVersion: string;
  browserId: string;
  browserOS: string;
  browserEngine: string;
  ipAddress: string;
  macAddress: string;
  longitude: number;
  latitude: number;
}

export type deviceDetailsResponseType = {
  browserName: string;
  browserVersion: string;
  browserId: string;
  browserOS: string;
  browserEngine: string;
  ipAddress: string;
  macAddress: string;
  longitude: number;
  latitude: number;
  timeStamps: Date;
};

export interface deviceDetailsInterface {
  Type: string;
  Success: boolean;
  Status: number;
  Message: string;
  Data?: deviceDetailsResponseType;
}


export interface deviceDetailsReducerType {
  loading: boolean;
  error: deviceDetailsInterface | null;
  data: deviceDetailsInterface | null;
}
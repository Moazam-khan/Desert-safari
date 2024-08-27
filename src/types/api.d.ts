declare type LoginPayload = {
  wallet_address: string;
  signature: string;
  challenge: string;
};

declare type IUser = {
  id: number;
  username: string;
  email: string | null;
  wallet_address: string;
  first_name: string | null;
  last_name: string | null;
  email_verified: boolean;
  kyc_complete: boolean;
  kyc_status: IKycStatus;
  user_level: IUserLevel;
};

declare type LoginRes = {
  data: {
    access_token: string;
    refresh_token: string;
    user_id: number;
    wallet_address: string;
    exp: number;
  };
  status: string;
};

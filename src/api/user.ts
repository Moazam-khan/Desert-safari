import {request} from '.';
import {endpoints} from './endpoints';

export const challenge = (wallet_address: string) =>
  request.get<{
    data: string;
    status: string;
  }>(endpoints.challenge, {params: {wallet_address}});

export const login = (payload: LoginPayload) =>
  request.post<LoginRes>(endpoints.login, payload);

export const currentUser = () =>
  request.get<{
    data: IUser;
    status: string;
  }>(endpoints.currentUser);

import {challenge, currentUser, login as loginApi} from '@/api';
import {useSelector} from '@/store';
import storage from '@/utils/storage';
import {useMutation} from '@tanstack/react-query';
import {useEffect, useState} from 'react';
import {useAccount, useDisconnect, useSignMessage} from 'wagmi';

const useUser = () => {
  const {address} = useAccount();
  const [isLoading, setIsLoading] = useState(false);
  const {disconnectAsync} = useDisconnect();
  const {signMessageAsync} = useSignMessage();
  const accessToken = useSelector.use.accessToken();
  const setAccessToken = useSelector.use.setAccessToken();
  const setUser = useSelector.use.setUser();
  const logoutUser = useSelector.use.logoutUser();

  const loginMutation = useMutation({
    mutationFn: loginApi,
  });
  const challengeMutation = useMutation({
    mutationFn: challenge,
  });
  const currentUserMutation = useMutation({
    mutationFn: currentUser,
  });

  useEffect(() => {
    const accessToken = storage.get('accessToken');
    if (accessToken) setAccessToken(accessToken);
  }, []);

  useEffect(() => {
    if (address && !accessToken) {
      login(address);
    } else if (address && accessToken) {
      getCurrentUser();
    } else if (!address && accessToken) {
      logout('noAddress but accessToken');
    }
  }, [address, accessToken]);

  const getChallenge = async (walletAddress: string) => {
    try {
      const res = await challengeMutation.mutateAsync(walletAddress);
      if (!res.data.data) throw new Error('No challenge data');
      return res.data.data;
    } catch (error) {
      console.error('getChallengeError', error);
      throw error;
    }
  };

  const login = async (walletAddress: string) => {
    try {
      setIsLoading(true);
      const challenge = await getChallenge(walletAddress);
      const signature = await signMessageAsync({message: challenge});
      if (!signature) throw 'User declined signature request';
      const res = await loginMutation.mutateAsync({
        challenge,
        signature,
        wallet_address: walletAddress,
      });
      if (res.data) {
        setAccessToken(res.data.data.access_token);
        storage.set('accessToken', res.data.data.access_token);
        storage.set('refreshAccessToken', res.data.data.refresh_token);
      }
    } catch (error) {
      console.error('loginError', error);
      logout('loginError');
    } finally {
      setIsLoading(false);
    }
  };

  const getCurrentUser = async () => {
    try {
      setIsLoading(true);
      const res = await currentUserMutation.mutateAsync();
      if (res?.data?.data) {
        setUser(res.data.data);
      }
    } catch (error) {
      console.error('getCurrentUserError', error);
      logout('getCurrentUserError');
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async (debug?: any) => {
    await disconnectAsync();
    storage.clear();
    logoutUser();
    setIsLoading(false);
  };

  return {
    isLoading,
    login,
    logout,
  };
};

export default useUser;

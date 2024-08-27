import {Text} from '@/components';
import Button from '@/components/Button';
import {useBreakpoint} from '@/hooks';
import {useTelegram} from '@/providers/TelegramProvider';
import {useSelector} from '@/store';
import {useWeb3Modal} from '@web3modal/wagmi/react';
import {Flex} from 'antd';
import {useAccount, useDisconnect} from 'wagmi';

const Home = () => {
  const {xs, sm, md, lg, xl, xxl} = useBreakpoint();

  console.table({xs, sm, md, lg, xl, xxl});

  const {open} = useWeb3Modal();
  const accessToken = useSelector.use.accessToken();
  const {address} = useAccount();
  const {disconnect} = useDisconnect();

  const {telegram_user} = useTelegram();

  console.log('Telegram user ?>>>>>>>>>>>>>>', telegram_user);

  const handleLogin = () => {
    open({view: 'Networks'}).then((res) => {
      console.log('handle login res network', res);
    });
  };

  return (
    <Flex
      // align="center"
      justify="center"
      vertical={md ? false : true}
      style={{marginTop: 56}}
      gap={24}>
      {telegram_user?.id ?? <Text>{JSON.stringify(telegram_user)}</Text>}
      {address ? (
        <Flex vertical>
          <Text>{address}</Text>
          <Button onClick={() => disconnect()} size="large" type="primary">
            Disconnect
          </Button>
        </Flex>
      ) : (
        <Button onClick={handleLogin} size="large" type="primary">
          Connect Wallet
        </Button>
      )}
    </Flex>
  );
};

export default Home;

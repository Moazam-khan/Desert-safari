import menu from '@/assets/menu.png';
import wallet from '@/assets/wallet-2.png';
import Sidebar from '@/components/Sidebar';
import {useBreakpoint} from '@/hooks';
import {colors, truncateString} from '@/utils';
import {useWeb3Modal} from '@web3modal/wagmi/react';
import {Flex, Row} from 'antd';
import {useEffect, useState} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import {useAccount, useDisconnect} from 'wagmi';
import Button from './Button';
import Text from './Text';
type Props = {};

const MenuItem = ({
  active = false,
  style,
  children,
  ...rest
}: {
  active: boolean;
} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>) => (
  <div
    style={{
      height: 72,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderBottom: active
        ? `1px solid ${colors.primary}`
        : `1px solid transparent`,
      position: 'relative',
      top: 1,
      cursor: 'pointer',
      transition: 'all 0.2s ease',
    }}
    {...rest}>
    {typeof children === 'string' ? (
      <Text
        style={{
          fontSize: 18,
          position: 'relative',
          bottom: 1,
          color: active ? colors.primary : colors.white50,
        }}>
        {children}
      </Text>
    ) : (
      children
    )}
  </div>
);

const menuFromPath = (path: string) => {
  switch (path) {
    case '/':
      return 'Home';
    default:
      return 'Home';
  }
};

const Header = (props: Props) => {
  const [activeMenu, setActiveMenu] = useState('Home');
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const {md} = useBreakpoint();
  const {address} = useAccount();
  const [loading, setLoading] = useState<boolean>(false);
  let location = useLocation();
  const navigate = useNavigate();
  // const {login, logout, isLoading} = useUser();
  const {open} = useWeb3Modal();
  const {disconnect} = useDisconnect();

  const handleLogin = () => {
    open({view: 'Networks'}).then((res) => {
      console.log('handle login res network', res);
    });
  };

  useEffect(() => {
    setActiveMenu(menuFromPath(location.pathname));
  }, [location]);

  // const onLogout = async () => {
  //   setLoading(true);
  //   await logout();
  //   setLoading(false);
  // };

  return (
    <div
      style={{
        padding: md ? 0 : '0 12px',
        borderBottom: `1px solid ${colors.white20}`,
        background: '#252527',
        width: '100%',
      }}>
      <Flex
        style={{
          height: 72,
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0px 20px 0px 20px',
        }}>
        <Text style={{color: '#3B87F7'}} fs={18} fw={700}>
          Shido tg-bot
        </Text>

        <Flex gap={46} style={{display: md ? 'flex' : 'none'}}>
          <MenuItem
            onClick={() => {
              navigate('/');
            }}
            active={activeMenu === 'Home'}></MenuItem>
        </Flex>
        {md ? (
          <>
            {address ? (
              <Button
                size="large"
                loading={loading}
                onClick={() => disconnect()}>
                {truncateString(address, 12)}
              </Button>
            ) : (
              <Button type="primary" size="large" onClick={handleLogin}>
                Connect Wallet
              </Button>
            )}
          </>
        ) : (
          <Row
            style={{
              alignItems: 'center',
              borderRadius: 10,
              backgroundColor: colors.white10,
              padding: 10,
              gap: 16,
            }}>
            <img src={wallet} style={{width: 24}} />
            <div
              style={{
                height: 24,
                borderRight: '1px solid rgba(255, 255, 255, 0.10)',
              }}
            />
            <img
              src={menu}
              style={{width: 24}}
              onClick={() => setSidebarOpen(true)}
            />
          </Row>
        )}
      </Flex>
      {!md && <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />}
    </div>
  );
};

export default Header;

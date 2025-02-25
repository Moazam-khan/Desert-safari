// import {useUser} from '@/hooks';
import {colors, fontFamily, truncateString} from '@/utils';
import {useWeb3Modal} from '@web3modal/wagmi/react';
import {Col, Modal, Row} from 'antd';
import {useState} from 'react';
import {useAccount, useDisconnect} from 'wagmi';
import Button from './Button';
import Text from './Text';

type Props = {open: boolean; setOpen: (open: boolean) => void};

const Sidebar = ({open, setOpen}: Props) => {
  const [activeMenu, setActiveMenu] = useState('Home');

  const menuItems = ['Home'];
  const {address} = useAccount();
  const {open: openWeb3Modal} = useWeb3Modal();
  // const {logout} = useUser();
  const {disconnect} = useDisconnect();

  return (
    <Modal
      open={open}
      onCancel={() => setOpen(false)}
      width={'70%'}
      closable={false}
      style={{
        position: 'fixed',
        width: '70%',
        minWidth: 300,
        maxWidth: 350,
        borderRadius: 12,
        bottom: 10,
        top: 10,
        left: 10,
        padding: 24,
        border: `0.868px solid ${colors.white20}`,
        background: colors.gray,
        boxShadow: `0px 1.737px 5.211px 0px ${colors.black15}`,
        height: 'calc(100vh - 20px)',
        paddingBottom: 200,
      }}
      styles={{
        body: {
          background: colors.gray,
        },
        content: {
          padding: 0,
          boxShadow: 'none',
          background: colors.gray,
          height: 'calc(100vh - 20px - 25px)',
        },
      }}
      title={null}
      footer={null}>
      <Row>
        <Text
          style={{
            fontSize: 24,
            color: colors.white50,
            fontFamily: fontFamily.darkerGrotesque,
            fontWeight: 600,
            lineHeight: '100%',
            fontStyle: 'italic',
          }}>
          Shido tg-bot
        </Text>
      </Row>
      <Row style={{marginTop: 36}} gutter={[0, 12]}>
        {menuItems.map((item) => (
          <Col
            key={item}
            span={24}
            onClick={() => setActiveMenu(item)}
            style={{
              padding: 8,
              borderBottom: `1px solid ${
                activeMenu === item ? colors.primary : colors.white10
              }`,
            }}>
            <Text
              style={{
                fontSize: 18,
                color: activeMenu === item ? colors.primary : colors.white50,
              }}>
              {item}
            </Text>
          </Col>
        ))}
      </Row>
      <div
        style={{
          position: 'absolute',
          bottom: 25,
          marginRight: 25,
          width: '-webkit-fill-available',
        }}>
        <Row style={{marginTop: 40}}>
          <Button
            onClick={() => {
              if (address) {
                disconnect();
              } else {
                openWeb3Modal({view: 'Networks'});
              }
            }}
            secondary
            block
            size={'large'}>
            {address ? truncateString(address, 12) : 'Connect Wallet'}
          </Button>
        </Row>
        <Row style={{marginTop: 40}} justify={'center'}>
          <Text
            style={{
              fontFamily: fontFamily.darkerGrotesque,
              fontSize: 16,
              fontWeight: 600,
              lineHeight: '100%',
              color: colors.white50,
              textAlign: 'center',
            }}>
            &#169; 2024 PALADINS, all rights reserved
          </Text>
        </Row>
      </div>
    </Modal>
  );
};

export default Sidebar;

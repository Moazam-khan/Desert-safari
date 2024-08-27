import {useBreakpoint} from '@/hooks';
import {Layout} from 'antd';
import React from 'react';
import {Header} from '.';

const {Content} = Layout;

interface Props {
  children: React.ReactNode;
}

const AppLayout = ({children}: Props) => {
  const {md} = useBreakpoint();
  return (
    <Layout
      style={{

        maxWidth: '1920px',
        margin: 'auto',
        backgroundColor:'#b81010'

      }}>
      <Header />
      <Content style={{padding: 15}}>{children}</Content>
      {/* <Footer /> */}
    </Layout>
  );
};

export default AppLayout;

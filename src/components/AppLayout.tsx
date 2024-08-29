import {useBreakpoint} from '@/hooks';
import {Layout} from 'antd';
import React from 'react';
import {Header} from '.';
import {Footer} from '.';

const {Content} = Layout;

interface Props {
  children: React.ReactNode;
}

const AppLayout = ({children}: Props) => {
  const {md} = useBreakpoint();
  return (
    <Layout
      style={{
        backgroundColor: 'white',
        maxWidth: '1220px',
        width:'100%',
        margin: 'auto',
        background: 'white',
      }}>
      <Header />
      <Content style={{padding: 15}}>{children}</Content>
       <Footer />
    </Layout>
  );
};

export default AppLayout;

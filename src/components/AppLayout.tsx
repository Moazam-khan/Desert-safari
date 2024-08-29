import { useBreakpoint } from '@/hooks';
import { Layout } from 'antd';
import React from 'react';
import { Footer, Header } from '.';

const { Content } = Layout;

interface Props {
  children: React.ReactNode;
}

const AppLayout = ({ children }: Props) => {
  const { md } = useBreakpoint();
  return (
    <Layout
      style={{
        backgroundColor: 'white',
        maxWidth: '1440px',
        width: '100%',
        margin: 'auto',
        background: 'white',
      }}>
      <Header />
      <Content style={{}}>{children}</Content>
      <Footer />
    </Layout>
  );
};

export default AppLayout;

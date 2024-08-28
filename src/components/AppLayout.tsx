import { useBreakpoint } from '@/hooks';
import { Layout } from 'antd';
import React from 'react';
import { Header } from '.';

const { Content } = Layout;

interface Props {
  children: React.ReactNode;
}

const AppLayout = ({ children }: Props) => {
  const { md } = useBreakpoint();
  return (
    <Layout
      style={{
        backgroundColor: 'DE3030',
        maxWidth: '1920px',
        width: '100%',
        margin: 'auto',

      }}>
      <Header />
      <Content style={{ padding: 0 }}>{children}</Content>
      {/* <Footer /> */}
    </Layout>
  );
};

export default AppLayout;

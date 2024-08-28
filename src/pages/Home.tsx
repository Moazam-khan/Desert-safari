

// Home.tsx
import React from 'react';
import { Button, Layout, Menu, Typography } from 'antd';

const { Header, Content, Footer } = Layout;
const { Title, Paragraph } = Typography;

const Home: React.FC = () => {
  return (
    <Layout>
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">Home</Menu.Item>
          <Menu.Item key="2">About</Menu.Item>
          <Menu.Item key="3">Contact</Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px', marginTop: '16px' }}>
        <div className="site-layout-content" style={{ padding: 24, minHeight: 380 }}>
          <Title>Welcome to the Home Page</Title>
          <Paragraph>
            This is a simple home page built with Ant Design and TypeScript.
          </Paragraph>
          <Button type="primary">Get Started</Button>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2024 Created by Ant UED</Footer>
    </Layout>
  );
};

export default Home;

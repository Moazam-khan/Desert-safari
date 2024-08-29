import React from 'react';
import { Row, Col, Dropdown, Menu } from 'antd';
import { DownOutlined } from '@ant-design/icons'; // Ant Design down arrow icon
import DSL from '../assets/NewAssets/Header/DSL.png';
import index from '../styles/index.css'



const submenu1 = (
  <Menu    >
    <Row style={{width:'700px',height:'160px',}} >
      <Col   >
        <Menu.Item key="1">Left Item 1</Menu.Item>
        <Menu.Item key="2">Left Item 2</Menu.Item>
        <Menu.Item key="3">Left Item 3</Menu.Item>
      </Col>
      <Col >
        <Menu.Item key="1">Left Item 1</Menu.Item>
        <Menu.Item key="2">Left Item 2</Menu.Item>
        <Menu.Item key="3">Left Item 3</Menu.Item>
      </Col>

    </Row>
  </Menu>
);

const submenu2 = (
  <Menu>
    <Row >
      <Col >
        <Menu.Item key="1">Left Item 1</Menu.Item>
        <Menu.Item key="2">Left Item 2</Menu.Item>
        <Menu.Item key="3">Left Item 3</Menu.Item>
      </Col>
      <Col >
        <Menu.Item key="1">Left Item 1</Menu.Item>
        <Menu.Item key="2">Left Item 2</Menu.Item>
        <Menu.Item key="3">Left Item 3</Menu.Item>
      </Col>

    </Row>
  </Menu>
);

const Navbar = () => {

  return (
    <Row
    style={{
      backgroundColor: 'white',
      height: '126px',
      width: '100%',
      alignItems: 'center', // Center items vertically
      padding: '0 20px', // Padding for left and right sides
    }}
  >
    {/* Icon on the left side */}
    <Col  className="navbar-icon" flex="none">
      <img src={DSL} style={{ width: '150px', height: '105px' }} alt="" />
    </Col>

    {/* Six items on the right side */}
    <Col flex="auto">
      <Row
        justify="end" // Align items to the end (right side)
        align="middle" // Center items vertically
        style={{ margin: '0 -20px' }} // Compensate for the margin on items
      >
        <Col   className="navbar-item"
          style={{ margin: '0 20px', display: 'flex', alignItems: 'center', fontFamily: 'sans-serif' }}
        >
          Home
        </Col>
        <Col  className="navbar-item"
          style={{ margin: '0 20px', display: 'flex', alignItems: 'center', fontFamily: 'sans-serif' }}
        >
          About Us
        </Col>
        <Col className="navbar-item"
          style={{ margin: '0 20px', display: 'flex', alignItems: 'center', fontFamily: 'sans-serif' }}
        >
          Desert Safari Dubai
          <Dropdown overlay={submenu1} trigger={['hover']}>
            <DownOutlined style={{ color: 'red', marginLeft: '8px' }} />
          </Dropdown>
        </Col>
        <Col className="navbar-item"
          style={{ margin: '0 20px', display: 'flex', alignItems: 'center', fontFamily: 'sans-serif' }}
        >
          All Packages
          <Dropdown overlay={submenu2} trigger={['hover']}>
            <DownOutlined style={{ color: 'red', marginLeft: '8px' }} />
          </Dropdown>
        </Col>
        <Col className="navbar-item"
          style={{ margin: '0 20px', display: 'flex', alignItems: 'center', fontFamily: 'sans-serif' }}
        >
          Contact
        </Col>
        <Col  className="navbar-item"
          style={{ margin: '0 20px', display: 'flex', alignItems: 'center', fontFamily: 'sans-serif' }}
        >
          Blog
        </Col>
      </Row>
    </Col>
  </Row>

  );}
  export default Navbar;

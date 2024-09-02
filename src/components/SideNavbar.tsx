import React, { useState } from 'react';
import { MenuOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import DSL from '../assets/NewAssets/Header/DSL.png';

const Sidebar: React.FC = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <>
   <div style={{  display: 'flex', flexDirection: 'column',maxWidth:'1440px' }}>
  {/* First div with text */}
  <div style={{ color: 'white', background:"red" , display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
    <div><text style={{fontFamily:'sans-serif' }}>Phone: xxxx-xxxx-xxxx</text></div>
    <div><text style={{fontFamily:'sans-serif' }}>Email: asdsm@gmail.com</text></div>
  </div>
  </div>

  <div style={{ display: 'flex', alignItems: 'center' }}>
  <MenuOutlined
    onClick={toggleMenu}
    style={{ fontSize: '2em', marginBottom: '16px', color: 'red', background: 'white', padding: '20px' }}
  />

  {menuVisible && (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
      <Menu
        style={{
          width: '100%', // Full width
          backgroundColor: 'white',
        }}
        theme="dark"
      >
        <Menu.Item key="1">
          <Link to="/" style={{ color: 'red', cursor: 'hand', borderBottom: '1px solid red' }}>Home</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/about-us" style={{ color: 'red', borderBottom: '1px solid red' }}>About Us</Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link to="/DubaiDesertSafari" style={{ color: 'red', borderBottom: '1px solid red' }}>Dubai Desert Safari</Link>
        </Menu.Item>
        <Menu.Item key="4">
          <Link to="/pages/AllPackages" style={{ color: 'red', borderBottom: '1px solid red' }}>All Packages</Link>
        </Menu.Item>
        <Menu.Item key="5">
          <Link to="/ContactUs" style={{ color: 'red', borderBottom: '1px solid red' }}>Contact Us</Link>
        </Menu.Item>
        <Menu.Item key="6">
          <Link to="/blog" style={{ color: 'red', borderBottom: '1px solid red' }}>Blog</Link>
        </Menu.Item>
      </Menu>


    </div>


  )} <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '2px', // Ensure sufficient height for visibility
    backgroundColor: 'lightgray' // Background color for debugging
  }}>
    <img style={{ maxHeight: '80px' }} src={DSL} alt="Logo" />
  </div>
</div>





    </>
  );
};

export default Sidebar;

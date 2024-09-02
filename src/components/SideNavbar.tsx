import React, { useState } from 'react';
import { MenuOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

const Sidebar: React.FC = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <>
      <MenuOutlined
        onClick={toggleMenu}
        style={{ fontSize: '4em', marginBottom: '16px', color: 'red', background:'black' , padding:'20px'}} // Icon color changed to blue
      />
      {menuVisible && (
        <Menu
          style={{
            width: '100%', // Full width
            backgroundColor: 'Black',

         }}
          theme="dark" // Ensure the text contrasts well with the background
        >
          <Menu.Item key="1">
            <Link to="/" style={{ color: 'red' ,cursor:'hand'}}>Home</Link> {/* Link text color set to white */}
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/about-us" style={{ color: 'red' }}>About Us</Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="/DubaiDesertSafari" style={{ color: 'red' }}>Dubai Desert Safari</Link>
          </Menu.Item>
          <Menu.Item key="4">
            <Link to="/pages/AllPackages" style={{ color: 'red' }}>All Packages</Link>
          </Menu.Item>
          <Menu.Item key="5">
            <Link to="/ContactUs" style={{ color: 'red' }}>Contact Us</Link>
          </Menu.Item>
          <Menu.Item key="6">
            <Link to="/blog" style={{ color: 'red' }}>Blog</Link>
          </Menu.Item>
        </Menu>
      )}
    </>
  );
};

export default Sidebar;

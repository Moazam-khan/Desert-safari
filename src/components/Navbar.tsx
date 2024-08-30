import React from 'react';
import { Row, Col, Dropdown, Menu,Divider } from 'antd';
import { DownOutlined } from '@ant-design/icons'; // Ant Design down arrow icon
import DSL from '../assets/NewAssets/Header/DSL.png';
import index from '../styles/index.css'



const submenu1 = (
  <Menu style={{ width: '100%', backgroundColor: 'white', padding: '0px' }}>
  <div style={{ width: '700px', height: '160px', backgroundColor: 'white', display: 'flex' }}>
    <div style={{ width: '50%', height: '100%', padding: '10px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <div style={{ color: 'black' }}>Evening Desert Safari</div>
      <Divider style={{ margin: 0, color:'black'}} />
      <div style={{ color: 'black' }}>Morning Desert Safari</div>
      <Divider style={{ margin: 0 }} />
      <div style={{ color: 'black' }}>Overnight Desert Safari</div>
      <Divider style={{ margin: 0 }} />
      <div style={{ color: 'black' }}>Private Desert Safari</div>
    </div>
    <div style={{ width: '50%', padding: '10px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <div style={{ color: 'black' }}>Vip Desert Safari</div>
      <Divider style={{ margin: 0 }} />
      <div style={{ color: 'black' }}>Luxury Desert Safari</div>
      <Divider style={{ margin: 0 }} />
      <div style={{ color: 'black' }}>Desert Safari with Quad Bike</div>
      <Divider style={{ margin: 0 }} />

    </div>
  </div>
</Menu>


);

const submenu2 = (
  <Menu style={{ width: '100%', backgroundColor: 'white', padding: '0px' }}>
  <div style={{ width: '700px', height: '100px', backgroundColor: 'white', display: 'flex' }}>
    <div style={{ width: '50%', height: '100%', padding: '10px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <div style={{ color: 'black' }}>Dubai Sightseeing tours </div>
      <Divider style={{ margin: 0, color:'black'}} />
      <div style={{ color: 'black' }}>Abu Dhabi Tour Packages</div>
      <Divider style={{ margin: 0, color:'black'}} />
      <div style={{ color: 'black' }}>Combo Tours </div>

    </div>
    <div style={{ width: '50%',  padding: '10px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <div style={{ color: 'black' }}>Dubai City Tour PAckages </div>
      <Divider style={{ margin: 0, color:'black'}} />
      <div style={{ color: 'black' }}>Cruise Dinner</div>
       <Divider style={{ margin: 0, color:'black'}} />
      <div style={{ color: 'black' }}>Quad biking Dubai</div>
    </div>
  </div>
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

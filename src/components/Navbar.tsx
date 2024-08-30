import { Row, Col, Dropdown, Menu, Divider } from 'antd';
import { DownOutlined } from '@ant-design/icons'; // Ant Design down arrow icon
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import DSL from '../assets/NewAssets/Header/DSL.png';
import '../styles/index.css'; // Ensure the path is correct

const submenu1 = (
  <Menu style={{ width: '100%', backgroundColor: 'white', padding: '0px' }}>
    <div style={{ width: '700px', height: '160px', backgroundColor: 'white', display: 'flex' }}>
      <div style={{ width: '50%', height: '100%', padding: '10px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <Link to="/evening-desert-safari" style={{ color: 'black' }}>Evening Desert Safari</Link>
        <Divider style={{ margin: 0, color: 'black' }} />
        <Link to="/morning-desert-safari" style={{ color: 'black' }}>Morning Desert Safari</Link>
        <Divider style={{ margin: 0 }} />
        <Link to="/overnight-desert-safari" style={{ color: 'black' }}>Overnight Desert Safari</Link>
        <Divider style={{ margin: 0 }} />
        <Link to="/private-desert-safari" style={{ color: 'black' }}>Private Desert Safari</Link>
      </div>
      <div style={{ width: '50%', padding: '10px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <Link to="/vip-desert-safari" style={{ color: 'black' }}>Vip Desert Safari</Link>
        <Divider style={{ margin: 0 }} />
        <Link to="/luxury-desert-safari" style={{ color: 'black' }}>Luxury Desert Safari</Link>
        <Divider style={{ margin: 0 }} />
        <Link to="/desert-safari-quad-bike" style={{ color: 'black' }}>Desert Safari with Quad Bike</Link>
        <Divider style={{ margin: 0 }} />
      </div>
    </div>
  </Menu>
);

const submenu2 = (
  <Menu style={{ width: '100%', backgroundColor: 'white', padding: '0px' }}>
    <div style={{ width: '700px', height: '100px', backgroundColor: 'white', display: 'flex' }}>
      <div style={{ width: '50%', height: '100%', padding: '10px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <Link to="/dubai-sightseeing-tours" style={{ color: 'black' }}>Dubai Sightseeing tours</Link>
        <Divider style={{ margin: 0, color: 'black' }} />
        <Link to="/abu-dhabi-tour-packages" style={{ color: 'black' }}>Abu Dhabi Tour Packages</Link>
        <Divider style={{ margin: 0, color: 'black' }} />
        <Link to="/combo-tours" style={{ color: 'black' }}>Combo Tours</Link>
      </div>
      <div style={{ width: '50%', padding: '10px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <Link to="/dubai-city-tour-packages" style={{ color: 'black' }}>Dubai City Tour Packages</Link>
        <Divider style={{ margin: 0, color: 'black' }} />
        <Link to="/cruise-dinner" style={{ color: 'black' }}>Cruise Dinner</Link>
        <Divider style={{ margin: 0, color: 'black' }} />
        <Link to="/quad-biking-dubai" style={{ color: 'black' }}>Quad Biking Dubai</Link>
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
      <Col className="navbar-icon" flex="none">
        <img src={DSL} style={{ width: '150px', height: '105px' }} alt="" />
      </Col>

      {/* Six items on the right side */}
      <Col flex="auto">
        <Row
          justify="end" // Align items to the end (right side)
          align="middle" // Center items vertically
          style={{ margin: '0 -20px' }} // Compensate for the margin on items
        >
          <Col className="navbar-item"
            style={{ margin: '0 20px', display: 'flex', alignItems: 'center', fontFamily: 'sans-serif' }}
          >
            <Link to="/">Home</Link>
          </Col>
          <Col className="navbar-item"
            style={{ margin: '0 20px', display: 'flex', alignItems: 'center', fontFamily: 'sans-serif' }}
          >
            <Link to="/about-us">About Us</Link>
          </Col>
          <Col className="navbar-item"
            style={{ margin: '0 20px', display: 'flex', alignItems: 'center', fontFamily: 'sans-serif' }}
          >
            <Link to="/DubaiDesertSafari">Dubai Desert Safari</Link>
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
            <Link to="/ContactUs">Contact</Link>
          </Col>
          <Col className="navbar-item"
            style={{ margin: '0 20px', display: 'flex', alignItems: 'center', fontFamily: 'sans-serif' }}
          >
            <Link to="/blog">Blog</Link>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Navbar;

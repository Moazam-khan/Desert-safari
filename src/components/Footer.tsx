import {RightOutlined} from '@ant-design/icons';
import {Col, Divider, Row} from 'antd';
import Creditcard from '../assets/NewAssets/Footer/CREDITCARD.png';
import Facebook from '../assets/NewAssets/Footer/facebook.png';
import Whatsapp from '../assets/NewAssets/Footer/whatsapp.png';
import index from '../styles/index.css';

const Footer = () => {
  const styles = {
    footer: {padding: '0px', fontFamily: 'Serif-Areon', maxWidth: '1440px'},
    heading: {color: '#de3030', fontFamily: 'Serif-Areon', fontSize: '20px'},
    list: {
      listStyleType: 'none',
      padding: 0,
      fontFamily: 'Serif-Areon',
      fontSize: '14px',
    },
    icon: {color: '#de3030', fontFamily: 'Serif-Areon'},

    divider: {margin: '10px 0px', borderColor: '#f6b3b3'},
  };

  const styles1 = {};

  return (
    <footer style={styles.footer}>
      <Row
        style={{
          backgroundColor: '#f0f2f5',

          display: 'flex',
          justifyContent: 'center',
        }}>
        <Col style={{display: 'flex', flexWrap: 'wrap'}}>

        <Col style={{ padding: '0 10px' }}>
            <h3 style={styles.heading}>UAE Activities</h3>
            <Divider style={styles.divider} />
            <ul style={styles.list}>
              <li>
                <RightOutlined style={styles.icon} /> Desert Safari Dubai
                Packages
              </li>
              <li>
                <RightOutlined style={styles.icon} /> Sightseeing Tours
              </li>
              <li>
                <RightOutlined style={styles.icon} /> Cruise Dinner
              </li>
              <li>
                <RightOutlined style={styles.icon} /> Combo Tours
              </li>
            </ul>
          </Col>
          <Col style={{ padding: '0 10px' }}>
            <h3 style={styles.heading}>Top Selling Tours</h3>
            <Divider style={styles.divider} />
            <ul style={styles.list}>
              <li>
                <RightOutlined style={styles.icon} /> Desert Safari by Bus{' '}
                <span className="blink"> Most Popular</span>
              </li>
              <li>
                <RightOutlined style={styles.icon} /> Evening Desert Safari
                <span className="blink"> Most Popular</span>
              </li>
              <li>
                <RightOutlined style={styles.icon} /> Red Dune Bashing Desert
                Safari
              </li>
              <li>
                <RightOutlined style={styles.icon} /> Desert Safari (Gold){' '}
                <span className="blink"> Most Popular</span>
              </li>
              <li>
                <RightOutlined style={styles.icon} /> Silver Desert Safari in
                Dubai
              </li>
              <li>
                <RightOutlined style={styles.icon} /> Desert Safari with Quad
                Bike
              </li>
              <li>
                <RightOutlined style={styles.icon} /> Morning Desert Safari
                <span className="blink"> Most Popular</span>
              </li>
              <li>
                <RightOutlined style={styles.icon} /> Hummer Desert Safari
              </li>
              <li>
                <RightOutlined style={styles.icon} /> Bullet Point 9
              </li>
            </ul>
          </Col>
          <Col style={{ padding: '0 10px' }}>
            <h3 style={styles.heading}>Top Selling Tours</h3>
            <Divider style={styles.divider} />
            <ul style={styles.list}>
              <li>
                <RightOutlined style={styles.icon} /> Dubai City Tour
                <span className="blink"> Most Popular</span>
              </li>
              <li>
                <RightOutlined style={styles.icon} /> Abu Dhabi City Tour
                <span className="blink"> Most Popular</span>
              </li>
              <li>
                <RightOutlined style={styles.icon} /> Hatta Mountain Safari
              </li>
              <li>
                <RightOutlined style={styles.icon} /> Fujairah City Tour
              </li>
              <li>
                <RightOutlined style={styles.icon} /> Al Ain City Tour
              </li>
              <li>
                <RightOutlined style={styles.icon} /> Oman Musandam Tour
              </li>
              <li>
                <RightOutlined style={styles.icon} /> Marina Cruise Dinner
                <span className="blink"> Most Popular</span>
              </li>
              <li>
                <RightOutlined style={styles.icon} /> Dhow Cruise Dinner
              </li>
            </ul>
          </Col>
          <Col style={{ padding: '0 10px' }}>
            <h3 style={styles.heading}>Top Selling Tours</h3>
            <Divider style={styles.divider} />
            <ul style={styles.list}>
              <li>
                <RightOutlined style={styles.icon} /> Abu Dhabi And Ferrari
                World
              </li>
              <li>
                <RightOutlined style={styles.icon} /> Dubai City Tour + Desert
                Safari
              </li>
              <li>
                <RightOutlined style={styles.icon} /> Dubai City Tour + Dhow
                Cruise Dinner
              </li>
              <li>
                <RightOutlined style={styles.icon} /> Dubai City Tour + Marina
                Cruise Dinner
              </li>
              <li>
                <RightOutlined style={styles.icon} /> Abu Dhabi + Marina Cruise
                Dinner
              </li>
              <li>
                <RightOutlined style={styles.icon} /> Abu Dhabi + Dhow Cruise
                Dinner
              </li>
              <li>
                <RightOutlined style={styles.icon} /> Dubai City Tour + Desert
                Safari + Dhow Cruise Dinner + Abu Dhabi City Tour
              </li>
            </ul>
          </Col>
        </Col>

      </Row>

      <Row
        style={{
          padding: '30px 20px 20px ',
          gap: '20px',
          backgroundColor: 'black',
          display: 'flex',
          justifyContent: 'center',
        }}>
        <Col style={{flex: '1', maxWidth: '32%'}}>
          <h1
            style={{
              fontFamily: 'sans-serif',
              fontSize: '22px',
              padding: '0px 0px 10px',
              margin: '0px 0px 10px',
              color: 'white',
            }}>
            About Us
          </h1>
          <Divider
            style={{
              margin: '-12px 0px',
              borderColor: 'white',
              paddingLeft: '12px',
              paddingRight: '12px',
            }}
          />
          <p
            style={{
              color: 'white',
              lineHeight: '1.6',
              textAlign: 'justify',
              fontSize: '16px',
            }}>
            Desert Safari UAE – offer the Dubai City Tour, Sightseeing Tours,
            Dubai Combo Tour, Dinner Cruise, and all inclusive packages for
            different kinds of desert safari in Dubai with Pick & Drop, BBQ, and
            Camel Ride. Desertsafariuae.ae is the most distinguished Dubai City
            Tour and Desert Safari Company in Dubai, UAE. 100% Customer
            Satisfaction, 5-Star Rating Desert Safari Company in Dubai.
          </p>
        </Col>

        {/* Second Column */}
        <Col>
          <h1
            style={{
              fontFamily: 'sans-serif',
              fontSize: '22px',
              padding: '0px 0px 10px',
              margin: '0px 0px 10px',
              color: 'white',
            }}>
            Desert Safari Dubai
          </h1>
          <Divider style={{margin: '8px 0px', borderColor: 'white'}} />
          <div>
            <iframe
              width="100%"
              height="215"
              src="https://www.youtube.com/embed/_4YnHwUoANI"
              title="Desert Safari Dubai 2019"
              frameBorder="0"
              style={{border: '0'}}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
          </div>
        </Col>

        {/* Third Column */}
        <Col>
          <div style={{marginBottom: '10px'}}>
            <h1
              style={{
                fontFamily: 'sans-serif',
                fontSize: '22px',
                color: 'white',
                margin: '0 0 10px', // Ensure consistent margin
              }}>
              Contact Us
            </h1>
            <Divider style={{margin: '0', borderColor: 'white'}} />
            <div
              style={{
                marginBottom: '0px',
                display: 'flex',
                flexDirection: 'column',
              }}>
              <text
                style={{
                  color: 'white',
                  margin: '10px 0',
                  fontFamily: 'sans-serif',
                }}>
                Email: <span className="red-link">info@desertsafariuae.ae</span>
              </text>
              <text style={{color: 'white', fontFamily: 'sans-serif'}}>
                Phone:<span className="red-link">00971557355443</span>
              </text>
            </div>
          </div>
          <div style={{display: 'flex', gap: '10px', marginBottom: '10px'}}>
            {/* Replace these placeholders with your images */}
            <img
              src={Facebook}
              alt="Icon 1"
              style={{width: '10%', height: '15%'}}
            />
            <img
              src={Whatsapp}
              alt="Icon 2"
              style={{width: '10%', height: '15%'}}
            />
            <img
              src={Creditcard}
              alt="Icon 3"
              style={{width: '25%', height: '15%'}}
            />
          </div>
          <div style={{height: '200px'}}>
            {/* Adjust height as needed */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10401.283340470042!2d72.0343!3d34.1460!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0!2zMzTEwDJc0MDM!5e0!3m2!1sen!2sus!4v1630587086507"
              width="100%"
              height="100%"
              frameBorder="0"
              style={{border: '0'}}
              aria-hidden="false"></iframe>
          </div>
        </Col>
      </Row>
      <Row style={{backgroundColor: 'gray', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '10px 0'}}>
  <text
    style={{
      color: 'white',
      textAlign: 'center',
      fontFamily: 'sans-serif',
    }}>
    Desert Safari UAE Copyright 2020 © All rights reserved.
  </text>
</Row>
    </footer>
  );
};

export default Footer;

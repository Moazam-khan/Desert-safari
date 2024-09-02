import { Button, Input, Typography, Row, Col } from 'antd';
import header from '../assets/NewAssets/Contactus/header.jpg';
import Facebook from '../assets/NewAssets/Footer/facebook.png';
import Whatsapp from '../assets/NewAssets/Footer/whatsapp.png';

const { Text } = Typography;

const ContactForm = () => {
  return (
    <div >

      <div
        style={{
          width: '100%',
          height: '230px',
          backgroundImage: `url(${header})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          position: 'relative',
          textAlign: 'center',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text
          style={{
            fontSize: '2.5em',
            fontWeight: 'bold',
            fontFamily: 'Arial',
            color: 'white',
          }}
        >
          Contact
        </Text>
      </div>



      <div
        style={{
          maxWidth: '1440px',
          margin: '0 auto',
          padding: '0px 30px',
        }}
      >
        <Row gutter={16}>
          {/* First Column */}
          <Col xs={24} sm={24} md={12} lg={12}>
            <div
              style={{
                padding: '16px',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                color: 'black',
              }}
            >
              <h2 style={{ color: 'red' }}>Please Fill The Form Below</h2>
              <p>
                We always value feedback from our customers. If you have any
                questions or comments, please use the form below to contact us
                directly. We make every effort to respond to all requests within an
                hour or two.
              </p>

              <Input
                placeholder="Your Name (required)"
                style={{ borderColor: 'red', borderRadius: '0px' }}
              />
              <Input
                placeholder="Your Email (required)"
                style={{ borderColor: 'red', borderRadius: '0px' }}
              />
              <Input
                placeholder="Your Number (required)"
                style={{ borderColor: 'red', borderRadius: '0px' }}
              />
              <Input
                placeholder="Subject"
                style={{ borderColor: 'red', borderRadius: '0px' }}
              />

              <Input.TextArea
                placeholder="Your Message"
                style={{
                  borderColor: 'red',
                  minHeight: '100px',
                  borderRadius: '0px',
                }}
              />

              <Button
                style={{
                  border: '0px',
                  backgroundColor: 'red',
                  color: 'white',
                  width: '100%',
                  maxWidth: '300px', // Adjusted for better responsiveness
                  height: '40px',
                  fontSize: '14px',
                  borderRadius: '4px',
                }}
                type="primary"
              >
                Submit
              </Button>
            </div>
          </Col>

          {/* Second Column */}
          <Col xs={24} sm={24} md={12} lg={12}>
            <div
              style={{
                padding: '16px',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                color: 'black',
              }}
            >
              <h2 style={{ color: 'red' }}>Contact Us</h2>
              <p>Email: info@desertsafariuae.ae</p>
              <p>Phone: 00971557355443</p>

              <div style={{ display: 'flex', gap: '16px' }}>
                <img
                  src={Facebook}
                  alt="Facebook"
                  style={{ width: '36px', height: '36px' }}
                />
                <img
                  src={Whatsapp}
                  alt="Whatsapp"
                  style={{ width: '36px', height: '36px' }}
                />
              </div>
            </div>
          </Col>
        </Row>
      </div>


    </div>
  );
};

export default ContactForm;

import {Button, Input, Typography} from 'antd';

import header from '../assets/NewAssets/Contactus/header.jpg';
import Facebook from '../assets/NewAssets/Footer/facebook.png';
import Whatsapp from '../assets/NewAssets/Footer/whatsapp.png';

const {Text} = Typography;

const ContactForm = () => {
  return (
    <div>
      <div
        style={{
          width: '100%',
          height: '230px',
          backgroundImage: `url(${header})`, // Use the imported image variable
          backgroundSize: 'cover', // Adjusts the size of the background image
          backgroundPosition: 'center', // Centers the background image
          backgroundRepeat: 'no-repeat', // Prevents the image from repeating
          position: 'relative',
          textAlign: 'center',
          justifyContent: 'center',
          alignItems: 'center',
          display: 'flex',
        }}>
        <Text
          style={{
            fontSize: '2.5em',
            fontWeight: 'bold',
            fontFamily: 'Arial',
          }}>
          Contact
        </Text>
      </div>



      <div
        style={{
          maxWidth: '1440px',
          margin: '0 auto',

          display: 'flex',
          flexDirection: 'row',
          padding:'0px 30px',
          width:'100%'
        }}>
        {/* First Column */}
        <div
          style={{
            flex: '1',
            padding: '16px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            color: 'black',
            marginLeft:'90px'
          }}>
          <h2 style={{color:'red'}} >Please Fill The Form Below</h2>
          <p>
            We always value feedback from our customers. If you have any
            questions or comments, please use the form below to contact us
            directly. We make every effort to respond to all requests within an
            hour or two.
          </p>

          <Input
            placeholder="Your Name (required)"
            style={{borderColor: 'red', borderRadius: '0px'}}
          />
          <Input
            placeholder="Your Email (required)"
            style={{borderColor: 'red', borderRadius: '0px'}}
          />
          <Input
            placeholder="Your Number (required)"
            style={{borderColor: 'red', borderRadius: '0px'}}
          />
          <Input
            placeholder="Subject"
            style={{borderColor: 'red', borderRadius: '0px'}}
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
              width: '50%', // Adjust the width to reduce the size
              height: '40px', // Adjust the height to reduce the size
              fontSize: '14px', // Adjust the font size if needed
              borderRadius: '4px', // Optional: Adjust the border radius for rounded corners
            }}
            type="primary">
            Submit
          </Button>
        </div>

        {/* Second Column */}
        <div
          style={{
            flex: '1',
            padding: '16px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            color: 'black',
          }}>
          <h2 style={{color:'red'}}>Contact Us</h2>
          <p>Email: info@desertsafariuae.ae</p>
          <p>Phone: 00971557355443</p>

          <div style={{display: 'flex', gap: '16px'}}>
            <img
              src={Facebook}
              alt="Facebook"
              style={{width: '36px', height: '36px'}}
            />
            <img
              src={Whatsapp}
              alt="Whatsapp"
              style={{width: '36px', height: '36px'}}
            />
          </div>
        </div>


      </div>
    </div>
  );
};

export default ContactForm;

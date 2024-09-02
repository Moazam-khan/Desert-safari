import { useBreakpoint } from '@/hooks';
import bgImage from '@/pages/images/header.jpg';
import { Typography } from 'antd';

const { Text } = Typography;

const AboutUs = () => {

  const {xs, sm, md,lg} = useBreakpoint();
  return (
    <div style={{
      width: '100%',
      fontFamily: 'Arial',
      background: 'white',
    }}>
     <div style={{
  width: '100%',
  height: '230px',
  backgroundImage: `url(${bgImage})`,
  backgroundSize: 'cover', // Ensures the image covers the div
  backgroundPosition: 'center', // Centers the image
  backgroundRepeat: 'no-repeat', // Prevents the image from repeating
  position: 'relative',
  textAlign: 'center',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}}>
        <Text style={{
          fontSize: xs ? '1em' : '2.5em',
          fontWeight: 'bold',
          fontFamily: 'Arial',
        }}>About Desert Safari UAE</Text>
      </div>
      <section style={{
        maxWidth: '1440px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'left',
        margin: 'auto',
        paddingTop: '10px',
      }}>
        <p style={{
          color: 'grey',
          lineHeight: '2em',
        }}>
          Desert Safari UAE is one of the reputed <em style={{ fontWeight: 'bold', color: '#555E69', }}>Tourism Company in Dubai</em> country UAE with hopes, desire and a clear concept of doing commerce. <a href="/">Desert Safari Dubai</a>  is a young and thrilling destination management company based in UAE, the regional hub of Globe Class tourism. The company is recognized for professionalism, inspiring operational communications, personalized service and imaginative itineraries that facilitate us to provide clients with the most unforgettable experience. Having made the habit of keeping customers happy with outstanding service, we are fully equipped to assist you in planning organizing and satisfying your needs for group, inducement and individual tours and excursions. The company has set supreme standards of performance; you can depend on us to organize it greatest for you.
        </p>

        <h1 style={{
          color: '#de3030',
          fontSize: '22px',
          fontWeight: 'bold',
          margin: 0,
          padding: 0,
        }}>MISSION & VISION</h1>
        <p style={{
          color: 'grey',
          lineHeight: '2em',
        }}>
          Our Mission is to provide outstanding service to each of our clientele and partners. We perform ourselves to the repeated improvement of our processes and fulfillment to requirements during the implementation of our business. To be leaders and tendency setters in the travel industry, in all avenues of business that we are linked with and utilizing all our Labours and elegant services not only during our visitors visit but also accomplish long term associations forever to be recognized as a leading supplier of quality <em style={{ fontWeight: 'bold', color: '#555E69', }}>travel and tourism</em>  related services international.
        </p>

        <h1 style={{
          color: '#de3030',
          fontSize: '22px',
          fontWeight: 'bold',
          margin: 0,
          padding: 0,
        }}>WHY CHOOSE US?</h1>
        <p style={{
          color: 'grey',
          lineHeight: '2em',
        }}>
          Desert Safari UAE is planning to become the middle service platform for tourism industry. Therefore the company’s main objective is to achieve maximum market diffusion and to increase the revenue figures for its worldwide customers. We plans to win a large number of extra clientele and to strengthen its worldwide market leadership as destination marketing expert.
        </p>
      </section>
    </div>
  )
}

export default AboutUs

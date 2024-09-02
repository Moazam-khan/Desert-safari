import CardComp from '@/components/DesertSafariComps/CardComp';
import CardComp2 from '@/components/DesertSafariComps/CardComp2';
import CardComp3 from '@/components/DesertSafariComps/CardComp3';
import card1 from '@/pages/images/card1.jpg';
import card2 from '@/pages/images/card2.jpg';
import card3 from '@/pages/images/card3.jpg';
import card4 from '@/pages/images/card4.jpg';
import card5 from '@/pages/images/card5.jpg';
import card6 from '@/pages/images/card6.jpg';
import card7 from '@/pages/images/card7.jpg';
import card8 from '@/pages/images/card8.jpg';
import card9 from '@/pages/images/card9.jpg';
import DSP1 from '@/assets/NewAssets/Home/DSP1.png';


import {Typography} from 'antd';

const {Text} = Typography;

const DesertSafariDubai = () => {
  return (
    <div
      style={{
        width: '100%',
        fontFamily: 'Arial',
        background: 'white',
      }}>
      <div
  style={{
    width: '100%',
    height: '230px',
    backgroundImage: `url(${DSP1})`,
    backgroundSize: 'cover', // Ensures the image covers the div
    backgroundPosition: 'center', // Centers the image
    backgroundRepeat: 'no-repeat', // Prevents the image from repeating
    position: 'relative',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

  }}></div>
      <div style={{display: 'flex', justifyContent: 'center'}}>

        <Text
          style={{
            fontSize: '2.5em',
            fontWeight: 'bold',
            fontFamily: 'Arial',
            color: 'black',
            display: 'flex',
          }}>
          Our Amazing Top 10 Desert Safari Dubai Tours Packages
        </Text>
      </div>


      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '30px',
          maxWidth: '1440px',
          justifyContent: 'center',
          alignItems: 'center',
          margin: 'auto',
        }}>
          <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '30px',
         width: '1200px',
          justifyContent: 'left',
          alignItems: 'left',
          margin: '0px 0px 0px 50px',
        }}>

        <Text
          style={{
            fontSize: '2.5em',
            fontWeight: 'bold',
            fontFamily: 'Arial',
            color: 'black',
            display: 'flex',
          }}>
          Desert Safari Activities
        </Text>
      </div>
        <CardComp
          imageUrl={card1}
          topText="EVENING DESERT SAFARI (DELUXE)"
          bottomText="4x4 Pickup"
          aedAmount="115"
          buttonText="Book Now"
        />
        {/* Add more Card components as needed */}
        <CardComp
          imageUrl={card2}
          topText="DESERT SAFARI WITH QUAD BIKE (GOLD)"
          bottomText="4x4 Pickup With Quad Bike"
          aedAmount="210"
          buttonText="Book Now"
        />
        <CardComp
          imageUrl={card3}
          topText="DESERT SAFARI WITH DUNE BUGGY 30 MINS (SHARED BUGGY FOR 2)"
          bottomText="4x4 Pickup"
          aedAmount="375"
          buttonText="Book Now"
        />
        <CardComp
          imageUrl={card4}
          topText="PRIVATE DESERT SAFARI"
          bottomText="4x4 Pickup"
          aedAmount="115"
          buttonText="Book Now"
        />
        <CardComp
          imageUrl={card5}
          topText="LUXURY DESERT SAFARI"
          bottomText="Luxury Trip"
          aedAmount="575"
          buttonText="Book Now"
        />
        <CardComp
          imageUrl={card6}
          topText="MORNING DESERT SAFARI"
          bottomText="With Camel Ride"
          aedAmount="120"
          buttonText="Book Now"
        />
        <CardComp
          imageUrl={card7}
          topText="MORNING DESERT SAFARI COMBO OFFER"
          bottomText="4x4 Pickup With Quad Bike"
          aedAmount="295"
          buttonText="Book Now"
        />
        <CardComp
          imageUrl={card8}
          topText="DESERT SAFARI WITH DUNE BUGGY 1 HOUR (SHARED FOR 2)"
          bottomText="4x4 Pickup"
          aedAmount="595"
          buttonText="Book Now"
        />
        <CardComp
          imageUrl={card9}
          topText="VIP DESERT SAFARI"
          bottomText="Serving on table/AC room"
          aedAmount="165"
          buttonText="Book Now"
        />
      </div>







///background CArd
      <div
      style={{
        width: '100%',
        fontFamily: 'Arial',
        background: 'white',
      }}>
      <div
        style={{
          width: '100%',
         // height: '600px',
          backgroundImage: `url(${DSP1})`, // Use the imported image variable


          backgroundRepeat: 'no-repeat', // Prevents the image from repeating
          paddingLeft:'30px',
          paddingRight:'30px',
          paddingBottom:'10px',

          height: '600px',

          backgroundSize: 'contain', // Ensures the whole image fits within the div
          backgroundPosition: 'center', // Centers the image

        }}>  <Text
        style={{
          fontSize: '2.5em',
          fontWeight: 'bold',
          fontFamily: 'Arial',
          color: 'white',
          display: 'flex',

        }}>
    DUBAI DINNER CRUISE
      </Text> <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '30px',
          maxWidth: '1440px',
          justifyContent: 'center',
          alignItems: 'center',
          margin: 'auto',
        }}> <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '30px',
          width: '1200px',
          justifyContent: 'left',
          alignItems: 'left',
          margin: '0px 0px 0px 50px',
        }}>


      </div>
        <CardComp
          imageUrl={card1}
          topText="EVENING DESERT SAFARI (DELUXE)"
          bottomText="4x4 Pickup"
          aedAmount="115"
          buttonText="Book Now"
        />
          <CardComp
          imageUrl={card1}
          topText="EVENING DESERT SAFARI (DELUXE)"
          bottomText="4x4 Pickup"
          aedAmount="115"
          buttonText="Book Now"
        />
          <CardComp
          imageUrl={card1}
          topText="EVENING DESERT SAFARI (DELUXE)"
          bottomText="4x4 Pickup"
          aedAmount="115"
          buttonText="Book Now"
        />
        </div></div>




</div>










//simple card

<div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '30px',
          maxWidth: '1440px',
          justifyContent: 'center',
          alignItems: 'center',
          margin: 'auto',
        }}> <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '30px',
          width: '1200px',
          justifyContent: 'left',
          alignItems: 'left',
          margin: '0px 0px 0px 50px',
        }}>

        <Text
          style={{
            fontSize: '2.5em',
            fontWeight: 'bold',
            fontFamily: 'Arial',
            color: 'black',
            display: 'flex',
          }}>
      Dubai Combo Tours
        </Text>
      </div>
        <CardComp
          imageUrl={card1}
          topText="EVENING DESERT SAFARI (DELUXE)"
          bottomText="4x4 Pickup"
          aedAmount="115"
          buttonText="Book Now"
        />
        {/* Add more Card components as needed */}
        <CardComp
          imageUrl={card2}
          topText="DESERT SAFARI WITH QUAD BIKE (GOLD)"
          bottomText="4x4 Pickup With Quad Bike"
          aedAmount="210"
          buttonText="Book Now"
        />
          <CardComp
          imageUrl={card2}
          topText="DESERT SAFARI WITH QUAD BIKE (GOLD)"
          bottomText="4x4 Pickup With Quad Bike"
          aedAmount="210"
          buttonText="Book Now"
        /></div>







//background card


<div
      style={{
        width: '100%',
        fontFamily: 'Arial',
        background: 'white',
      }}>
      <div
        style={{
          width: '100%',
        // height: '600px',
          backgroundImage: `url(${DSP1})`, // Use the imported image variable
          backgroundSize: 'cover', // Adjusts the size of the background image
          backgroundPosition: 'left', // Centers the background image
          backgroundRepeat: 'no-repeat', // Prevents the image from repeating
          paddingLeft:'30px',
          paddingRight:'30px',
          paddingBottom:'10px'
        }}>  <Text
        style={{
          fontSize: '2.5em',
          fontWeight: 'bold',
          fontFamily: 'Arial',
          color: 'white',
          display: 'flex',

        }}>
    DUBAI DINNER CRUISE
      </Text> <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '30px',
          maxWidth: '1400px',
          justifyContent: 'center',
          alignItems: 'center',
          margin: 'auto',
        }}> <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '30px',
          maxWidth: '1200px',
          justifyContent: 'left',
          alignItems: 'left',
          margin: '0px 0px 0px 50px',
        }}>


      </div>
        <CardComp
          imageUrl={card1}
          topText="EVENING DESERT SAFARI (DELUXE)"
          bottomText="4x4 Pickup"
          aedAmount="115"
          buttonText="Book Now"
        />
          <CardComp
          imageUrl={card1}
          topText="EVENING DESERT SAFARI (DELUXE)"
          bottomText="4x4 Pickup"
          aedAmount="115"
          buttonText="Book Now"
        />
          <CardComp
          imageUrl={card1}
          topText="EVENING DESERT SAFARI (DELUXE)"
          bottomText="4x4 Pickup"
          aedAmount="115"
          buttonText="Book Now"
        />
        </div>


        </div>




</div>










































































































      <div>
        <CardComp2 />
      </div>
      <div>
        <CardComp3 />
      </div>
    </div>

  );
};

export default DesertSafariDubai;

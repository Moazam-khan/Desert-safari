import CardComp from '@/components/DesertSafariComps/CardComp';
import CardComp2 from '@/components/DesertSafariComps/CardComp2';
import CardComp3 from '@/components/DesertSafariComps/CardComp3';
import card1 from '@/pages/images/card1.jpg';
import card10 from '@/pages/images/card10.jpg';
import card11 from '@/pages/images/card11.jpg';
import card12 from '@/pages/images/card12.jpg';
import card13 from '@/pages/images/card13.jpg';
import card14 from '@/pages/images/card14.jpg';
import card15 from '@/pages/images/card15.jpg';
import card2 from '@/pages/images/card2.jpg';
import card3 from '@/pages/images/card3.jpg';
import card4 from '@/pages/images/card4.jpg';
import card5 from '@/pages/images/card5.jpg';
import card6 from '@/pages/images/card6.jpg';
import card7 from '@/pages/images/card7.jpg';
import card8 from '@/pages/images/card8.jpg';
import card9 from '@/pages/images/card9.jpg';
import bgImage from '@/pages/images/header.jpg';
import { Typography } from 'antd';

const { Text } = Typography;

const DesertSafariDubai = () => {
  return (
    <div style={{
      width: '100%',
      fontFamily: 'Arial',
      background: 'white',
    }}>
      <div style={{
        width: '100%',
        height: '230px',
        backgroundImage: `url(${bgImage})`, // Use the imported image variable
        backgroundSize: 'cover', // Adjusts the size of the background image
        backgroundPosition: 'center', // Centers the background image
        backgroundRepeat: 'no-repeat', // Prevents the image from repeating
        position: 'relative',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
      }}>
        <Text style={{
          fontSize: '2.5em',
          fontWeight: 'bold',
          fontFamily: 'Arial',
        }}>Our Amazing Top 10 Desert Safari Dubai Tours Packages</Text>
      </div>


      <div style={{
        display: 'flex', flexWrap: 'wrap', gap: '30px',
        padding: '30px 0px 0px',
        maxWidth: '1440px',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 'auto',
      }}>
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
        <CardComp
          imageUrl={card10}
          topText="DESERT SAFARI IN DUBAI (SILVER)"
          bottomText="Bus Pickup With Quad Bike"
          aedAmount="190"
          buttonText="Book Now"
        />
        <CardComp
          imageUrl={card11}
          topText="DUBAI DESERT SAFARI BY BUS(BASIC)"
          bottomText="Bus Pickup"
          aedAmount="110"
          buttonText="Book Now"
        />
        <CardComp
          imageUrl={card12}
          topText="RED DUNE BASHING DESERT SAFARI"
          bottomText="4x4 Car Pickup"
          aedAmount="180"
          buttonText="Book Now"
        />
        <CardComp
          imageUrl={card13}
          topText="CAMEL RIDE DUBAI"
          bottomText="Inc. 5% VAT"
          aedAmount="195"
          buttonText="Book Now"
        />
        <CardComp
          imageUrl={card14}
          topText="HUMMER DESERT SAFARI"
          bottomText="Desert Safari with Hummer"
          aedAmount="495"
          buttonText="Book Now"
        />
        <CardComp
          imageUrl={card15}
          topText="OVERNIGHT DESERT SAFARI"
          bottomText="Minimum required persons 2"
          aedAmount="390"
          buttonText="Book Now"
        />
      </div>


      <div>
        <CardComp2 />
      </div>
      <div>
        <CardComp3 />
      </div>

    </div>
  )
}

export default DesertSafariDubai

import {Button, Input, Typography, Card} from 'antd';

import header from '../assets/NewAssets/Contactus/header.jpg';
import pic1 from '../assets/NewAssets/Blog/pic1.jpg';
import pic2 from '../assets/NewAssets/Blog/pic2.jpeg';
import pic3 from '../assets/NewAssets/Blog/pic3.jpg';
import pic4 from '../assets/NewAssets/Blog/pic4.jpg';
import Blogcardprop from '@/components/Blogcardprop';

const {Text} = Typography;

const Blog = () => {
  return (
    <div style={{paddingBottom: '30px'}}>
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
          Let’s Go On An Adventure
        </Text>


      </div>
      <div style={{ paddingTop: '30px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly',gap:'16px' }}>
      <Blogcardprop
        image={pic1}
        heading="Interesting Things you can do at Jumeirah Beach Dubai"
        parag="Jumeirah Beach is undoubtedly one of the most beautiful places in Dubai. It is partly due to the beach and the hotel nearby. The beach was once a major fishing and pearl farming port. Since then, the city has drastically changed, and the beach is now a posh residential and commercial area with frequent visits from elite families and tourists. Jumeirah Beach is a public opened place and receives thousands of visitors each day. You can sit, relax, and bath under the bright sun on this exotic beach. Other than this, there are a few interesting things you can do"
      />
      <Blogcardprop
        image={pic2}
        heading="Things you can do in Sheikh Zayed Road"
        parag="No matter where you are but travelling, highways are always boring. But UAE doesn’t do anything remotely boring. Hence, their iconic highway Sheikh Zayed Road have scenic views of building touching the cloud. The road was constructed to connect UAE’s two biggest cities – Dubai and Abu Dhabi, which makes it the longest highway in Emirates. You wouldn’t think that a highway can be a tourist attraction and Dubai prove everyone wrong once again. The area is loaded by dazzling towers touching the skyline. As you travel on these wide roads, your eyes are just in awe of these building’s"
      />
      <Blogcardprop
        image={pic3}
        heading="Things you need to know about Jumeirah Mosque"
        parag="Five times a day across Dubai, a melodic call echoes the cities. This call to pray is listened to by thousands of people rushing in the nearest mosque minarets. It feels like the city is put on hold for a few minutes. To better understand the Islamic influence on the city, you should definitely visit the Jumeirah Mosque. It is Dubai’s only mosque that is open to non-Muslims. What makes Jumeirah Mosque special? The mosque is located on Jumeirah Beach Road in the posh neighbourhood of Jumeirah. It was built back in 1976, and its design is quite multi-cultural."
      />
      <Blogcardprop
        image={pic4}
        heading="Solid Reasons to get your desert Safari Dubai package booked right away"
        parag="In recent years, the city of Dubai has become one of the complete cities in terms of infrastructure and tourist attractions such as Burj Khalifa, Burj al Arab, and even shopping centers such as the Dubai Mall itself, among others. Luxury and ostentation, one of Dubai’s hallmarks, can be seen in many aspects of the city, including the city’s luxurious shopping malls, where locals have a favorite hobby to stroll and shop. In addition to this luxury, everything is big in Dubai, so you will find the tallest building, the most luxurious hotel, and even the largest shopping center in"
      />


      {/* Add more Blogcardprop components as needed */}
    </div>
    <div style={{ paddingTop: '30px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly' ,gap:'16px'}}>
      <Blogcardprop
        image={pic1}
        heading="Interesting Things you can do at Jumeirah Beach Dubai"
        parag="Jumeirah Beach is undoubtedly one of the most beautiful places in Dubai. It is partly due to the beach and the hotel nearby. The beach was once a major fishing and pearl farming port. Since then, the city has drastically changed, and the beach is now a posh residential and commercial area with frequent visits from elite families and tourists. Jumeirah Beach is a public opened place and receives thousands of visitors each day. You can sit, relax, and bath under the bright sun on this exotic beach. Other than this, there are a few interesting things you can do"
      />
      <Blogcardprop
        image={pic2}
        heading="Things you can do in Sheikh Zayed Road"
        parag="No matter where you are but travelling, highways are always boring. But UAE doesn’t do anything remotely boring. Hence, their iconic highway Sheikh Zayed Road have scenic views of building touching the cloud. The road was constructed to connect UAE’s two biggest cities – Dubai and Abu Dhabi, which makes it the longest highway in Emirates. You wouldn’t think that a highway can be a tourist attraction and Dubai prove everyone wrong once again. The area is loaded by dazzling towers touching the skyline. As you travel on these wide roads, your eyes are just in awe of these building’s"
      />
      <Blogcardprop
        image={pic3}
        heading="Things you need to know about Jumeirah Mosque"
        parag="Five times a day across Dubai, a melodic call echoes the cities. This call to pray is listened to by thousands of people rushing in the nearest mosque minarets. It feels like the city is put on hold for a few minutes. To better understand the Islamic influence on the city, you should definitely visit the Jumeirah Mosque. It is Dubai’s only mosque that is open to non-Muslims. What makes Jumeirah Mosque special? The mosque is located on Jumeirah Beach Road in the posh neighbourhood of Jumeirah. It was built back in 1976, and its design is quite multi-cultural."
      />
      <Blogcardprop
        image={pic4}
        heading="Solid Reasons to get your desert Safari Dubai package booked right away"
        parag="In recent years, the city of Dubai has become one of the complete cities in terms of infrastructure and tourist attractions such as Burj Khalifa, Burj al Arab, and even shopping centers such as the Dubai Mall itself, among others. Luxury and ostentation, one of Dubai’s hallmarks, can be seen in many aspects of the city, including the city’s luxurious shopping malls, where locals have a favorite hobby to stroll and shop. In addition to this luxury, everything is big in Dubai, so you will find the tallest building, the most luxurious hotel, and even the largest shopping center in"
      />


      {/* Add more Blogcardprop components as needed */}
    </div>
    </div>
  );
};

export default Blog;

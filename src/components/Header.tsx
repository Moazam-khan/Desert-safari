import {Row, Col, Button, Input,} from 'antd';
import circlearrow from '../assets/NewAssets/Header/circlearrow.svg';

import { useState } from 'react';

const Header = () => {
  const [isIconMoved, setIsIconMoved] = useState(false);
  const [InputText,  setInputText] = useState('');

  const handleMouseEnter = () => {
    setIsIconMoved((prev) => !prev); // Toggle the position
    setInputText((prev) =>
      prev =='Search' ? 'Search' : 'Search Now'
    ); // Toggle between 'Search' and 'Search Now'
  };
  return (
    <Row>
       <Row
    style={{
      backgroundColor: '#DE3030',
      height: '48px',
      width: '100%',
      justifyContent: 'end',
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      lineHeight: '40px', // Matches the height of the input for vertical centering
    }}
  >
    <span
      style={{ color: 'white', fontFamily: 'sans-serif', fontSize: '16px' }}
    >
      Search?
    </span>



      <Input
        style={{
          padding: '0px 14px 0px 40px', // Add left padding to make space for the icon
          width: '190px',
          height: '30px', // Set the height for vertical centering
          borderRadius: '0px',
          background: 'white',
          border: '1px solid white', // Changed to a visible border
          textAlign: 'center', // Centers the placeholder text
          display: 'flex',
          alignItems: 'center', // Centers the placeholder text vertically





        }}
        placeholder="Enter a Keyword"
      />


    <div style={{ position: 'relative' }}>
    <img
        src={circlearrow}
        alt="Circle Arrow"
        style={{
          position: 'absolute',
          left: isIconMoved ? 'calc(100% - 30px)' : '0px', // Move to the right side of the input field on hover

          top: '51%',
          transform: 'translateY(-50%)',
          height: '90%', // Adjust height proportionally
          width: 'auto',
          transition: 'left 1s ease', // Smooth transition for moving


        }}
        onMouseEnter={handleMouseEnter}
      />
    <input
       placeholder={InputText} // Set the placeholder text dynamically
      style={{
        backgroundColor: '#3C3C3C',
        color: 'white',
        border: '1px solid #3C3C3C',
        outline: 'none', // Optional: Removes the default outline on focus
        padding: '8px',
        borderRadius: '50px',
        textAlign: 'center', // Centers the placeholder text
        height: '30px', // Set the height for vertical centering
        display: 'flex',
        alignItems: 'center',

      }}

    />

</div>
  </Row>




      <Row style={{backgroundColor: 'white', height: '126px', width: '100%'}}>
        NavBAr
      </Row>
    </Row>
  );
};

export default Header;

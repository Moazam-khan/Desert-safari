import useBreakpoint from '@/hooks/useBreakpoint';
import {MenuOutlined} from '@ant-design/icons';
import {Col, Input, Row} from 'antd';
import {useState} from 'react';
import circlearrow from '../assets/NewAssets/Header/circlearrow.svg';
import Navbar from '../components/Navbar';
import SideNavbar from './SideNavbar';

const Header = () => {
  const [isIconMoved, setIsIconMoved] = useState(false);
  const [inputText, setInputText] = useState('Search');

  const handleMouseEnter = () => {
    setIsIconMoved(true); // Move the icon to the right
    setInputText('Search Now');
  };

  const handleMouseLeave = () => {
    setIsIconMoved(false); // Move the icon back to the left
    setInputText('Search');
  };

  const {xs, sm, md,lg} = useBreakpoint();
  console.log('xs', sm);
  console.log('xs', sm);

  return (
    <>{!lg && (
    <SideNavbar/>
    )}
      {lg && (
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
            }}>
            <span
              style={{
                color: 'white',
                fontFamily: 'sans-serif',
                fontSize: '16px',
                alignSelf: 'flex-end',
              }}>
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

            <div style={{position: 'relative'}}>
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
              <div
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
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
                  width: '190px',
                  justifyContent: 'center',
                }}>
                {inputText}
              </div>
            </div>
          </Row>

          <Row
            style={{
              backgroundColor: 'white',
              height: '126px',
              width: '100%',
              padding: '0px',
            }}>
            <Navbar />
          </Row>
        </Row>
      )}

    </>
  );
};

export default Header;

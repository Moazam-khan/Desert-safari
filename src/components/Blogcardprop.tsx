import {Button, Input, Typography,Card} from 'antd';
import pic1 from '../assets/NewAssets/Blog/pic1.jpg'
const {Text} = Typography;



interface BlogCardProps {
  image: string;
  heading: string;
  parag: string;
}



const Blogcardprop: React.FC<BlogCardProps> = ({ image, heading, parag }) => {

return(
<div
  style={{
    maxWidth: '263px',
    border: '1px solid #d9d9d9',
    borderRadius: '4px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    overflow: 'hidden',
    background:'lightgray'
  }}
  >
  <img
    alt="example"
    src={image}
    style={{
      width: '100%', // Make sure the image spans the full width of the card
      height: '263px',
      objectFit: 'cover', // Ensures the image covers the specified area
      display: 'block', // Removes any extra space below the image
      margin: '0', // Removes default margin
      padding: '0', // Removes default padding
    }}
  />
  <div style={{ padding: '16px', }}>

    <div
      style={{
        fontSize: '14px',
        color: '#595959',
        margin: '10px 0',
      }}
    >
    <strong style={{fontFamily:'sans-serif'}}>{heading}</strong>
    </div>
    <p
      style={{
        fontSize: '14px',
        color: '#595959',
        margin: '10px 0',
        fontFamily:'sans-serif',
        textAlign:'justify'

      }}
    >
  {parag}


    </p>
    <button
      type="button"
      style={{ marginTop: '10px' ,backgroundColor:'red',width:'109px',height:'48px', borderRadius:'10px  ',border:'red   '}}
    >
     <text style={{color:'white'}}>Learn More</text>
    </button>
  </div>
  </div>
  );};
export default Blogcardprop;


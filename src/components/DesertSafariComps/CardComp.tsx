import '@/styles/styles.scss'; // Import the CSS file
import { PlusOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import React from 'react';

interface CardProps {
  imageUrl: string;
  topText: string;
  bottomText: string;
  aedAmount: string;
  buttonText: string;
}

const Card: React.FC<CardProps> = ({
  imageUrl,
  topText,
  bottomText,
  aedAmount,
  buttonText,
}) => {
  return (
    <div className="card">
      {/* Image Container */}
      <div className="card-image-container">
        <div
          className="card-image"
          style={{ backgroundImage: `url(${imageUrl})` }}
        ></div>
        {/* Shadow Overlay */}
        <div className="card-shadow"></div>
        {/* Top Text */}
        <div className="card-top-text">{topText}</div>
        {/* Plus Icon */}
        <div className="card-icon">
          <PlusOutlined />
        </div>
      </div>

      {/* Content */}
      <div className="card-content">
        <div className="card-bottom-text">{bottomText}</div>
        <div className="card-price">
          <span className="currency">AED</span>
          <span className="amount">{aedAmount}</span>
        </div>
      </div>

      {/* Button */}
      <div className="card-button-container">
        <Button type='primary' className="card-button">{buttonText}</Button>
      </div>
    </div>
  );
};

export default Card;

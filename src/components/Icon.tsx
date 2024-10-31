import React from 'react';

interface IconProps {
  type: string;
  isSelected: boolean;
  onClick: () => void;
}

const Icon: React.FC<IconProps> = ({ type, isSelected, onClick }) => {
  const renderSVG = () => {
    switch (type) {
      case 'icon1':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="20" fill="white" stroke="black" strokeWidth="2"/>
          </svg>
        );
      case 'icon2':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
            <circle cx="50" cy="60" r="20" fill="white" stroke="black" stroke-width="2"/>
            <circle cx="50" cy="40" r="20" fill="black"/>
          </svg>
        );
      case 'icon3':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
            <circle cx="60" cy="40" r="20" fill="white" stroke="black" stroke-width="2"/>
            <circle cx="40" cy="60" r="20" fill="black"/>
          </svg>

        );
      case 'icon4':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="-20 -20 140 140">
            <ellipse cx="50" cy="23" rx="15" ry="35" fill="white" stroke="black" stroke-width="2"/>
            <ellipse cx="50" cy="77" rx="15" ry="35" fill="white" stroke="black" stroke-width="2"/>
            <ellipse cx="30" cy="50" rx="30" ry="12" fill="black"/>
            <ellipse cx="70" cy="50" rx="30" ry="12" fill="black"/>
          </svg>
        );
      case 'icon5':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="-20 -20 140 140">
            <ellipse cx="31" cy="31" rx="12" ry="35" fill="white" stroke="black" stroke-width="2" transform="rotate(-45 31 31)"/>
            <ellipse cx="69" cy="69" rx="12" ry="35" fill="white" stroke="black" stroke-width="2" transform="rotate(-45 69 69)"/>
            <ellipse cx="31" cy="69" rx="12" ry="35" fill="black" transform="rotate(45 31 69)"/>
            <ellipse cx="69" cy="31" rx="12" ry="35" fill="black" transform="rotate(45 69 31)"/>
          </svg>
        );
      case 'icon6':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="-20 -20 140 140">
            <ellipse cx="31" cy="69" rx="12" ry="35" fill="white" stroke="black" stroke-width="2" transform="rotate(45 31 69)"/>
            <ellipse cx="69" cy="31" rx="12" ry="35" fill="white" stroke="black" stroke-width="2" transform="rotate(45 69 31)"/>
            <ellipse cx="31" cy="31" rx="12" ry="35" fill="black" transform="rotate(-45 31 31)"/>
            <ellipse cx="69" cy="69" rx="12" ry="35" fill="black" transform="rotate(-45 69 69)"/>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <svg
      className={`icon ${isSelected ? 'selected' : ''}`}
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
    >
      {renderSVG()}
    </svg>
  );
};

export default Icon;
import React, { useState, useEffect } from 'react';
import Icon from './Icon';

interface IconGridProps {
  onResultsChange: (results: number[]) => void;
}

type IconType = 'icon1' | 'icon2' | 'icon3' | 'icon4' | 'icon5' | 'icon6';

const IconGrid: React.FC<IconGridProps> = ({ onResultsChange }) => {
  const [selectedIcons, setSelectedIcons] = useState<{ [key: number]: IconType }>({});

  
  const handleIconClick = (row: number, type: IconType) => {
    setSelectedIcons((prev) => {
      const newSelectedIcons = { ...prev, [row]: type };
      return newSelectedIcons;
    });
  };
  
  useEffect(() => {
    const iconToNumber: { [key in IconType]: number } = {
      icon1: 0,
      icon2: 10,
      icon3: 11,
      icon4: 20,
      icon5: 21,
      icon6: 22,
    };
    const rows: number[] = [1, 2, 3];
    if (rows.every((row) => selectedIcons[row])) {
      const numbers = rows.map((row) => iconToNumber[selectedIcons[row]]);
      const results = calculateResults(numbers);
      onResultsChange(results);
    }
  }, [selectedIcons, onResultsChange]);

  const calculateResults = (numbers: number[]): number[] => {
    const [x, y, z] = numbers;
    const result1 = (2 * x) + 11;
    const result2 = ((2 * z) + y) - 5;
    const result3 = Math.abs((y + z) - x);
    return [result1, result2, result3];
  };

  const renderRow = (row: number, label: string) => {
    const icons: IconType[] = ['icon1', 'icon2', 'icon3', 'icon4', 'icon5', 'icon6'];
    return (
      <>
        <div className="icon-row">
          <h2 className='row-label'>
            {label}
          </h2>
            {icons.map((type) => (
              <Icon
                key={type}
                type={type}
                isSelected={selectedIcons[row] === type}
                onClick={() => handleIconClick(row, type)}
              />
            ))}
        </div>
      </>
    );
  };

  return (
    <>
      {renderRow(1, 'X')}
      {renderRow(2, 'Y')}
      {renderRow(3, 'Z')}
    </>
  );
};

export default IconGrid;
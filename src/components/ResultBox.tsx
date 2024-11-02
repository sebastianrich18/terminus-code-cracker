import React from 'react';

interface ResultBoxProps {
  header: string;
  number: number;
}

const ResultBox: React.FC<ResultBoxProps> = ({ header, number }) => {
  return (
    <div className='result-box'>
      <h2 className='result-box-header'>
        {header}
      </h2>
      <div className='result-box-number'>
        {number}
      </div>
    </div>
  );
};

export default ResultBox;
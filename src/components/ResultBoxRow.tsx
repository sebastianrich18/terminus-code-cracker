import React from 'react';
import ResultBox from './ResultBox';

interface ResultBoxContainerProps {
  results: number[];
}

const ResultBoxContainer: React.FC<ResultBoxContainerProps> = ({ results }) => {
  return (
    <>
      <ResultBox header="Result 1" number={results[0]} />
      <ResultBox header="Result 2" number={results[1]} />
      <ResultBox header="Result 3" number={results[2]} />
    </>
  );
};

export default ResultBoxContainer;
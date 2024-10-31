import React from 'react';
import ResultBox from './ResultBox';
import { Box } from '@mui/material';

interface ResultBoxContainerProps {
  results: number[];
}

const ResultBoxContainer: React.FC<ResultBoxContainerProps> = ({ results }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: 2,
      }}
    >
      <ResultBox header="Result 1" number={results[0]} />
      <ResultBox header="Result 2" number={results[1]} />
      <ResultBox header="Result 3" number={results[2]} />
    </Box>
  );
};

export default ResultBoxContainer;
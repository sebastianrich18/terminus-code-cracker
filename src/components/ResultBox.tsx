import React from 'react';
import { Box, Typography } from '@mui/material';

interface ResultBoxProps {
  header: string;
  number: number;
}

const ResultBox: React.FC<ResultBoxProps> = ({ header, number }) => {
  return (
    <Box
      sx={{
        border: '1px solid #ccc',
        padding: 2,
        margin: 1,
        textAlign: 'center',
        borderRadius: 2,
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#fff',
        width: '100px', // Adjust width as needed
      }}
    >
      <Typography variant="h6" component="h2" color='black'>
        {header}
      </Typography>
      <Typography variant="h4" component="p" color='black'>
        {number}
      </Typography>
    </Box>
  );
};

export default ResultBox;
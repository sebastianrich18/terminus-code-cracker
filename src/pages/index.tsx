import React, { useState } from 'react';
import localFont from 'next/font/local';
import IconGrid from '@/components/IconGrid';
import ResultBoxContainer from '@/components/ResultBoxRow';
import { Container, Typography, Box } from '@mui/material';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export default function Home() {
  const [results, setResults] = useState<number[]>([0, 0, 0]);

  return (
    <Container
      className={`${geistSans.variable} ${geistMono.variable}`}
      sx={{
        display: 'grid',
        gridTemplateRows: '20px 1fr 20px',
        alignItems: 'center',
        justifyItems: 'center',
        minHeight: '100vh',
        padding: { xs: 2, sm: 5 },
        gap: 4,
        fontFamily: 'var(--font-geist-sans)',
      }}
    >
      <Typography variant="h1" component="h1" align="center" style={{marginTop: '30px'}} gutterBottom>
        Terminus Code Cracker
      </Typography>

      <IconGrid onResultsChange={setResults} />

      <ResultBoxContainer results={results} />

      <Box
        component="footer"
        sx={{
          gridRowStart: 3,
          display: 'flex',
          gap: 2,
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* Add footer content here */}
      </Box>
    </Container>
  );
}
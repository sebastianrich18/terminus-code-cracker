import ResultBoxContainer from '@/components/ResultBoxRow';
import IconGrid from '@/components/IconGrid';
import React, { useState } from 'react';

export default function Home() {
  const [results, setResults] = useState<number[]>([0, 0, 0]);

  return (
    <>
      <h1 className='title'>
        Terminus Code Cracker
      </h1>

      <IconGrid onResultsChange={setResults} />
      <ResultBoxContainer results={results} />
    </>
  );
}
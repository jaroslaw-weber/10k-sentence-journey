"use client"
import React, { useEffect } from 'react';
import { useAtom } from 'jotai';
import { sentencesAtom, randomSentenceAtom, rerollTriggerAtom } from '@/store/sentence';
import RandomSentence from '@/components/RandomSentence';
import { loadSentences, loadWords } from '@/service/db';
import { learnedWordsAtom } from '@/store/word';

const Home: React.FC = () => {
  const [, setSentences] = useAtom(sentencesAtom);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const sentences = await loadSentences();
        setSentences(sentences);

      } catch (error) {
        console.error("Failed to load sentences:", error);
        // Optionally, handle errors, e.g., by setting an error state
      }
    };

    fetchData();
  }, [setSentences]); // Dependency array includes setSentences to stabilize the effect


  return (
    <div className='flex justify-center items-center min-h-screen p-4'>
      <RandomSentence />
    </div>
  );
};

export default Home;

import React from 'react';
import { useAtom } from 'jotai';
import { randomSentenceAtom } from '../store/sentence';

const RandomSentence: React.FC = () => {
  const [randomSentence, ] = useAtom(randomSentenceAtom);

  return (
    <>
      {randomSentence && (
        <div className='text-3xl text-center'>
          <p>{randomSentence.sentence_ko}</p>
          <p>{randomSentence.sentence_en}</p>
        </div>
      )}
    </>
  );
};

export default RandomSentence;

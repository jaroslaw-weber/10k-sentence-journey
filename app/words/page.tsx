"use client"
import React, { useEffect } from "react";
import { useAtom } from "jotai";
import { wordListAtom, learnedWordsAtom } from "@/store/word";
import { loadWords } from "@/service/db"; // Make sure the path matches

const WordList: React.FC = () => {
  const [wordList, setWordList] = useAtom(wordListAtom);
  const [learnedWords, setLearnedWords] = useAtom(learnedWordsAtom);

  // Count the number of words learned
  let learnedCount = 0;
  console.log("learned", learnedWords);
  for(const word in learnedWords) {
    if(learnedWords[word]) {
      learnedCount++;
    }
  }

  // Toggle learned state of a word
  const toggleLearned = (word: string) => {
    const updatedLearnedWords = {
      ...learnedWords,
      [word]: !learnedWords[word],
    };
    setLearnedWords(updatedLearnedWords);
  };

  useEffect(() => {
    const fetchData = async () => {
      const words = await loadWords();
      setWordList(words.filter((word) => word.trim().length > 0)); // Ensure empty lines are not included
    };

    fetchData();
  }, [setWordList]);

  // Calculate the percentage of words learned
  const learnedPercentage = wordList.length > 0 ? ((learnedCount / wordList.length) * 100).toFixed(1) : 0;

  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="text-xl font-bold">Word Frequency List</h1>
      <div className="stats shadow my-4">
        <div className="stat">
          <div className="stat-title">Words Learned</div>
          <div className="stat-value">{learnedCount}</div>
          <div className="stat-desc">Out of {wordList.length} words</div>
        </div>
        <div className="stat">
          <div className="stat-title">Learning Progress</div>
          <div className="stat-value">{learnedPercentage}%</div>
          <div className="stat-desc">Percentage of total</div>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-4 text-lg">
        {wordList.map((word, index) => (
          <div key={index} className="flex gap-2">
            <input
              type="checkbox"
              checked={learnedWords[word] || false}
              onChange={() => toggleLearned(word)}
            />
            <span>{word}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WordList;

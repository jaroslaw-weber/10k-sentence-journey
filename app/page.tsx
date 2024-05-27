"use client";
// Import necessary libraries

import { useState, useEffect } from "react";
import Papa from "papaparse";

export default function Home() {
  const [sentences, setSentences] = useState([]);
  const [randomSentence, setRandomSentence] = useState(null);

  useEffect(() => {
    // Fetch the CSV data from the public directory
    fetch("/sentence/korean.csv")
      .then((response) => response.text())
      .then((csvData) => {
        // Parse the CSV data
        const parsedData = Papa.parse(csvData, {
          header: true,
          skipEmptyLines: true,
        }).data;
        setSentences(parsedData);
      });
  }, []);

  // Function to select a random sentence
  const showRandomSentence = () => {
    if (sentences.length > 0) {
      const randomIndex = Math.floor(Math.random() * sentences.length);
      setRandomSentence(sentences[randomIndex]);
    }
  };

  return (
    <>
      <button className="btn btn-primary" onClick={showRandomSentence}>
        Show Random Sentence
      </button>
      {randomSentence && (
        <div>
          <p>{randomSentence?.sentence_ko}</p>
          <p>{randomSentence?.sentence_en}</p>
        </div>
      )}
    </>
  );
}

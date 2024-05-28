import React from "react";
import { useAtom } from "jotai";
import { randomSentenceAtom, rerollTriggerAtom } from "../store/sentence";
import { learnedWordsAtom } from "@/store/word";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";

const RandomSentence: React.FC = () => {
  const [randomSentence] = useAtom(randomSentenceAtom);
  const [learnedWords, setLearnedWords] = useAtom(learnedWordsAtom);
  const [, setRerollTrigger] = useAtom(rerollTriggerAtom);

  const refreshSentence = () => {
    setRerollTrigger((oldValue) => oldValue + 1);  // Increment to trigger reroll
  };
  const word = randomSentence?.word_ko;

  // Toggle learned state of a word
  const toggleLearned = (word: string) => {
    const updatedLearnedWords = {
      ...learnedWords,
      [word]: !learnedWords[word],
    };
    setLearnedWords(updatedLearnedWords);
  };
  return (
    <>
      {randomSentence && word && (
        <div className="text-3xl text-center">
          <button onClick={()=>refreshSentence()}>
          <p>{randomSentence.sentence_ko}</p>
          <p>{randomSentence.sentence_en}</p></button>

          <div className="text-lg opacity-60 mt-12 flex justify-around gap-4 ">
            <div
              className="tooltip tooltip-bottom"
              data-tip="the word linked to this sentence. click on the checkbox if you already know this word to hide it"
            >
              <p>word</p>
              <p>
                {randomSentence.word_ko} → {randomSentence.word_en}
              </p>
            </div>
            <div
              className="tooltip tooltip-bottom"
              data-tip="click on the checkbox if you already know this word to hide it"
            >
              <p>too easy?</p>
              <input
                type="checkbox"
                checked={learnedWords[word] || false}
                onChange={() => toggleLearned(word)}
              />
            </div>
            <div
              className="tooltip tooltip-bottom"
              data-tip="click on icon to report an incorrect sentence"
            >
              <p>report</p>
              <a
                href={`https://github.com/jaroslaw-weber/10k-sentence-journey/issues/new?labels=bug&title=incorrect+sentence:+${randomSentence.sentence_ko}&body=There is a sentence that has incorrect vocabulary/grammar. Please fix.`.replaceAll(
                  " ",
                  "+"
                )}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faExclamationCircle} />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default RandomSentence;

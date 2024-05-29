import { Sentence } from "@/types/sentence";
import { atom } from "jotai";
import { learnedWordsAtom } from "./word";
import { sample } from "lodash";

// Atom to hold all sentences
export const sentencesAtom = atom<Sentence[]>([]);

// Atom to trigger a reroll of the random sentence
export const rerollTriggerAtom = atom(0);

export const randomSentenceAtom = atom<Sentence | null | undefined>((get) => {
  const trigger = get(rerollTriggerAtom); // Include to establish a dependency
  const sentences = get(sentencesAtom);
  const learned = get(learnedWordsAtom);
  let notLearned = sentences;
  if (learned) {
    const filtered = sentences.filter((s) => !learned[s.word_ko]);
    notLearned = filtered;
  }
  //only get max 50 sentences
  const shortlist = notLearned.slice(0, 50);
  const randomSentence = sample(shortlist);
  return randomSentence;
});

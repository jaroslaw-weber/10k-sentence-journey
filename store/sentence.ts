import { Sentence } from "@/types/sentence";
import { atom } from "jotai";
import { learnedWordsAtom } from "./word";
import { sample } from "lodash";

// Atom to hold all sentences
export const sentencesAtom = atom<Sentence[]>([]);

// Atom to select a random sentence
export const randomSentenceAtom = atom<Sentence | null | undefined>((get) => {
  const sentences = get(sentencesAtom);
  const learned = get(learnedWordsAtom);
  if (learned) {
    const filtered = sentences.filter((s) => !learned[s.word_ko]);
    if (filtered.length > 0) {
      return sample(filtered);
    }
  }
  if (sentences.length > 0) {
    return sample(sentences);
  }
  return null;
});

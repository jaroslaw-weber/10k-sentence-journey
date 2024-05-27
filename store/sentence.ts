import { Sentence } from '@/types/sentence';
import { atom } from 'jotai';

// Atom to hold all sentences
export const sentencesAtom = atom<Sentence[]>([]);


// Atom to select a random sentence
export const randomSentenceAtom = atom<Sentence | null>(get => {
  const sentences = get(sentencesAtom);
  if (sentences.length > 0) {
    const randomIndex = Math.floor(Math.random() * sentences.length);
    return sentences[randomIndex];
  }
  return null;
});

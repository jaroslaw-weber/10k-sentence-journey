import { atom, } from 'jotai';
import { atomWithStorage } from 'jotai/utils';

// Atom for storing word list
export const wordListAtom = atomWithStorage<string[]>('word-list', []);

// Atom for storing the learned state of each word
export const learnedWordsAtom = atomWithStorage<Record<string,boolean>>('learned-words', {});


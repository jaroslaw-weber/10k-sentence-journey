import { Sentence } from "@/types/sentence";
import { loadSentences, loadWords } from "../db";

export async function getGenerateSentencePrompt() {
  const sentences = await loadSentences();
  const sentenceMap = new Map<string, Sentence>(
    sentences.map((s) => [s.word_ko, s])
  );
  const words = await loadWords();
  const wordsWithoutSentences = words.filter((w) => !sentenceMap.has(w));
  const chunk = wordsWithoutSentences.slice(0, 100);
  const prompt = `please generate sentences in csv format for those words:  
	${chunk.join(",")}
	
	the format should be like below:
  
	word_ko,word_en,sentence_ko,sentence_en
	말하다,say,그는 진실을 말해요.,He tells the truth.
	위하다,for,이것은 모두를 위한 것이에요.,This is for everyone.
	그러나,however,"나는 가고 싶어요. 그러나, 시간이 없어요.","I want to go. However, I don't have the time."
	
	each sentence should be short and simple, include the korean version of the word and be at least 6 words long. btw dont include csv header so it's easier to copy and paste. wrap it in markdown code tag. Please remember to add quotation mark if there is a comman in a sentence.`;
  return prompt;
}


import { Sentence } from '@/types/sentence';
import Papa from 'papaparse';
export async function loadSentences(){
	const response = await fetch('/sentence/korean.csv');
    const csvData = await response.text();
    const parsedData = Papa.parse(csvData, {
      header: true,
      skipEmptyLines: true,
    }).data as Sentence[];

	return parsedData
}

export async function loadWords(){
	const response = await fetch('/word/korean.txt');
    const csvData = await response.text();
   
	const arr = csvData.split('\n');

    return arr

}


import { Sentence } from '@/types/sentence';
import Papa from 'papaparse';
export async function loadDb(){
	const response = await fetch('/sentence/korean.csv');
    const csvData = await response.text();
    const parsedData = Papa.parse(csvData, {
      header: true,
      skipEmptyLines: true,
    }).data as Sentence[];

	return parsedData
}
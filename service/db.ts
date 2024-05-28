import { Sentence } from "@/types/sentence";
import Papa from "papaparse";
import getConfig from "next/config";
import { fetchUrl } from "./rest";

export async function loadSentences() {
  const config = getConfig();
  const response = await fetchUrl("/sentence/korean.csv");
  const csvData = await response.text();
  const parsedData = Papa.parse(csvData, {
    header: true,
    skipEmptyLines: true,
  }).data as Sentence[];

  return parsedData;
}

export async function loadWords() {
  const config = getConfig();
  const response = await fetchUrl("/word/korean.txt");
  const csvData = await response.text();

  const arr = csvData.split("\n");

  return arr;
}

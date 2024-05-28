const basePath = `/10k-sentence-journey`

export async function fetchUrl(url: string) {
  const fullUrl = `${basePath}${url}`;

  return await fetch(fullUrl);
}

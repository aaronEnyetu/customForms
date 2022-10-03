import { client } from './client';

export const search = async (searchObj) => {
  const query = Array.from(Object.entries(searchObj))
    .map(([k, v]) => `${k}=${encodeURIComponent(v)}`)
    .join('&');

  const res = await client
    .from('beanie_babies')
    .select('animal, title, link, image, color')
    .contains('animal', [query]);
  if (res.status >= 400) {
    throw res;
  } else {
    const body = await res.json();
    return body;
  }
};
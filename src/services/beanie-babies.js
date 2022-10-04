import { client } from './client';

export const search = async (searchObj) => {
  const query = searchObj.title;
  //   const query = Array.from(Object.entries(searchObj))
  //     .map(([k, v]) => `${k}=${encodeURIComponent(v)}`)
  //     .join('&');
  console.log(searchObj);
  const res = await client
    .from('beanie_babies')
    .select('animal, title, link, image, color')
    .textSearch('title', query, {
      type: 'plain',
      config: 'english',
    });
  if (res.status >= 400) {
    throw res;
  } else {
    // const body = await res.json();
    console.log(res.data);
    return res.data;
  }
};

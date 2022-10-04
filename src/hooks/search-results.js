import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { search } from '../services/beanie-babies';

export default function useSearchResults() {
  const [searchResults, setSearchResults] = useState([]);
  const [setError] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const useableSearchParams = Object.fromEntries(
    searchParams.entries()
  );

  const nextPage = async () => {
    useableSearchParams.page = parseInt(useableSearchParams.page) + 1;
    setSearchParams(useableSearchParams);
    const moreResults = await search(useableSearchParams);
    setSearchResults(searchResults.concat(moreResults));
  };

  const infiniteScrollRef = useInView({
    triggerOnce: true,
    onChange: (inView) => {
      if (inView) nextPage();
    },
  }).ref;

  const searchBeanies = async (searchObj) => {
    if (searchObj.page == null) {
      searchObj.page = 1;
    }
    setSearchParams(searchObj);

    try {
      const newSearchResults = await search(searchObj);
      setSearchResults(newSearchResults);
    } catch (error) {
      setError(`Error searching beanies: ${error.body}`);
      throw error;
    }
  };

  useEffect(() => void searchBeanies(useableSearchParams), []);

  return {
    nextPage,
    searchParams,
    searchResults,
    setSearchResults,
    searchBeanies,
    infiniteScrollRef,
  };
}

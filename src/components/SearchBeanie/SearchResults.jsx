/* eslint-disable react/prop-types */

import SearchResultCard from './SearchResultCard';

export default function SearchResults({
  results,
  infiniteScrollRef,
}) {
  console.log('Results', results);
  return (
    <ul>
      {results.map((result, i) => {
        const ref =
          i == results.length - 3 ? infiniteScrollRef : undefined;
        if (result)
          return (
            <SearchResultCard
              key={result.animal + i}
              beanie={result}
              infiniteScrollRef={ref}
            />
          );
      })}
    </ul>
  );
}

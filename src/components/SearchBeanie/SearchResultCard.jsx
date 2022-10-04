/* eslint-disable react/prop-types */
export default function SearchResultCard({
  beanie,
  infiniteScrollRef,
}) {
  return (
    <li ref={infiniteScrollRef}>
      {beanie.title}
      {beanie.animal}
    </li>
  );
}

import { useSearchStore } from '../../stores/searchStore';
import SearchButton from './SearchButton';
import SearchInput from './SearchInput';

export default function Search() {
  const { searchTitle, searchLocation, setSearchTitle, setSearchLocation } =
    useSearchStore();

  return (
    <div className="flex items-center justify-center gap-4">
      <SearchInput
        context="What"
        placeholder="Job title, keyword, or company"
        searchContent={searchTitle}
        setSearchContent={setSearchTitle}
      />

      <SearchInput
        context="Where"
        placeholder="City, state, country"
        searchContent={searchLocation}
        setSearchContent={setSearchLocation}
      />

      <SearchButton />
    </div>
  );
}

import { useState } from 'react';
import SearchButton from './SearchButton';
import SearchInput from './SearchInput';

export default function Search() {
  const [jobTitleSearch, setJobTitleSearch] = useState('');
  const [citySearch, setCitySearch] = useState('');

  return (
    <div className="flex items-center justify-center gap-4">
      <SearchInput
        context="What"
        placeholder="Job title, keyword, or company"
        searchContent={jobTitleSearch}
        setSearchContent={setJobTitleSearch}
      />

      <SearchInput
        context="Where"
        placeholder="City, state, country"
        searchContent={citySearch}
        setSearchContent={setCitySearch}
      />

      <SearchButton />
    </div>
  );
}

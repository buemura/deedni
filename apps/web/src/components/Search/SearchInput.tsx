import SearchInputIcon from './SearchInputIcon';

interface SearchInputProps {
  context: string;
  placeholder: string;
  searchContent: string;
  setSearchContent: React.Dispatch<React.SetStateAction<string>>;
}

export default function SearchInput({
  context,
  placeholder,
  searchContent,
  setSearchContent
}: SearchInputProps) {
  console.log(searchContent);

  const handleClearInput = () => {
    setSearchContent('');
  };

  return (
    <div className="flex items-center gap-2 border border-neutral-400 p-1 px-4 rounded-lg focus:border-blue-400">
      <span className="text-sm">{context}</span>

      <input
        className="outline-none text-neutral-500 text-sm"
        type="text"
        placeholder={placeholder}
        value={searchContent}
        onChange={(e) => setSearchContent(e.target.value)}
      />

      <SearchInputIcon
        context={context}
        searchContent={searchContent}
        handleClearInput={handleClearInput}
      />
    </div>
  );
}

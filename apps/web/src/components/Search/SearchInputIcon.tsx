import ClearIcon from '../Icons/ClearIcon';
import LocationIcon from '../Icons/LocationIcon';
import SearchIcon from '../Icons/SearchIcon';

interface SearchInputIconProps {
  context: string;
  searchContent: string;
  handleClearInput: () => void;
}

export default function SearchInputIcon({
  context,
  searchContent,
  handleClearInput
}: SearchInputIconProps) {
  if (searchContent) {
    return (
      <button onClick={handleClearInput}>
        <ClearIcon />
      </button>
    );
  }

  switch (context) {
    case 'What':
      return <SearchIcon />;
    case 'Where':
      return <LocationIcon />;
    default:
      return null;
  }
}

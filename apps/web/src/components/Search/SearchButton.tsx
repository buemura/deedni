import { ButtonHTMLAttributes } from 'react';

type SearchButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export default function SearchButton(props: SearchButtonProps) {
  return (
    <button
      className="p-1 px-2 rounded-lg bg-blue-600 text-white text-sm hover:bg-blue-700"
      {...props}
    >
      Find jobs
    </button>
  );
}

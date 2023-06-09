export default function Header() {
  return (
    <nav className="flex justify-between items-center p-2 px-6 border-b border-neutral-300">
      <a className="text-blue-800 text-3xl font-semibold" href="/">
        deedni
      </a>

      <div className="flex gap-4">
        <a className="font-light hover:text-blue-600" href="/cadidate/login">
          Candidates
        </a>
        <a className="font-light hover:text-blue-600" href="/employer/login">
          Employers
        </a>
      </div>
    </nav>
  );
}

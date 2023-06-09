import Header from './components/Header';
import Jobs from './components/Jobs';
import Search from './components/Search';

export default function App() {
  return (
    <main>
      <Header />

      <div className="p-4">
        <Search />
      </div>
      <div className="mt-14 border-b" />

      <Jobs />
    </main>
  );
}

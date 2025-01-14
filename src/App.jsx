import React, { useEffect, useState } from 'react';

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode ? JSON.parse(savedMode) : false;
  });
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  function handleToggle() {
    if (transitioning) return;
    console.log('Toggling dark mode');
    setTransitioning(true);
    setDarkMode(!darkMode);
    setTimeout(() => {
      setTransitioning(false);
    }, 500);
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white flex flex-col">
      <header className="p-4 flex justify-end">
        <button
          onClick={handleToggle}
          disabled={transitioning}
          className="cursor-pointer px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded transition-colors duration-200"
        >
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </header>
      <main className="flex-grow p-4 h-full">
        <h1 className="text-xl font-bold mb-4">App Template</h1>
      </main>
      <footer className="p-4">
        <a
          href="https://www.zapt.ai"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-blue-500"
        >
          Made on ZAPT
        </a>
      </footer>
    </div>
  );
}
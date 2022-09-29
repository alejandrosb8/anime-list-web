import React, { useEffect, useState } from 'react';
import AnimeList from '../components/AnimeList';
import { useIntersectionObserver } from 'react-intersection-observer-hook';

export default function Home() {
  const [page, setPage] = useState(0);
  const [ref, { entry }] = useIntersectionObserver({ rootMargin: '500px' });
  const isVisible = entry && entry.isIntersecting;

  const handleNextPage = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    if (isVisible) {
      handleNextPage();
    }
  }, [isVisible]);

  return (
    <div className="w-full min-h-screen">
      <h1 className="m-4 text-4xl text-center text-indigo-700 font-anime md:text-start">Anime List</h1>
      <AnimeList page={page} />
      <div className="mt-8" ref={ref}></div>
    </div>
  );
}

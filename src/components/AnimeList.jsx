import React, { useState } from 'react';
import useAnimes from '../hooks/useAnimes';
import AnimeImage from './AnimeImage';

export default function AnimeList({ page }) {
  const { animes, loading } = useAnimes({ page } || 0);

  return (
    <div className="grid min-h-screen bg-re gap-4 grid-cols-fluid place-content-center place-items-center">
      {animes.map((anime) => {
        return <AnimeImage key={anime.mal_id} anime={anime} />;
      })}
    </div>
  );
}

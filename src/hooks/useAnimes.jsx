import { useState, useEffect } from 'react';
import { getAnimes } from '../services/api';

export default function useAnimes({ page }) {
  const [animes, setAnimes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAnimes = async () => {
      setLoading(true);
      const rowData = await getAnimes(page);
      const data = rowData
        .map((anime) => {
          const { title, mal_id, score, rank, episodes } = anime;
          const { large_image_url } = anime.images.jpg;
          const animeData = {
            title,
            image: large_image_url,
            mal_id,
            score,
            rank,
            episodes,
          };
          return animeData;
        })
        .sort((a, b) => {
          return a.rank - b.rank;
        });
      setAnimes(animes.concat(data));
      setLoading(false);
    };
    fetchAnimes();
  }, [page]);

  return { animes, loading };
}

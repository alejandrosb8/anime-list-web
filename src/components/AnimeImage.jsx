import React from 'react';

export default function AnimeImage({ anime }) {
  const { title, rank, score, episodes, image } = anime;
  return (
    <a className="relative w-[250px] h-[350px] group cursor-pointer">
      <img className="object-cover w-full h-full mx-auto" src={image} alt={title} loading="lazy" />
      <div className="absolute bottom-0 flex flex-col items-center justify-center w-full gap-2 p-2 overflow-hidden transition-all duration-500 bg-black h-14 group-hover:h-3/4 bg-opacity-80">
        <span className="w-full font-bold text-center text-white">{title}</span>
        <span className="hidden w-full opacity-0 text-center text-white group-hover:inline-block group-hover:opacity-100">{`Rank: ${rank}`}</span>
        <span className="hidden w-full opacity-0 text-center text-white group-hover:inline-block group-hover:opacity-100">{`Score: ${score}`}</span>
        <span className="hidden w-full opacity-0 text-center text-white group-hover:inline-block group-hover:opacity-100">{`Episodes: ${episodes}`}</span>
      </div>
    </a>
  );
}

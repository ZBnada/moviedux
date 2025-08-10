import React from "react";
import "../styles.css";
import MovieCard from "./MovieCard";
export default function WatchList({ watchlist = [], movies = [], toggelWatchlist }) {
  return (
    <div>
      <h1 className="title">Your Watchlist</h1>
      <div className="watchlist">
        {watchlist.map((id) => {
          const movie = movies.find((movie) => movie.id === id);
          return movie ? (
            <MovieCard
              key={id}
              movie={movie}
              toggelWatchlist={toggelWatchlist}
              isWatchlisted={true}
            />
          ) : null;
        })}
      </div>
    </div>
  );
}

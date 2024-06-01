import MovieCard from "./moviecard"; 
const movieList =({movieList, nameSearch, ratingSearch}) => {


return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        flexWrap: "wrap"
      }}
    >
      {moviesList
        .filter(
          (el) =>
            el.name.toLowerCase().includes(nameSearch.toLowerCase().trim()) &&
            el.rating >= ratingSearch
        )
        .map((el, i) => (
          <MovieCard el={el} />
        ))}
    </div>
  );
};
export default MoviesList;

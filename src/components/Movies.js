import Movie from "./Movie";
import Img from "./404.jpg";
export default function Movies(props) {
  const { movies = [] } = props;

  return (
    <div className="movies">
      {movies.length ? (
        movies.map((movie) => <Movie key={movie.imdbID} {...movie} />)
      ) : (
        <img className="img" src={Img} />
      )}
    </div>
  );
}

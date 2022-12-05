import { Movie } from 'components';

enum SearchBy {
  GENRES = 'genres',
  TITLE = 'title'
}

interface ServerMovie {
  id: number;
  title: string;
  genres: string[];
  release_date: string;
  vote_average: number;
  poster_path: string;
  runtime: number;
  overview: string;
}

class MoviesService {
  _apiBase = 'http://localhost:4000/';

  _searchParams = {
    sortBy: 'sortBy',
    sortOrder: 'sortOrder',
    searchBy: 'searchBy',
    filter: 'filter'
  };

  _baseMovies = 9;

  _baseLimit = 40;

  _baseSortOrder = 'desc';

  _baseOffset = 0;

  getResource = async (url: string) => {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }
    return res.json();
  };

  getMovies = async (activeGenre: string, activeSortType: string) => {
    const res = await this.getResource(
      this._generateMoviesUrl(activeGenre, activeSortType)
    );

    const movieList = await res.data.map((serverMovie: ServerMovie) =>
      this._transformMovie(serverMovie)
    );

    return this._filterEmptyMovieImages(movieList);
  };

  _generateMoviesUrl = (
    activeGenre: string,
    activeSortType: string
  ): string => {
    const url = new URL(
      `${this._apiBase}movies?limit=${this._baseLimit}&offset=${this._baseOffset}`
    );
    if (activeSortType) {
      url.searchParams.append(this._searchParams.sortBy, activeSortType);
      url.searchParams.append(
        this._searchParams.sortOrder,
        this._baseSortOrder
      );
    }
    if (activeGenre) {
      url.searchParams.append(this._searchParams.searchBy, SearchBy.GENRES);
      url.searchParams.append(this._searchParams.filter, activeGenre);
    }
    return url.toString();
  };

  _filterEmptyMovieImages = async (movieList: Array<Movie>) => {
    const list: Array<Movie> = [];
    for (const movie of movieList) {
      if (list.length === this._baseMovies) {
        return list;
      } else {
        const isCheck = await this._checkMovieImage(movie.posterPath);
        if (isCheck) {
          list.push(movie);
        }
      }
    }
    return list;
  };

  _checkMovieImage = async (imageUrl: string): Promise<boolean> => {
    return fetch(imageUrl)
      .then(async res => {
        if (res.ok) {
          const imageBlob = await res.blob();
          const imageText = await imageBlob.text();
          return !imageText.includes('File not Found');
        }
      })
      .catch(() => {
        return false;
      });
  };

  _transformMovie = (serverMovie: ServerMovie): Movie => {
    return {
      id: serverMovie.id,
      title: serverMovie.title,
      genres: serverMovie.genres,
      runtime: serverMovie.runtime,
      overview: serverMovie.overview,
      releaseDate: serverMovie.release_date,
      voteAverage: serverMovie.vote_average,
      posterPath: serverMovie.poster_path
    };
  };
}

export default MoviesService;

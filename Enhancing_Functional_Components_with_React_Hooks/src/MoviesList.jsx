import { useState } from "react";

function MoviesList() {
  //Task 1
  const [movies, setMovies] = useState([
    {
      title: "The Nightmare Before Christmas",
      description:
        "Jack Skellington comes up with his own way to celebrate Christmas.",
      disney: true,
    },
    {
      title: "Cool Runnings",
      description:
        "Quirky underdog Jamaicans learn to ice skate in Olympic rush.",
      disney: true,
    },
    {
      title: "Tarzan",
      description: "Man raised by gorillas discovers human identity and love.",
      disney: true,
    },
    {
      title: "The Shawshank Redemption",
      description: "Hopeless prisoners find freedom.",
      disney: false,
    },
    {
      title: "Inception",
      description: "Thief steals secrets in dream world.",
      disney: false,
    },
  ]);

  //Fill array with false for each element in the movies list
  const [detailsOut, setDetailsOut] = useState(
    movies.map(() => {
      return false;
    }),
  );

  //Task 4
  const [disneyFilter, setDisneyFilter] = useState(false);

  //Task 2
  function showDetails(movieName) {
    let tempDetails = [];

    for (let i = 0; i < movies.length; i++) {
      if (movies[i].title == movieName) {
        tempDetails.push(!detailsOut[i]);
      } else {
        tempDetails.push(detailsOut[i]);
      }
    }

    setDetailsOut(tempDetails);
  }

  //Task 3
  function removeMovie(movieName) {
    let tempDetails = [];

    for (let i = 0; i < movies.length; i++) {
      if (movies[i].title != movieName) {
        tempDetails.push(detailsOut[i]);
      }
    }

    setDetailsOut(tempDetails);

    setMovies(
      movies.filter((item) => {
        return item.title != movieName;
      }),
    );
  }

  return (
    <>
      <label for="filter">Non-disney movies</label>
      //Task 4
      <input
        id="filter"
        type="checkbox"
        onClick={() => {
          setDisneyFilter(!disneyFilter);
        }}
      ></input>
      <ul>
        {movies.map((item, index) =>
          //Task 4
          !(disneyFilter && item.disney) ? (
            <li key={index}>
              //Task 3
              <button
                onClick={() => {
                  removeMovie(item.title);
                }}
              >
                Remove Movie
              </button>
              //Task 2
              <button
                onClick={() => {
                  showDetails(item.title);
                }}
              >
                Show Details
              </button>
              {item.title}
              <br />
              {detailsOut[index] ? item.description : ""}
            </li>
          ) : (
            <></>
          ),
        )}
      </ul>
    </>
  );
}

export default MoviesList;

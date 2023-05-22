import React, { useEffect, useState } from "react";
import styles from "./movieDetails.module.scss";

import { getMoviesAPI } from "../../Redux/Services/moviesAPI";
import Pagination from "../Pagination/Pagination";
import MovieDetailsItem from "../MovieDetailsItem/MovieDetailsItem";

function MovieDetails() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(8);

  const getMovies = async () => {
    try {
      const data = await getMoviesAPI();
      setMovies(data.content);
    } catch (error) {
      console.log(error);
    }
  };

  const [search, setSearch] = useState("");
  const [searchParam] = useState(["tenPhim"]);

  const handleChange = (evt) => {
    setSearch(evt.target.value);
  };

  useEffect(() => {
    getMovies();
  }, []);

  if (error) return null;

  // Hàm tìm kiếm
  function Search(movies) {
    return movies.filter((item) => {
      return searchParam.some((newItem) => {
        return (
          item[newItem].toString().toLowerCase().indexOf(search.toLowerCase()) >
          -1
        );
      });
    });
  }

  // xử lý phân trang
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPost = movies.slice(firstPostIndex, lastPostIndex);

  return (
    <div className={styles.movieDetails} id="showTime">
      <div className="container">
        <div className={`${styles.movieDetails__top} mt-4`}>
          <div className="input-group mb-3">
            <input
              id="txtSearch"
              type="text"
              className="form-control"
              placeholder="Nhập từ khóa"
              value={search}
              onChange={handleChange}
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <button className="btn btn-primary p-2">
              <i className="fa fa-search"></i>
            </button>
          </div>
        </div>
        <div className="container">
          <div className="row m-2">
            {Search(currentPost)?.map((item) => {
              return (
                <div key={item.maPhim} className="col-sm-6 col-md-4 v my-2">
                  <MovieDetailsItem movieItem={item} />
                </div>
              );
            })}
            <Pagination
              totalPosts={movies.length}
              postsPerPage={postsPerPage}
              setCurrentPage={setCurrentPage}
              currentPage={currentPage}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;

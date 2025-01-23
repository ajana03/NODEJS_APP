import { CiSearch } from "react-icons/ci";
import { lang } from "../utils/languageConstants";
import genAI from "../utils/gemini";
// import client from "../utils/openai";

import { useSelector, useDispatch } from "react-redux";
import { useRef } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addRecommendateMovies, changeGptError } from "../store/gptSlice";

import { changeError, changeIsLoading } from "../store/configSlice";

import Error from "./Error";

const GPTSearchBar = () => {
  const searchInput = useRef(null);
  // const gptApiKey = useRef(null);
  const dispatch = useDispatch();
  const selectedLang = useSelector((store) => store.config.lang);
  const error = useSelector((store) => store.config.error);

  const fetchTMDBMovieResults = async (movieName) => {
    try {
      const res = await fetch(
        // `https://api.themoviedb.org/3/search/movie?query=${movieName}&include_adult=true&page=1`,
        `https://api.themoviedb.org/3/search/multi?query=${movieName}&include_adult=false&language=en-US&page=1`,
        API_OPTIONS
      );
      const json = await res.json();
      return json;
    } catch (err) {
      throw err;
    }
  };

  const handleSearchSubmit = async (evt) => {
    evt.preventDefault();
    dispatch(changeIsLoading(true));
    try {
      const query =
        "Act as a movie recommendation system and suggest some movies for the query:" +
        searchInput.current.value +
        ". Only give me the names of 10 movies comma separated like the following example result- Krish3, Don, Jodhaa Akbar, Gadar, Golmal.";

      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      const result = await model.generateContent(query);

      const reccomdtnResult = result.response.text().split(",");

      const data = reccomdtnResult.map((mv) => fetchTMDBMovieResults(mv));

      const tmdbResults = await Promise.allSettled(data);
      const filterdRes = tmdbResults.map((mv) => mv.value?.results[0]);

      dispatch(addRecommendateMovies(filterdRes));
    } catch (err) {
      dispatch(changeError("Gemini Error! Please Try sometimes after"));
    } finally {
      dispatch(changeIsLoading(false));
    }
  };

  return (
    <div className="pl-1 sm:pl-4 pt-8 ml-6 mb-8">
      {error && <Error errorMsg={error} />}

      <form
        className="flex flex-wrap md:justify-center md:items-center w-full"
        onSubmit={handleSearchSubmit}
      >
        {/* <div className="my-4 mx-2 md:my-0">
          <label htmlFor="api_key" />
          <input
            ref={gptApiKey}
            name="api_key"
            type="text"
            id="api_key"
            placeholder={lang[selectedLang].placeholderApiKeyTxt}
            required
            className="text-white text-lg font-semibold border rounded-md w-[300px] sm:w-[380px] py-2 px-2 md:py-4 md:px-4 md:m-4 bg-transparent border-white hover:ring-offset-2 hover:ring-2 hover:cursor-pointer"
          />
        </div> */}
        <div className="mx-2 my-2 sm:my-0 ">
          <label htmlFor="search" />
          <input
            ref={searchInput}
            type="text"
            id="search"
            placeholder={lang[selectedLang].placeholderSrchTxt}
            className="text-white text-lg font-semibold border rounded-md w-[300px] sm:w-[450px] px-2 py-2  md:py-4 md:px-3 md:m-4 bg-transparent border-white hover:ring-offset-2 hover:ring-2 hover:cursor-pointer"
          />
        </div>
        <div className="mx-2 my-1.5 sm:my-0">
          <button className="p-2 md:p-3 hover:border hover:rounded-md hover:ring-offset-2 hover:ring-2 border-white">
            <CiSearch style={{ color: "white" }} size={30} />
          </button>
        </div>
      </form>
    </div>
  );
};

export default GPTSearchBar;

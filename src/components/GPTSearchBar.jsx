import { CiSearch } from "react-icons/ci";
import { lang } from "../utils/languageConstants";
// import client from "../utils/openai";

import { useSelector, useDispatch } from "react-redux";
import { useRef } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addRecommendateMovies } from "../store/gptSlice";

import OpenAI from "openai";
import { changeError } from "../store/configSlice";
// import { OPENAI_KEY } from "./constants";

import Error from "./Error";

const GPTSearchBar = () => {
  const searchInput = useRef(null);
  const gptApiKey = useRef(null);
  const dispatch = useDispatch();
  const selectedLang = useSelector((store) => store.config.lang);
  const error = useSelector((store) => store.config.error);

  const client = new OpenAI({
    apiKey: gptApiKey,
    dangerouslyAllowBrowser: true,
  });

  const fetchTMDBMovieResults = async (movieName) => {
    const res = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movieName}&include_adult=true&page=1`,
      API_OPTIONS
    );
    const json = await res.json();
    return json;
  };

  const handleSearchSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const query =
        "Act as a movie recommendation system and suggest some movies for the query:" +
        searchInput.current.value +
        ". Only give me the names of 10 movies comma separated like the following example result- Krish3, Don, Jodhaa Akbar, Gadar, Golmal.";

      const gptResult = await client.chat.completions.create({
        messages: [{ role: "user", content: query }],
        model: "gpt-3.5-turbo",
      });
      const reccomdtnResult =
        gptResult.choices[0].message.content.split(",") ||
        "Jodhaa Akbar, Bajirao Mastani, Padmaavat, Mughal-e-Azam, Sita Ramam, Devdas, Tanhaji, Lagaan, Mohenjo Daro, Veer".split(
          ","
        );

      const data = reccomdtnResult.map((mv) => fetchTMDBMovieResults(mv));
      const tmdbResults = await Promise.allSettled(data);
      const filterdRes = tmdbResults.map((mv) => mv.value?.results[0]);

      dispatch(addRecommendateMovies(filterdRes));
      searchInput.current.value = "Indian Historical Romance movies";
    } catch (err) {
      console.log(err);
      dispatch(changeError("Incorrect API key provided"));
    }
  };

  // const handleSearchClick = async () => {
  //   try {
  //     const query =
  //       "Act as a movie recommendation system and suggest some movies for the query:" +
  //       searchInput.current.value +
  //       ". Only give me the names of 10 movies comma separated like the following example result- Krish3, Don, Jodhaa Akbar, Gadar, Golmal.";

  //     const gptResult = await client.chat.completions.create({
  //       messages: [{ role: "user", content: query }],
  //       model: "gpt-3.5-turbo",
  //     });

  //     console.log("gptresult", gptResult.choices[0].message.content);

  //     // const data = reccomdtnResult.map((mv) => fetchTMDBMovieResults(mv));
  //     // const tmdbResults = await Promise.allSettled(data);
  //     // const filterdRes = tmdbResults.map((mv) => mv.value?.results[0]);

  //     // dispatch(addRecommendateMovies(filterdRes));
  //   } catch (err) {
  //     console.log("ERROR is-", err);
  //   }
  // };

  return (
    <div className="pl-6 pt-8 ml-6 mb-8">
      {error && <Error errorMsg={error} />}

      <form
        className="flex flex-wrap md:justify-center md:items-center w-full"
        onSubmit={handleSearchSubmit}
      >
        <div className="my-4 mx-4 md:my-0">
          <label htmlFor="api_key" />
          <input
            ref={gptApiKey}
            name="api_key"
            type="text"
            id="api_key"
            placeholder={lang[selectedLang].placeholderApiKeyTxt}
            required
            className="text-white text-lg font-semibold border rounded-md w-[380px] py-2 px-2 md:py-4 md:px-4 md:m-4 bg-transparent border-white hover:ring-offset-2 hover:ring-2 hover:cursor-pointer"
          />
        </div>
        <div className="mx-4 my-2 sm:my-0 ">
          <label htmlFor="search" />
          <input
            ref={searchInput}
            type="text"
            id="search"
            placeholder={lang[selectedLang].placeholderSrchTxt}
            className="text-white text-lg font-semibold border rounded-md w-[450px] px-2 py-2  md:py-4 md:px-3 md:m-4 bg-transparent border-white hover:ring-offset-2 hover:ring-2 hover:cursor-pointer"
          />
        </div>
        <div className="mx-4 my-1.5 sm:my-0">
          <button
            className="p-2 md:p-3 hover:border hover:rounded-md hover:ring-offset-2 hover:ring-2 border-white"
            // onClick={handleSearchClick}
          >
            <CiSearch style={{ color: "white" }} size={30} />
          </button>
        </div>
      </form>
    </div>
  );
};

export default GPTSearchBar;

import React from "react";
import GPTSearchBar from "../components/GPTSearchBar";
import GPTMovieSuggetions from "../components/GPTMovieSuggetions";

import { useSelector } from "react-redux";
import { lang } from "../utils/languageConstants";
import Spinner from "../components/Spinner";
import Error from "../components/Error";

const GPTSearch = () => {
  const selectedLang = useSelector((store) => store.config.lang);
  const isLoading = useSelector((store) => store.config.isLoading);
  const isGptError = useSelector((store) => store.gpt.isGptError);
  return (
    <div className="absolute top-[150px] bottom-0 w-full text-white sm:text-black ">
      <h1 className=" text-4xl font-bold text-center text-white m-4">
        {lang[selectedLang].gptPageHeading}
      </h1>
      <GPTSearchBar />
      {isLoading === true ? (
        <Spinner loading={isLoading} />
      ) : (
        <GPTMovieSuggetions />
      )}
      {isGptError && <Error errorMsg={isGptError} />}
    </div>
  );
};

export default GPTSearch;

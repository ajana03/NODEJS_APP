import React from "react";
import GPTSearchBar from "../components/GPTSearchBar";
import GPTMovieSuggetions from "../components/GPTMovieSuggetions";

import { useSelector } from "react-redux";
import { lang } from "../utils/languageConstants";

const GPTSearch = () => {
  const selectedLang = useSelector((store) => store.config.lang);
  return (
    <div className="absolute top-28 bottom-0 w-full text-white sm:text-black ">
      <h1 className=" text-4xl font-bold text-center text-white m-4">
        {lang[selectedLang].gptPageHeading}
      </h1>
      <GPTSearchBar />
      <GPTMovieSuggetions />
    </div>
  );
};

export default GPTSearch;

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";

const Head = () => {
  const [searchquery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchquery]) {
        setSuggestions(searchCache[searchquery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchquery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchquery);
    const json = await data.json();
    setSuggestions(json[1]);
    
    dispatch(cacheResults({
      [searchquery] : json[1],
    }));
  };

  

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          onClick={toggleMenuHandler}
          className="h-8 mx-3 cursor-pointer"
          src="https://cdn.icon-icons.com/icons2/2596/PNG/512/hamburger_button_menu_icon_155296.png"
          alt="menu"
        />
        <img
          className="h-8"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"
          alt="logo"
        />
      </div>
      <div className="col-span-10 px-10">
        <div>
          <input
            className="w-1/2 border border-gray-700 p-2 rounded-l-full"
            type="text"
            placeholder="Search Videos"
            value={searchquery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className="border border-gray-700 bg-gray-200 p-2 rounded-r-full">
            🔍
          </button>
        </div>
        {showSuggestions && (
          <div className="fixed bg-white py-2 px-5 w-[31rem] shadow-lg rounded-lg">
            <ul>
              {suggestions.map((s) => (
                <li key={s} className="py-2 px-3 shadow-sm hover:bg-gray-100">
                  🔍 {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="col-span-1">
        <img
          className="h-8"
          src="https://cdn.iconscout.com/icon/free/png-256/free-user-1493-459372.png"
          alt="user"
        />
      </div>
    </div>
  );
};

export default Head;

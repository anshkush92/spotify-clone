import React, { useState } from "react";

import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";

import Chips from "../Chips/Chips";

const Search = () => {
  const [search, setSearch] = useState("");

  /*
   * @function handleSearch() - Use to set the state the state of the search value.
   * @param {string} e.target.value - The value of the input field.
   * @returns {string} search - The value set to the input field.
   */

  const handleSearch = (e) => {
    console.log(e.target.value);
    setSearch(e.target.value);
  };

  /*
   * @function removeSearch() - Use to remove the search value.
   * @returns {string} search - The value set to the input field.
   */

  const removeSearch = () => {
    setSearch("");
  };

  return (
    <div className="ml-60 flex flex-col justify-center items-start gap-y-5">
      <div className="w-96 flex bg-white rounded-full items-center xs:max-w-full px-2.5">
        <AiOutlineSearch size={30}></AiOutlineSearch>
        <input
          type="text"
          className="w-full rounded-full border-transparent focus:border-transparent focus:ring-0 px-1 py-1.5 outline-none placeholder:text-[#8d8b8b] text-[15px]"
          value={search}
          onChange={handleSearch}
          placeholder="What do you want to listen to ?"
        ></input>
        {search && (
          <button className="cursor-default" onClick={removeSearch}>
            <AiOutlineClose size={30}></AiOutlineClose>
          </button>
        )}
      </div>

      {search && <Chips></Chips>}
    </div>
  );
};

export default Search;

import React, { useState } from "react";

import Desktop from "../../Left/Navigation/Desktop";

import { AiOutlineSearch } from "react-icons/ai";

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

  return (
    <div className="ml-60 w-96 flex bg-white rounded-full items-center xs:max-w-full px-2">
      <AiOutlineSearch size={30}></AiOutlineSearch>
      <input
        type="text"
        className="w-full rounded-full border-transparent focus:border-transparent focus:ring-0 px-1 py-1.5 outline-none placeholder:text-[#8d8b8b] text-[15px]"
        value={search}
        onChange={handleSearch}
        placeholder="What do you want to listen to ?"
      ></input>
    </div>
  );
};

export default Search;

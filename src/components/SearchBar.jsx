import React, { useRef } from "react";
import search_icon from "../assets/search.png";

const SearchBar = ({ onSearch }) => {
  const inputRef = useRef();

  const handleSearch = () => {
    onSearch(inputRef.current.value);
    inputRef.current.value = "";
  };

  return (
    <div className="flex justify-center items-center mt-6">
      <div className="flex items-center gap-4 w-[700px]">
        <input
          ref={inputRef}
          type="text"
          placeholder="Search"
          className="h-12 border-none outline-none rounded-2xl pl-6 text-[#626262] bg-[#ebfffc] text-[20px] w-full"
        />
        <img
          src={search_icon}
          alt="Search"
          onClick={handleSearch}
          className="w-[50px] p-[15px] rounded-full bg-[#ebfffc] cursor-pointer"
        />
      </div>
    </div>
  );
};

export default SearchBar;

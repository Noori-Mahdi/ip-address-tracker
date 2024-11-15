import { useState } from "react";
import Arrow from "../../assets/img/icon-arrow.svg";
import "../../sass/global.scss";
import { SearchBoxPropsType } from "../../types/types";

export const SearchBox = ({onSearch}:SearchBoxPropsType) => {
  const [search, setSearch] = useState<string>('')
  return (
    <div className="flex items-stretch justify-between w-full h-10 rounded-lg">
      <input
        className="flex-grow h-full px-4 py-3 font-medium rounded-l-lg outline-none cursor-pointer placeholder:font-medium text_color"
        placeholder="Search for any IP address or domain"
        type="text"
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
       onClick={() => onSearch(search)} 
       className="flex items-center justify-center w-10 h-full py-3  rounded-r-lg bg_Black"
      >
        <img src={Arrow} />
      </button>
    </div>
  );
};

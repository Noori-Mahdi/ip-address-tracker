import { useState } from "react";
import Arrow from "../../assets/img/icon-arrow.svg";
import "../../sass/global.scss";
import { SearchBoxPropsType } from "../../types/types";
import {isIp, isDomain} from '../../Utils/validators.ts';

export const SearchBox = ({onSearch}:SearchBoxPropsType) => {

  const [inputValue, setInputValue] = useState("");
  const [isValid, setIsValid] = useState<boolean | null>(null);
  const [type, setType] = useState<'Domain'|'IP'|null>(null)

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {

    const value = e.target.value;
    setInputValue(value);

   
    if (value === "") {
      setIsValid(null);
    } else {
      if (isIp(value)) {
        setType('IP')
        setIsValid(true);
      } else if(isDomain(value)){
        setType('Domain')
        setIsValid(true);
      }else{        
        setIsValid(false);
      }
  };
}

  return (
    <div className="flex items-stretch justify-between w-full h-10 rounded-lg">
      <input
        className="flex-grow h-full px-4 py-3 font-medium rounded-l-lg outline-none cursor-pointer placeholder:font-medium text_color"
        placeholder="Search for any IP address or domain"
        type="text"
        onChange={handleChange}
      />
      <button
       onClick={() => {
        if (isValid && type != null) {
          onSearch(inputValue, type);
        } else {
          alert("Please enter a valid IP address or domain.");
        }
      }
    }
       className="flex items-center justify-center w-10 h-full py-3  rounded-r-lg bg_Black"
      >
        <img src={Arrow} />
      </button>
    </div>
  );
};

import Arrow from "../../assets/img/icon-arrow.svg";
import "../../sass/global.scss";

export const SearchBox = () => {
  return (
    <div className="flex items-center justify-between w-full h-full rounded-lg">
      <input
        className="flex-grow h-full px-4 py-5 font-medium rounded-l-lg outline-none cursor-pointer placeholder:font-medium text_color"
        placeholder="Search for any IP address or domain"
        type="text"
      />
      <button className="flex items-center justify-center w-10 h-full py-5 rounded-r-lg bg_Black">
        <img className="" src={Arrow} />
      </button>
    </div>
  );
};

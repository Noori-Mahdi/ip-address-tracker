import bgImg from "../assets/img/pattern-bg-desktop.png";
import "leaflet/dist/leaflet.css";
import MapComponent from "../components/MapComponent/MapComponent";
import { SearchBox } from "../components/SearchBox/SearchBox";
import { InfoBox } from "../components/InfoBox/InfoBox";
import { useEffect, useState } from "react";
import axios from "axios";
import { InfoItem } from "../types/types";
import { Loading } from "../components/Loading/Loading";

export const AddressTracker = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<InfoItem[]>();
  const [location, setLocation] = useState<[number, number] | []>([]);

  const handleSearch = async (search: string, type:string) => {
    try {
      let res
      setLoading(true);

      if(type === 'IP'){
        res = await axios.get(
          `https://geo.ipify.org/api/v2/country,city?apiKey=at_cEPJqo1TW3ejCadbdbVddr00v0Gun&ipAddress=${search}`
        );
      }else{
        res = await axios.get(
          `https://geo.ipify.org/api/v2/country,city?apiKey=at_cEPJqo1TW3ejCadbdbVddr00v0Gun&domain=${search}`
        );
      }


      setData([
        { title: "IP Address", info: res.data.ip },
        {
          title: "Location",
          info:
            res.data.location.city +
            "," +
            res.data.location.region +
            " " +
            res.data.location.postalCode,
        },
        { title: "Timezone", info: res.data.location.timezone },
        { title: "ISP", info: res.data.isp },
      ]);

      setLocation([res.data.location.lat, res.data.location.lng]);
    } catch (error) {
      console.error("Error fetching Data:", error);
    }
  };

  useEffect(() => {
    setLoading(false);
  }, [location]);

  return (
    <div className="relative h-screen">
      <div className="relative h-2/6 w-full z-10 w-full">
        <div className="absolute h-fit lg:w-4/12 m-auto lg:mt-5 mt-2 -translate-x-1/2 left-1/2">
          <h3 className="mb-6 text-3xl font-bold text-center text-white capitalize">
            IP address tracker
          </h3>
          <SearchBox onSearch={handleSearch} />
        </div>
        <div className="absolute h-3/12 bottom-0 z-30 w-8/12 -translate-x-1/2 lg:translate-y-1/2 translate-y-3/4 left-1/2">
          <InfoBox
            list={data}
          />
        </div>
        <img className="h-full w-full" src={bgImg} />
      </div>
      {loading ? (
        <Loading />
      ) : (
        <div className="z-0 w-full">
          <MapComponent location={location} />
        </div>
      )}
    </div>
  );
};

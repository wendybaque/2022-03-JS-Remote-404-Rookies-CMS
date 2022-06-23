import axios from "axios";
import { useContext, useState, useEffect } from "react";
import ExportContext from "../contexts/Context";

import pen from "../assets/pen.png";
import clock from "../assets/clock.png";
import network from "../assets/network.png";
import sheet from "../assets/sheet.png";

function Module6e() {
  const { language } = useContext(ExportContext.Context);

  const [data, setData] = useState([]);
  const images = [
    { image: pen, alt: "pen" },
    { image: clock, alt: "clock" },
    { image: network, alt: "network" },
    { image: sheet, alt: "sheet" },
  ];

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/profits/${language}`)
      .then((response) => {
        const data2 = { ...response.data };
        // eslint-disable-next-line no-plusplus
        for (let i = 0; i < images.length; i++) {
          data2.elements[i] = { ...data2.elements[i], image: images[i] };
        }
        setData(data2);
      })
      .catch((error) => {
        console.warn(error);
      });
  }, [language]);

  return (
    <div className="bg4E pt-12 pb-12 flex flex-col justify-items-center place-items-center text-center">
      <div className="font-bold text-center mb-8 lg:mb-20">
        <h3 className="text-green-400 text-xl pb-1">{data.sub_title}</h3>
        <h2 className="text-3xl lg:text-4xl">{data.title}</h2>
      </div>
      <div className="flex flex-col flex-wrap m-4 justify-items-center place-items-center leading-loose lg:flex-row ">
        {data.elements &&
          data.elements.map((elem) => {
            return (
              <div className="basis-1/2 flex flex-col justify-center justify-items-center place-items-center lg:flex-row flex-none lg:justify-end mb-4">
                <div className="circle  bg-button-green-E10 mr-2 aspect-square">
                  <img
                    className="logo"
                    src={elem.image.image}
                    alt={elem.image.alt}
                  />
                </div>
                <div>
                  <h3 className="text-xl pb-1">{elem.title}</h3>
                  <p className="max-w-lg">{elem.text}</p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Module6e;

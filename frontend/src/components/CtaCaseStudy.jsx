import React, { useContext, useState, useEffect } from "react";
// eslint-disable-next-line import/extensions
import axios from "axios";
import ExportContext from "../contexts/Context";

export default function CtaCaseStudy() {
  const { language, media } = useContext(ExportContext.Context);

  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/cta_case_study/${language}`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.warn(error);
      });
  }, [language]);

  console.warn(media);

  return (
    <section className="bg-slate-100">
      <div className="flex flex-row lg: flex justify-center mx-4">
        <div className=" w-4/5 flex my-4 mx-10 rounded-lg">
          <div>
            <h2 className=" w-4/5 font-semibold  py-6 pl-4">
              {data && data.text}
            </h2>
          </div>
          <div className=" flex items-center w-1/3 px-10 ">
            <button
              type="button"
              className="bg-green-400 px-6 py-2 text-sm text-white font-bold rounded  "
            >
              Check it Out
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

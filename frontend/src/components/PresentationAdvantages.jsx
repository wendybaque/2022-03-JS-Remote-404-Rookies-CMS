import { useContext } from "react";
import CTA from "./CTA";
import ExportContext from "../contexts/Context";
import "../css/summary.css";

function PresentationAdvantages(jason) {
  const { media } = useContext(ExportContext.Context);
  return (
    <section className="bg4E py-16 lg:max-w-full md:max-w-full lg:flex flex-row lg:justify-center">
      <div className="lg:w-1/3 flex flex-col justify-center">
        <h2 className="lg:text-lg text-2xl text-bold text-green-400 mx-4">
          {jason[0].name}
        </h2>
        <h3 className="text-2xl text-gree font-bold m-4">{jason[0].gender}</h3>
        <p className="text-lg text-gray-600 m-4 ">{jason[0].about}</p>
        <div className="flex justify-center lg:justify-start">
          {!media ? <CTA label="Fuck" /> : ""}
        </div>
      </div>
      <div className="mx-4 lg:w-1/3 ">
        <details className="bc4E border-2 text-gray-600 p-3 my-4">
          <summary className="ds4E text-black font-lightbold">adress</summary>
          {jason[0].address}
        </details>
        <details className="bc4E border-2 text-gray-600 p-3 my-4">
          <summary className="ds4E text-black font-lightbold">about</summary>
          {jason[0].about}
        </details>
        <details className="bc4E border-2 text-gray-600 p-3 my-4">
          <summary className="ds4E text-black font-lightbold">phone</summary>
          {jason[0].phone}
        </details>
      </div>
      {media ? (
        <div className="flex justify-center">
          <CTA label="Fuck 💬" className="" />
        </div>
      ) : (
        ""
      )}
    </section>
  );
}
export default PresentationAdvantages;

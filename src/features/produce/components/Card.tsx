import shape01 from "../../../assets/card-shapes/01.svg";
import shape02 from "../../../assets/card-shapes/02.svg";
import shape03 from "../../../assets/card-shapes/03.svg";
import shape04 from "../../../assets/card-shapes/04.svg";
import shape05 from "../../../assets/card-shapes/05.svg";
import shape06 from "../../../assets/card-shapes/06.svg";
import shape07 from "../../../assets/card-shapes/07.svg";
import shape08 from "../../../assets/card-shapes/08.svg";
import shape09 from "../../../assets/card-shapes/09.svg";
import shape10 from "../../../assets/card-shapes/10.svg";
import shape11 from "../../../assets/card-shapes/11.svg";
import shape12 from "../../../assets/card-shapes/12.svg";
import { Fragment, useEffect, useState } from "react";
import useToggle from "../../../hooks/useToggle";
import { colorTheme } from "../utils/color-theme.ts";
import { calculateAverageRating } from "../utils/calculate-averageRating.ts";
import { Star, X } from "@phosphor-icons/react";

const shape01 = "M0,100 C50,200 150,0 200,100 L200,0 L0,0 Z";

type ShapeKey =
  | "shape01"
  | "shape02"
  | "shape03"
  | "shape04"
  | "shape05"
  | "shape06"
  | "shape07"
  | "shape08"
  | "shape09"
  | "shape10"
  | "shape11"
  | "shape12";

const shapeMap: Record<ShapeKey, string> = {
  shape01,
  shape02: shape02,
  shape03: shape03,
  shape04: shape04,
  shape05: shape05,
  shape06: shape06,
  shape07: shape07,
  shape08: shape08,
  shape09: shape09,
  shape10: shape10,
  shape11: shape11,
  shape12: shape12,
};

type ResponseType = {
  card_shape: ShapeKey;
  label: string;
  type: string;
  moto: string;
  description: string;
  img: string;
};

export default function Card({ response }: { response: ResponseType }) {
  const [averageRating, setAverageRating] = useState(0);
  const { effect: theme, open, close } = useToggle();

  useEffect(() => {
    const average = calculateAverageRating(response.reviews);
    setAverageRating(average);
  }, [response]);

  return (
    <Fragment>
      {!theme ? (
        <div
          onClick={open}
          className="group relative flex h-[500px] w-[400px] cursor-pointer flex-col items-center justify-center rounded-lg py-8 transition duration-300 hover:bg-blue-100"
        >
          <div className="flex h-full w-full items-center justify-center overflow-hidden ">
            <img
              src={response.img}
              alt="image"
              className="h-full w-full object-contain"
            />
          </div>
          <div className="flex w-full flex-col items-center justify-center gap-4 py-4">
            <h1 className="font-libre text-2xl font-medium tracking-wide">
              {response.label}
            </h1>
            <p className="h-10 font-mono text-sm uppercase tracking-wider transition ease-in-out group-hover:hidden">
              {response.type}
            </p>
            <div className="flex hidden h-10 flex-row items-center justify-center gap-2 transition ease-in-out group-hover:block">
              <div className="flex flex-row items-center justify-center gap-1">
                <Star
                  size={20}
                  weight="fill"
                  className={`h-5 w-5 ${
                    averageRating >= 1 ? "text-green-300" : "text-zinc-300"
                  }`}
                />
                <Star
                  size={20}
                  weight="fill"
                  className={`h-5 w-5 ${
                    averageRating >= 2 ? "text-green-300" : "text-zinc-300"
                  }`}
                />
                <Star
                  size={20}
                  weight="fill"
                  className={`h-5 w-5 ${
                    averageRating >= 3 ? "text-green-300" : "text-zinc-300"
                  }`}
                />
                <Star
                  size={20}
                  weight="fill"
                  className={`h-5 w-5 ${
                    averageRating >= 4 ? "text-green-300" : "text-zinc-300"
                  }`}
                />
                <Star
                  size={20}
                  weight="fill"
                  className={`h-5 w-5 ${
                    averageRating >= 5 ? "text-green-300" : "text-zinc-300"
                  }`}
                />
                <p className="pl-2 font-montserrat text-lg text-green-900">
                  {averageRating}.0
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div
          className={`relative flex h-[490px] w-[400px] flex-col items-center justify-center overflow-hidden rounded-lg shadow-sm`}
          style={{
            backgroundColor: `#${colorTheme(response.label)}`,
          }}
        >
          <div className="absolute right-0 top-0 z-20 p-4">
            <button
              type="button"
              title="Close"
              onClick={close}
              className="cursor-pointer rounded-full bg-white bg-opacity-20 p-2 text-white hover:bg-opacity-30"
            >
              <X size={20} />
            </button>
          </div>
          <img
            src={shapeMap[response.card_shape]}
            alt="Card Shapes"
            className={`absolute bottom-0 brightness-90 ${
              response.label === "Avocado Ranch" ||
              response.label === "Balsamic"
                ? ""
                : "top-0"
            }`}
          />
          <div className="flex h-full w-full z-10 flex-col items-center justify-between gap-4 px-12 py-14 text-center">
            <div className="font-mono text-sm uppercase text-white">
              {response.type}
            </div>
            <div className="flex flex-col gap-6">
              <h1 className="text-5xl font-extrabold text-white">
                {response.label}
              </h1>
              <p className="font-mono text-sm uppercase tracking-tight text-white">
                {response.moto}
              </p>
            </div>
            <p className="mt-10 text-xs font-medium text-zinc-100">
              {response.description}
            </p>
          </div>
          <div className="flex w-full flex-row items-center justify-center gap-2 pb-6 pt-4 font-mono text-xs">
            <button
              type="button"
              className="group relative z-10 overflow-hidden rounded-md border-2 border-white px-4 py-3 text-white transition-all duration-500 hover:text-green-900"
            >
              In store
              <div className="absolute bottom-0 left-0 right-0 top-0 -z-10 h-0 w-full bg-white transition-all duration-300 group-hover:h-full" />
            </button>
            <button
              type="button"
              className="rounded-md z-10 border-2 border-white px-4 py-3 text-white"
            >
              Recipes
            </button>
          </div>
        </div>
      )}
    </Fragment>
  );
}

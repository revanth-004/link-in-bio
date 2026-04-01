// www.npmjs.com/package/react-colorful
import { useState, useEffect } from "react";

// import { HexColorPicker } from "react-colorful";
import { PopoverPicker } from "./PopoverPicker";

import {
  GoArrowDown,
  GoArrowDownLeft,
  GoArrowDownRight,
  GoArrowUp,
  GoArrowUpRight,
  GoArrowUpLeft,
  GoArrowRight,
  GoArrowLeft,
} from "react-icons/go";

const ThemePicker = () => {
  // Values
  const [fromColor, setFromColor] = useState("#fff");
  const [viaColor, setViaColor] = useState("#fff");
  const [toColor, setToColor] = useState("#fff");
  const [direction, setDirection] = useState("top");
  const [title, setTitle] = useState("#000");
  const [body, setBody] = useState("#000");
  const [para, setPara] = useState("#000");
  const [grainy, setGrainy] = useState("false");
  const [via, setVia] = useState("false");

  useEffect(() => {
    document.documentElement.style.setProperty("--color-from", fromColor);
    document.documentElement.style.setProperty("--color-via", viaColor);
    document.documentElement.style.setProperty("--color-to", toColor);
  }, [fromColor, viaColor, toColor]);

  return (
    <div className="">
      <h1 className="font-semibold text-primaryHeading m-0 lg:text-base text-sm">
        Theme Picker
      </h1>
      <div className="flex">
        <div className="border-btnBorder flex flex-col gap-1 border-2 rounded-lg">
          <div className="flex w-28 justify-between items-center bg-titleText  shadow-md shadow-primaryShadow border-btnBorder px-2 py-1 m-2  border-2 rounded-lg">
            <h1 className="font-semibold text-titleBar m-0 lg:text-base text-sm">
              From
            </h1>
            <PopoverPicker color={fromColor} onChange={setFromColor} />
          </div>
          <div className="flex w-28 justify-between items-center bg-titleText  shadow-md shadow-primaryShadow border-btnBorder px-2 py-1 m-2  border-2 rounded-lg">
            <h1 className="font-semibold text-titleBar m-0 lg:text-base text-sm">
              Via
            </h1>
            <PopoverPicker color={viaColor} onChange={setViaColor} />
          </div>
          <div className="flex w-28 justify-between items-center bg-titleText  shadow-md shadow-primaryShadow border-btnBorder px-2 py-1 m-2  border-2 rounded-lg">
            <h1 className="font-semibold text-titleBar m-0 lg:text-base text-sm">
              To
            </h1>
            <PopoverPicker color={toColor} onChange={setToColor} />
          </div>
        </div>
        <div className="border-btnBorder border-2 rounded-lg">
          <div className="">
            <h1 className="font-semibold text-primaryHeading m-0 lg:text-base text-sm">
              Direction
            </h1>
            <div className="border-slate-300 p-3 border-2 rounded-2xl grid grid-cols-3 gap-1">
              <button className=" border-slate-300 p-1 border-2 rounded-lg">
                <GoArrowUpLeft />
              </button>
              <button className=" border-slate-300 p-1 border-2 rounded-lg">
                <GoArrowUp />
              </button>
              <button className=" border-slate-300 p-1 border-2 rounded-lg">
                <GoArrowUpRight />
              </button>

              <button className=" border-slate-300 p-1 border-2 rounded-lg">
                <GoArrowLeft />
              </button>
              <button className=""></button>
              <button className=" border-slate-300 p-1 border-2 rounded-lg">
                <GoArrowRight />
              </button>

              <button className=" border-slate-300 p-1 border-2 rounded-lg">
                <GoArrowDownLeft />
              </button>
              <button className=" border-slate-300 p-1 border-2 rounded-lg">
                <GoArrowDown />
              </button>
              <button className=" border-slate-300 p-1 border-2 rounded-lg">
                <GoArrowDownRight />
              </button>
            </div>
          </div>
        </div>
        <div className="">
          <div className="flex w-28 justify-between items-center">
            <h1 className="font-semibold text-primaryHeading m-0 lg:text-base text-sm">
              Title
            </h1>
            <PopoverPicker color={viaColor} onChange={setViaColor} />
          </div>
          <div className="flex w-28 justify-between items-center">
            <h1 className="font-semibold text-primaryHeading m-0 lg:text-base text-sm">
              Body
            </h1>
            <PopoverPicker color={viaColor} onChange={setViaColor} />
          </div>
          <div className="flex w-28 justify-between items-center">
            <h1 className="font-semibold text-primaryHeading m-0 lg:text-base text-sm">
              Text
            </h1>
            <PopoverPicker color={viaColor} onChange={setViaColor} />
          </div>
          <div className="flex w-28 justify-between items-center">
            <h1 className="font-semibold text-primaryHeading m-0 lg:text-base text-sm">
              Grainy
            </h1>
            <input type="checkbox" />
          </div>
        </div>
      </div>
      <div className="">
        <button className=" border-slate-300 p-1 border-2 rounded-lg">
          Auto change
        </button>
        <button className=" border-slate-300 p-1 border-2 rounded-lg">
          Share
        </button>
        
      </div>
    </div>
  );
};

export default ThemePicker;

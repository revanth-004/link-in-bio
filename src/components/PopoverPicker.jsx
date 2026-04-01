import React, { useCallback, useRef, useState } from "react";
import { HexColorPicker } from "react-colorful";

import useClickOutside from "./useClickOutside";

export const PopoverPicker = ({ color, onChange }) => {
  const popover = useRef();
  const [isOpen, toggle] = useState(false);

  const close = useCallback(() => toggle(false), []);
  useClickOutside(popover, close);

  return (
    <div className="relative ">
      <div
        className="w-7 h-7 rounded-lg border-[3px] border-white ring-1 ring-black/10 ring-inset cursor-pointer "
        onClick={() => toggle(true)}
        style={{ backgroundColor: color }}
      />

      {isOpen && (
        <div
          className="absolute top-full left-0 mt-[2px] rounded-xl shadow-xl z-10"
          ref={popover}
        >
          <HexColorPicker color={color} onChange={onChange} />
        </div>
      )}
    </div>
  );
};

import { FunctionComponent, useCallback } from "react";
import Home from "./Home";
import Hero from "./Hero";

const AIGEN: FunctionComponent = () => {
  return (
    <>
      <div className="w-full relative bg-black  flex flex-col items-start justify-start font-outfit">
        <div className="w-full !m-[0]  flex flex-row items-end justify-start pt-0 px-0  box-border  max-w-full">
          <div className=" flex-1  flex flex-col items-start justify-start  box-border relative max-w-full ">
            <Home />
            <Hero />
          </div>
        </div>
      </div>
    </>
  );
};

export default AIGEN;

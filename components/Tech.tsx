"use client";

import { Suspense } from "react";
import BallCanvas from "./ui/Ball";
import SectionWrapper from "./ui/SectionWrapper";
import { technologies } from "./ui/constants";
import CanvasLoader from "./ui/Loader";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <div className="w-28 h-28" key={technology.name}>
          <Suspense fallback={<CanvasLoader />}>
            <BallCanvas icon={technology.icon} />
          </Suspense>
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "tech");

"use client";

import { useState, useEffect, ReactNode } from "react";
import { IoCopyOutline } from "react-icons/io5";
import dynamic from "next/dynamic";
import { cn } from "@/lib/utils";

// Dynamic import for components with heavy dependencies or that use browser APIs
const GridGlobe = dynamic(() => import("./GridGlobe"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-32 bg-[#10132E] rounded-lg animate-pulse"></div>
  ),
});

const BackgroundGradientAnimationWrapper = dynamic(
  () => import("./GradientBg").then((mod) => mod.BackgroundGradientAnimation),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-full bg-[#10132E] rounded-lg"></div>
    ),
  }
);

// Lazy load Lottie with suspense
const LottieComponent = dynamic(() => import("react-lottie"), {
  ssr: false,
  loading: () => (
    <div className="w-6 h-6 rounded-full bg-gray-300 animate-pulse"></div>
  ),
});

// Memo the static components to prevent unnecessary re-renders
import { memo } from "react";
import MagicButton from "../MagicButton";

// Pre-load animation data to avoid fetch during render
import animationData from "@/data/confetti.json";

// TypeScript interfaces for component props
interface BentoGridProps {
  className?: string;
  children: ReactNode;
}

interface BentoGridItemProps {
  className?: string;
  id: number;
  title?: string | ReactNode;
  description?: string | ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}

// Memoized base components to prevent unnecessary re-renders
const BentoGrid = memo<BentoGridProps>(
  ({ className, children }: BentoGridProps) => {
    return (
      <div
        className={cn(
          "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
          className
        )}
      >
        {children}
      </div>
    );
  }
);

BentoGrid.displayName = "BentoGrid";

const BentoGridItem = ({
  className,
  id,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: BentoGridItemProps) => {
  // Define tech stack lists outside of render to avoid recreating on each render
  const leftLists = ["ReactJS", "Node.js", "Express", "MongoDB", "Spring Boot"];
  const rightLists = ["Docker", "AWS", "PostgreSQL"];

  // Client-side only state
  const [copied, setCopied] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [shouldShowLottie, setShouldShowLottie] = useState(false);

  // Only run useEffect on client side
  useEffect(() => {
    setIsMounted(true);

    // Reset copy state after animation completes
    if (copied) {
      const timer = setTimeout(() => {
        setCopied(false);
        setShouldShowLottie(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [copied]);

  const handleCopy = () => {
    if (typeof navigator !== "undefined") {
      const text = "thejaashwin62@gmail.com";
      navigator.clipboard.writeText(text).then(() => {
        setCopied(true);
        setShouldShowLottie(true);
      });
    }
  };

  // Optimize lottie options to avoid re-creating object on each render
  const lottieOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  // Conditional rendering optimization for grid globe
  const renderGridGlobe = () => {
    if (id === 2 && isMounted) {
      return <GridGlobe />;
    }
    return null;
  };

  // Tech stack lists rendering
  const renderTechStacks = () => {
    if (id !== 3) return null;

    return (
      <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
        <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
          {leftLists.map((item, i) => (
            <span
              key={i}
              className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
              lg:opacity-100 rounded-lg text-center bg-[#10132E]"
            >
              {item}
            </span>
          ))}
          <span className="lg:py-4 lg:px-3 py-4 px-3 rounded-lg text-center bg-[#10132E]"></span>
        </div>
        <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
          <span className="lg:py-4 lg:px-3 py-4 px-3 rounded-lg text-center bg-[#10132E]"></span>
          {rightLists.map((item, i) => (
            <span
              key={i}
              className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
              lg:opacity-100 rounded-lg text-center bg-[#10132E]"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    );
  };

  // Email button with optimized conditional rendering
  const renderEmailButton = () => {
    if (id !== 6) return null;

    return (
      <div className="mt-5 relative">
        {isMounted && shouldShowLottie && (
          <div className="absolute -bottom-5 right-0">
            <LottieComponent options={lottieOptions} height={200} width={400} />
          </div>
        )}

        <MagicButton
          title={copied ? "Email is Copied!" : "Copy my email address"}
          icon={<IoCopyOutline />}
          position="left"
          handleClick={handleCopy}
          otherClasses="!bg-[#161A31]"
        />
      </div>
    );
  };

  // Render background gradient animation only when needed
  const renderBackgroundGradient = () => {
    if (id !== 6) return null;

    return (
      <BackgroundGradientAnimationWrapper>
        <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div>
      </BackgroundGradientAnimationWrapper>
    );
  };

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
        className
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundImage:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        {/* Optimize image rendering with conditional checks */}
        {img && (
          <div className="w-full h-full absolute">
            <img
              src={img}
              alt={title || "Grid item"}
              loading="lazy"
              className={cn(imgClassName, "object-cover object-center")}
            />
          </div>
        )}

        {spareImg && (
          <div
            className={`absolute right-0 -bottom-5 ${
              id === 5 && "w-full opacity-80"
            }`}
          >
            <img
              src={spareImg}
              alt="Decorative image"
              loading="lazy"
              className="object-cover object-center w-full h-full"
            />
          </div>
        )}

        {renderBackgroundGradient()}

        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
          )}
        >
          <div className="font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">
            {description}
          </div>

          <div className="font-sans text-lg lg:text-3xl max-w-96 font-bold z-10">
            {title}
          </div>

          {renderGridGlobe()}
          {renderTechStacks()}
          {renderEmailButton()}
        </div>
      </div>
    </div>
  );
};

BentoGridItem.displayName = "BentoGridItem";

// Export components with proper type annotations
export { BentoGrid, BentoGridItem };

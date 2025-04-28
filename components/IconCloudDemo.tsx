import React from "react";
import IconCloud from "./ui/IconCloud";

// Updated slugs array with removed logos
const slugs = [
  "javascript",
  "python",
  "react",
  "html5",
  "css3",
  "express",
  "prisma",
  "amazonwebservices",
  "coursera",
  "shadcnui",
  "mui",
  "notion",
  "vite",
  "nodedotjs",
  "postgresql",
  "vercel",
  "daisyui",
  "nodemon",
  "eclipseide",
  "styledcomponents",
  "kalilinux",
  "tailwindcss",
  "stripe",
  "namecheap",
  "docker",
  "nextdotjs",
  "git",
  "github",
  "gitlab",
  "intellijidea",
  "kubernetes",
  "discord",
  "1password",
  "openai",
  "anydesk",
  "clerk",
  "claude",
  "cloudinary",
  "figma",
  "unity",
  "blender",
  "mongodb",
  "render",
  "netlify",
];

export default function IconCloudDemo() {
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
  );

  return (
    <div className="relative flex h-[400px] w-full items-center justify-center overflow-hidden bg-transparent sm:h-[500px] md:h-[600px]">
      <div className="scale-[1.2] transform sm:scale-[1.5] md:scale-[1.8]">
        <IconCloud images={images} />
      </div>
    </div>
  );
} 
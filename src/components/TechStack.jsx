import React from "react";
import BorderGlow from "./BorderGlow";
import TechBadge from "@/components/TechBadge";
import FigmaLogo from "@/assets/svg/Figma.svg";
import reactLogo from "@/assets/svg/React.svg";
import tsLogo from "@/assets/svg/Ts.svg";
import tailwindLogo from "@/assets/svg/Tailwind.svg";

import fastapiLogo from "@/assets/svg/FastApi.svg";
import pythonLogo from "@/assets/svg/Python.svg";

import postgresLogo from "@/assets/svg/Postgresql.svg";
import AstroLogo from "@/assets/svg/AstroSvg.svg";
import supabaseLogo from "@/assets/svg/supabase.svg";
import vercelLogo from "@/assets/svg/Vercel.svg";
import Railway from "@/assets/svg/Railway.svg";
import CloudFlareLogo from "@/assets/svg/CloudFlare.svg";

export default function TechStack() {
  return (
    <section className="bg-black py-24 px-6 text-white">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col items-center gap-8">
          {/* FRONTEND */}
          <BorderGlow
            edgeSensitivity={30}
            glowColor="500 130 119"
            backgroundColor="#050505"
            borderRadius={28}
            glowRadius={40}
            glowIntensity={3}
            coneSpread={25}
            animated={false}
            colors={["#ff5277", "#ff3460"]}
          >
            <div className="w-full min-w-[320px] max-w-xl p-8">
              <span className="inline-block rounded-full bg-[#ff5277]/10 px-4 py-2 text-sm font-medium text-[#ff5277]">
                FRONTEND
              </span>

              <h3 className="mt-5 text-3xl font-bold">User Experience Layer</h3>

              <p className="mt-3 text-zinc-400">
                Modern and responsive interfaces focused on performance and
                usability.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <TechBadge icon={FigmaLogo.src} name="Figma" />
                <TechBadge icon={AstroLogo.src} name="Astro" />
                <TechBadge icon={reactLogo.src} name="React" />
                <TechBadge icon={tsLogo.src} name="TypeScript" />
                <TechBadge icon={tailwindLogo.src} name="Tailwind CSS" />
              </div>
            </div>
          </BorderGlow>

          <div className="h-16 w-[2px] bg-gradient-to-b from-[#ff5277] to-transparent" />

          {/* BACKEND */}
          <BorderGlow
            edgeSensitivity={30}
            glowColor="500 130 119"
            backgroundColor="#050505"
            borderRadius={28}
            glowRadius={40}
            glowIntensity={3}
            coneSpread={25}
            animated={false}
            colors={["#ff5277", "#ff3460"]}
          >
            <div className="w-full min-w-[320px] max-w-xl p-8">
              <span className="inline-block rounded-full bg-[#ff5277]/10 px-4 py-2 text-sm font-medium text-[#ff5277]">
                BACKEND
              </span>

              <h3 className="mt-5 text-3xl font-bold">Business Logic Layer</h3>

              <p className="mt-3 text-zinc-400">
                Robust APIs, authentication, validations and scalable service
                architecture.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <TechBadge icon={fastapiLogo.src} name="FastAPI" />
                <TechBadge icon={pythonLogo.src} name="Python" />
                <TechBadge icon={supabaseLogo.src} name="Supabase" />
              </div>
            </div>
          </BorderGlow>

          <div className="h-16 w-[2px] bg-gradient-to-b from-[#ff5277] to-transparent" />

          {/* DATABASE */}
          <BorderGlow
            edgeSensitivity={30}
            glowColor="500 130 119"
            backgroundColor="#050505"
            borderRadius={28}
            glowRadius={40}
            glowIntensity={3}
            coneSpread={25}
            animated={false}
            colors={["#ff5277", "#ff3460"]}
          >
            <div className="w-full min-w-[320px] max-w-xl p-8">
              <span className="inline-block rounded-full bg-[#ff5277]/10 px-4 py-2 text-sm font-medium text-[#ff5277]">
                DATABASE
              </span>

              <h3 className="mt-5 text-3xl font-bold">
                Data Persistence Layer
              </h3>

              <p className="mt-3 text-zinc-400">
                Structured data storage, optimization and relational modeling.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <TechBadge icon={postgresLogo.src} name="PostgreSQL" />
                <TechBadge icon={supabaseLogo.src} name="Supabase" />
              </div>
            </div>
          </BorderGlow>

          <div className="h-16 w-[2px] bg-gradient-to-b from-[#ff5277] to-transparent" />

          {/* DEPLOYMENT */}
          <BorderGlow
            edgeSensitivity={30}
            glowColor="500 130 119"
            backgroundColor="#050505"
            borderRadius={28}
            glowRadius={40}
            glowIntensity={3}
            coneSpread={25}
            animated={false}
            colors={["#ff5277", "#ff3460"]}
          >
            <div className="w-full min-w-[320px] max-w-xl p-8">
              <span className="inline-block rounded-full bg-[#ff5277]/10 px-4 py-2 text-sm font-medium text-[#ff5277]">
                DEPLOYMENT
              </span>

              <h3 className="mt-5 text-3xl font-bold">
                Production Environment
              </h3>

              <p className="mt-3 text-zinc-400">
                Containerized applications ready for cloud deployment and
                maintenance.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <TechBadge icon={Railway.src} name="Railway" />
                <TechBadge icon={vercelLogo.src} name="Vercel" />
                <TechBadge icon={CloudFlareLogo.src} name="CloudFlare" />
              </div>
            </div>
          </BorderGlow>
        </div>
      </div>
    </section>
  );
}

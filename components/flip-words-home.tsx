import Link from "next/link";
import React from "react";
import { CallUs } from "./button-border";
import { AnimatedTooltipPreview } from "./clients-stack";
import { FlipWords } from "./ui/flip-words";

export function FlipWordsDemo() {
  const words = ["Website", "Google Ads", "Facebook Ads", "SEO"];

  return (
    <div className="h-[33rem] flex flex-col justify-center items-center px-4">
      <div className="text-3xl text-center md:text-6xl mx-auto font-bold text-black dark:text-white">
        Get the Best  
        Services Like <br />
        <FlipWords words={words} /> 
        with Proshala Tech.
      </div>
      <div>
        <p className="text-base md:text-xl text-center text-black pt-4 dark:text-white pb-5">Proshala have always been passionate about creating and designing delightful experiences through a mix of business, marketing and UX / UI design to keep customers and users happy with their products and services online.</p>
      </div>
      <Link href="tel:+919999774046"><button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xl font-semibold leading-6 text-yellow-400 inline-block">
        <span className="absolute inset-0 overflow-hidden rounded-full">
          <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
        </span>
        <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-2 px-6 ring-1 ring-white/10 ">
          <span>{`Call Us Now`}</span>
        </div>
        <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
      </button></Link>
      <div>
        <p className="text-xm md:text-base text-center text-black pt-3 dark:text-white pb-3">People who love our work and we helped them to grow.</p>
     </div>
     <AnimatedTooltipPreview/>
     <div className="flex flex-row justify-center items-center mt-3">
     <p className="ms-2 pr-2 text-sm font-bold text-gray-900 dark:text-white">4.95</p>
    <svg className="w-4 h-4 text-yellow-400 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
    </svg>
    <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
    <a href="https://maps.app.goo.gl/CiKMmTpd6VQHXehQA" className="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white">146 Reviews</a>
</div>
    </div>
  );
}

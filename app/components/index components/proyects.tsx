import React from "react";
import Image from "next/image";
import { useState } from "react";

import LanguageTexts from './components/lenguageText'
import { useLanguage } from './components/lenguageSwitcher';
import { LanguageSwitcher } from './components/lenguageSwitcher';


const Proyects = () => {

  const { language, changeLanguage } = useLanguage();
  const {title1, title2, h2, span1, span2, span3, span4, span5, span6, span7, span8} = LanguageTexts[language].login_project;
  const {ah2, aspan1, aspan2, aspan3, aspan4, aspan5, aspan6, aspan7, aspan8, aspan9, aspan10} = LanguageTexts[language].ecommerce_project;
  const {bh2, bspan1, bspan2, bspan3, bspan4, bspan5, bspan6, bspan7, bspan8} = LanguageTexts[language].game_project;

  return <>
    <div id="proyect" className="w-full p-4 bg-gray-200 mt-16">
      <div className="flex flex-col  mx-auto sm:w-8/12 md:w-6/12 lg:w-4/12 xl:w-5/12 border-4 border-y-black">
        <div>
          <h1 className="text-7xl 2xl:text-8xl font-semibold flex justify- pt-2 w-full text-red-700">
           {title1}
          </h1>
        </div>
        <div>
          <h1 className="text-7xl 2xl:text-9xl font-semibold flex justify-end pt-2 w-full ">
           {title2}
          </h1>
        </div>
      </div>


      <div>
        <div className="flex flex-col mx-auto mt-14  shadow-2xl shadow-gray-700 p-4 rounded-xl sm:w-11/12 md:w-9/12 lg:w-8/12 2xl:w-7/12 ">
          <h2 className="flex justify-center font-bold text-xl lg:text-2xl 2xl:text-4xl text-red-700 border-2 border-y-red-900 animate__animated animate__fadeIn">
            {h2}
          </h2>
          <div className="w-full h-72 xl:h-96 shadow-2xl  shadow-gray-500 rounded-2xl overflow-hidden my-5 relative">
            <Image
              src="/sign_up.png"
              className="inset-0 w-full h-full object-cover grayscale-image transition-transform duration-300 transform scale-100 hover:scale-125"
              alt="Image"
              fill
              sizes="100vw"
              style={{
                objectFit: "cover"
              }} />
          </div>
          <div className="lg:text-xl 2xl:text-2xl">
            <span>{span1}</span>
            <span className="font-bold"> {span2}</span>
            <span>{span3}</span>
            <span className="font-bold"> {span4}.</span>
            <span>{span5}</span>
            <span className="font-bold">
              {span6}
            </span>
            <span> {span7}</span>
            <span className="font-bold"> {span8}.</span>
          </div>
        </div>

        <div className="flex  flex-col mx-auto mt-14  shadow-2xl shadow-gray-700 p-4 rounded-xl sm:w-11/12 md:w-9/12 lg:w-8/12 2xl:w-7/12">
          <h2 className="flex justify-center font-bold text-xl lg:text-2xl 2xl:text-4xl  text-red-700 border-2 border-y-red-900 animate__animated animate__fadeIn">
            {ah2}
          </h2>
          <div className="w-full h-72 xl:h-96  shadow-2xl shadow-gray-500 rounded-2xl overflow-hidden my-5 relative">
            <Image
              src="/market_gaming.png"
              className="inset-0 w-full h-full object-cover  grayscale-image transition-transform duration-300 transform scale-100 hover:scale-125"
              alt="Image"
              fill
              sizes="100vw"
              style={{
                objectFit: "cover"
              }} />
          </div>
          <div className="lg:text-xl 2xl:text-2xl">
            <span>{aspan1}</span>
            <span className="font-bold"> {aspan2}</span>
            <span> {aspan3}</span>
            <span> {aspan4}</span>
            <span className="font-bold"> {aspan5}</span>
            <span> {aspan6}</span>
            <span className="font-bold"> {aspan7} </span>
            <span> {aspan8} </span>
            <span className="font-bold"> {aspan9}</span>
            <span> {aspan10}</span>
            {/* <span className="font-bold"> {aspan11}</span> */}
          </div>
        </div>

        <div className="flex  flex-col mx-auto mt-14  shadow-2xl shadow-gray-700 p-4 rounded-xl sm:w-11/12 md:w-9/12 lg:w-8/12 2xl:w-7/12 ">
          <h2 className="flex justify-center font-bold text-xl lg:text-2xl 2xl:text-4xl  text-red-700 border-2 border-y-red-900 animate__animated animate__fadeIn">
            {" "}
            Game Proyect
          </h2>
          <div className="w-full h-72 xl:h-96  shadow-2xl shadow-gray-500 rounded-2xl overflow-hidden my-5 relative">
            <Image
              src="/hangman.png"
              className="inset-0 w-full h-full object-cover  grayscale-image transition-transform duration-300 transform scale-100 hover:scale-125"
              alt="Image"
              fill
              sizes="100vw"
              style={{
                objectFit: "cover"
              }} />
          </div>
          <div className="lg:text-xl 2xl:text-2xl">
            <span className="font-bold"> TypeScript </span>
            <span> Hangman game project, was created with  </span>
            <span className="font-bold"> Pure CSS </span>
            <span> and  </span>
            <span className="font-bold"> Webpack</span>
            <span>, Although the project is not extensive, it was a challenge to work on </span>
            <span className="font-bold"> The logic of functions</span>
            <span> in </span>
            <span> TypeScript </span>
          </div>
        </div>
      </div>
    </div>
  </>;
};

export default Proyects;

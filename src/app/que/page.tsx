"use client";
import React, { useState } from "react";
import { useWindowSize } from "react-use";
import Confetti from "react-confetti";
import Image from "next/image";

const Que = () => {
  const [answer, setAnswer] = useState<boolean | null>(null);
  const [noCount, setNoCount] = useState<Number>(0);
  const { width, height } = useWindowSize();
  const handleResponse = (response: boolean) => {
    setAnswer(response);
    if (response === false) {
      setNoCount(Number(noCount) + 1);
    } else {
      setNoCount(0);
    }
  };
  return (
    <div className="h-screen flex items-center w-full justify-center bg-pink-200 flex-col space-y-14">
      {answer ? (
        <div className="w-full  h-screen overflow-hidden p-6 relative">
          <Confetti width={width} height={height} />
          <div className="font-bold text-5xl text-center mb-6">
            ❤️ Yaaaaaayyy!!!!!❤️
          </div>
          <video
            height={200}
            width={300}
            className=" rounded-lg shadow-lg mt-3 absolute left-[40vw]"
            autoPlay
            loop
            muted
          >
            <source src="/Tutez/five.mp4" type="video/mp4" />
            Yeeeiiiiyy!!!!
          </video>

          <Image
            height="150"
            width="150"
            alt="Yaaay!"
            src="/Tutez/Yes/1.webp"
            className="absolute right-10 top-10"
          />
          <Image
            height="150"
            width="150"
            alt="Yaaay!"
            src="/Tutez/Yes/2.webp"
            className="absolute bottom-[10vh] left-10"
          />
          <Image
            height="150"
            width="150"
            alt="Yaaay!"
            src="/Tutez/Yes/5.webp"
            className="absolute top-[20vh] left-[5vw]"
          />
          <Image
            height="200"
            width="200"
            alt="Yaaay!"
            src="/Tutez/Yes/4.webp"
            className="absolute left-[25vw] top-[30vh]"
          />
          <Image
            height="150"
            width="150"
            alt="Yaaay!"
            src="/Tutez/Yes/3.webp"
            className="absolute right-[17vw] top-[25vh]"
          />
          <Image
            height="150"
            width="150"
            alt="Yaaay!"
            src="/Tutez/Yes/6.webp"
            className="absolute right-[20vw] bottom-[10vh]"
          />
        </div>
      ) : (
        <>
          {Number(noCount) > 0 && (
            <Image
              height="150"
              width="150"
              alt="Yaaay!"
              src="/Tutez/No/1.webp"
              className="absolute right-10 top-10"
            />
          )}

          {Number(noCount) > 1 && (
            <Image
              height="150"
              width="150"
              alt="Yaaay!"
              src="/Tutez/No/2.webp"
              className="absolute bottom-[10vh] left-10"
            />
          )}
          {Number(noCount) > 2 && (
            <Image
              height="150"
              width="150"
              alt="Yaaay!"
              src="/Tutez/No/5.webp"
              className="absolute top-[20vh] left-[5vw]"
            />
          )}
          {Number(noCount) > 3 && (
            <Image
              height="200"
              width="200"
              alt="Yaaay!"
              src="/Tutez/No/4.webp"
              className="absolute left-[25vw] top-[0vh]"
            />
          )}
          {Number(noCount) > 4 && (
            <Image
              height="150"
              width="150"
              alt="Yaaay!"
              src="/Tutez/No/3.webp"
              className="absolute right-[17vw] top-[25vh]"
            />
          )}
          {Number(noCount) > 5 && (
            <Image
              height="150"
              width="150"
              alt="Yaaay!"
              src="/Tutez/No/6.webp"
              className="absolute right-[20vw] bottom-[10vh]"
            />
          )}

          <div className="font-bold text-5xl flex">
            <div className="animate__animated animate__backInLeft animate__slow">
              ❤️ Will you be my valentine
            </div>
            <div className="animate__animated animate__delay-2s animate__heartBeat animate__infinite animate__slow ml-2">
              ❓
            </div>
          </div>

          <div className="flex items-center gap-10">
            <button
              onClick={() => handleResponse(true)}
              className="animate__animated animate__jackInTheBox animate__delay-2s animate__slow px-4 py-2 mt-8 text-2xl bg-pink-500 text-white font-semibold  rounded-full shadow-lg transition-all duration-300 ease-in-out hover:bg-pink-600 hover:shadow-xl hover:scale-105 focus:ring-4 focus:ring-pink-300"
            >
              Yes, Ofcourse! 😍
            </button>
            {Number(noCount) < 7 ? (
              <button
                onClick={() => handleResponse(false)}
                className="animate__animated animate__jackInTheBox animate__delay-2s animate__slow px-4 py-2 mt-8 text-2xl bg-gray-500 text-white font-semibold  rounded-full shadow-lg transition-all duration-300 ease-in-out hover:bg-gray-600 hover:shadow-xl hover:scale-105 focus:ring-4 focus:ring-pink-300"
              >
                No 💔
              </button>
            ) : (
              <Image
                height="150"
                width="150"
                alt="Yaaay!"
                src="/Tutez/No/8.webp"
                className=""
              />
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Que;

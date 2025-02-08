"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { FaSpinner } from "react-icons/fa";

export default function Home() {
  const [answer, setAnswer] = useState<string>("");
  const [spin, setSpin] = useState<boolean>(false);
  const router = useRouter();

  const handlePasswordCheck = (ans: string) => {
    setSpin(true);
    if (!ans) {
      setSpin(false);
      toast.error("You must enter the magic words!");
    } else {
      setSpin(true);
      setTimeout(() => {
        if (ans !== "Pyaar") {
          toast.error("Wrong! Your magic is kinda out of shape! ");
          setAnswer("");
          setSpin(false);
        } else {
          router.push("/tutez");
        }
      }, 2000);
    }
  };
  return (
    <div className="h-screen flex items-center w-full justify-center bg-pink-200 flex-col space-y-14">
      <div className="h-screen flex items-center w-full justify-center flex-col space-y-14">
        <div className="font-bold text-5xl flex">
          <div className="animate__animated animate__backInLeft animate__slow">
            To continue, enter the magic words...
          </div>
        </div>
        <div className="relative flex items-center">
          <input
            type="text"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            className="rounded-lg border py-2 px-3 text-xl shadow outline-none"
            placeholder="Enter magic words here..."
          />
          {spin && (
            <FaSpinner className="absolute right-3 animate-spin text-xl text-pink-600" />
          )}
        </div>

        <button
          onClick={() => handlePasswordCheck(answer)}
          className="animate__animated animate__jackInTheBox animate__delay-3s px-4 py-2 text-2xl bg-pink-500 text-white font-semibold  rounded-full shadow-lg transition-all duration-300 ease-in-out hover:bg-pink-600 hover:shadow-xl hover:scale-105 focus:ring-4 focus:ring-pink-300"
        >
          Let's go
        </button>
      </div>

      <ToastContainer />
    </div>
  );
}

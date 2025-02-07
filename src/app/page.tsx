"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div className="h-screen flex items-center w-full justify-center bg-pink-200 flex-col space-y-14">
      <div className="font-bold text-5xl flex">
        <div className="animate__animated animate__backInLeft animate__slow">
          To My Tutez...
        </div>
        <div className="animate__animated animate__delay-2s animate__heartBeat animate__infinite animate__slow ml-2">
          ❤️
        </div>
      </div>
      <button
        onClick={() => router.push("/main")}
        className="animate__animated animate__jackInTheBox animate__delay-3s px-4 py-2 text-2xl bg-pink-500 text-white font-semibold  rounded-full shadow-lg transition-all duration-300 ease-in-out hover:bg-pink-600 hover:shadow-xl hover:scale-105 focus:ring-4 focus:ring-pink-300"
      >
        Continue 💐
      </button>
    </div>
  );
}

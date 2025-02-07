"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
const Main = () => {
  const router = useRouter();
  return (
    <div
      className="h-screen flex items-center justify-center  w-full flex-col text-[#e3b737] space-y-14 font-bold text-5xl"
      style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)" }}
    >
      <div className="relative bg-[url('/Tutez/two.jpg')] bg-no-repeat bg-cover bg-top h-[80vh] w-[40vw] boxy rounded-xl">
        <span className="absolute -right-5 -top-5 z-50 scale-150 animate__animated animate__rollIn animate__slow text-5xl">
          <span className="scale-150">🎀</span>
        </span>
        <div
          className="absolute inset-0 flex items-center justify-center flex-col gap-12"
          style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
        >
          <div className="animate__animated animate__slideInDown animate__slow text-center">
            Your mere presence makes my whole world disappear...
          </div>
          <div className="animate__animated animate__slideInUp animate__slow text-center">
            I have one question for you
          </div>

          <button
            onClick={() => router.push("/que")}
            className="animate__animated animate__jackInTheBox animate__delay-5s animate__slow px-4 py-2 mt-8 text-2xl bg-pink-500 text-white font-semibold  rounded-full shadow-lg transition-all duration-300 ease-in-out hover:bg-pink-600 hover:shadow-xl hover:scale-105 focus:ring-4 focus:ring-pink-300"
          >
            Continue...
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main;

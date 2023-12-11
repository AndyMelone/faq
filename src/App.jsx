import "./App.css";
import Quizresponse from "./quiz-response";
import { quizs } from "../src/data/data";

export default function App() {
  return (
    <div className="flex justify-center items-center  min-h-screen  flex-col p-2">
      <div className=" rounded-lg py-4 px-6 bg-[#FFFFFF] sm:w-2/5    w-4/5">
        {/* header */}
        <header className="top-0 z-10 ">
          <h1 className=" flex items-center ">
            <img src="/images/icon-star.svg" alt="" />
            <p className="pl-2 text-5xl  font-bold">FAQs</p>
          </h1>
        </header>
        {/* // faq */}
        <section className="grid grid-cols-1 divide-y mt-6 max-h-screen  overflow-scroll">
          {quizs.map((quiz) => {
            return (
              <Quizresponse
                className="py-4 text-justify "
                key={quiz.id}
                question={quiz.quiz}
                response={quiz.response}
              />
            );
          })}
        </section>
      </div>
      <div className="pt-4">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a href="#" className="underline">
          By Melone Andy
        </a>
        .
      </div>
    </div>
  );
}

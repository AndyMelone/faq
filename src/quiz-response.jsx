import { useState } from "react";

export default function Quizresponse({
  click,
  question,
  response,
  className,
  ...props
}) {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow((c) => !c);
  return (
    <div className={className}>
      {show ? (
        <button
          onClick={handleClick}
          className="text-lg font-semibold flex text-justify  items-center justify-between w-full text-[#2F1533]"
        >
          <p className="pr-6">{question}</p>
          <img src="/images/icon-minus.svg" alt="" />
        </button>
      ) : (
        <button
          onClick={handleClick}
          className="text-lg font-semibold flex text-justify  items-center justify-between w-full text-[#9E34E3]"
        >
          {question}
          <img src="/images/icon-plus.svg" alt="" />
        </button>
      )}

      {show && <p className="py-3 text-[16px]">{response}</p>}
    </div>
  );
}

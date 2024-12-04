import { useRef, MutableRefObject, ReactElement, MouseEvent } from "react";
import { IoArrowUp } from "react-icons/io5";

const ScrollToTop = (): ReactElement => {
  const divRef = useRef() as MutableRefObject<HTMLDivElement>;

  const handleClick = (e: MouseEvent<HTMLDivElement>): void => {
    scrollTo({ top: 0 });
  };

  const handleScoll = (e: Event): void => {
    divRef.current.style.visibility = scrollY >= 700 ? "visible" : "hidden";
  };

  window.onscroll = handleScoll;

  return (
    <div
      id="scroll-to-top"
      className="bg-zinc-900 w-[50px] h-[50px] fixed bottom-8 right-8 rounded-xl cursor-pointer p-3 animate-bounce invisible"
      onClick={handleClick}
      ref={divRef}
    >
      <IoArrowUp className="text-tertiary text-2xl m-auto transition delay-100 ease-in-out" />
    </div>
  );
};

export default ScrollToTop;

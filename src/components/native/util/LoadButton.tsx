import React from "react";
 import pokeSvg from "@/assets/images/ui/pokeball.svg";
import Image from "next/image";

type Props = {
  clickHandler: () => void;
};

const LoadButton = ({ clickHandler }: Props) => {
  return (
    <button
      onClick={clickHandler}
      className="py-2 px-6 rounded-lg font-semibold bg-primary text-white relative inline-flex focus:outline-none transform hover:-translate-y-1 transition-all ease-in-out duration-200"
    >
      <div className="absolute inset-y-0 left-0 flex items-center pl-4">
        <Image src={pokeSvg} 
            alt="pokeball" 
            className="w-6 h-6" />
      </div>
      <span className="pl-8">Load More</span>
    </button>
  );
};

export default LoadButton;
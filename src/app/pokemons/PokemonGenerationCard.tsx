import { romanize } from "@/components/native/util/romanize";
import { cn } from "@/lib/utils/utils";
import Image from "next/image";
import React from "react";

type Props = {
  images: string[];
  generation: number;
  isSelected: boolean;
  handleClick: () => void;
};

const PokemonGenerationCard = ({
  images,
  generation,
  isSelected,
  handleClick,
}: Props) => {
  return (
    <div
      onClick={() => handleClick()}
      // className="w-full tracking-wide text-center text-black bg-primaryGray mx-auto px-8 py-5 rounded-2xl hover:bg-primarySecondary hover:text-white hover:font-medium transition-all duration-200 ease-in-out cursor-pointer"
      className={cn(
        "w-full overflow-visible tracking-wide text-center px-8 py-5 rounded-2xl hover:font-medium transition-all duration-200 ease-in-out cursor-pointer " +
        "hover:bg-rich_black-900 ", { "bg-rich_black-700": isSelected })

      }
    >
      <div className="flex justify-center items-center">
        {images.map((image) => (
          <Image width={64} height={64} key={image} src={image} alt="Pokemon" />
        ))}
      </div>
      <p className="text-md mt-4">Generation {romanize(generation)}</p>
    </div>
  );
};
export default PokemonGenerationCard;